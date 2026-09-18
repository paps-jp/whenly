import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, unlink, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

// 生成したOGP画像のディスクキャッシュ。
// - 一定期間(既定 7日)を過ぎたファイルは無効扱いにして削除し、次のアクセスで再生成する。
// - 掃除(期限切れファイルの一括削除)はリクエストのついでに 1時間に1回だけ行う。
// - 置き場所は OG_CACHE_DIR、未設定なら OS の一時ディレクトリ配下(コンテナ再作成で消えてよい)。

const CACHE_DIR = process.env.OG_CACHE_DIR || path.join(os.tmpdir(), "whenly-og");
const TTL_MS = (Number(process.env.OG_CACHE_TTL_DAYS) || 7) * 24 * 60 * 60 * 1000;
const SWEEP_INTERVAL_MS = 60 * 60 * 1000;

let lastSweep = 0;
let sweeping: Promise<void> | null = null;

export function cacheKey(parts: unknown[]): string {
  return createHash("sha1").update(JSON.stringify(parts)).digest("hex").slice(0, 32);
}

function filePath(key: string): string {
  return path.join(CACHE_DIR, `${key}.jpg`);
}

export async function readCached(key: string): Promise<Buffer | null> {
  const file = filePath(key);
  try {
    const info = await stat(file);
    if (Date.now() - info.mtimeMs > TTL_MS) {
      await unlink(file).catch(() => {});
      return null;
    }
    return await readFile(file);
  } catch {
    return null;
  }
}

export async function writeCached(key: string, data: Buffer): Promise<void> {
  try {
    await mkdir(CACHE_DIR, { recursive: true });
    // 書きかけのファイルを読まれないよう、一時名で書いてから rename 相当の上書きをする。
    const tmp = `${filePath(key)}.${process.pid}.tmp`;
    await writeFile(tmp, data);
    const { rename } = await import("node:fs/promises");
    await rename(tmp, filePath(key));
  } catch (err) {
    console.warn("og cache write failed:", err);
  }
}

// 期限切れファイルの掃除。頻繁に呼ばれても 1時間に 1回しか実際には走らない。
export function sweepIfDue(): void {
  const now = Date.now();
  if (sweeping || now - lastSweep < SWEEP_INTERVAL_MS) return;
  lastSweep = now;
  sweeping = (async () => {
    try {
      const entries = await readdir(CACHE_DIR);
      let removed = 0;
      for (const name of entries) {
        const file = path.join(CACHE_DIR, name);
        try {
          const info = await stat(file);
          const expired = now - info.mtimeMs > TTL_MS;
          const stale = name.endsWith(".tmp") && now - info.mtimeMs > 10 * 60 * 1000;
          if (expired || stale) {
            await unlink(file);
            removed++;
          }
        } catch {
          // 競合で消えた等は無視
        }
      }
      if (removed > 0) console.log(`og cache sweep: removed ${removed} file(s)`);
    } catch {
      // ディレクトリ未作成など
    } finally {
      sweeping = null;
    }
  })();
}
