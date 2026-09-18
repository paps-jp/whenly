-- Drop old dependent tables (dev data only, safe to discard)
DROP TABLE `VolunteerResponse`;
DROP TABLE `EventDate`;

-- Adjust Event table: drop single eventDate, rename confirmedEventDateId -> confirmedEventDayId
ALTER TABLE `Event` DROP COLUMN `eventDate`;
ALTER TABLE `Event` CHANGE COLUMN `confirmedEventDateId` `confirmedEventDayId` VARCHAR(191) NULL;

-- New tables
CREATE TABLE `EventDay` (
  `id` VARCHAR(191) NOT NULL,
  `eventId` VARCHAR(191) NOT NULL,
  `date` DATE NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `EventDay_eventId_fkey` (`eventId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `EventSlot` (
  `id` VARCHAR(191) NOT NULL,
  `eventDayId` VARCHAR(191) NOT NULL,
  `label` VARCHAR(191) NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `EventSlot_eventDayId_fkey` (`eventDayId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `VolunteerResponse` (
  `id` VARCHAR(191) NOT NULL,
  `memberId` VARCHAR(191) NOT NULL,
  `eventDayId` VARCHAR(191) DEFAULT NULL,
  `eventSlotId` VARCHAR(191) DEFAULT NULL,
  `available` TINYINT(1) NOT NULL,
  `respondedAt` DATETIME(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `VolunteerResponse_memberId_eventDayId_key` (`memberId`,`eventDayId`),
  UNIQUE KEY `VolunteerResponse_memberId_eventSlotId_key` (`memberId`,`eventSlotId`),
  KEY `VolunteerResponse_eventDayId_fkey` (`eventDayId`),
  KEY `VolunteerResponse_eventSlotId_fkey` (`eventSlotId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Foreign keys
ALTER TABLE `EventDay` ADD CONSTRAINT `EventDay_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `EventSlot` ADD CONSTRAINT `EventSlot_eventDayId_fkey` FOREIGN KEY (`eventDayId`) REFERENCES `EventDay`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `VolunteerResponse` ADD CONSTRAINT `VolunteerResponse_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `VolunteerResponse` ADD CONSTRAINT `VolunteerResponse_eventDayId_fkey` FOREIGN KEY (`eventDayId`) REFERENCES `EventDay`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `VolunteerResponse` ADD CONSTRAINT `VolunteerResponse_eventSlotId_fkey` FOREIGN KEY (`eventSlotId`) REFERENCES `EventSlot`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
