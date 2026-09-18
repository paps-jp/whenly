import type { Messages } from "./ja";

export const zh: Messages = {
  meta: {
    siteTitle: "whenly | 免登录、免费的日程协调与出席统计工具",
    siteDescription:
      "聚餐、同学会、婚礼二次会、迎新会、欢送会、社团、会议的日期协调与出席确认，无需注册也无需登录。主办者一键即可创建活动，参与者打开链接选择○△×即可作答。除日期外还能设置时段候选项，并支持日历同步与打印，所有功能完全免费。",
    keywords: [
      "日程协调",
      "出席统计",
      "出席确认",
      "日程安排工具",
      "免登录",
      "聚餐 组织者",
      "同学会",
      "婚礼二次会",
      "迎新会",
      "欢送会",
      "社团活动",
      "会议时间协调",
    ],
  },
  common: {
    login: "登录",
    signup: "注册",
    logout: "退出登录",
    register: "注册",
    save: "保存",
    saving: "保存中...",
    saved: "已保存",
    delete: "删除",
    copy: "复制",
    copied: "已复制 ✓",
    processing: "处理中...",
    print: "打印",
    guest: "访客",
    unnamed: "(未命名)",
    nobodyYet: "暂无",
    backToTop: "← 返回首页",
    backToLogin: "← 返回登录",
    backToDashboard: "← 返回控制面板",
    backToEvents: "← 返回活动列表",
    backToMyPage: "← 返回我的页面",
    forgotPassword: "忘记密码？",
    noAccount: "还没有账号？",
    haveAccount: "已有账号？",
    tryNow: "想马上试用？",
    startWithoutAccount: "无需账号直接开始",
    name: "姓名",
    nameOptional: "姓名(选填)",
    email: "邮箱地址",
    password: "密码",
    passwordHint: "至少8个字符",
    copyright: "© PAPS",
    language: "语言",
    listSeparator: "、",
  },
  home: {
    tagline: "主办者设定候选日期时间，参与者以○×作答的日程协调工具",
    description:
      "适用于聚餐、同学会、婚礼二次会、迎新会、欢送会、社团、会议等一切需要协调日程和统计出席的场合。参与者无需登录或注册账号，打开链接即可作答。",
    organizerTitle: "我是主办者",
    organizerDescription: "创建活动并添加候选日期时间",
    participantTitle: "我是参与者",
    participantDescription: "通过收到的链接报名并回答日程",
  },
  start: {
    metaTitle: "无需账号直接开始",
    metaDescription:
      "只需点击按钮，无需注册账号即可立即创建日程协调活动。",
    title: "无需账号直接开始",
    description: "只需点击按钮，即可立即创建活动。",
    startButton: "开始创建活动",
    note: "* 活动通过保存在此浏览器中的会话进行管理，无法从其他设备操作，之后也无法补充注册邮箱。",
    makeAccountPrompt: "想用邮箱创建账号？",
  },
  auth: {
    organizerLogin: "主办者登录",
    organizerSignup: "主办者注册",
    participantLogin: "参与者登录",
    participantSignup: "参与者注册",
    forgotMetaTitle: "重置密码",
    forgotOrganizerTitle: "重置密码(主办者)",
    forgotParticipantTitle: "重置密码(参与者)",
    forgotDescription: "请输入已注册的邮箱地址。",
    forgotSent:
      "如果您输入的邮箱地址已注册，我们已向其发送了密码重置链接。请查收邮件。",
    sendResetMail: "发送重置邮件",
    resetTitle: "重置密码",
    resetInvalid:
      "此链接无效或已过期。请重新申请重置密码。",
    toLoginPage: "前往登录页",
    newPassword: "新密码",
    newPasswordConfirm: "新密码(确认)",
    passwordMismatch: "两次输入的密码不一致",
    resetSubmit: "重置密码",
  },
  dashboard: {
    title: "控制面板",
    greeting: "{name}",
    guestWarning:
      "⚠️ 您正在未注册账号的情况下使用。活动仅能通过此浏览器的会话进行管理。一旦退出登录或清除 Cookie，将永远无法再管理这些活动，请务必注意。",
    upgradeLink: "创建账号并保留活动 →",
    newEvent: "+ 创建新活动",
    memberApprovals: "参与者审核",
    pendingBadge: "{n}项",
    eventsHeading: "活动列表",
    noEvents: "还没有活动。请从“创建新活动”开始。",
    dateCount: "{n}个日期",
    approvalRequired: "需审核",
    anyoneCanAnswer: "任何人可作答",
    finishedHistory: "查看已结束的活动({n}个)",
    deleteEventConfirm:
      "确定要删除“{title}”吗？此操作无法撤销，日期和回答也会全部删除。",
    logoutGuestConfirm:
      "您正在未注册账号的情况下使用。退出登录后将永远无法再管理这些活动，确定继续吗？",
  },
  newEvent: {
    title: "创建新活动",
    titleLabel: "标题",
    titlePlaceholder: "例：团队聚餐",
    commentLabel: "备注(选填)",
    commentPlaceholder: "集合地点、需携带物品等",
    aiChecking: "正在确认 AI 日程自动填写功能是否可用…",
    aiLabel: "用 AI 自动填写日程(选填)",
    aiHelp:
      "像“下周五和周六，周五分上午和下午”这样自由描述，即可自动填入下方的日期栏。填写后可以确认和修改。“每天”“周末”等没有截止时间的重复安排，会展开为从今天起4周内的日期。",
    aiPlaceholder: "例：下周五和周六举办。周五分上午和下午两个时段。",
    aiGenerating: "生成中...",
    aiButton: "用 AI 自动填写",
    aiUnavailable:
      "由于访问量过大，AI 日程自动填写功能暂时无法使用。请稍后再试。",
    datesLabel: "日期",
    datesHelp:
      "可以添加多个日期。为某个日期添加时段等候选项(例：上午 / 下午)后，参与者将对该日期的每个候选项分别以○×作答。未添加候选项的日期，则只需对该日期作一次○×回答。",
    removeDate: "删除日期",
    removeDateAria: "删除此日期",
    dayCommentPlaceholder: "此日期的备注(选填)",
    slotPlaceholder: "例：上午 / 下午 / 19点起",
    removeSlotAria: "删除此候选项",
    addSlot: "+ 为此日期添加时段候选项(选填)",
    exampleHint: "例：9月4日保持原样 / 9月5日添加“上午”“下午”作为候选项",
    addDate: "+ 添加日期",
    duplicate: "+ 复制",
    requireLoginLabel: "参与需登录并经审核",
    requireLoginHelp: "关闭后，任何人无需登录即可作答(姓名选填)。",
    create: "创建",
  },
  eventDetail: {
    urlEditWarning:
      "⚠️ 任何知道此页面链接的人都可以编辑此活动。请勿与他人分享。",
    editUrlLabel: "编辑链接(本页)",
    editUrlHint: "收藏此链接后，无需登录也可以通过它再次编辑。",
    lockedNotice:
      "🔒 此活动仅限已登录的您本人编辑(仅分享链接不会被他人编辑)。",
    shareUrlLabel: "分享给参与者的链接",
  },
  settings: {
    deleteDayConfirm: "确定要删除 {date} 吗？该日期的回答也会全部删除。",
    upcomingTab: "即将到来 ({n})",
    historyTab: "过往记录 ({n})",
    noUpcomingDates: "没有即将到来的日期。",
    noPastDates: "没有过往日期。",
    prevMonth: "← 上个月",
    nextMonth: "下个月 →",
    commentPlaceholder: "备注(选填)",
    optionsTitle: "回答选项",
    optionsHelp:
      "默认为○/△/×三个选项，可在1~{max}个之间自由增减和修改(例：OK/NG/待定)。",
    optionRemoveConfirm:
      "“{label}”已被 {count} 条回答使用。删除后这些回答也会一并删除。是否继续？",
    newOptionPlaceholder: "例：待定",
    addOption: "+ 添加选项",
    requireLogin: "参与需登录并经审核",
    showNames: "允许参与者互相查看姓名和回答",
    allowMultiple: "允许每个日期/时段选择多个选项",
    allowUrlEdit: "允许知道编辑链接的人无需登录即可访问",
    allowUrlEditConfirm:
      "关闭后，仅凭编辑链接将无法访问，只能通过您的登录会话进行编辑。是否继续？",
    participationHeading: "各日期的参与情况",
    addDatesTitle: "添加日期(选填)",
    addDatesHelp:
      "可通过“+ 添加日期”或“+ 复制”添加日期。连续点击“复制”时，会按最近两个日期的间隔继续添加。",
    saved: "已保存 ✓",
  },
  members: {
    title: "参与者审核",
    pendingHeading: "待审核",
    noPending: "没有待审核的参与者。",
    approve: "通过",
    reject: "拒绝",
    approvedHeading: "已通过的参与者 ({n}人)",
    noneYet: "暂无。",
    rejectedHeading: "已拒绝",
  },
  upgrade: {
    metaTitle: "创建账号",
    title: "创建账号",
    description:
      "注册邮箱地址和密码后，当前的活动将原样保留，并且可以从其他设备登录。",
    submit: "创建账号",
  },
  share: {
    pendingApproval: "正在等待主办者审核。审核通过后即可作答。",
    rejected: "您的参与未获通过。",
    namesShown: "* 会显示其他参与者的姓名和回答。",
    namesHidden: "* 仅显示参与人数统计，不会显示其他参与者的姓名和回答内容。",
    multipleHint: " 可以选择多个选项。再次点击可取消选择。",
    noUpcomingDates: "没有即将到来的日期。",
    pastHistory: "查看已结束的日期({n}个)",
    answer: "作答",
    saveAnswers: "保存",
    unanswered: "未回答",
    yourAnswer: "您的回答：{answer}",
    conflictPrompt: "已有人以“{name}”的名字作答。是您本人吗？",
    yesMe: "是，是我本人",
    notMe: "不是，是别人",
    loginRequired: "需要登录或注册后才能作答。",
    namePlaceholder: "例：王小明",
    createNewPrompt: "需要新建账号？",
    countBadge: "{label} {n}人",
  },
  calendar: {
    title: "日历同步",
    description:
      "您回答的日程可以自动同步到日历(同步可能需要几分钟到几小时)。",
    google: "添加到 Google 日历",
    outlookCom: "添加到 Outlook.com",
    office365: "添加到 Outlook(工作或学校)",
    apple: "添加到 iPhone 日历",
    copyUrl: "直接复制链接",
  },
  memberPage: {
    title: "我的页面",
    pendingNotice: "正在等待 {n} 位主办者的审核",
    noOrganizers: "尚未加入任何主办者。请通过收到的活动链接报名参加。",
    organizerEvents: "{name} 的活动",
    organizerEventsUnnamed: "主办者的活动",
    noEvents: "还没有活动。",
    answered: "已回答 {answered}/{total}",
  },
  landing: {
    heroTitle: "免登录、即开即用的免费日程协调与出席统计工具",
    heroLead:
      "主办者设定候选日期时间，参与者以○△×作答，就这么简单。聚餐、同学会、婚礼二次会、迎新会、欢送会、社团、会议等，一切需要协调日程和确认出席的场合都能使用。",
    heroCta: "免费创建活动",
    heroNote: "无需注册，无需安装。约30秒即可分享候选日期。",
    howHeading: "只需3步",
    step1Title: "添加候选日期",
    step1Body:
      "只需输入活动名称和候选日期。需要的话还可以添加“上午 / 下午”这样的时段候选项，也可以直接写“下周五和周六”，让 AI 自动填写。",
    step2Title: "分享链接",
    step2Body:
      "把生成的参与者链接通过 LINE、邮件、Slack 等发送出去即可。参与者无需注册账号就能打开。",
    step3Title: "以○△×作答，自动统计",
    step3Body:
      "参与者对每个候选项选择○△×后，各日期的参与情况会当场统计出来。回答之后可以随时修改。",
    featuresHeading: "为什么选择 whenly",
    feature1Title: "无需登录或注册",
    feature1Body:
      "主办者和参与者都无需账号即可使用，也不必收集邮箱地址。",
    feature2Title: "不只日期，时段也能作为候选项",
    feature2Body:
      "可以像“9月5日 上午 / 下午”这样在一天内设置多个候选项，并按候选项分别收集回答。",
    feature3Title: "自由修改回答选项",
    feature3Body:
      "不限于○△×，还可以设置为“参加 / 不参加 / 待定”“OK / NG”等，最多可自由设置10个选项。",
    feature4Title: "审核制与参与者姓名显示切换",
    feature4Body:
      "可选择任何人都能作答的公开模式，或只有经主办者审核通过的人才能作答的审核制。还可以隐藏参与者姓名，只显示人数。",
    feature5Title: "支持日历同步与打印",
    feature5Body:
      "回答过的日程可自动同步到 Google Calendar、Outlook、iPhone 日历，出席表也可直接按 A4 打印。",
    feature6Title: "AI 自动填写日程",
    feature6Body:
      "根据“每周一19点起”这样的自由描述自动生成候选日期。界面支持12种语言。",
    useCasesHeading: "常见使用场景",
    useCase1: "聚餐、联谊的日程协调",
    useCase2: "同学会、校友会的出席确认",
    useCase3: "婚礼二次会、派对的出席管理",
    useCase4: "迎新会、欢送会的候选日期确定",
    useCase5: "社团、校队、家长会的活动日协调",
    useCase6: "会议、洽谈的日程协调",
    useCase7: "志愿活动、赛事的排班收集",
    useCase8: "兴趣班、课程的参加日期确认",
    securityHeading: "可以放心使用的理由",
    security1Title: "无需输入个人信息",
    security1Body: "参与者只需填写姓名(选填)，无需邮箱地址或电话号码。",
    security2Title: "限制可编辑的人",
    security2Body:
      "活动的编辑权限可限定为仅知道编辑链接的人，或仅已登录的主办者。",
    security3Title: "加密通信",
    security3Body: "所有通信均通过 HTTPS 加密。",
    faqHeading: "常见问题",
    faq1Q: "真的免费吗？",
    faq1A:
      "是的。创建活动、作答、统计、日历同步等所有功能均可免费使用。",
    faq2Q: "参与者需要注册账号吗？",
    faq2A:
      "不需要。打开收到的链接，填写姓名(选填)即可作答。只有在主办者开启审核制时，参与者才需要登录。",
    faq3Q: "主办者也可以不登录使用吗？",
    faq3A:
      "可以。点击“无需账号直接开始”即可立即创建活动。之后也可以注册邮箱地址和密码，以便从其他设备进行管理。",
    faq4Q: "候选项只能是日期吗？可以指定时段吗？",
    faq4A:
      "可以为每个日期添加“上午”“下午”“19点起”等时段候选项。添加了时段的日期，参与者会对每个候选项分别作答。",
    faq5Q: "回答之后可以修改吗？",
    faq5A: "可以。重新打开同一链接，随时都能修改回答。",
    faq6Q: "回答过的日程可以加入日历吗？",
    faq6A:
      "在 Google Calendar、Outlook、iPhone 日历中订阅专用链接后，回答过的日程会自动同步。",
    faq7Q: "与其他日程协调工具有什么不同？",
    faq7A:
      "每个日期都可以设置时段候选项、回答选项可自由修改，而且审核制、隐藏参与者姓名、日历同步、AI 填写、12种语言支持全部免费，这是 whenly 的特点。",
    ctaHeading: "现在就分享候选日期吧",
    ctaBody: "无需注册，无需安装。点击按钮即可生成活动页面。",
    navHome: "首页",
  },
  useCasePage: {
    breadcrumbUseCases: "使用场景",
    painsHeading: "你是否也有这些烦恼？",
    solutionsHeading: "whenly 这样帮你解决",
    tipsHeading: "使用小技巧",
    relatedHeading: "其他使用场景",
  },
  useCases: {
    nomikai: {
      title: "聚餐、联谊日程协调免费工具｜免登录",
      description:
        "为聚餐、联谊的组织者打造。添加候选日期、发送链接即可，参与者无需登录就能以○△×作答。自动统计，支持时段候选项和审核制，完全免费的日程协调工具。",
      heading: "聚餐、联谊的日程协调",
      lead:
        "组织者最头疼的就是“挨个问大家什么时候有空”。用 whenly，添加候选日期、发送链接即可，参与者无需账号就能选择○△×，参与情况当场统计。",
      pain1: "在微信群里问日期，回复很快被刷掉，搞不清谁已经回复了",
      pain2: "“19点以后才能到”“只参加第二场”这类附带条件的回复难以整理",
      pain3: "每次添加或修改候选日期，都得重新问一遍所有人",
      solution1Title: "候选日期和时段一起列出，一次问清",
      solution1Body:
        "可以像“周五19点起”“周六18点起 / 20点起”这样为每个日期添加时段候选项，附带条件的回复也能作为候选项收集。",
      solution2Title: "参与者打开链接、填个名字就行",
      solution2Body:
        "无需注册账号，姓名也是选填，大家可以轻松作答。回答之后还可以修改。",
      solution3Title: "各日期的参与人数自动统计",
      solution3Body:
        "○△×的人数和姓名按候选项显示，订餐厅的人数马上就能确定。主办者也可以随时添加日期。",
      tip1: "候选项控制在3~5个，回复率会更高。选项太多容易让人犹豫拖延。",
      tip2: "设置为显示参与者姓名，大家看到“那个人也来”，会更愿意参加。",
      faq1Q: "参与者只用微信也可以吗？",
      faq1A:
        "可以。把分享链接贴到群里，参与者用浏览器打开即可作答，无需安装 App。",
      faq2Q: "订好餐厅之后人数变了怎么办？",
      faq2A:
        "参与者随时可以修改回答，主办者的页面会立即更新。截止前提醒一次会更稳妥。",
    },
    dousoukai: {
      title: "同学会、校友会出席确认免费工具｜免登录",
      description:
        "为同学会、校友会的组织者打造。即使联系方式各不相同，只需分享一个链接就能收集出席情况。参与者无需登录，支持隐藏姓名只显示人数和审核制，完全免费。",
      heading: "同学会、校友会的出席确认",
      lead:
        "让多年未联系的老同学去注册 App，总有些难为情。用 whenly，对方打开收到的链接就能回复是否出席，组织者也能一目了然地看到谁已经回复。",
      pain1: "邮件、微信、社交平台，每个人的联系方式都不一样，汇总回复很费劲",
      pain2: "把“参加”“待定”“不参加”誊到名单上很耗时间",
      pain3: "人一多，就搞不清谁还没回复",
      solution1Title: "不管什么联系方式，一个链接全部收齐",
      solution1Body:
        "无论用哪种方式联系，发同一个链接就行。参与者无需注册 App，用浏览器即可作答。",
      solution2Title: "把选项改成“参加 / 待定 / 不参加”",
      solution2Body:
        "回答选项可以自由修改，换成适合同学会的说法，让大家一看就懂。",
      solution3Title: "姓名和回答一览无余",
      solution3Body:
        "主办者页面按候选项列出回复者的姓名，整理名单、确认未回复者一眼就能搞定。",
      tip1: "把正餐和续摊分成不同的时段候选项，就能知道谁只参加续摊。",
      tip2: "参与者之间是否能看到彼此姓名可以在设置中切换。在意隐私的话，改为只显示人数即可。",
      faq1Q: "会不会变成在收集参与者的个人信息？",
      faq1A:
        "参与者只需填写姓名(选填)。不需要邮箱地址或电话号码，主办者也看不到这些信息。",
      faq2Q: "能防止有人冒名作答吗？",
      faq2A:
        "开启审核制后，只有经主办者审核通过的参与者才能作答。即使是公开模式，用已回复过的姓名作答时也会弹出本人确认页面。",
    },
    nijikai: {
      title: "婚礼二次会、派对出席管理免费工具",
      description:
        "适用于婚礼二次会、纪念派对的出席管理。从候选日期协调到当天人数统计，参与者无需登录，组织者可免费使用可打印的出席表。",
      heading: "婚礼二次会、派对的出席管理",
      lead:
        "作为新人好友接下的组织工作，从协调日期和管理出席开始。用 whenly，商量候选日期和正式确认出席都用同一个链接搞定。",
      pain1: "新郎方和新娘方联系渠道各自独立，统计变成了两份名单",
      pain2: "很难在场地要求的最终人数截止日前收齐所有人的回复",
      pain3: "当天签到用的出席名单还要重新整理一遍",
      solution1Title: "双方宾客在一个活动里统一管理",
      solution1Body:
        "把链接分别分享给新郎方和新娘方，所有回答都汇总到同一个页面。",
      solution2Title: "截止前就知道谁还没回复",
      solution2Body:
        "每个候选项都会显示回复者的姓名，只需提醒还没回复的人即可。",
      solution3Title: "出席表直接打印",
      solution3Body:
        "点击打印按钮即可输出适合 A4 纸的出席表，直接用作签到名单。",
      tip1: "会费情况可以把选项改为“参加(已付) / 参加(未付) / 不参加”来管理。",
      tip2: "回答可以自动同步到日历，参与者更不容易忘记日程。",
      faq1Q: "发出请柬之后的出席确认也能用吗？",
      faq1A:
        "可以。只登记一个举办日期，把选项设为“出席 / 缺席”，就能代替回执卡使用。",
      faq2Q: "能收集参与者的联系方式吗？",
      faq2A:
        "whenly 没有收集联系方式的功能。因为设计上不保存个人信息，可以放心地把链接发给宾客。",
    },
    kangeikai: {
      title: "迎新会、欢送会候选日期确定免费工具｜免登录",
      description:
        "为公司迎新会、欢送会的组织者打造。优先照顾主角的时间，同时收集所有人的空闲情况，免费的日程协调工具。参与者无需登录，也无需邮箱地址。",
      heading: "迎新会、欢送会的日程协调",
      lead:
        "既要配合主角的时间，又想问一问部门里每个人的安排。用 whenly，列出候选日期、发个链接，谁哪天能来一目了然。",
      pain1: "给全部门发邮件询问，回复被淹没，统计很费时间",
      pain2: "主角方便的日子和多数人方便的日子对不上",
      pain3: "公司外的参与者用不了内部聊天工具",
      solution1Title: "各候选项的参与人数一目了然",
      solution1Body: "○△×的人数按候选项统计，马上就能选出人最齐的那天。",
      solution2Title: "先问主角，再定候选项",
      solution2Body:
        "先问清主角的时间再登记候选项，对其他人只需问一次。日期之后也可以追加。",
      solution3Title: "公司外的人也只需一个链接",
      solution3Body:
        "无需注册账号，用不了内部工具的人也只要一封邮件就能作答。",
      tip1: "在日期的备注栏写上“○○最后一天上班”之类的补充说明，参与者更容易判断。",
      tip2: "开启审核制后，即使链接被转发，也只有主办者审核通过的人才能作答。",
      faq1Q: "不注册公司邮箱就不能用吗？",
      faq1A:
        "主办者和参与者都无需注册邮箱地址。主办者点击“无需账号直接开始”即可立即创建。",
      faq2Q: "不想让其他参与者看到回答内容怎么办？",
      faq2A:
        "设置为隐藏参与者姓名后，其他参与者只能看到人数。主办者可以看到全部内容。",
    },
    circle: {
      title: "社团、校队、家长会活动日协调免费工具",
      description:
        "适用于社团、校队、家长会、少儿活动的活动日协调。每周训练、值班等重复性日程可一次问清，免费工具。参与者无需登录，支持按时段作答。",
      heading: "社团、校队、家长会的活动日协调",
      lead:
        "每周的训练和值班安排，每次询问都要重复同样的麻烦。用 whenly，一次登记4周的候选项，成员一次就能全部回答。",
      pain1: "每周都要重新问一遍时间安排，很麻烦",
      pain2: "上午和下午能来的成员不一样",
      pain3: "成员一有变动就得重新收集联系方式",
      solution1Title: "重复的候选项批量登记",
      solution1Body:
        "用“复制”按钮可以按相同间隔连续添加日期。也可以写“每周六10点起”，让 AI 自动填写。",
      solution2Title: "按时段收集回答",
      solution2Body:
        "在一个日期下添加“上午 / 下午”这样的候选项，就能分别知道各时段的参与者。",
      solution3Title: "只有审核通过的人才能作答",
      solution3Body:
        "开启审核制后，非成员即使打开链接也无法作答。成员变动也可以通过审核或拒绝来管理。",
      tip1: "过去的日期会自动移入历史记录，同一个活动可以一直用下去。",
      tip2: "参与者可以通过日历同步，把回答过的日程加到自己的日历里。",
      faq1Q: "最多能登记几周？",
      faq1A:
        "日期数量没有上限。使用 AI 自动填写时，没有结束时间的重复日程会从今天起展开4周。",
      faq2Q: "家长等不太会用手机的人也能作答吗？",
      faq2A:
        "打开链接，点选○△×，保存即可。无需安装 App 或注册账号。",
    },
    kaigi: {
      title: "会议、洽谈日程协调免费工具｜免登录",
      description:
        "适用于公司内部会议和与客户洽谈的日程协调。只需发送候选时间，对方无需登录即可作答，还能同步到 Google Calendar、Outlook，完全免费。",
      heading: "会议、洽谈的日程协调",
      lead:
        "与其用邮件来回确认候选时间，不如把候选时间做成链接发过去。对方无需注册，选一下方便的时间即可，结果还能同步到日历。",
      pain1: "把候选时间写进邮件，再逐条核对回复，效率太低",
      pain2: "参与者越多，越难找到所有人都方便的时间",
      pain3: "定好的时间，大家常常忘记加到自己的日历里",
      solution1Title: "把日期和时间段作为候选项",
      solution1Body:
        "可以像“9月10日 10:00起 / 14:00起”这样把时间段设为候选项，很适合确定会议时间。",
      solution2Title: "所有人的○△×并排对比",
      solution2Body:
        "各候选项的回答并排显示，全员都是○的时间段、算上△就能凑齐的时间段，一眼就能看出。",
      solution3Title: "回答过的日程自动同步到日历",
      solution3Body:
        "参与者只需在 Google Calendar、Outlook、iPhone 日历中登记订阅链接，回答过的日程就会自动同步。",
      tip1: "把选项改为“可参加 / 可协调 / 不可”，就能用更商务的措辞收集回答。",
      tip2: "设置为只有知道编辑链接的人才能编辑，就可以请共同组织者一起管理。",
      faq1Q: "和公司外的人也能用吗？",
      faq1A: "可以。对方打开链接作答即可，无需注册账号。",
      faq2Q: "能预订会议室或发送邀请邮件吗？",
      faq2A:
        "whenly 专注于日程协调和出席统计。确定时间后的邀请，请通过您平时使用的日历发送。",
    },
    volunteer: {
      title: "志愿活动、赛事排班收集免费工具",
      description:
        "适用于志愿活动、赛事运营的排班和值班收集。按日期设置时段班次，无需登录即可收集谁能上哪个班次，免费工具。",
      heading: "志愿活动、赛事的排班收集",
      lead:
        "跨多天、多时段的排班，用表格管理往往更新不过来。用 whenly，大家在日期×时段候选项上填○△×，各班次的人数一目了然。",
      pain1: "日期和时段的组合太多，统计表难以维护",
      pain2: "参与者更替频繁，管理联系方式成了负担",
      pain3: "无法实时掌握每个班次有几个人",
      solution1Title: "按日期设置时段班次",
      solution1Body:
        "在每个日期下添加“上午 / 下午 / 晚上”这样的班次，就能按班次收集回答。",
      solution2Title: "各班次的人数和姓名即时统计",
      solution2Body:
        "主办者页面按班次列出○△×的人数和姓名，缺人的班次一眼就能看出。",
      solution3Title: "不保存参与者的联系方式",
      solution3Body: "参与者只需填写姓名即可作答，没有管理个人信息的负担。",
      tip1: "在活动备注里写明“○ = 可以 / △ = 可协调 / × = 不可”的规则，回答会更统一。",
      tip2: "开启审核制后，只有已登记的志愿者才能作答。",
      faq1Q: "参与者能把自己的班次加到日历里吗？",
      faq1A: "可以。登记日历同步链接后，标记为○的班次会以全天日程的形式同步。",
      faq2Q: "最多可以多少人作答？",
      faq2A: "人数没有上限。",
    },
    lesson: {
      title: "兴趣班、课程参加日期确认免费工具｜免登录",
      description:
        "适用于兴趣班、课程、培训学校的参加日期确认。老师登记候选日期，学生或家长无需登录，在参加的日期打○即可。支持日历同步，免费工具。",
      heading: "兴趣班、课程的参加日期确认",
      lead:
        "补课或自由参加制的课程，每次掌握参加者都很费事。用 whenly，把候选日期列出来，学生或家长通过链接选择参加日期即可。",
      pain1: "每次上课前都要联系参加者逐一确认",
      pain2: "家长的回复零零散散地发来，统计很花时间",
      pain3: "学生自己忘了哪天要来上课",
      solution1Title: "一次列出整月的上课日期",
      solution1Body:
        "用“复制”可以连续添加同一星期几的日期。也可以按时段拆分成不同的候选项。",
      solution2Title: "参加者填个名字、打个○就行",
      solution2Body:
        "无需注册账号。家长代替孩子作答时，也可以用孩子的名字。",
      solution3Title: "参加日期自动同步到日历",
      solution3Body:
        "使用日历同步后，回答过的参加日期会显示在 Google Calendar 或 iPhone 日历中。",
      tip1: "设置为隐藏参与者姓名后，看不到其他学生的名字，只显示人数。",
      tip2: "如有人数限制，在日期备注里写上“限6人”，会更方便协调。",
      faq1Q: "参加者没有智能手机也能用吗？",
      faq1A:
        "用电脑浏览器也能作答。也可以用打印的出席表口头确认，再由老师代为录入。",
      faq2Q: "需要付费吗？",
      faq2A: "所有功能均可免费使用。",
    },
  },
  errors: {
    titleRequired: "请输入标题",
    addAtLeastOneDate: "请至少添加一个日期",
    dateRequired: "请输入日期",
    invalidDate: "日期格式不正确",
    eventNotFound: "找不到该活动",
    loginRequired: "需要登录",
    optionsAtLeastOne: "至少需要一个选项",
    optionsMax: "选项最多 {max} 个",
    nameRequired: "请输入姓名",
    invalidEmail: "邮箱地址格式不正确",
    passwordTooShort: "密码至少需要8个字符",
    passwordRequired: "请输入密码",
    emailTaken: "该邮箱地址已被注册",
    invalidCredentials: "邮箱地址或密码不正确",
    identityFailed: "身份验证失败",
    accountNotFound: "找不到该账号",
    alreadyRegistered: "该账号已注册",
    resetLinkInvalid:
      "链接已过期或已被使用。请重新申请重置密码。",
    unknownError: "发生未知错误",
    optionsChanged: "选项已更新，请刷新页面",
    noMultipleAnswers: "此活动不允许多选",
    noPermission: "您没有作答权限",
    aiEmpty: "请输入日程内容",
    aiNoSchedule: "无法识别日程。请描述得更具体一些。",
    aiFailed: "AI 自动填写失败。请稍后再试。",
  },
  mail: {
    resetSubject: "【whenly】密码重置通知",
    resetBody:
      "我们已收到您的密码重置请求。\n\n请在1小时内通过以下链接设置新密码。\n\n{url}\n\n如果您没有发起此请求，请忽略此邮件。",
  },
};
