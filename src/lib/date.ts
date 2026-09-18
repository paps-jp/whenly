export function startOfTodayUTC(): Date {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

export function isPastDay(date: Date): boolean {
  return date.getTime() < startOfTodayUTC().getTime();
}
