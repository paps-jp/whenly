import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { ResetPasswordForm } from "@/components/ResetPasswordForm";
import { getServerMessages } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const m = await getServerMessages();
  return { title: m.auth.resetTitle, robots: { index: false, follow: false } };
}

export default async function ResetPasswordPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const m = await getServerMessages();

  const record = await prisma.passwordResetToken.findUnique({ where: { token } });
  const invalid = !record || !!record.usedAt || record.expiresAt < new Date();

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-16">
      <h1 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
        {m.auth.resetTitle}
      </h1>
      <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50">
        {invalid ? (
          <div className="text-center">
            <p className="text-sm text-slate-600">{m.auth.resetInvalid}</p>
            <Link
              href="/login"
              className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:underline"
            >
              {m.auth.toLoginPage}
            </Link>
          </div>
        ) : (
          <ResetPasswordForm token={token} />
        )}
      </div>
    </main>
  );
}
