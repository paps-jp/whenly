import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Locale } from "@/lib/i18n/config";

// OGP画像の文字描画用フォント。
// Satori(next/og)はシステムフォントを使えないので、描画する文字に応じた Noto Sans 系を
// Google Fonts からその文字だけのサブセットで取得する(数KB〜数十KB)。取得できない場合や
// ラテン文字・数字のために、同梱の Noto Sans Bold をフォールバックとして常に含める。

export type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: 700;
  style: "normal";
};

const FALLBACK_FONT_PATH = path.join(process.cwd(), "src/lib/og/NotoSans-Bold.woff");
const FALLBACK_FAMILY = "Noto Sans";

// Google Fonts の CSS API は User-Agent によって返す形式が変わる。
// 古い Firefox を名乗ると Satori が読める woff / ttf で返してくれる(woff2 は不可)。
const LEGACY_UA = "Mozilla/5.0 (Windows NT 6.1; rv:5.0) Gecko/20100101 Firefox/5.0";

const SCRIPT_FAMILIES: { test: RegExp; family: (locale: Locale) => string }[] = [
  { test: /[぀-ヿ]/, family: () => "Noto Sans JP" },
  { test: /[가-힯ᄀ-ᇿ㄰-㆏]/, family: () => "Noto Sans KR" },
  {
    test: /[一-鿿㐀-䶿　-〿＀-￯]/,
    family: (locale) =>
      locale === "zh" ? "Noto Sans SC" : locale === "ko" ? "Noto Sans KR" : "Noto Sans JP",
  },
  { test: /[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]/, family: () => "Cairo" },
  { test: /[ऀ-ॿ]/, family: () => "Noto Sans Devanagari" },
  { test: /[ঀ-৿]/, family: () => "Noto Sans Bengali" },
];

export function familiesFor(text: string, locale: Locale): string[] {
  const families: string[] = [];
  for (const { test, family } of SCRIPT_FAMILIES) {
    if (test.test(text)) {
      const f = family(locale);
      if (!families.includes(f)) families.push(f);
    }
  }
  families.push(FALLBACK_FAMILY);
  return families;
}

let fallbackFont: Promise<ArrayBuffer> | null = null;
function loadFallbackFont(): Promise<ArrayBuffer> {
  if (!fallbackFont) {
    fallbackFont = readFile(FALLBACK_FONT_PATH).then(
      (buf) => buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer
    );
  }
  return fallbackFont;
}

// 取得済みサブセットのメモリキャッシュ(family + 文字集合)。プロセス内で有効。
const subsetCache = new Map<string, Promise<ArrayBuffer | null>>();
const SUBSET_CACHE_MAX = 300;

// Google のサブセット化(text=)を通したアラビア文字フォントは Satori のフォントパーサが
// 読めないことがあるため、これらの書体はフォント全体を取得する(数百KB、メモリキャッシュ)。
const FULL_FONT_FAMILIES = new Set(["Noto Naskh Arabic", "Cairo", "Noto Sans Arabic"]);

async function fetchGoogleSubset(family: string, chars: string): Promise<ArrayBuffer | null> {
  const familyParam = family.replace(/ /g, "+");
  const textParam = FULL_FONT_FAMILIES.has(family) ? "" : `&text=${encodeURIComponent(chars)}`;
  const cssUrl = `https://fonts.googleapis.com/css2?family=${familyParam}:wght@700${textParam}`;
  try {
    const css = await fetch(cssUrl, {
      headers: { "User-Agent": LEGACY_UA },
      signal: AbortSignal.timeout(5000),
    }).then((r) => (r.ok ? r.text() : null));
    if (!css) return null;
    const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('(?:woff|truetype|opentype)'\)/);
    if (!match) return null;
    const res = await fetch(match[1], { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

function uniqueChars(text: string): string {
  return Array.from(new Set(Array.from(text))).join("");
}

export async function loadFonts(text: string, locale: Locale): Promise<OgFont[]> {
  const families = familiesFor(text, locale);
  const chars = uniqueChars(text);
  const fonts: OgFont[] = [];

  for (const family of families) {
    if (family === FALLBACK_FAMILY) continue;
    const key = `${family}|${chars}`;
    let pending = subsetCache.get(key);
    if (!pending) {
      if (subsetCache.size >= SUBSET_CACHE_MAX) {
        const oldest = subsetCache.keys().next().value;
        if (oldest !== undefined) subsetCache.delete(oldest);
      }
      pending = fetchGoogleSubset(family, chars);
      subsetCache.set(key, pending);
    }
    const data = await pending;
    if (data) fonts.push({ name: family, data, weight: 700, style: "normal" });
  }

  fonts.push({ name: FALLBACK_FAMILY, data: await loadFallbackFont(), weight: 700, style: "normal" });
  return fonts;
}
