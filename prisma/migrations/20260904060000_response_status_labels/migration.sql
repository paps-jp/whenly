-- AlterTable: customizable response labels per event (default ○/×/△)
ALTER TABLE `Event`
    ADD COLUMN `positiveLabel` VARCHAR(191) NOT NULL DEFAULT '○',
    ADD COLUMN `negativeLabel` VARCHAR(191) NOT NULL DEFAULT '×',
    ADD COLUMN `maybeLabel` VARCHAR(191) NOT NULL DEFAULT '△';

-- AlterTable: VolunteerResponse.available (boolean) -> status (3-state enum)
ALTER TABLE `VolunteerResponse`
    ADD COLUMN `status` ENUM('POSITIVE', 'NEGATIVE', 'MAYBE') NULL;

UPDATE `VolunteerResponse` SET `status` = IF(`available` = 1, 'POSITIVE', 'NEGATIVE');

ALTER TABLE `VolunteerResponse`
    MODIFY `status` ENUM('POSITIVE', 'NEGATIVE', 'MAYBE') NOT NULL,
    DROP COLUMN `available`;
