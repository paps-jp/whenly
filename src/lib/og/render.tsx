import { readFile } from "node:fs/promises";
import path from "node:path";
import type { CSSProperties } from "react";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { isRTL, type Locale } from "@/lib/i18n/config";
import { familiesFor, loadFonts } from "./fonts";

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

// テンプレート画像(public/og-template.jpg, 1200x630)。左上にロゴ、右下にカレンダーが
// 描かれていて、左〜中央の余白にイベント名を載せる。実物に差し替える場合も同じパス。
const TEMPLATE_PATH = path.join(process.cwd(), "public/og-template.jpg");

let templateDataUri: Promise<string> | null = null;
function loadTemplate(): Promise<string> {
  if (!templateDataUri) {
    templateDataUri = readFile(TEMPLATE_PATH).then(
      (buf) => `data:image/jpeg;base64,${buf.toString("base64")}`
    );
  }
  return templateDataUri;
}

// タイトルの長さに応じて文字サイズを落とす(最大 3 行、超えた分は省略記号)。
function titleFontSize(title: string): number {
  const len = Array.from(title).length;
  if (len <= 12) return 68;
  if (len <= 24) return 56;
  if (len <= 40) return 48;
  return 42;
}

export type OgImageInput = {
  title: string;
  subtitle: string;
  locale: Locale;
};

// JPEG のバイト列を返す(PNG より小さく、キャッシュ容量を抑えられる)。
export async function renderEventOgImage({ title, subtitle, locale }: OgImageInput): Promise<Buffer> {
  const text = `${title}\n${subtitle}`;
  const [template, fonts] = await Promise.all([loadTemplate(), loadFonts(text, locale)]);
  const fontFamily = familiesFor(text, locale)
    .map((f) => `"${f}"`)
    .join(", ");
  const rtl = isRTL(locale);

  // Satori 独自の lineClamp(標準 CSS に無いので型を緩める)。
  const titleStyle = {
    fontSize: titleFontSize(title),
    fontWeight: 700,
    lineHeight: 1.25,
    color: "#1b1b2b",
    letterSpacing: "-0.01em",
    lineClamp: 3,
    textAlign: rtl ? "right" : "left",
  } as unknown as CSSProperties;

  const png = new ImageResponse(
    (
      <div
        style={{
          width: OG_WIDTH,
          height: OG_HEIGHT,
          display: "flex",
          position: "relative",
          fontFamily,
          backgroundColor: "#f7f7fb",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={template}
          width={OG_WIDTH}
          height={OG_HEIGHT}
          alt=""
          style={{ position: "absolute", left: 0, top: 0 }}
        />
        <div
          style={{
            position: "absolute",
            left: 66,
            top: 262,
            width: 860,
            height: 330,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: rtl ? "flex-end" : "flex-start",
          }}
        >
          <div style={titleStyle}>{title}</div>
          {subtitle && (
            <div
              style={{
                marginTop: 22,
                fontSize: 30,
                fontWeight: 700,
                color: "#5b5b73",
                lineHeight: 1.3,
                textAlign: rtl ? "right" : "left",
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
      </div>
    ),
    { width: OG_WIDTH, height: OG_HEIGHT, fonts }
  );

  const pngBuffer = Buffer.from(await png.arrayBuffer());
  return sharp(pngBuffer).jpeg({ quality: 84, progressive: true, mozjpeg: true }).toBuffer();
}
