# whenly

ログイン不要・完全無料の日程調整/出欠確認ツールです。共有URLを開くだけで、アカウント登録なしに日程の回答ができます。

[NPO法人ぱっぷす](https://paps.jp) が開発・運営しています。詳しくは [whenly.paps.jp/about](https://whenly.paps.jp/about) をご覧ください。

## 特徴

- 主催者・参加者ともにアカウント登録なしで利用可能
- 日付ごとに時間帯の候補を設定でき、回答の選択肢も自由に変更可能
- Googleカレンダー・Outlook・iPhoneカレンダーへの連携に対応
- 日本語を含む12言語に対応
- すべての機能を無料で利用可能、参加人数の上限なし

## 技術スタック

- [Next.js](https://nextjs.org) (App Router)
- [Prisma](https://www.prisma.io) + MySQL/MariaDB
- Tailwind CSS

## ローカル開発

Docker Composeで、アプリとDBをまとめて起動できます。

```bash
docker compose up --build
```

`http://localhost:3000` でアプリが起動します。初回はコンテナ内で `prisma migrate deploy` が自動実行されます。

DBの接続情報は環境変数 `DB_USER` / `DB_PASSWORD` / `DB_NAME` / `DB_ROOT_PASSWORD` で上書きできます(未設定時は開発用のデフォルト値を使用します)。

メール送信(パスワードリセット等)を試す場合は、`SMTP_USER` / `SMTP_PASS` などを `.env` に設定してください。

## 公開リポジトリについて

このリポジトリには、運営者向けの管理画面(`/admin`)のソースコードは含めていません。それ以外の、利用者が実際に使う機能はすべて公開しています。

## ライセンス

現時点ではライセンスを設定していません。利用・改変等をご希望の場合は、[お問い合わせ](mailto:lab@paps.jp)ください。
