# whenly メンテナンス用 Worker

Cloudflare Tunnel(オリジン)が落ちたとき、Cloudflare 側で whenly と同じ見た目の
メンテナンス画面(503)を返す Worker。通常時はリクエストをそのままオリジンへ中継する。
`src/index.js` は `build.py` が生成する(文言・ロゴ・レイアウトは build.py を編集して再生成)。

## デプロイ

```bash
cd cloudflare/maintenance-worker
npx wrangler login      # 初回のみ。ブラウザで Cloudflare にログイン
npx wrangler deploy     # ルート whenly.paps.jp/* に反映
```

## 計画停止のときに手動でメンテ画面を出す

```bash
npx wrangler deploy --var FORCE_MAINTENANCE:1   # 強制オン
npx wrangler deploy                             # 解除(wrangler.toml の "0" に戻る)
```

トンネル断(530/502/503/504/52x)のときは何もしなくても自動でメンテ画面になる。
アプリ自身の 500 は本物のエラーなので隠さない。

## 動作確認

```bash
curl -sI https://whenly.paps.jp/ | grep -i x-whenly-maintenance   # 通常時は出ない
```
