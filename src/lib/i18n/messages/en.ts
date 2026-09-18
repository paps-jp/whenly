import type { Messages } from "./ja";

export const en: Messages = {
  meta: {
    siteTitle: "whenly | Free group scheduling & RSVP tool, no login required",
    siteDescription:
      "Find the best date for parties, reunions, club meetups and meetings without any sign-up. Organizers create an event with one click, participants open the link and pick ○△×. Supports time slots per date, calendar sync and printing. Free forever.",
    keywords: [
      "scheduling",
      "attendance",
      "RSVP",
      "scheduling app",
      "no login",
      "party organizer",
      "reunion",
      "wedding after-party",
      "welcome party",
      "farewell party",
      "club",
      "meeting scheduler",
    ],
  },
  common: {
    login: "Log in",
    signup: "Sign up",
    logout: "Log out",
    register: "Register",
    save: "Save",
    saving: "Saving...",
    saved: "Saved",
    delete: "Delete",
    copy: "Copy",
    copied: "Copied ✓",
    processing: "Processing...",
    print: "Print",
    guest: "Guest",
    unnamed: "(no name)",
    nobodyYet: "Nobody yet",
    backToTop: "← Back to home",
    backToLogin: "← Back to login",
    backToDashboard: "← Back to dashboard",
    backToEvents: "← Back to events",
    backToMyPage: "← Back to my page",
    forgotPassword: "Forgot your password?",
    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    tryNow: "Want to try it right away?",
    startWithoutAccount: "Start without an account",
    name: "Name",
    nameOptional: "Name (optional)",
    email: "Email address",
    password: "Password",
    passwordHint: "At least 8 characters",
    copyright: "© PAPS",
    language: "Language",
    listSeparator: ", ",
  },
  home: {
    tagline:
      "A scheduling app where the organizer proposes dates and participants answer with a simple yes/no",
    description:
      "For parties, reunions, wedding after-parties, welcome and farewell parties, clubs, meetings, and any other occasion where you need to coordinate dates and track attendance. Participants answer just by opening the link, with no login or account required.",
    organizerTitle: "Organizers",
    organizerDescription: "Create an event and add candidate dates",
    participantTitle: "Participants",
    participantDescription: "Join and answer via the link shared with you",
  },
  start: {
    metaTitle: "Start without an account",
    metaDescription:
      "Create a scheduling event instantly with a single click, no account registration needed.",
    title: "Start without an account",
    description: "Just press the button and you can create an event right away.",
    startButton: "Start creating an event",
    note: "* Your event is managed through the session stored in this browser. You cannot manage it from other devices, and you cannot add an email address later.",
    makeAccountPrompt: "Prefer to create an account with your email?",
  },
  auth: {
    organizerLogin: "Organizer login",
    organizerSignup: "Organizer sign-up",
    participantLogin: "Participant login",
    participantSignup: "Participant sign-up",
    forgotMetaTitle: "Reset password",
    forgotOrganizerTitle: "Reset password (organizer)",
    forgotParticipantTitle: "Reset password (participant)",
    forgotDescription: "Enter the email address you registered with.",
    forgotSent:
      "If the email address you entered is registered, we have sent a password reset link. Please check your inbox.",
    sendResetMail: "Send reset email",
    resetTitle: "Set a new password",
    resetInvalid:
      "This link is invalid or has expired. Please request a password reset again.",
    toLoginPage: "Go to login",
    newPassword: "New password",
    newPasswordConfirm: "New password (confirm)",
    passwordMismatch: "Passwords do not match",
    resetSubmit: "Set new password",
  },
  dashboard: {
    title: "Dashboard",
    greeting: "{name}",
    guestWarning:
      "⚠️ You are using whenly without an account. Your events can only be managed from this browser session. If you log out or clear cookies, you will permanently lose access to these events.",
    upgradeLink: "Create an account to keep your events →",
    newEvent: "+ Create a new event",
    memberApprovals: "Participant approvals",
    pendingBadge: "{n}",
    eventsHeading: "Your events",
    noEvents: "No events yet. Start with \"Create a new event\".",
    dateCount: "{n} date(s)",
    approvalRequired: "Approval required",
    anyoneCanAnswer: "Anyone can answer",
    finishedHistory: "Show finished events ({n})",
    deleteEventConfirm:
      "Delete \"{title}\"? This cannot be undone. All dates and answers will also be deleted.",
    logoutGuestConfirm:
      "You are using whenly without an account. If you log out, you will permanently lose access to these events. Continue?",
  },
  newEvent: {
    title: "Create a new event",
    titleLabel: "Title",
    titlePlaceholder: "e.g. Team outing",
    commentLabel: "Comment (optional)",
    commentPlaceholder: "Meeting point, what to bring, etc.",
    aiChecking: "Checking whether AI schedule entry is available…",
    aiLabel: "Fill in dates with AI (optional)",
    aiHelp:
      "Write freely, e.g. \"next Friday and Saturday, Friday morning and afternoon\", and the dates below will be filled in automatically. You can review and edit them afterwards. Open-ended repeats such as \"every day\" or \"weekends\" are expanded to the next 4 weeks starting today.",
    aiPlaceholder: "e.g. Next Friday and Saturday. Friday has two slots: morning and afternoon.",
    aiGenerating: "Generating...",
    aiButton: "Fill in with AI",
    aiUnavailable:
      "AI schedule entry is currently unavailable due to high demand. Please try again later.",
    datesLabel: "Dates",
    datesHelp:
      "You can add multiple dates. If you add time slots to a date (e.g. morning / afternoon), participants answer for each slot separately. Dates without slots get a single answer.",
    removeDate: "Remove date",
    removeDateAria: "Remove this date",
    dayCommentPlaceholder: "Comment for this date (optional)",
    slotPlaceholder: "e.g. Morning / Afternoon / From 7 pm",
    removeSlotAria: "Remove this slot",
    addSlot: "+ Add time slots to this date (optional)",
    exampleHint: "e.g. Sep 4 as a single date / Sep 5 with \"Morning\" and \"Afternoon\" slots",
    addDate: "+ Add date",
    duplicate: "+ Duplicate",
    requireLoginLabel: "Require login and approval to participate",
    requireLoginHelp:
      "If off, anyone can answer without logging in (entering a name is optional).",
    create: "Create",
  },
  eventDetail: {
    urlEditWarning:
      "⚠️ Anyone who knows the URL of this page can edit this event. Do not share it with others.",
    editUrlLabel: "Edit URL (this page)",
    editUrlHint: "Bookmark it to come back and edit without logging in.",
    lockedNotice:
      "🔒 Only you, while logged in, can edit this event (sharing the URL alone does not allow editing).",
    shareUrlLabel: "Share URL for participants",
  },
  settings: {
    deleteDayConfirm: "Delete {date}? All answers for this date will also be deleted.",
    upcomingTab: "Upcoming ({n})",
    historyTab: "Past ({n})",
    noUpcomingDates: "No upcoming dates.",
    noPastDates: "No past dates.",
    prevMonth: "← Previous month",
    nextMonth: "Next month →",
    commentPlaceholder: "Comment (optional)",
    optionsTitle: "Answer options",
    optionsHelp:
      "The defaults are ○/△/×, but you can freely change them and use between 1 and {max} options (e.g. OK / No / Maybe).",
    optionRemoveConfirm:
      "\"{label}\" is already used by {count} answer(s). Deleting it will also delete those answers. Continue?",
    newOptionPlaceholder: "e.g. Maybe",
    addOption: "+ Add option",
    requireLogin: "Require login and approval to participate",
    showNames: "Let participants see each other's names and answers",
    allowMultiple: "Allow selecting multiple options per date or slot",
    allowUrlEdit: "Allow editing without login for anyone who knows the edit URL",
    allowUrlEditConfirm:
      "If you turn this off, knowing the edit URL will no longer be enough; only your logged-in session will be able to edit. Continue?",
    participationHeading: "Answers by date",
    addDatesTitle: "Add dates (optional)",
    addDatesHelp:
      "Use \"+ Add date\" or \"+ Duplicate\" to add dates. Pressing Duplicate repeatedly keeps adding dates at the interval of the last two.",
    saved: "Saved ✓",
  },
  members: {
    title: "Participant approvals",
    pendingHeading: "Pending approval",
    noPending: "No participants are waiting for approval.",
    approve: "Approve",
    reject: "Reject",
    approvedHeading: "Approved participants ({n})",
    noneYet: "None yet.",
    rejectedHeading: "Rejected",
  },
  upgrade: {
    metaTitle: "Create account",
    title: "Create an account",
    description:
      "Register an email address and password to keep your current events and log in from other devices.",
    submit: "Create account",
  },
  share: {
    pendingApproval:
      "Waiting for the organizer's approval. You can answer once you are approved.",
    rejected: "Your participation was not approved.",
    namesShown: "* Other participants' names and answers are visible.",
    namesHidden:
      "* Only the number of participants is shown; other participants' names and answers are hidden.",
    multipleHint: " You can select multiple options. Press again to deselect.",
    noUpcomingDates: "No upcoming dates.",
    pastHistory: "Show past dates ({n})",
    answer: "Answer",
    saveAnswers: "Save",
    unanswered: "No answer",
    yourAnswer: "Your answer: {answer}",
    conflictPrompt: "Someone has already answered under the name \"{name}\". Is that you?",
    yesMe: "Yes, that's me",
    notMe: "No, I'm someone else",
    loginRequired: "You need to log in or sign up to answer.",
    namePlaceholder: "e.g. Sakura Suzuki",
    createNewPrompt: "New here?",
    countBadge: "{label} {n}",
  },
  calendar: {
    title: "Calendar sync",
    description:
      "The dates you answered can be synced to your calendar automatically (it may take from a few minutes to a few hours to appear).",
    google: "Add to Google Calendar",
    outlookCom: "Add to Outlook.com",
    office365: "Add to Outlook (work or school)",
    apple: "Add to iPhone Calendar",
    copyUrl: "Copy the URL directly",
  },
  memberPage: {
    title: "My page",
    pendingNotice: "Waiting for approval from {n} organizer(s)",
    noOrganizers:
      "You have not joined any organizer yet. Open a shared event URL to join.",
    organizerEvents: "Events by {name}",
    organizerEventsUnnamed: "Organizer's events",
    noEvents: "No events yet.",
    answered: "Answered {answered}/{total}",
  },
  landing: {
    heroTitle: "Free group scheduling and RSVP tool you can use right now, no login required",
    heroLead:
      "The organizer proposes dates, participants answer with ○△×. That's it. Works for parties, reunions, wedding after-parties, welcome and farewell parties, clubs, meetings, and anything else that needs a date and a headcount.",
    heroCta: "Create an event for free",
    heroNote: "No sign-up, nothing to install. Share your candidate dates in about 30 seconds.",
    howHeading: "How it works: 3 steps",
    step1Title: "Add candidate dates",
    step1Body:
      "Enter an event name and the dates you have in mind. Add time slots such as \"morning / afternoon\" if needed, or type \"next Friday and Saturday\" and let AI fill them in.",
    step2Title: "Share the link",
    step2Body:
      "Send the participant link via LINE, email, Slack or any chat app. Participants can open it without creating an account.",
    step3Title: "Answer with ○△× and see the tally",
    step3Body:
      "Participants pick ○△× for each candidate, and the attendance for each date is tallied instantly. Answers can be changed any time.",
    featuresHeading: "Why people choose whenly",
    feature1Title: "No login or sign-up",
    feature1Body:
      "Both organizers and participants can use it without an account. No need to collect email addresses.",
    feature2Title: "Time slots inside a single date",
    feature2Body:
      "Set several candidates within one day, such as \"Sep 5 morning / afternoon\", and collect answers for each slot.",
    feature3Title: "Customizable answer options",
    feature3Body:
      "Not just ○△×: use \"Yes / No / Maybe\", \"OK / NG\" or anything else, with up to 10 options.",
    feature4Title: "Approval mode and name visibility",
    feature4Body:
      "Choose between an open event anyone can answer and an approval-only event. You can also hide participant names and show only the headcount.",
    feature5Title: "Calendar sync and printing",
    feature5Body:
      "Sync the dates you answered to Google Calendar, Outlook or iPhone Calendar, and print the attendance sheet on A4 as is.",
    feature6Title: "AI-assisted date entry",
    feature6Body:
      "Generate candidate dates from free text such as \"every Monday from 7 pm\". The interface is available in 12 languages.",
    useCasesHeading: "Typical use cases",
    useCase1: "Scheduling parties and get-togethers",
    useCase2: "RSVPs for reunions and alumni meetups",
    useCase3: "Attendance for wedding after-parties",
    useCase4: "Picking a date for welcome and farewell parties",
    useCase5: "Club, team and PTA activity days",
    useCase6: "Scheduling meetings",
    useCase7: "Collecting volunteer and event shifts",
    useCase8: "Confirming attendance for lessons and classes",
    securityHeading: "Why it's safe to use",
    security1Title: "No personal data required",
    security1Body: "Participants only enter a name (optional). No email address or phone number needed.",
    security2Title: "Control who can edit",
    security2Body:
      "Editing can be limited to people who know the edit URL, or to the logged-in organizer only.",
    security3Title: "Encrypted connection",
    security3Body: "All traffic is encrypted over HTTPS.",
    faqHeading: "Frequently asked questions",
    faq1Q: "Is it really free?",
    faq1A:
      "Yes. Creating events, answering, tallying and calendar sync are all free to use.",
    faq2Q: "Do participants need an account?",
    faq2A:
      "No. They open the shared link and enter a name (optional) to answer. Login is only required on the participant side when the organizer turns on approval mode.",
    faq3Q: "Can organizers use it without logging in?",
    faq3A:
      "Yes. Press \"Start without an account\" to create an event right away. You can register an email address and password later to manage it from other devices as well.",
    faq4Q: "Are candidates limited to dates, or can I specify time slots?",
    faq4A:
      "You can add time slots such as \"morning\", \"afternoon\" or \"from 7 pm\" to each date. Dates with slots are answered slot by slot.",
    faq5Q: "Can answers be changed later?",
    faq5A: "Yes. Open the same link again and you can change your answers at any time.",
    faq6Q: "Can I add the dates I answered to my calendar?",
    faq6A:
      "Subscribe to your personal calendar URL in Google Calendar, Outlook or iPhone Calendar and the dates you answered are synced automatically.",
    faq7Q: "How is it different from other scheduling tools?",
    faq7A:
      "Time slots within a date, customizable answer options, approval mode, hidden participant names, calendar sync, AI entry and 12 languages, all for free.",
    ctaHeading: "Share your candidate dates now",
    ctaBody: "No sign-up, nothing to install. One click creates your event page.",
    navHome: "Home",
  },
  useCasePage: {
    breadcrumbUseCases: "Use cases",
    painsHeading: "Sound familiar?",
    solutionsHeading: "How whenly solves it",
    tipsHeading: "Tips",
    relatedHeading: "Other use cases",
  },
  useCases: {
    nomikai: {
      title: "Free scheduling for parties and get-togethers, no login",
      description:
        "For party organizers: add candidate dates, send the link, and guests answer ○△× without logging in. Automatic tallies, time-slot candidates and approval mode, all free.",
      heading: "Scheduling parties and get-togethers",
      lead:
        "The hardest part of organizing is chasing everyone for their availability. With whenly you add candidate dates and send one link; guests pick ○△× without an account and the tally updates instantly.",
      pain1: "Replies get buried in the group chat and you lose track of who has answered",
      pain2: "Conditional replies like \"only after 7 pm\" or \"joining for the second round\" are hard to organize",
      pain3: "Every time you add or change a date you have to ask everyone again",
      solution1Title: "Ask about dates and time slots at once",
      solution1Body:
        "Add slots per date such as \"Fri from 7 pm\" or \"Sat 6 pm / 8 pm\", so conditional replies become regular answers.",
      solution2Title: "Guests just open the link and enter a name",
      solution2Body:
        "No account needed and the name is optional, so people answer without hesitation. Answers can be changed later.",
      solution3Title: "Headcount per date, tallied automatically",
      solution3Body:
        "The number of ○△× and the names are shown per candidate, so you know how many seats to book. You can add dates at any time.",
      tip1: "Limit candidates to 3–5 dates for a higher response rate. Too many options get postponed.",
      tip2: "Showing participant names makes people more likely to join when they see who is coming.",
      faq1Q: "Do guests need anything other than a chat app?",
      faq1A:
        "No. Paste the shared link in the group chat and guests open it in their browser. No app to install.",
      faq2Q: "What if the headcount changes after I book the venue?",
      faq2A:
        "Guests can change their answers any time and the organizer sees it immediately. Sending one reminder before the deadline helps.",
    },
    dousoukai: {
      title: "Free RSVPs for reunions and alumni meetups, no login",
      description:
        "For reunion organizers: collect RSVPs by sharing one link even when contact channels differ. Participants don't log in; hide names, show only headcounts, or require approval. Free.",
      heading: "RSVPs for reunions and alumni meetups",
      lead:
        "Asking people you haven't spoken to in years to install an app is awkward. With whenly they just open the link to RSVP, and you can see at a glance who has answered.",
      pain1: "Everyone uses a different channel (email, chat, social media) and collecting replies is a chore",
      pain2: "Copying \"attending / undecided / absent\" into a roster takes time",
      pain3: "With many people it's hard to tell who hasn't answered yet",
      solution1Title: "One link works on every channel",
      solution1Body:
        "Send the same link whatever channel you use. Participants answer from a browser without installing anything.",
      solution2Title: "Rename options to \"Attending / Undecided / Absent\"",
      solution2Body:
        "Answer options are fully customizable, so you can use wording that fits a reunion.",
      solution3Title: "Names and answers in one list",
      solution3Body:
        "The organizer view lists respondents per candidate, so updating the roster and spotting non-responders takes seconds.",
      tip1: "Split the main event and the after-party into time slots to see who joins later.",
      tip2: "You can toggle whether participants see each other's names. Show only headcounts if privacy is a concern.",
      faq1Q: "Will I end up collecting personal data?",
      faq1A:
        "Participants only enter a name (optional). No email address or phone number is required, and none is shown to the organizer.",
      faq2Q: "Can someone answer under another person's name?",
      faq2A:
        "In approval mode only participants approved by the organizer can answer. Even in open mode, answering under a name that already replied triggers an identity check.",
    },
    nijikai: {
      title: "Free attendance management for wedding after-parties",
      description:
        "For wedding after-parties and celebrations: coordinate dates and track final attendance. Guests don't log in, and organizers get a printable attendance sheet. Free.",
      heading: "Attendance for wedding after-parties",
      lead:
        "Being asked to organize the after-party starts with picking a date and tracking attendance. With whenly both the date poll and the final RSVP live at the same link.",
      pain1: "The bride's side and the groom's side use different channels, so you keep two lists",
      pain2: "Getting every reply before the venue's headcount deadline is stressful",
      pain3: "You have to rebuild the guest list for check-in on the day",
      solution1Title: "Both sides in one event",
      solution1Body:
        "Share the link with each side and all answers land on one screen.",
      solution2Title: "See who hasn't answered before the deadline",
      solution2Body:
        "Respondent names are listed per candidate, so you can nudge only the people who are still missing.",
      solution3Title: "Print the attendance sheet as is",
      solution3Body:
        "The print button outputs an A4 attendance sheet you can use as the check-in list.",
      tip1: "Track fees by renaming options to \"Attending (paid) / Attending (unpaid) / Absent\".",
      tip2: "Calendar sync keeps the date on guests' calendars so fewer people forget.",
      faq1Q: "Can I use it for RSVPs after invitations are sent?",
      faq1A:
        "Yes. Register the single event date and set the options to \"Attending / Absent\" to replace reply cards.",
      faq2Q: "Can I collect guests' contact details?",
      faq2A:
        "whenly has no feature for collecting contact details. It is designed not to hold personal data, so guests can use it with confidence.",
    },
    kangeikai: {
      title: "Free date picking for welcome and farewell parties",
      description:
        "For office welcome and farewell parties: prioritize the guest of honor and still collect everyone's availability. No login and no email address needed. Free.",
      heading: "Scheduling welcome and farewell parties",
      lead:
        "You want to fit the guest of honor's schedule and still hear from the whole team. With whenly you list candidate dates and share the link; who can come on which day appears in one view.",
      pain1: "Emailing the whole department buries replies and slows down the tally",
      pain2: "The guest of honor's best day and the majority's best day don't match",
      pain3: "External guests can't use the company chat tool",
      solution1Title: "Headcount per candidate at a glance",
      solution1Body: "○△× counts are tallied per candidate, so the most popular day is obvious.",
      solution2Title: "Build candidates around the guest of honor",
      solution2Body:
        "Ask the guest of honor first, then register candidates, and you only need to ask everyone once. Dates can be added later.",
      solution3Title: "External guests only need the link",
      solution3Body:
        "No account is required, so people outside the company can answer from a single email.",
      tip1: "Use the per-date comment field for notes like \"last day in the office\" to help people decide.",
      tip2: "Approval mode means only people approved by the organizer can answer, even if the link is forwarded.",
      faq1Q: "Do I need to register a company email address?",
      faq1A:
        "Neither organizers nor participants need an email address. Organizers can start right away from \"Start without an account\".",
      faq2Q: "What if I don't want participants to see each other's answers?",
      faq2A:
        "Turn off participant names and other participants see only headcounts. The organizer still sees everything.",
    },
    circle: {
      title: "Free activity-day scheduling for clubs, teams and PTAs",
      description:
        "For clubs, sports teams, PTAs and community groups: collect availability for recurring practice days and duty rosters in one go. No login, with per-slot answers. Free.",
      heading: "Activity days for clubs, teams and PTAs",
      lead:
        "Weekly practices and duty rosters mean asking the same question every week. With whenly you register four weeks of candidates at once and members answer in one sitting.",
      pain1: "Asking for availability every single week is tedious",
      pain2: "Different members can make it in the morning versus the afternoon",
      pain3: "Every membership change means collecting contact details again",
      solution1Title: "Register recurring candidates in bulk",
      solution1Body:
        "The Duplicate button keeps adding dates at the same interval. Or type \"every Saturday from 10 am\" and let AI fill them in.",
      solution2Title: "Collect answers per time slot",
      solution2Body:
        "Add slots like \"morning / afternoon\" to a date and see who can attend each one.",
      solution3Title: "Only approved members can answer",
      solution3Body:
        "In approval mode, outsiders who open the link cannot answer. Membership changes are handled by approving or rejecting.",
      tip1: "Past dates move to the history automatically, so you can keep using the same event.",
      tip2: "Members can sync the dates they answered to their own calendar.",
      faq1Q: "How many weeks can I register?",
      faq1A:
        "There is no limit on the number of dates. With AI entry, open-ended repeats are expanded to four weeks from today.",
      faq2Q: "Can parents who aren't comfortable with smartphones answer?",
      faq2A:
        "They open the link, tap ○△× and save. No app installation or account is needed.",
    },
    kaigi: {
      title: "Free meeting scheduling, no login required",
      description:
        "For internal meetings and client calls: send candidate times and the other side answers without logging in. Results can sync to Google Calendar and Outlook. Free.",
      heading: "Scheduling meetings",
      lead:
        "Instead of trading candidate times over email, send them as one link. The other side picks what works without registering, and the result can sync to their calendar.",
      pain1: "Writing candidate times in emails and cross-checking replies is inefficient",
      pain2: "The more attendees, the harder it is to find a slot that works for everyone",
      pain3: "People forget to put the agreed time in their calendar",
      solution1Title: "Offer dates with time slots",
      solution1Body:
        "Slots like \"Sep 10, 10:00 / 14:00\" can be candidates, which suits picking a meeting time.",
      solution2Title: "Compare everyone's ○△× side by side",
      solution2Body:
        "Answers are listed per candidate, so you can spot the slot where everyone is ○, or where △ would make it work.",
      solution3Title: "Sync the chosen dates to calendars",
      solution3Body:
        "Attendees subscribe once in Google Calendar, Outlook or iPhone Calendar and the dates they answered appear automatically.",
      tip1: "Rename options to \"Available / Flexible / Unavailable\" for business-friendly wording.",
      tip2: "Allow editing by anyone who knows the edit URL and a co-organizer can manage it with you.",
      faq1Q: "Can I use it with people outside my company?",
      faq1A: "Yes. They open the link and answer. No account registration is required.",
      faq2Q: "Can it book a meeting room or send invitations?",
      faq2A:
        "whenly focuses on finding the date and tallying attendance. Send the invitation for the agreed time from your usual calendar.",
    },
    volunteer: {
      title: "Free shift sign-ups for volunteers and events",
      description:
        "For volunteer groups and event teams: create time-slot shifts per date and collect who can cover each one, with no login required. Free.",
      heading: "Shift sign-ups for volunteers and events",
      lead:
        "Shifts spanning several days and time slots are hard to keep current in a spreadsheet. With whenly everyone marks ○△× on date × slot candidates and you see the count per shift.",
      pain1: "Many date and time combinations make the sign-up sheet hard to maintain",
      pain2: "High turnover makes managing contact details a burden",
      pain3: "You can't see in real time how many people are in each shift",
      solution1Title: "Create time-slot shifts per date",
      solution1Body:
        "Add slots like \"morning / afternoon / evening\" to each date and collect answers per shift.",
      solution2Title: "Instant count and names per shift",
      solution2Body:
        "The organizer view shows ○△× counts and names per shift, so understaffed shifts stand out.",
      solution3Title: "No contact details to store",
      solution3Body: "Volunteers answer with just a name. There is no personal data for you to manage.",
      tip1: "Write the rule \"○ = can cover / △ = flexible / × = unavailable\" in the event comment so answers stay consistent.",
      tip2: "Approval mode limits answers to registered volunteers.",
      faq1Q: "Can volunteers add their shifts to their calendar?",
      faq1A: "Yes. After subscribing to the calendar URL, the shifts they marked ○ appear as all-day events.",
      faq2Q: "How many people can answer?",
      faq2A: "There is no limit.",
    },
    lesson: {
      title: "Free attendance confirmation for lessons and classes",
      description:
        "For classes, lessons and schools: the instructor registers dates and students or parents mark ○ on the days they attend, no login required. Calendar sync included. Free.",
      heading: "Attendance for lessons and classes",
      lead:
        "Make-up lessons and drop-in classes make it hard to know who is coming each time. With whenly you list the dates and students or parents pick their days from the link.",
      pain1: "You contact participants before every single lesson to confirm",
      pain2: "Replies from parents arrive one by one and take time to tally",
      pain3: "Students forget which days they signed up for",
      solution1Title: "Present the whole month's dates at once",
      solution1Body:
        "Duplicate adds the same weekday in sequence. You can also split a date into time slots.",
      solution2Title: "Participants enter a name and mark ○",
      solution2Body:
        "No account needed. Parents answering on behalf of a child can use the child's name.",
      solution3Title: "Attendance days sync to calendars",
      solution3Body:
        "With calendar sync, the days a participant answered appear in Google Calendar or iPhone Calendar.",
      tip1: "Hide participant names and other students see only the headcount.",
      tip2: "If there is a capacity limit, note it in the date comment, e.g. \"max 6\".",
      faq1Q: "Can participants without a smartphone use it?",
      faq1A:
        "They can answer from a computer browser. You can also confirm verbally using the printed sheet and enter answers yourself.",
      faq2Q: "Is there a fee?",
      faq2A: "All features are free.",
    },
  },
  errors: {
    titleRequired: "Please enter a title",
    addAtLeastOneDate: "Please add at least one date",
    dateRequired: "Please enter a date",
    invalidDate: "The date format is invalid",
    eventNotFound: "Event not found",
    loginRequired: "Login required",
    optionsAtLeastOne: "At least one option is required",
    optionsMax: "Please use at most {max} options",
    nameRequired: "Please enter your name",
    invalidEmail: "The email address format is invalid",
    passwordTooShort: "The password must be at least 8 characters",
    passwordRequired: "Please enter your password",
    emailTaken: "This email address is already registered",
    invalidCredentials: "Incorrect email address or password",
    identityFailed: "Identity verification failed",
    accountNotFound: "Account not found",
    alreadyRegistered: "This account is already registered",
    resetLinkInvalid:
      "This link has expired or has already been used. Please request a password reset again.",
    unknownError: "An unknown error occurred",
    optionsChanged: "The options have changed. Please reload the page",
    noMultipleAnswers: "Multiple selection is not allowed for this event",
    noPermission: "You are not allowed to answer",
    aiEmpty: "Please describe your schedule",
    aiNoSchedule: "Could not read any dates. Please be a bit more specific.",
    aiFailed: "AI schedule entry failed. Please try again later.",
  },
  mail: {
    resetSubject: "[whenly] Password reset",
    resetBody:
      "We received a request to reset your password.\n\nPlease set a new password within 1 hour using the link below.\n\n{url}\n\nIf you did not request this, you can safely ignore this email.",
  },
};
