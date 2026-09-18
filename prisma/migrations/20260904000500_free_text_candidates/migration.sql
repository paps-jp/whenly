-- AlterTable: Event gets its own base date (date-only)
ALTER TABLE `Event` ADD COLUMN `eventDate` DATE NULL;

-- AlterTable: EventDate becomes a free-text label instead of a strict datetime
ALTER TABLE `EventDate` ADD COLUMN `label` VARCHAR(191) NULL;
UPDATE `EventDate` SET `label` = '';
ALTER TABLE `EventDate` MODIFY `label` VARCHAR(191) NOT NULL;
ALTER TABLE `EventDate` DROP COLUMN `startsAt`;
