import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { I18nProvider } from "@/lib/i18n/client";
import {
  DEFAULT_LOCALE,
  EYECATCH_SIZE,
  LOCALES,
  OG_LOCALES,
  eyecatchPath,
  getMessages,
  isPublicPath,
  isRTL,
  localizedPath,
} from "@/lib/i18n";
import { getLocale, getRequestPathname } from "@/lib/i18n/server";
import "./globals.css";

// 以前は globals.css の @import(Google Fonts の CSS)で読んでいたが、描画をブロックする
// クロスオリジン CSS になるため next/font でセルフホストする(LCP / CLS 改善)。
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.APP_BASE_URL ?? "https://whenly.paps.jp";
// Facebook のシェアデバッガーが要求する fb:app_id。Meta for Developers で発行したアプリIDを
// FB_APP_ID に設定すると出力する(未設定なら省略)。
const fbAppId = process.env.FB_APP_ID;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const m = getMessages(locale);
  const pathname = await getRequestPathname();

  // 公開ページだけ、言語別URL(/en など)を canonical / hreflang として出す。
  const alternates =
    pathname && isPublicPath(pathname)
      ? {
          canonical: localizedPath(locale, pathname),
          languages: {
            ...Object.fromEntries(LOCALES.map((l) => [l, localizedPath(l, pathname)])),
            "x-default": localizedPath(DEFAULT_LOCALE, pathname),
          },
        }
      : undefined;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: m.meta.siteTitle,
      template: "%s | whenly",
    },
    description: m.meta.siteDescription,
    keywords: [...m.meta.keywords],
    applicationName: "whenly",
    alternates,
    openGraph: {
      type: "website",
      // og:url は Facebook で必須。公開ページは言語別URL、それ以外はそのままのパス。
      url: pathname ? (isPublicPath(pathname) ? localizedPath(locale, pathname) : pathname) : "/",
      locale: OG_LOCALES[locale],
      siteName: "whenly",
      title: m.meta.siteTitle,
      description: m.meta.siteDescription,
      images: [{ url: eyecatchPath(locale), ...EYECATCH_SIZE, alt: m.meta.siteTitle }],
    },
    ...(fbAppId ? { facebook: { appId: fbAppId } } : {}),
    twitter: {
      card: "summary_large_image",
      images: [eyecatchPath(locale)],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const m = getMessages(locale);
  const L = m.landing;
  const pathname = (await getRequestPathname()) ?? "/";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "whenly",
      alternateName: "whenly by PAPS",
      url: baseUrl,
      description: m.meta.siteDescription,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "JPY",
      },
      featureList: [
        L.feature1Title,
        L.feature2Title,
        L.feature3Title,
        L.feature4Title,
        L.feature5Title,
        L.feature6Title,
      ],
      screenshot: `${baseUrl}${eyecatchPath(locale)}`,
      inLanguage: [...LOCALES],
      publisher: { "@id": `${baseUrl}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "PAPS",
      alternateName: "ぱっぷす",
      url: "https://paps.jp",
      logo: `${baseUrl}/logo.png`,
    },
  ];

  const footerLinks = [
    { href: "/", label: L.navHome },
    { href: "/start", label: m.common.startWithoutAccount },
    { href: "/login", label: m.auth.organizerLogin },
    { href: "/member/login", label: m.auth.participantLogin },
  ];

  // 運営情報系のページは日本語のみで提供しているため、i18n辞書を使わず固定表記にする。
  const legalLinks = [
    { href: "/about", label: "whenlyとは" },
    { href: "/security", label: "セキュリティ" },
    { href: "/privacy", label: "プライバシーポリシー" },
    { href: "/terms", label: "利用規約" },
  ];

  return (
    <html
      lang={locale}
      dir={isRTL(locale) ? "rtl" : "ltr"}
      className={`${manrope.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent),linear-gradient(to_bottom,#f7f7fb,#f7f7fb)] text-slate-900">
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider locale={locale} messages={m}>
          {children}
          <footer className="flex flex-col items-center gap-3 py-6 text-center text-xs text-slate-400 print:hidden">
            <nav aria-label="footer" className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              {footerLinks.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-slate-600 hover:underline">
                  {l.label}
                </Link>
              ))}
            </nav>
            <nav aria-label="legal" className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              {legalLinks.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-slate-600 hover:underline">
                  {l.label}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher locale={locale} pathname={pathname} label={m.common.language} />
            <a
              href="https://paps.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-600 hover:underline"
            >
              {m.common.copyright}
            </a>
          </footer>
        </I18nProvider>
      </body>
    </html>
  );
}
