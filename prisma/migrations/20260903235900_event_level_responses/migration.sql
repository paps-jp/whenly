-- AlterTable
ALTER TABLE `VolunteerResponse`
    ADD COLUMN `eventId` VARCHAR(191) NULL,
    MODIFY `eventDateId` VARCHAR(191) NULL;

-- DropForeignKey (both depend on the composite unique index we're about to replace)
ALTER TABLE `VolunteerResponse` DROP FOREIGN KEY `VolunteerResponse_memberId_fkey`;

-- DropIndex
DROP INDEX `VolunteerResponse_memberId_eventDateId_key` ON `VolunteerResponse`;

-- CreateIndex
CREATE UNIQUE INDEX `VolunteerResponse_memberId_eventId_key` ON `VolunteerResponse`(`memberId`, `eventId`);

-- CreateIndex
CREATE UNIQUE INDEX `VolunteerResponse_memberId_eventDateId_key` ON `VolunteerResponse`(`memberId`, `eventDateId`);

-- AddForeignKey
ALTER TABLE `VolunteerResponse` ADD CONSTRAINT `VolunteerResponse_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
-- (VolunteerResponse_eventDateId_fkey already exists from the init migration and was
-- never dropped above, so it is not re-created here.)
ALTER TABLE `VolunteerResponse` ADD CONSTRAINT `VolunteerResponse_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
