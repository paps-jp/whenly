import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { StartGuestOrganizerForm } from "@/components/StartGuestOrganizerForm";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { Icon, IconBadge } from "@/components/Icons";
import { USE_CASE_ICONS } from "@/lib/use-cases";
import {
  EYECATCH_SIZE,
  USE_CASE_SLUGS,
  eyecatchPath,
  getMessages,
  isUseCaseSlug,
  localizedPath,
  pathForUseCase,
} from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";

const baseUrl = process.env.APP_BASE_URL ?? "https://whenly.paps.jp";

const cardClass =
  "rounded-2xl border border-slate-100 bg-white/80 p-6 text-start shadow-sm shadow-slate-200/50 backdrop-blur";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isUseCaseSlug(slug)) return {};
  const locale = await getLocale();
  const m = getMessages(locale);
  const c = m.useCases[slug];
  return {
    title: c.title,
    description: c.description,
    openGraph: {
      url: localizedPath(locale, pathForUseCase(slug)),
      title: `${c.title} | whenly`,
      description: c.description,
      images: [{ url: eyecatchPath(locale), ...EYECATCH_SIZE, alt: c.heading }],
    },
  };
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isUseCaseSlug(slug)) notFound();

  const locale = await getLocale();
  const m = getMessages(locale);
  const c = m.useCases[slug];
  const P = m.useCasePage;
  const L = m.landing;

  const pains = [c.pain1, c.pain2, c.pain3];
  const solutions = [
    { title: c.solution1Title, body: c.solution1Body },
    { title: c.solution2Title, body: c.solution2Body },
    { title: c.solution3Title, body: c.solution3Body },
  ];
  const tips = [c.tip1, c.tip2];
  const faqs = [
    { q: c.faq1Q, a: c.faq1A },
    { q: c.faq2Q, a: c.faq2A },
  ];
  const related = USE_CASE_SLUGS.filter((s) => s !== slug);

  const pageUrl = `${baseUrl}${localizedPath(locale, pathForUseCase(slug))}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "whenly", item: `${baseUrl}${localizedPath(locale, "/")}` },
        { "@type": "ListItem", position: 2, name: c.heading, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-14 px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="breadcrumb" className="text-xs text-slate-400">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-indigo-600 hover:underline">
              {L.navHome}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>{P.breadcrumbUseCases}</li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-600">{c.heading}</li>
        </ol>
      </nav>

      {/* ヒーロー */}
      <section className="text-center">
        <IconBadge name={USE_CASE_ICONS[slug]} className="mx-auto h-14 w-14 rounded-2xl" />
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900">{c.heading}</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
          {c.lead}
        </p>
        <div className="mx-auto mt-6 max-w-xs">
          <StartGuestOrganizerForm label={L.heroCta} />
        </div>
        <p className="mt-3 text-xs text-slate-400">{L.heroNote}</p>
      </section>

      {/* 悩み */}
      <section>
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
          {P.painsHeading}
        </h2>
        <ul className="mt-6 space-y-3">
          {pains.map((p) => (
            <li key={p} className={`${cardClass} flex items-start gap-3 py-4`}>
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                <Icon name="clock" className="h-3.5 w-3.5" />
              </span>
              <p className="text-sm text-slate-700">{p}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 解決 */}
      <section>
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
          {P.solutionsHeading}
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {solutions.map((s, i) => (
            <li key={s.title} className={cardClass}>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3 font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* コツ */}
      <section className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6">
        <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <Icon name="sparkles" className="h-5 w-5 text-indigo-600" />
          {P.tipsHeading}
        </h2>
        <ul className="mt-3 list-disc space-y-2 ps-5 text-sm leading-relaxed text-slate-700">
          {tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
          {L.faqHeading}
        </h2>
        <div className="mt-6 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white/80 shadow-sm shadow-slate-200/50 backdrop-blur">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                <h3 className="text-base font-semibold">{f.q}</h3>
                <span aria-hidden="true" className="shrink-0 text-slate-400 transition-transform group-open:rotate-180">
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
            href="/"
            className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {L.navHome}
          </Link>
        </div>
      </section>

      {/* 他の用途 */}
      <section>
        <h2 className="text-center text-lg font-bold text-slate-900">{P.relatedHeading}</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {related.map((s) => (
            <li key={s}>
              <Link
                href={pathForUseCase(s)}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50/50"
              >
                <IconBadge name={USE_CASE_ICONS[s]} className="h-8 w-8 rounded-lg" />
                {m.useCases[s].heading}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <AdSenseUnit />
    </main>
  );
}
