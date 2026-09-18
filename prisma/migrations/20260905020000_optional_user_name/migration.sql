-- アカウント登録なしの主催者は名前の入力も不要にする(URL発行→即イベント作成に直行させるため)
ALTER TABLE `User` MODIFY `name` VARCHAR(191) NULL;
