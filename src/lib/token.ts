import { randomBytes } from "crypto";

export function generateShareToken(): string {
  return randomBytes(20).toString("base64url");
}
