import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
  description: "whenly(NPO法人ぱっぷす運営)の利用規約です。",
  alternates: { canonical: "/terms" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
      >
        ← トップへ戻る
      </Link>

      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">利用規約</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        この利用規約は、NPO法人ぱっぷす(以下「当団体」といいます)が提供する日程調整/出欠確認サービス「whenly」(以下「本サービス」といいます)を、気持ちよく使っていただくためのルールをまとめたものです。本サービスをご利用いただいた時点で、この規約に同意いただいたものとします。
      </p>

      <Section title="第1条(適用)">
        <p>この規約は、本サービスをご利用いただくすべての方に適用されます。</p>
      </Section>

      <Section title="第2条(サービス内容)">
        <p>
          本サービスは、複数人の予定を共有URLで集め、日程調整や出欠確認をかんたんに行うためのツールです。より使いやすいサービスにするため、内容を変更したり、機能を追加・終了したりすることがあります。
        </p>
      </Section>

      <Section title="第3条(アカウント)">
        <p>
          メールアドレスとパスワードを登録すると、アカウントを作成できます(登録は任意です)。アカウント情報はご自身の責任で管理してください。第三者に不正に利用された場合であっても、当団体は責任を負いかねます。
        </p>
      </Section>

      <Section title="第4条(禁止事項)">
        <p>本サービスをご利用いただく際は、次のような行為をしないようお願いします。</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>法令または公序良俗に反する行為</li>
          <li>当団体、他の利用者、第三者の権利や利益を害する行為</li>
          <li>不正アクセスなど、本サービスの運営を妨げる行為</li>
          <li>他人になりすましたり、虚偽の情報を登録したりする行為</li>
          <li>営業・勧誘・広告など、本来の目的以外での利用</li>
          <li>その他、当団体が適切でないと判断する行為</li>
        </ul>
      </Section>

      <Section title="第5条(利用制限・登録抹消)">
        <p>
          利用者がこの規約に違反した場合や、当団体が適切でないと判断した場合には、事前のお知らせなく、本サービスの利用を制限したり、登録を取り消したりすることがあります。
        </p>
      </Section>

      <Section title="第6条(免責事項)">
        <p>
          本サービスは、不具合が絶対に起きないことをお約束するものではありません。当団体に故意または重大な過失がある場合を除き、本サービスのご利用によって生じた損害について、当団体は責任を負いかねます。
        </p>
        <p>
          また、本サービスの中断・停止・終了や、データの消失によって生じた損害についても責任を負いかねます。大切な日程については、念のためご自身でも記録を残していただくことをおすすめします。
        </p>
      </Section>

      <Section title="第7条(規約の変更)">
        <p>
          この規約は、必要に応じて見直すことがあります。変更後の内容は、本ページに掲載した時点から適用されます。
        </p>
      </Section>

      <Section title="第8条(準拠法)">
        <p>この規約の解釈には、日本法を適用します。</p>
      </Section>

      <Section title="第9条(お問い合わせ)">
        <p>
          この規約についてのお問い合わせは、
          <a href="mailto:lab@paps.jp" className="font-semibold text-indigo-600 hover:underline">
            lab@paps.jp
          </a>
          までお願いします。
        </p>
      </Section>

      <p className="mt-8 text-xs text-slate-400">制定日: 2026年9月18日</p>

      <nav aria-label="関連ページ" className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <Link href="/about" className="font-semibold text-indigo-600 hover:underline">
          whenlyとは
        </Link>
        <Link href="/security" className="font-semibold text-indigo-600 hover:underline">
          セキュリティについて
        </Link>
        <Link href="/privacy" className="font-semibold text-indigo-600 hover:underline">
          プライバシーポリシー
        </Link>
      </nav>
    </main>
  );
}
