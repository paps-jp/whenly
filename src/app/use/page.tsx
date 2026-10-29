import Link from "next/link";
import type { Metadata } from "next";
import { StartGuestOrganizerForm } from "@/components/StartGuestOrganizerForm";
import { IconBadge } from "@/components/Icons";
import { comparePagesForLocale } from "@/lib/compare";
import { USE_CASE_GROUPS, USE_CASE_GROUP_KEYS, USE_CASE_ICONS, type UseCaseGroupKey } from "@/lib/use-cases";
import {
  EYECATCH_SIZE,
  USE_CASE_SLUGS,
  eyecatchPath,
  getMessages,
  localizedPath,
  pathForCompare,
  pathForUseCase,
  type Messages,
} from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";

const baseUrl = process.env.APP_BASE_URL ?? "https://whenly.paps.jp";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const P = getMessages(locale).useCasePage;
  return {
    title: P.indexTitle,
    description: P.indexDescription,
    openGraph: {
      url: localizedPath(locale, "/use"),
      title: `${P.indexTitle} | whenly`,
      description: P.indexDescription,
      images: [{ url: eyecatchPath(locale), ...EYECATCH_SIZE, alt: P.indexHeading }],
    },
  };
}

const GROUP_LABEL: Record<UseCaseGroupKey, keyof Messages["useCasePage"]> = {
  party: "groupParty",
  hobby: "groupHobby",
  community: "groupCommunity",
  work: "groupWork",
};

// 用途別ページの一覧(/use)。分類ごとに全 44 用途へリンクする。
export default async function UseCaseIndexPage() {
  const locale = await getLocale();
  const m = getMessages(locale);
  const P = m.useCasePage;
  const L = m.landing;
  const compares = comparePagesForLocale(locale);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "whenly", item: `${baseUrl}${localizedPath(locale, "/")}` },
        { "@type": "ListItem", position: 2, name: P.indexHeading, item: `${baseUrl}${localizedPath(locale, "/use")}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: P.indexHeading,
      numberOfItems: USE_CASE_SLUGS.length,
      itemListElement: USE_CASE_SLUGS.map((slug, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: m.useCases[slug].heading,
        url: `${baseUrl}${localizedPath(locale, pathForUseCase(slug))}`,
      })),
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-4 py-12">
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
          <li className="text-slate-600">{P.breadcrumbUseCases}</li>
        </ol>
      </nav>

      <section className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">{P.indexHeading}</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
          {P.indexLead}
        </p>
        <div className="mx-auto mt-6 max-w-xs">
          <StartGuestOrganizerForm label={L.heroCta} />
        </div>
        <p className="mt-3 text-xs text-slate-400">{L.heroNote}</p>
      </section>

      {USE_CASE_GROUP_KEYS.map((group) => (
        <section key={group}>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900">{P[GROUP_LABEL[group]]}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {USE_CASE_GROUPS[group].map((slug) => (
              <li key={slug}>
                <Link
                  href={pathForUseCase(slug)}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50/50"
                >
                  <IconBadge name={USE_CASE_ICONS[slug]} className="h-8 w-8 shrink-0 rounded-lg" />
                  {m.useCases[slug].heading}
                  <span aria-hidden="true" className="ms-auto text-indigo-400 rtl:rotate-180">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {compares.length > 0 && (
        <section>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900">{P.compareHeading}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {compares.map((c) => (
              <li key={c.slug}>
                <Link
                  href={pathForCompare(c.slug)}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50/50"
                >
                  <IconBadge name="scale" className="h-8 w-8 shrink-0 rounded-lg" />
                  {c.heading}
                  <span aria-hidden="true" className="ms-auto text-indigo-400 rtl:rotate-180">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
