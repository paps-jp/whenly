import Image from "next/image";
import Link from "next/link";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { StartGuestOrganizerForm } from "@/components/StartGuestOrganizerForm";
import { IconBadge, type IconName } from "@/components/Icons";
import { USE_CASE_ICONS } from "@/lib/use-cases";
import { USE_CASE_SLUGS, pathForUseCase } from "@/lib/i18n";
import { getServerMessages } from "@/lib/i18n/server";

const cardClass =
  "rounded-2xl border border-slate-100 bg-white/80 p-6 text-start shadow-sm shadow-slate-200/50 backdrop-blur";

export default async function Home() {
  const m = await getServerMessages();
  const L = m.landing;

  const steps = [
    { title: L.step1Title, body: L.step1Body },
    { title: L.step2Title, body: L.step2Body },
    { title: L.step3Title, body: L.step3Body },
  ];
  const features: { icon: IconName; title: string; body: string }[] = [
    { icon: "unlock", title: L.feature1Title, body: L.feature1Body },
    { icon: "clock", title: L.feature2Title, body: L.feature2Body },
    { icon: "listChecks", title: L.feature3Title, body: L.feature3Body },
    { icon: "users", title: L.feature4Title, body: L.feature4Body },
    { icon: "calendar", title: L.feature5Title, body: L.feature5Body },
    { icon: "sparkles", title: L.feature6Title, body: L.feature6Body },
  ];
  // 用途一覧は用途別ページ(/use/<slug>)へのリンク。見出しは各ページの H1 と揃える。
  const useCases = USE_CASE_SLUGS.map((slug) => ({
    slug,
    icon: USE_CASE_ICONS[slug],
    label: m.useCases[slug].heading,
  }));
  const security: { icon: IconName; title: string; body: string }[] = [
    { icon: "shield", title: L.security1Title, body: L.security1Body },
    { icon: "key", title: L.security2Title, body: L.security2Body },
    { icon: "lock", title: L.security3Title, body: L.security3Body },
  ];
  const faqs = [
    { q: L.faq1Q, a: L.faq1A },
    { q: L.faq2Q, a: L.faq2A },
    { q: L.faq3Q, a: L.faq3A },
    { q: L.faq4Q, a: L.faq4A },
    { q: L.faq5Q, a: L.faq5A },
    { q: L.faq6Q, a: L.faq6A },
    { q: L.faq7Q, a: L.faq7A },
  ];

  // FAQ の構造化データ(検索結果のリッチリザルト / AI 検索向け)。
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-16 px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ヒーロー */}
      <section className="text-center">
        <Image
          src="/logo.png"
          alt="whenly"
          width={56}
          height={56}
          priority
          className="mx-auto mb-5 rounded-2xl shadow-lg shadow-indigo-300/50"
        />
        <p className="bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent">
          whenly
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl">
          {L.heroTitle}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-500 sm:text-base">{L.heroLead}</p>
        <div className="mx-auto mt-6 max-w-xs">
          <StartGuestOrganizerForm label={L.heroCta} />
        </div>
        <p className="mt-3 text-xs text-slate-400">{L.heroNote}</p>
      </section>

      {/* 主催者 / 参加者の入口 */}
      <section className="grid w-full gap-6 sm:grid-cols-2">
        <div className={`${cardClass} transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200/40`}>
          <h2 className="text-lg font-bold text-slate-900">{m.home.organizerTitle}</h2>
          <p className="mt-1 text-sm text-slate-500">{m.home.organizerDescription}</p>
          <div className="mt-5 flex flex-col gap-2">
            <StartGuestOrganizerForm label={m.common.startWithoutAccount} />
            <div className="flex gap-2">
              <Link
                href="/login"
                className="flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                {m.common.login}
              </Link>
              <Link
                href="/signup"
                className="flex-1 rounded-full border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                {m.common.signup}
              </Link>
            </div>
          </div>
        </div>

        <div className={`${cardClass} transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200/40`}>
          <h2 className="text-lg font-bold text-slate-900">{m.home.participantTitle}</h2>
          <p className="mt-1 text-sm text-slate-500">{m.home.participantDescription}</p>
          <div className="mt-5 flex flex-col gap-2">
            <Link
              href="/member/login"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm shadow-indigo-300/50 transition-all hover:brightness-110 active:scale-[0.98]"
            >
              {m.common.login}
            </Link>
            <Link
              href="/member/signup"
              className="rounded-full border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              {m.common.signup}
            </Link>
          </div>
        </div>
      </section>

      {/* 使い方 */}
      <section>
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
          {L.howHeading}
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className={cardClass}>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3 font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 特徴 */}
      <section>
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
          {L.featuresHeading}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f.title} className={cardClass}>
              <div className="flex items-start gap-3">
                <IconBadge name={f.icon} />
                <div>
                  <h3 className="font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{f.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 利用シーン */}
      <section>
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
          {L.useCasesHeading}
        </h2>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {useCases.map((u) => (
            <li key={u.slug}>
              <Link
                href={pathForUseCase(u.slug)}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50/50"
              >
                <IconBadge name={u.icon} className="h-8 w-8 rounded-lg" />
                {u.label}
                <span aria-hidden="true" className="ms-auto text-indigo-400 rtl:rotate-180">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 安全性 */}
      <section>
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
          {L.securityHeading}
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {security.map((s) => (
            <li key={s.title} className={cardClass}>
              <IconBadge name={s.icon} />
              <h3 className="mt-3 font-bold text-slate-900">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
          {L.faqHeading}
        </h2>
        <div className="mt-8 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white/80 shadow-sm shadow-slate-200/50 backdrop-blur">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                <h3 className="text-base font-semibold">{f.q}</h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 px-6 py-10 text-center text-white shadow-lg shadow-indigo-300/40">
        <h2 className="text-2xl font-extrabold tracking-tight">{L.ctaHeading}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-indigo-100">{L.ctaBody}</p>
        <div className="mx-auto mt-6 flex max-w-xs flex-col gap-2">
          <Link
            href="/start"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm transition-all hover:brightness-95 active:scale-[0.98]"
          >
            {L.heroCta}
          </Link>
          <Link
            href="/signup"
            className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {m.common.signup}
          </Link>
        </div>
      </section>

      <AdSenseUnit />
    </main>
  );
}
