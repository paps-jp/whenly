import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { StartGuestOrganizerForm } from "@/components/StartGuestOrganizerForm";
import { Icon, IconBadge } from "@/components/Icons";
import { comparePagesForLocale, getCompareLabels, getComparePage } from "@/lib/compare";
import { FEATURED_USE_CASES, USE_CASE_ICONS } from "@/lib/use-cases";
import {
  COMPARE_SLUGS,
  EYECATCH_SIZE,
  eyecatchPath,
  getMessages,
  interpolate,
  isCompareSlug,
  pathForCompare,
  pathForUseCase,
} from "@/lib/i18n";

const baseUrl = process.env.APP_BASE_URL ?? "https://whenly.paps.jp";

const cardClass =
  "rounded-2xl border border-slate-100 bg-white/80 p-6 text-start shadow-sm shadow-slate-200/50 backdrop-blur";

export function generateStaticParams() {
  return COMPARE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isCompareSlug(slug)) return {};
  const page = getComparePage(slug);
  const path = pathForCompare(slug);
  return {
    title: { absolute: `${page.title} | whenly` },
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${page.title} | whenly`,
      description: page.description,
      images: [{ url: eyecatchPath(page.locale), ...EYECATCH_SIZE, alt: page.heading }],
    },
  };
}

// 他ツールとの比較ページ。言語は対象ツールの市場に合わせて固定(proxy が FIXED_LOCALE_PATHS で適用)。
export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isCompareSlug(slug)) notFound();

  const page = getComparePage(slug);
  const T = getCompareLabels(page.locale);
  const m = getMessages(page.locale);
  const L = m.landing;
  const others = comparePagesForLocale(page.locale).filter((p) => p.slug !== slug);
  const pageUrl = `${baseUrl}${pathForCompare(slug)}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "whenly", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: page.heading, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
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
          <li>{T.breadcrumb}</li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-600">{page.heading}</li>
        </ol>
      </nav>

      {/* ヒーロー */}
      <section className="text-center">
        <IconBadge name="scale" className="mx-auto h-14 w-14 rounded-2xl" />
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900">{page.heading}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-start text-sm leading-relaxed text-slate-600 sm:text-base">
          {page.lead}
        </p>
      </section>

      {/* 比較表 */}
      <section>
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
          {T.tableHeading}
        </h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-100 bg-white/80 shadow-sm shadow-slate-200/50 backdrop-blur">
          <table className="w-full min-w-[560px] text-start text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80 text-xs uppercase tracking-wide text-slate-500">
                <th scope="col" className="px-4 py-3 text-start font-semibold">
                  {T.feature}
                </th>
                <th scope="col" className="px-4 py-3 text-start font-semibold text-indigo-700">
                  whenly
                </th>
                <th scope="col" className="px-4 py-3 text-start font-semibold">
                  {page.competitor}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {page.rows.map((row) => (
                <tr key={row.feature} className="align-top">
                  <th scope="row" className="px-4 py-3 text-start font-semibold text-slate-800">
                    {row.feature}
                  </th>
                  <td className="px-4 py-3 text-slate-700">{row.whenly}</td>
                  <td className="px-4 py-3 text-slate-600">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-slate-400">{T.disclaimer}</p>
      </section>

      {/* 向き・不向き */}
      <section className="grid gap-4 sm:grid-cols-2">
        <div className={`${cardClass} border-indigo-100 bg-indigo-50/60`}>
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <Icon name="sparkles" className="h-5 w-5 text-indigo-600" />
            {T.whenlyForHeading}
          </h2>
          <ul className="mt-3 list-disc space-y-2 ps-5 text-sm leading-relaxed text-slate-700">
            {page.whenlyFor.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className={cardClass}>
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <Icon name="listChecks" className="h-5 w-5 text-slate-500" />
            {interpolate(T.otherForHeading, { other: page.competitor })}
          </h2>
          <ul className="mt-3 list-disc space-y-2 ps-5 text-sm leading-relaxed text-slate-700">
            {page.otherFor.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* まとめ */}
      <section className={cardClass}>
        <h2 className="text-lg font-bold text-slate-900">{T.summaryHeading}</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">{page.summary}</p>
        <p className="mt-3 text-xs text-slate-400">
          <a
            href={page.competitorUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:text-slate-600 hover:underline"
          >
            {page.competitor}: {page.competitorUrl}
          </a>
        </p>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
          {T.faqHeading}
        </h2>
        <div className="mt-6 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white/80 shadow-sm shadow-slate-200/50 backdrop-blur">
          {page.faqs.map((f) => (
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
        <h2 className="text-2xl font-extrabold tracking-tight">{T.ctaHeading}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-indigo-100">{T.ctaBody}</p>
        <div className="mx-auto mt-6 max-w-xs [&_button]:bg-white [&_button]:text-indigo-700 [&_button]:shadow-sm">
          <StartGuestOrganizerForm label={T.cta} />
        </div>
      </section>

      {/* 他の比較・用途別 */}
      <section className="grid gap-8 sm:grid-cols-2">
        {others.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-slate-900">{T.otherComparisons}</h2>
            <ul className="mt-3 space-y-2">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={pathForCompare(p.slug)}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50/50"
                  >
                    <IconBadge name="scale" className="h-8 w-8 rounded-lg" />
                    {p.heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h2 className="text-lg font-bold text-slate-900">{T.useCasesHeading}</h2>
          <ul className="mt-3 space-y-2">
            {FEATURED_USE_CASES.slice(0, 5).map((s) => (
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
            <li>
              <Link href="/use" className="inline-block px-1 text-sm font-semibold text-indigo-600 hover:underline">
                {m.useCasePage.viewAll} →
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
