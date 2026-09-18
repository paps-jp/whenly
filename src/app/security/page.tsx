import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "セキュリティについて",
  description:
    "whenlyが保存する情報、通信の暗号化、編集権限の仕組み、広告・アクセス解析について説明します。",
  alternates: { canonical: "/security" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold tracking-tight text-slate-900">{title}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

export default function SecurityPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
      >
        ← トップへ戻る
      </Link>

      <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
        セキュリティについて
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        whenlyは「個人情報をなるべくお預かりしない」ことを大切に作っています。ここでは、どのような情報を保存し、どのように守っているかをご紹介します。より詳しい取り扱いについては
        <Link href="/privacy" className="font-semibold text-indigo-600 hover:underline">
          プライバシーポリシー
        </Link>
        もあわせてご覧ください。
      </p>

      <Section title="保存する情報">
        <p>参加者が入力する情報は、名前(任意)のみです。メールアドレスや電話番号の入力は不要で、主催者にも表示されません。</p>
        <p>
          「アカウントなしで始める」を利用した場合、メールアドレスやパスワードは保存されません。メールアドレス・パスワードを登録してアカウントを作成した場合のみ、これらを保存します。パスワードはハッシュ化して保存しており、運営者を含め誰も元のパスワードを確認できません。
        </p>
        <p>そのほか、作成したイベントの候補日時・回答内容・カレンダー連携用のURLトークンを保存しています。</p>
      </Section>

      <Section title="通信の暗号化">
        <p>whenlyへのすべての通信はHTTPS(TLS)で暗号化されています。</p>
      </Section>

      <Section title="編集・閲覧できる人の制限">
        <p>
          イベントの編集は、主催者がログインしている場合、または主催者用のURLを知っている場合のみ行えます。参加者用の回答ページは、共有されたURLを知っている人だけが開けます。
        </p>
        <p>
          主催者が「承認制」を有効にした場合は、主催者が承認した参加者だけが回答できるようになり、なりすまし回答を防げます。
        </p>
        <p>
          これらのURLは第三者に推測されにくい形式で発行していますが、URL自体が鍵の役割を果たす設計のため、共有先の範囲にはご注意ください。
        </p>
      </Section>

      <Section title="アクセス解析・広告">
        <p>
          サービス改善のため、Google Analyticsによるアクセス解析を行っています。また、一部ページにGoogle
          AdSenseによる広告を表示しています。これらのサービスは、Cookieを利用して匿名の利用状況を収集する場合があります。
        </p>
        <p>詳しい収集項目・利用目的は、プライバシーポリシーの「Cookie・アクセス解析・広告」をご確認ください。</p>
      </Section>

      <Section title="データの削除">
        <p>作成したイベントは、主催者の管理画面からいつでも削除できます。</p>
        <p>
          アカウント自体の削除やデータの開示・訂正をご希望の場合は、
          <a href="mailto:lab@paps.jp" className="font-semibold text-indigo-600 hover:underline">
            lab@paps.jp
          </a>
          までご連絡ください。
        </p>
      </Section>

      <nav aria-label="関連ページ" className="mt-10 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <Link href="/about" className="font-semibold text-indigo-600 hover:underline">
          whenlyとは
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
