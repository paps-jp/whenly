-- 主催者(User)・参加者(Member)共通のパスワード再発行トークンテーブル。
-- userId/memberIdのどちらか一方だけが設定される。
CREATE TABLE `PasswordResetToken` (
  `id` VARCHAR(191) NOT NULL,
  `token` VARCHAR(191) NOT NULL,
  `userId` VARCHAR(191) NULL,
  `memberId` VARCHAR(191) NULL,
  `expiresAt` DATETIME(3) NOT NULL,
  `usedAt` DATETIME(3) NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `PasswordResetToken_token_key` (`token`),
  KEY `PasswordResetToken_userId_fkey` (`userId`),
  KEY `PasswordResetToken_memberId_fkey` (`memberId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `PasswordResetToken` ADD CONSTRAINT `PasswordResetToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `PasswordResetToken` ADD CONSTRAINT `PasswordResetToken_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
