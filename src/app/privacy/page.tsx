import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "whenly(NPO法人ぱっぷす運営)のプライバシーポリシーです。",
  alternates: { canonical: "/privacy" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
      >
        ← トップへ戻る
      </Link>

      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
        プライバシーポリシー
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        NPO法人ぱっぷす(以下「当団体」といいます)は、日程調整/出欠確認サービス「whenly」(以下「本サービス」といいます)を、なるべく個人情報をお預かりしない設計で提供しています。ここでは、本サービスがどのような情報をどのように取り扱っているかを、できるだけわかりやすくまとめています。
      </p>

      <Section title="1. お預かりする情報">
        <p>本サービスでは、機能ごとに必要な範囲でのみ、次のような情報をお預かりしています。</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>主催者・参加者の名前(任意入力)</li>
          <li>アカウントを作成した場合のメールアドレスとパスワード(ハッシュ化して保存)</li>
          <li>作成したイベントの候補日時・回答内容・設定内容</li>
          <li>カレンダー連携機能を使う場合の、連携用URLトークン</li>
          <li>アクセス解析のためのCookie等を通じた利用状況(端末情報、IPアドレス、閲覧ページ等)</li>
        </ul>
        <p>「アカウントなしで始める」を利用する場合は、メールアドレスやパスワードをお預かりすることもありません。</p>
      </Section>

      <Section title="2. 利用目的">
        <p>お預かりした情報は、次の目的の範囲でのみ利用します。</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>本サービスを提供し、正しく動かし続けるため</li>
          <li>アカウントをお持ちの方の本人確認やログイン維持のため</li>
          <li>お問い合わせに対応するため</li>
          <li>利用状況を分析し、使いやすさを改善するため</li>
          <li>広告を配信し、その効果を確認するため</li>
        </ul>
      </Section>

      <Section title="3. Cookie・アクセス解析・広告">
        <p>
          本サービスでは、利用状況を把握するためにGoogle
          Analyticsを、広告を表示するためにGoogle AdSenseを利用しています。どちらもCookie等を使って本サービスや他サイトへのアクセス状況を記録することがありますが、氏名やメールアドレスなど個人を特定できる情報が含まれることはありません。
        </p>
        <p>
          Googleがデータをどのように扱っているかは、Googleのプライバシーポリシーや広告設定ページでご確認いただけます。ブラウザの設定でCookieを無効にすることもできますが、その場合、本サービスの一部機能が正しく動かないことがあります。
        </p>
      </Section>

      <Section title="4. 第三者への提供">
        <p>次のような場合を除き、お預かりした情報をご本人の同意なく第三者に提供することはありません。</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>法令に基づく場合</li>
          <li>人の生命、身体または財産を守るために必要で、ご本人の同意を得ることが難しいとき</li>
          <li>サーバーやメール送信など、サービス提供に必要な範囲で業務委託先に取り扱いをお任せする場合</li>
        </ul>
      </Section>

      <Section title="5. 保管期間">
        <p>
          お預かりした情報は、利用目的を達成するために必要な期間、または法令で定められた期間保管します。アカウントやイベントを削除された場合は、関連する情報もすみやかに削除します。
        </p>
      </Section>

      <Section title="6. 開示・訂正・削除などのご請求">
        <p>
          ご自身の情報について、開示・訂正・利用停止・削除をご希望の場合は、下記の窓口までご連絡ください。できる限り速やかに対応します。
        </p>
      </Section>

      <Section title="7. お問い合わせ窓口">
        <p>
          本ポリシーについてのお問い合わせは、
          <a href="mailto:lab@paps.jp" className="font-semibold text-indigo-600 hover:underline">
            lab@paps.jp
          </a>
          までお願いします。
        </p>
      </Section>

      <Section title="8. 本ポリシーの変更">
        <p>
          本ポリシーの内容は、必要に応じて見直すことがあります。変更後の内容は、本ページに掲載した時点から適用されます。
        </p>
      </Section>

      <p className="mt-8 text-xs text-slate-400">最終更新日: 2026年9月18日</p>

      <nav aria-label="関連ページ" className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <Link href="/about" className="font-semibold text-indigo-600 hover:underline">
          whenlyとは
        </Link>
        <Link href="/security" className="font-semibold text-indigo-600 hover:underline">
          セキュリティについて
        </Link>
        <Link href="/terms" className="font-semibold text-indigo-600 hover:underline">
          利用規約
        </Link>
      </nav>
    </main>
  );
}
