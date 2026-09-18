-- CreateTable: variable-count response options per event
CREATE TABLE `ResponseOption` (
  `id` VARCHAR(191) NOT NULL,
  `eventId` VARCHAR(191) NOT NULL,
  `label` VARCHAR(191) NOT NULL,
  `order` INT NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `ResponseOption_eventId_fkey` (`eventId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `ResponseOption` ADD CONSTRAINT `ResponseOption_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- Backfill: turn each event's positive/maybe/negative labels into 3 ordered options
INSERT INTO `ResponseOption` (`id`, `eventId`, `label`, `order`, `createdAt`)
SELECT UUID(), `id`, `positiveLabel`, 0, NOW() FROM `Event`;

INSERT INTO `ResponseOption` (`id`, `eventId`, `label`, `order`, `createdAt`)
SELECT UUID(), `id`, `maybeLabel`, 1, NOW() FROM `Event`;

INSERT INTO `ResponseOption` (`id`, `eventId`, `label`, `order`, `createdAt`)
SELECT UUID(), `id`, `negativeLabel`, 2, NOW() FROM `Event`;

-- AlterTable: VolunteerResponse.status (enum) -> optionId (FK)
ALTER TABLE `VolunteerResponse` ADD COLUMN `optionId` VARCHAR(191) NULL;

UPDATE `VolunteerResponse` vr
JOIN `EventDay` ed ON vr.`eventDayId` = ed.`id`
JOIN `ResponseOption` ro ON ro.`eventId` = ed.`eventId`
  AND ro.`order` = CASE vr.`status` WHEN 'POSITIVE' THEN 0 WHEN 'MAYBE' THEN 1 WHEN 'NEGATIVE' THEN 2 END
SET vr.`optionId` = ro.`id`
WHERE vr.`eventDayId` IS NOT NULL;

UPDATE `VolunteerResponse` vr
JOIN `EventSlot` es ON vr.`eventSlotId` = es.`id`
JOIN `EventDay` ed ON es.`eventDayId` = ed.`id`
JOIN `ResponseOption` ro ON ro.`eventId` = ed.`eventId`
  AND ro.`order` = CASE vr.`status` WHEN 'POSITIVE' THEN 0 WHEN 'MAYBE' THEN 1 WHEN 'NEGATIVE' THEN 2 END
SET vr.`optionId` = ro.`id`
WHERE vr.`eventSlotId` IS NOT NULL;

ALTER TABLE `VolunteerResponse` MODIFY `optionId` VARCHAR(191) NOT NULL;
ALTER TABLE `VolunteerResponse` ADD CONSTRAINT `VolunteerResponse_optionId_fkey` FOREIGN KEY (`optionId`) REFERENCES `ResponseOption`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `VolunteerResponse` DROP COLUMN `status`;

-- Drop the old fixed label columns from Event
ALTER TABLE `Event` DROP COLUMN `positiveLabel`, DROP COLUMN `negativeLabel`, DROP COLUMN `maybeLabel`;
