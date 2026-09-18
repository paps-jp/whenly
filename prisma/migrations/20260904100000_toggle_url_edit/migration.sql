-- Event-level toggle: whether knowing the /dashboard/events/[id] URL alone is
-- enough to view/edit the event (default true = today's behavior, kept for
-- guest organizers who have no login credentials to fall back on). When turned
-- off, the page requires an active session belonging to the event's owning User.
ALTER TABLE `Event` ADD COLUMN `allowUrlEdit` BOOLEAN NOT NULL DEFAULT true;
