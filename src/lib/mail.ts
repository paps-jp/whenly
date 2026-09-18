import nodemailer, { type Transporter } from "nodemailer";
import { getMessages, interpolate, type Locale } from "@/lib/i18n";

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

export async function sendPasswordResetEmail(
  to: string,
  resetUrl: string,
  locale: Locale
): Promise<void> {
  const m = getMessages(locale);
  await getTransporter().sendMail({
    from: `whenly <${process.env.SMTP_USER}>`,
    to,
    subject: m.mail.resetSubject,
    text: interpolate(m.mail.resetBody, { url: resetUrl }),
  });
}
