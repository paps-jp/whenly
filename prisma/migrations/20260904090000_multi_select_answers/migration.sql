-- Event-level toggle: allow a member to select more than one option per day/slot
ALTER TABLE `Event` ADD COLUMN `allowMultipleAnswers` BOOLEAN NOT NULL DEFAULT false;

-- Widen the per-day/per-slot uniqueness to include optionId, so a member can hold
-- multiple response rows (one per selected option) for the same day/slot when
-- allowMultipleAnswers is on. Create the replacement (memberId-prefixed) indexes
-- BEFORE dropping the old ones: memberId's FK constraint has no standalone
-- supporting index of its own, it relies on being the leftmost column of one of
-- these composite unique indexes, so at least one memberId-prefixed index must
-- exist at all times or MySQL refuses the DROP INDEX with errno 1553.
ALTER TABLE `VolunteerResponse` ADD UNIQUE INDEX `VolunteerResponse_memberId_eventDayId_optionId_key` (`memberId`, `eventDayId`, `optionId`);
ALTER TABLE `VolunteerResponse` ADD UNIQUE INDEX `VolunteerResponse_memberId_eventSlotId_optionId_key` (`memberId`, `eventSlotId`, `optionId`);

ALTER TABLE `VolunteerResponse` DROP INDEX `VolunteerResponse_memberId_eventDayId_key`;
ALTER TABLE `VolunteerResponse` DROP INDEX `VolunteerResponse_memberId_eventSlotId_key`;
