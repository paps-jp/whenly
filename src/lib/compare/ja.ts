import type { CompareLabels, ComparePage } from "./types";

export const compareLabelsJa: CompareLabels = {
  breadcrumb: "他ツールとの比較",
  tableHeading: "機能の比較",
  feature: "項目",
  whenlyForHeading: "whenlyが向いている場面",
  otherForHeading: "{other}が向いている場面",
  summaryHeading: "まとめ",
  faqHeading: "よくある質問",
  ctaHeading: "まずは候補日を1つ登録してみてください",
  ctaBody: "登録もインストールも不要。ボタンを押すだけでイベントページができ、URLを送れば出欠が集まります。",
  cta: "無料でイベントを作成する",
  disclaimer:
    "比較は2026年10月時点で各サービスの公式サイトに公開されている情報と、実際に利用して確認した内容をもとに作成しています。各サービスの仕様は変更されることがあるため、最新の情報は各公式サイトでご確認ください。誤りがあればお問い合わせください。",
  otherComparisons: "他のツールとの比較",
  useCasesHeading: "用途別の使い方",
};

const whenlyCommon = {
  free: "○ すべて無料・人数無制限",
  noLoginOrganizer: "○ 不要(アカウントなしで作成可)",
  noLoginParticipant: "○ 不要(名前は任意)",
  timeSlots: "○ 日付ごとに時間帯の候補を設定",
  options: "○ ○△×のほか最大10個まで自由に変更",
  approval: "○ 承認制あり",
  hideNames: "○ 参加者名の非表示・人数だけ表示",
  calendar: "○ Google・Outlook・iPhoneカレンダーに取り込み",
  print: "○ 出欠表をA4で印刷",
  languages: "○ 12言語(参加者のブラウザ言語で表示)",
  ai: "○ 文章から候補日を自動入力",
  openSource: "○ GitHubで公開",
  operator: "NPO法人ぱっぷす(日本)",
};

export const compareJa: readonly ComparePage[] = [
  {
    slug: "chouseisan",
    locale: "ja",
    competitor: "調整さん",
    competitorUrl: "https://chouseisan.com/",
    title: "調整さんとwhenlyの違いを比較｜無料・ログイン不要の日程調整ツール",
    description:
      "調整さんとwhenlyを機能ごとに比較。どちらもログイン不要・無料ですが、時間帯候補、回答選択肢の変更、承認制、参加者名の非表示、カレンダー連携、12言語対応などに違いがあります。",
    heading: "調整さんとwhenlyの違い",
    lead:
      "調整さんは2006年から続く、日本でもっとも使われている出欠表ツールのひとつです。whenlyも同じく「ログイン不要・無料・URLを送るだけ」ですが、時間帯候補や承認制、参加者名の非表示、カレンダー連携など、調整さんにない機能をいくつか持っています。項目ごとの違いをまとめました。",
    rows: [
      { feature: "料金", whenly: whenlyCommon.free, other: "○ 無料" },
      { feature: "主催者のログイン", whenly: whenlyCommon.noLoginOrganizer, other: "○ 不要" },
      { feature: "参加者のログイン", whenly: whenlyCommon.noLoginParticipant, other: "○ 不要" },
      { feature: "候補の時間帯", whenly: whenlyCommon.timeSlots, other: "△ 候補欄に文字で書く(「12/12 19:00〜」など)" },
      { feature: "回答の選択肢", whenly: whenlyCommon.options, other: "× ○△×で固定" },
      { feature: "参加者の承認制", whenly: whenlyCommon.approval, other: "× URLを知っていれば誰でも回答" },
      { feature: "参加者名の非表示", whenly: whenlyCommon.hideNames, other: "× 名前は全員に表示" },
      { feature: "カレンダー連携", whenly: whenlyCommon.calendar, other: "− 公式サイト上では案内なし" },
      { feature: "印刷", whenly: whenlyCommon.print, other: "△ ブラウザの印刷機能で対応" },
      { feature: "対応言語", whenly: whenlyCommon.languages, other: "△ 日本語・英語" },
      { feature: "AIによる候補日入力", whenly: whenlyCommon.ai, other: "× なし" },
      { feature: "用途別の案内ページ", whenly: "○ 44用途", other: "○ 100以上の用途・幹事向け記事" },
      { feature: "ソースコード", whenly: whenlyCommon.openSource, other: "× 非公開" },
      { feature: "運営", whenly: whenlyCommon.operator, other: "ミクステンド株式会社(日本)" },
    ],
    whenlyFor: [
      "「金曜19時」「土曜18時 / 20時」のように、同じ日の中で時間帯を分けて聞きたい",
      "回答を「参加 / 二次会のみ / 不参加」のような自分たちの言葉にしたい",
      "参加者名を他の人に見せたくない、または主催者が参加者を承認したい",
      "確定した日程を参加者がそのままカレンダーに入れられるようにしたい",
      "海外のメンバーや日本語以外の参加者がいる",
    ],
    otherFor: [
      "参加者全員が調整さんの画面に慣れていて、操作説明を省きたい",
      "幹事向けの記事(席順・挨拶・店選びなど)も同じサイトで読みたい",
      "長年の実績があるサービスを使いたい",
    ],
    summary:
      "「URLを送って○△×で答えてもらう」という基本はどちらも同じです。候補を日付だけで済ませられる飲み会なら調整さんで十分ですが、時間帯を分けて聞きたい、回答の選択肢を変えたい、参加者名を伏せたい、承認制にしたい、カレンダーに入れたい、といった場面ではwhenlyの方が手間が少なくなります。どちらも無料なので、一度試して使いやすい方を選んでください。",
    faqs: [
      {
        q: "調整さんで作った出欠表をwhenlyに移せますか？",
        a: "自動で取り込む機能はありません。候補日を登録し直してURLを配り直す形になります。候補日の登録は文章からAIで自動入力できるので、数分で済みます。",
      },
      {
        q: "whenlyにも広告はありますか？",
        a: "一部のページに控えめな広告枠があります。出欠表の回答画面の操作を妨げる位置には置いていません。",
      },
      {
        q: "whenlyは誰が運営していますか？",
        a: "NPO法人ぱっぷすが開発・運営しています。ボランティアの日程調整のために作ったツールを一般公開したもので、ソースコードはGitHubで公開しています。",
      },
    ],
  },
  {
    slug: "densuke",
    locale: "ja",
    competitor: "伝助",
    competitorUrl: "https://densuke.biz/",
    title: "伝助とwhenlyの違いを比較｜無料・登録不要のスケジュール調整",
    description:
      "伝助とwhenlyを機能ごとに比較。どちらも登録不要・無料で○△×で答える形式ですが、時間帯候補、回答選択肢の変更、承認制、参加者名の非表示、スマホでの見やすさ、多言語対応に違いがあります。",
    heading: "伝助とwhenlyの違い",
    lead:
      "伝助は「みんなの予定が合う日が一目でわかる」シンプルなスケジュール調整サービスで、パスワードによる閲覧制限や更新通知メールが特徴です。whenlyも登録不要・無料の○△×形式ですが、時間帯候補や回答選択肢の変更、承認制、参加者名の非表示、12言語対応などの点で異なります。",
    rows: [
      { feature: "料金", whenly: whenlyCommon.free, other: "○ 無料" },
      { feature: "主催者の登録", whenly: whenlyCommon.noLoginOrganizer, other: "○ 不要" },
      { feature: "参加者の登録", whenly: whenlyCommon.noLoginParticipant, other: "○ 不要" },
      { feature: "候補の時間帯", whenly: whenlyCommon.timeSlots, other: "△ 候補欄に文字で書く" },
      { feature: "回答の選択肢", whenly: whenlyCommon.options, other: "× ○△×で固定(コメント欄あり)" },
      { feature: "閲覧・回答の制限", whenly: whenlyCommon.approval, other: "○ パスワードで閲覧制限" },
      { feature: "参加者名の非表示", whenly: whenlyCommon.hideNames, other: "× 名前は全員に表示" },
      { feature: "更新の通知", whenly: "× メールは使わない設計(URLを開いて確認)", other: "○ 更新通知メール" },
      { feature: "カレンダー連携", whenly: whenlyCommon.calendar, other: "− 公式サイト上では案内なし" },
      { feature: "印刷", whenly: whenlyCommon.print, other: "△ ブラウザの印刷機能で対応" },
      { feature: "対応言語", whenly: whenlyCommon.languages, other: "× 日本語のみ" },
      { feature: "AIによる候補日入力", whenly: whenlyCommon.ai, other: "× なし" },
      { feature: "ソースコード", whenly: whenlyCommon.openSource, other: "× 非公開" },
    ],
    whenlyFor: [
      "スマホから回答する参加者が多く、画面の見やすさを重視したい",
      "日付の中で時間帯を分けて聞きたい、回答の選択肢を変えたい",
      "参加者名を伏せたい、主催者が参加者を承認したい",
      "確定した日程をカレンダーに取り込みたい",
      "日本語以外の参加者がいる",
    ],
    otherFor: [
      "回答や更新があるたびにメールで通知を受け取りたい",
      "パスワードで出欠表を保護したい",
      "長く使い慣れた画面をそのまま使いたい",
    ],
    summary:
      "伝助は通知メールとパスワード保護を重視した設計で、whenlyは「メールアドレスを集めない」「スマホで見やすい」「候補や選択肢を細かく設定できる」設計です。参加者の個人情報を集めずに済ませたい場面や、時間帯まで聞きたい場面ではwhenlyが向いています。",
    faqs: [
      {
        q: "whenlyには伝助のようなパスワード保護はありますか？",
        a: "パスワードの代わりに承認制があります。承認制にすると、URLを知っていても主催者が承認した人しか参加者として表示されません。",
      },
      {
        q: "回答があったときにメールで知らせてもらえますか？",
        a: "whenlyは参加者・主催者ともにメールアドレスを登録しない設計のため、通知メールはありません。主催者はURLを開けば最新の回答をいつでも確認できます。",
      },
    ],
  },
  {
    slug: "line-schedule",
    locale: "ja",
    competitor: "LINEスケジュール",
    competitorUrl: "https://schedule.line.me/",
    title: "LINEスケジュールとwhenlyの違いを比較｜LINE以外の人とも日程調整",
    description:
      "LINEスケジュールとwhenlyを比較。LINEスケジュールはLINEの友だち同士で手軽ですが、LINEを使っていない人は回答できません。whenlyはURLだけでメール・Slack・SMSなど、どこからでも回答できます。",
    heading: "LINEスケジュールとwhenlyの違い",
    lead:
      "LINEスケジュールはLINEアプリの中で候補日を作り、トークで共有できる手軽さが魅力です。一方で、回答にはLINEアカウントが必要で、LINEを使っていない人やグループに入っていない人は答えられません。whenlyはURLだけで動くので、LINEはもちろん、メール・Slack・SMS・社内チャットなど、どの連絡手段でも同じ出欠表に集められます。",
    rows: [
      { feature: "料金", whenly: whenlyCommon.free, other: "○ 無料" },
      { feature: "必要なアカウント", whenly: "○ 不要(主催者・参加者とも)", other: "× LINEアカウントが必要" },
      { feature: "LINEを使っていない人の回答", whenly: "○ URLを開けば誰でも回答", other: "× できない" },
      { feature: "共有できる手段", whenly: "○ LINE・メール・Slack・SMS・QRコードなど何でも", other: "△ LINEのトーク・グループ" },
      { feature: "候補の時間帯", whenly: whenlyCommon.timeSlots, other: "△ 日付単位(時間は備考に書く)" },
      { feature: "回答の選択肢", whenly: whenlyCommon.options, other: "× ○△×で固定" },
      { feature: "参加者の承認制", whenly: whenlyCommon.approval, other: "× なし(トークの参加者が回答)" },
      { feature: "参加者名の非表示", whenly: whenlyCommon.hideNames, other: "× LINEの表示名が見える" },
      { feature: "PCからの利用", whenly: "○ ブラウザがあればPC・スマホどちらでも", other: "△ スマホのLINEアプリが中心" },
      { feature: "カレンダー連携", whenly: whenlyCommon.calendar, other: "△ LINE内の機能に依存" },
      { feature: "印刷", whenly: whenlyCommon.print, other: "× なし" },
      { feature: "対応言語", whenly: whenlyCommon.languages, other: "△ LINEアプリの表示言語" },
      { feature: "AIによる候補日入力", whenly: whenlyCommon.ai, other: "× なし" },
    ],
    whenlyFor: [
      "LINEを使っていない人、LINEグループに入っていない人がいる",
      "職場や取引先など、LINEでつながりたくない相手と調整したい",
      "PCから出欠表を管理したい、A4で印刷して配りたい",
      "時間帯の候補や回答の選択肢を細かく設定したい",
      "参加者名を伏せたい、承認制にしたい",
    ],
    otherFor: [
      "参加者全員が同じLINEグループにいて、LINEの中だけで完結させたい",
      "トークの流れの中で手早く日付だけ決めたい",
    ],
    summary:
      "全員が同じLINEグループにいる気心の知れた集まりならLINEスケジュールが最短です。LINEを使わない人が1人でもいる、職場や地域など連絡手段が混在している、PCで管理したい、といった場面ではwhenlyが向いています。whenlyの共有URLはLINEのトークに貼ることもできるので、LINEの人にはLINEで、それ以外の人にはメールで、と使い分けられます。",
    faqs: [
      {
        q: "whenlyの出欠表をLINEグループに貼れますか？",
        a: "はい。共有URLをトークに貼るだけで、参加者はLINEのブラウザでそのまま回答できます。LINEアカウントのない人には、同じURLをメールやSMSで送れます。",
      },
      {
        q: "参加者の名前はLINEの表示名になりますか？",
        a: "いいえ。参加者が自分で入力した名前(任意)が表示されます。主催者が参加者名を非表示にすれば、人数だけが表示されます。",
      },
    ],
  },
];
