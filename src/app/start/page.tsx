import Link from "next/link";
import type { Metadata } from "next";
import { StartGuestOrganizerForm } from "@/components/StartGuestOrganizerForm";
import { getServerMessages } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const m = await getServerMessages();
  return { title: m.start.metaTitle, description: m.start.metaDescription };
}

export default async function StartPage() {
  const m = await getServerMessages();

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-16">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
      >
        {m.common.backToTop}
      </Link>
      <h1 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
        {m.start.title}
      </h1>
      <p className="mt-2 text-center text-sm text-slate-500">{m.start.description}</p>
      <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50">
        <StartGuestOrganizerForm label={m.start.startButton} />
        <p className="mt-3 text-xs text-slate-400">{m.start.note}</p>
      </div>
      <p className="mt-4 text-center text-sm text-slate-500">
        {m.start.makeAccountPrompt}{" "}
        <Link href="/signup" className="font-semibold text-indigo-600 hover:underline">
          {m.common.signup}
        </Link>
      </p>
    </main>
  );
}
