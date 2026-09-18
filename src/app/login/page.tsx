import Link from "next/link";
import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";
import { loginUser } from "@/lib/actions/user-auth";
import { getServerMessages } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const m = await getServerMessages();
  return { title: m.auth.organizerLogin, robots: { index: false, follow: true } };
}

export default async function LoginPage({
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
        {m.auth.organizerLogin}
      </h1>
      <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50">
        <AuthForm action={loginUser} mode="login" returnTo={returnTo} submitLabel={m.common.login} />
      </div>
      <p className="mt-3 text-center text-sm text-slate-500">
        <Link href="/forgot-password" className="font-semibold text-indigo-600 hover:underline">
          {m.common.forgotPassword}
        </Link>
      </p>
      <p className="mt-4 text-center text-sm text-slate-500">
        {m.common.noAccount}{" "}
        <Link href="/signup" className="font-semibold text-indigo-600 hover:underline">
          {m.common.signup}
        </Link>
      </p>
      <p className="mt-2 text-center text-sm text-slate-500">
        {m.common.tryNow}{" "}
        <Link href="/start" className="font-semibold text-indigo-600 hover:underline">
          {m.common.startWithoutAccount}
        </Link>
      </p>
    </main>
  );
}
