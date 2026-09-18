import Link from "next/link";
import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";
import { signupMember } from "@/lib/actions/member-auth";
import { getServerMessages } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const m = await getServerMessages();
  return { title: m.auth.participantSignup, robots: { index: false, follow: true } };
}

export default async function MemberSignupPage({
  searchParams,
}: {
  searchParams: Promise<{ returnTo?: string }>;
}) {
  const { returnTo } = await searchParams;
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
        {m.auth.participantSignup}
      </h1>
      <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50">
        <AuthForm
          action={signupMember}
          mode="signup"
          returnTo={returnTo}
          submitLabel={m.common.register}
        />
      </div>
      <p className="mt-4 text-center text-sm text-slate-500">
        {m.common.haveAccount}{" "}
        <Link
          href={`/member/login${returnTo ? `?returnTo=${encodeURIComponent(returnTo)}` : ""}`}
          className="font-semibold text-indigo-600 hover:underline"
        >
          {m.common.login}
        </Link>
      </p>
    </main>
  );
}
