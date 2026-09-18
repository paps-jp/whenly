import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = process.env.APP_BASE_URL ?? "https://whenly.paps.jp";

export const metadata: Metadata = {
  title: "whenlyとは",
  description:
    "whenly(ウェンリー)は、NPO法人ぱっぷすが提供する、ログイン不要・完全無料の日程調整/出欠確認ツールです。運営者情報や特徴を紹介します。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
      >
        ← トップへ戻る
      </Link>

      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">whenlyとは</h1>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        whenly(ウェンリー)は、
        <a
          href="https://paps.jp"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-indigo-600 hover:underline"
        >
          NPO法人ぱっぷす
        </a>
        が開発・運営する、ログイン不要・完全無料の日程調整/出欠確認ツールです。飲み会や会議、同窓会、ボランティアの募集など、複数人の予定を一つの共有URLで集められます。
      </p>
      <p className="mt-3 text-sm text-slate-500">
        海外の日程調整サービス「whenly.net」とは無関係の、別のサービスです。あわせてご確認ください。
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">開発のきっかけ</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          whenlyは、ぱっぷすが行うアウトリーチ活動で、ボランティアとスタッフの日程調整をする中から生まれました。「個人情報を入力させたくない」「アプリのインストールやアカウント登録なしで、誰でもすぐに回答できるようにしたい」という現場からのリクエストをきっかけに、開発をスタートしました。
        </p>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          既存の日程調整サービスの多くはソースコードが公開されておらず、入力した情報がどのように使われるのか外部から確認できないという不安もありました。そこでwhenlyは、透明性と安全性を大切にする開発方針をとっており、ソースコードもオープンソースとして公開する予定です。
        </p>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          現在もぱっぷすのボランティアの日程調整に実際に使いながら、日々使いやすさの改善を続けています。参加者が入力する情報は名前(任意)だけで、メールアドレスや電話番号の登録は必要ありません。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">主な特徴</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600">
          <li>アカウント登録なしで、主催者も参加者もすぐに利用できます</li>
          <li>すべての機能を無料で利用できます。参加人数の上限もありません</li>
          <li>日付ごとに時間帯の候補を設定でき、○△×など回答の選択肢も自由に変更できます</li>
          <li>Googleカレンダー・Outlook・iPhoneカレンダーへの自動反映に対応しています</li>
          <li>日本語を含む12言語に対応しています</li>
        </ul>
        <p className="mt-3 text-sm text-slate-500">
          詳しい機能やセキュリティについては、
          <Link href="/security" className="font-semibold text-indigo-600 hover:underline">
            セキュリティについて
          </Link>
          のページもご覧ください。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">運営者情報</h2>
        <dl className="mt-3 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white text-sm shadow-sm shadow-slate-200/50">
          <div className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4">
            <dt className="w-28 shrink-0 font-semibold text-slate-500">運営</dt>
            <dd className="text-slate-700">NPO法人ぱっぷす(PAPS)</dd>
          </div>
          <div className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4">
            <dt className="w-28 shrink-0 font-semibold text-slate-500">公式サイト</dt>
            <dd className="text-slate-700">
              <a
                href="https://paps.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-indigo-600 hover:underline"
              >
                https://paps.jp
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4">
            <dt className="w-28 shrink-0 font-semibold text-slate-500">サービスURL</dt>
            <dd className="text-slate-700">{baseUrl}</dd>
          </div>
          <div className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4">
            <dt className="w-28 shrink-0 font-semibold text-slate-500">お問い合わせ</dt>
            <dd>
              <a
                href="mailto:lab@paps.jp"
                className="font-semibold text-indigo-600 hover:underline"
              >
                lab@paps.jp
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <nav aria-label="関連ページ" className="mt-10 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <Link href="/security" className="font-semibold text-indigo-600 hover:underline">
          セキュリティについて
        </Link>
        <Link href="/privacy" className="font-semibold text-indigo-600 hover:underline">
          プライバシーポリシー
        </Link>
        <Link href="/terms" className="font-semibold text-indigo-600 hover:underline">
          利用規約
        </Link>
      </nav>
    </main>
  );
}
