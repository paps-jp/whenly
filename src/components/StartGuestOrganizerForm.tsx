import { SubmitButton } from "@/components/SubmitButton";
import { startGuestOrganizer } from "@/lib/actions/user-auth";

export function StartGuestOrganizerForm({ label }: { label: string }) {
  return (
    <form action={startGuestOrganizer}>
      <SubmitButton className="w-full">{label}</SubmitButton>
    </form>
  );
}
