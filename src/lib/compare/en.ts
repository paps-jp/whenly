import type { CompareLabels, ComparePage } from "./types";

export const compareLabelsEn: CompareLabels = {
  breadcrumb: "Compared with other tools",
  tableHeading: "Feature comparison",
  feature: "Feature",
  whenlyForHeading: "When whenly is the better fit",
  otherForHeading: "When {other} is the better fit",
  summaryHeading: "Summary",
  faqHeading: "Frequently asked questions",
  ctaHeading: "Try it with one candidate date",
  ctaBody: "No sign-up, nothing to install. One click creates your event page; share the link and the answers come in.",
  cta: "Create a free poll",
  disclaimer:
    "This comparison is based on information published on each service's website as of October 2026 and on our own testing. Features and plans change over time, so please check the official sites for the latest details. If you spot an error, let us know.",
  otherComparisons: "Other comparisons",
  useCasesHeading: "Use cases",
};

const whenlyCommon = {
  free: "✓ Everything free, unlimited participants",
  noLoginOrganizer: "✓ Not required (create without an account)",
  noLoginParticipant: "✓ Not required (name optional)",
  timeSlots: "✓ Time slots inside each date",
  options: "✓ ○△× or any custom set of up to 10 options",
  approval: "✓ Approval mode available",
  hideNames: "✓ Hide participant names, show headcount only",
  calendar: "✓ Import to Google, Outlook or iPhone Calendar",
  print: "✓ Print the attendance sheet on A4",
  languages: "✓ 12 languages, shown in each participant's browser language",
  ai: "✓ Generate candidate dates from free text",
  openSource: "✓ Source code published on GitHub",
  operator: "PAPS, a Japanese non-profit",
};

export const compareEn: readonly ComparePage[] = [
  {
    slug: "when2meet",
    locale: "en",
    competitor: "When2meet",
    competitorUrl: "https://www.when2meet.com/",
    title: "When2meet alternative: whenly vs When2meet | Free, no login",
    description:
      "Looking for a When2meet alternative? Compare whenly and When2meet: both are free with no login, but they differ in mobile usability, answer options, hidden names, approval mode, calendar import, printing and languages.",
    heading: "whenly vs When2meet",
    lead:
      "When2meet is the classic free availability grid: paint the hours you are free and the group heatmap shows the overlap. whenly takes a different approach: the organizer proposes a short list of candidate dates (with optional time slots) and everyone answers ○△× per candidate. Both are free and need no login. Here is how they differ in practice.",
    rows: [
      { feature: "Price", whenly: whenlyCommon.free, other: "✓ Free (ad-supported)" },
      { feature: "Organizer login", whenly: whenlyCommon.noLoginOrganizer, other: "✓ Not required" },
      { feature: "Participant login", whenly: whenlyCommon.noLoginParticipant, other: "✓ Not required (name, optional password)" },
      { feature: "How availability is collected", whenly: "Candidate dates and time slots, answered with ○△×", other: "Hourly grid painted by each participant" },
      { feature: "Mobile experience", whenly: "✓ Designed for phones; tap one answer per candidate", other: "△ Grid is built for a mouse; painting cells on a phone is fiddly" },
      { feature: "Answer options", whenly: whenlyCommon.options, other: "✗ Available / unavailable only" },
      { feature: "Approval mode", whenly: whenlyCommon.approval, other: "✗ Anyone with the link can answer" },
      { feature: "Hide participant names", whenly: whenlyCommon.hideNames, other: "✗ Names are shown on hover" },
      { feature: "Calendar import", whenly: whenlyCommon.calendar, other: "✗ None" },
      { feature: "Printing", whenly: whenlyCommon.print, other: "✗ No print layout" },
      { feature: "Languages", whenly: whenlyCommon.languages, other: "✗ English only" },
      { feature: "AI date entry", whenly: whenlyCommon.ai, other: "✗ None" },
      { feature: "Edit after answering", whenly: "✓ Any time via the same link", other: "✓ Sign in again with the same name" },
      { feature: "Source code", whenly: whenlyCommon.openSource, other: "✗ Closed" },
    ],
    whenlyFor: [
      "Most participants will answer on a phone",
      "You already have a few candidate dates in mind and want a simple ○△× vote",
      "You need custom answers such as \"Yes / Maybe / No\" or \"In person / Online / Can't\"",
      "You want to hide names, approve participants, or print the result",
      "Participants speak different languages",
    ],
    otherFor: [
      "You need to find any free hour across a whole week with no candidates in mind",
      "Everyone is on a desktop and comfortable with the grid",
    ],
    summary:
      "When2meet shines when you genuinely have no idea which hours might work and everyone can paint a grid on a laptop. whenly is faster when you can propose a handful of dates or slots and want a clean ○△× vote that works well on phones, supports custom answers, hidden names, approval mode, calendar import and printing, all for free and without ads getting in the way.",
    faqs: [
      {
        q: "Can whenly do hourly time slots like When2meet?",
        a: "Yes. Add as many time slots per date as you like, such as \"Tue 10:00\", \"Tue 14:00\", \"Wed 10:00\". Participants answer each slot separately and the tally shows the best one.",
      },
      {
        q: "Do participants need an account or email address?",
        a: "No. Participants open the link, type a name (optional) and pick ○△×. Organizers don't need an account either, although creating one lets you manage several polls from one dashboard.",
      },
      {
        q: "Is there a time zone feature?",
        a: "whenly shows the dates and slots exactly as the organizer wrote them. For groups across time zones, write the zone in the slot label (e.g. \"10:00 UTC\") so everyone reads the same thing.",
      },
    ],
  },
  {
    slug: "doodle",
    locale: "en",
    competitor: "Doodle",
    competitorUrl: "https://doodle.com/",
    title: "Doodle alternative: whenly vs Doodle | Free meeting poll, no login",
    description:
      "Looking for a free Doodle alternative? Compare whenly and Doodle: whenly needs no account for organizers or participants, has no paid tier, and includes custom answers, hidden names, approval mode, calendar import and 12 languages.",
    heading: "whenly vs Doodle",
    lead:
      "Doodle is the best-known meeting poll and has grown into a full scheduling suite with booking pages, calendar connections and team plans. If what you need is the original group poll, \"which of these dates works for you?\", whenly offers that for free, with no account for anyone and a few features Doodle reserves for paid plans. Here is a side-by-side look.",
    rows: [
      { feature: "Price", whenly: whenlyCommon.free, other: "△ Free plan with ads and limits; paid plans for more" },
      { feature: "Organizer login", whenly: whenlyCommon.noLoginOrganizer, other: "✗ Account required to create a poll" },
      { feature: "Participant login", whenly: whenlyCommon.noLoginParticipant, other: "✓ Not required" },
      { feature: "Time slots inside a date", whenly: whenlyCommon.timeSlots, other: "✓ Yes" },
      { feature: "Answer options", whenly: whenlyCommon.options, other: "△ Yes / No / If need be" },
      { feature: "Approval mode", whenly: whenlyCommon.approval, other: "✗ None" },
      { feature: "Hide participant names", whenly: whenlyCommon.hideNames, other: "△ Hidden polls on paid plans" },
      { feature: "Calendar", whenly: "✓ Import the dates you answered (no account linking)", other: "✓ Connect Google / Outlook calendars (some features paid)" },
      { feature: "Booking pages, 1:1 scheduling", whenly: "✗ Not offered; whenly is a group poll only", other: "✓ Yes" },
      { feature: "Time zone conversion", whenly: "✗ Slots shown as written by the organizer", other: "✓ Automatic per participant" },
      { feature: "Printing", whenly: whenlyCommon.print, other: "✗ No print layout" },
      { feature: "Languages", whenly: whenlyCommon.languages, other: "△ Several European languages" },
      { feature: "AI date entry", whenly: whenlyCommon.ai, other: "✗ None in the free poll" },
      { feature: "Ads", whenly: "△ A small ad unit on some pages", other: "△ Ads on the free plan" },
      { feature: "Source code", whenly: whenlyCommon.openSource, other: "✗ Closed" },
    ],
    whenlyFor: [
      "You want to create a poll without signing up for anything",
      "You need custom answer options or want to hide names without paying",
      "You want to approve who can join, or print the final sheet",
      "Participants speak different languages",
      "You prefer a tool that stays free and open source",
    ],
    otherFor: [
      "You schedule many 1:1 meetings and want booking pages or calendar-driven slots",
      "Your group spans several time zones and needs automatic conversion",
      "Your company already pays for Doodle team features",
    ],
    summary:
      "Doodle is a broad scheduling platform; whenly is a focused group poll. If you just need to ask a group which dates work, whenly gets you there with no account, no paid tier, and extras such as custom answers, hidden names, approval mode and printing. If you need booking pages, automatic time zone conversion or deep calendar integration, Doodle's paid plans are built for that.",
    faqs: [
      {
        q: "Does whenly have a paid plan?",
        a: "No. Every feature is free with no participant limit. whenly is run by a non-profit and the source code is published on GitHub.",
      },
      {
        q: "Can I import a Doodle poll into whenly?",
        a: "There is no importer. Re-enter the candidate dates (you can paste them as text and let AI fill them in) and share the new link.",
      },
      {
        q: "Does whenly handle time zones?",
        a: "Not automatically. Dates and slots are shown exactly as the organizer wrote them, so for international groups include the time zone in each slot label.",
      },
    ],
  },
];
