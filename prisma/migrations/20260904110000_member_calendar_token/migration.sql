-- Per-member unguessable token for the personal iCalendar (.ics) subscription
-- feed (Google/Outlook/iPhone calendar sync of the days/slots they answered).
ALTER TABLE `Member` ADD COLUMN `calendarToken` VARCHAR(191) NULL;

UPDATE `Member` SET `calendarToken` = REPLACE(UUID(), '-', '') WHERE `calendarToken` IS NULL;

ALTER TABLE `Member` MODIFY `calendarToken` VARCHAR(191) NOT NULL;
ALTER TABLE `Member` ADD UNIQUE INDEX `Member_calendarToken_key` (`calendarToken`);
