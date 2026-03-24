export const APP_STORE_URL = "https://apps.apple.com/app/awaitr/id6760962108";
export const TWITTER_URL = "https://x.com/fiqhrodedhen";
export const THREADS_URL = "https://threads.net/@fiqhrodedhen";

export const FEATURES = [
  {
    title: "Smart Pipelines",
    description:
      "8 category-specific templates. Job applications, scholarships, pre-orders — each with stages that actually make sense.",
    color: "violet",
    bgClass: "bg-violet/10 dark:bg-violet/20",
    borderClass: "border-t-violet",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
  },
  {
    title: "Never Miss a Follow-up",
    description:
      "Set reminders and get notified when it's time to check in. See how long you've been waiting.",
    color: "green",
    bgClass: "bg-green/10 dark:bg-green/20",
    borderClass: "border-t-green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    ),
  },
  {
    title: "Celebrate Your Wins",
    description:
      "Archive tracks your outcomes. See your success rate with visual analytics.",
    color: "coral",
    bgClass: "bg-coral/10 dark:bg-coral/20",
    borderClass: "border-t-coral",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 0 1-2.27.308 6.023 6.023 0 0 1-2.27-.308" />
      </svg>
    ),
  },
  {
    title: "100% Private",
    description:
      "All data stays on your device. No accounts, no cloud, no tracking. Works in airplane mode.",
    color: "amber",
    bgClass: "bg-amber/10 dark:bg-amber/20",
    borderClass: "border-t-amber",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
] as const;

export const SHOWCASE_ITEMS = [
  {
    image: "/images/appstore/image1.png",
    title: "Track Everything You're Waiting For",
    description: "See all your waitlists organized by category with real-time status updates.",
    bg: "bg-[#F5D5D0] dark:bg-[#3D2A28]",
  },
  {
    image: "/images/appstore/image2.png",
    title: "See Your Progress at a Glance",
    description: "Detailed pipeline view shows exactly where each item stands.",
    bg: "bg-[#F5E6A8] dark:bg-[#3D3520]",
  },
  {
    image: "/images/appstore/image3.png",
    title: "Celebrate Your Win",
    description: "Archive tracks outcomes with visual analytics and success rates.",
    bg: "bg-[#C8DDD8] dark:bg-[#253530]",
  },
  {
    image: "/images/appstore/image4.png",
    title: "Never Miss a Follow-up",
    description: "Smart reminders keep you on top of every waiting item.",
    bg: "bg-[#C8E6CC] dark:bg-[#253D28]",
  },
  {
    image: "/images/appstore/image5.png",
    title: "Your Personal Waitlist Manager",
    description: "Beautiful onboarding gets you started in seconds.",
    bg: "bg-[#E8D5BA] dark:bg-[#3D3525]",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Is Awaitr really free?",
    answer:
      "Yes, completely free with no in-app purchases, ads, or subscriptions.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "All data is stored locally on your iPhone using Apple's SwiftData. Nothing is uploaded anywhere.",
  },
  {
    question: "Can I sync across devices?",
    answer:
      "Not yet. iCloud sync is planned for a future update.",
  },
  {
    question: "What iOS version do I need?",
    answer: "Awaitr requires iOS 26 or later.",
  },
  {
    question: "How do I export my data?",
    answer:
      "Go to Settings > Export CSV. Your data will be exported as a spreadsheet file.",
  },
];

export const APP_INFO = [
  { label: "Requirement", value: "iOS 26+", badge: null },
  { label: "Version", value: "1.0", badge: "New" },
  { label: "Price", value: "Free", badge: null },
  { label: "Size", value: "< 15 MB", badge: null },
];

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "FAQ", href: "#faq" },
  { label: "Privacy", href: "/privacy" },
];
