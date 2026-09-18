-- 各日付は独立したイベントであり、候補から1つを選ぶものではないため、確定機能を廃止
ALTER TABLE `Event` DROP COLUMN `confirmedEventDayId`;
