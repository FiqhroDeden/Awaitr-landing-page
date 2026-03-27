export type Locale = "en" | "id";

type TranslationMap = Record<string, string>;

export const translations: Record<Locale, TranslationMap> = {
  en: {
    // Banner
    "banner.text": "We're live on Product Hunt!",
    "banner.cta": "Support us with an upvote",

    // Nav
    "nav.features": "Features",
    "nav.screenshots": "Screenshots",
    "nav.faq": "FAQ",
    "nav.privacy": "Privacy",
    "nav.download": "Download",
    "nav.downloadFull": "Download on App Store",
    "nav.useCases": "Use Cases",
    "nav.compare": "Compare",

    // Hero
    "hero.badge": "Just Launched",
    "hero.title1": "Track Everything ",
    "hero.title2": "You're Waiting For",
    "hero.subtitle":
      "Jobs, scholarships, pre-orders, permits, events — one app to manage all your waitlists. Free. Private. No account needed.",
    "hero.requirement":
      "Requires iOS 26 beta \u00b7 Public release September 2026",

    // Features
    "features.heading1": "Everything you need to ",
    "features.heading2": "stop waiting blindly",
    "features.subheading":
      "Four powerful features. Zero complexity. Just open the app and start tracking.",
    "features.0.title": "Smart Pipelines",
    "features.0.description":
      "8 category-specific templates. Job applications, scholarships, pre-orders — each with stages that actually make sense.",
    "features.1.title": "Never Miss a Follow-up",
    "features.1.description":
      "Set reminders and get notified when it's time to check in. See how long you've been waiting.",
    "features.2.title": "Celebrate Your Wins",
    "features.2.description":
      "Archive tracks your outcomes. See your success rate with visual analytics.",
    "features.3.title": "100% Private",
    "features.3.description":
      "All data stays on your device. No accounts, no cloud, no tracking. Works in airplane mode.",

    // Trust Badges
    "trust.0": "Available on the App Store",
    "trust.1": "Free \u00b7 No Ads \u00b7 No Account Required",
    "trust.2": "100% Offline \u00b7 Your Data Stays on Your Device",

    // Social Proof
    "social.heading": "Built with care",
    "social.0.label": "Pure Native",
    "social.1.label": "Third-Party Deps",
    "social.2.label": "App Size",
    "social.3.label": "Liquid Glass UI",

    // Screenshot Gallery
    "gallery.heading": "See it in action",
    "gallery.subheading":
      "Designed for clarity. Built for speed. Beautiful on every screen.",
    "gallery.0.title": "Track Everything You're Waiting For",
    "gallery.0.description":
      "See all your waitlists organized by category with real-time status updates.",
    "gallery.1.title": "See Your Progress at a Glance",
    "gallery.1.description":
      "Detailed pipeline view shows exactly where each item stands.",
    "gallery.2.title": "Celebrate Your Win",
    "gallery.2.description":
      "Archive tracks outcomes with visual analytics and success rates.",
    "gallery.3.title": "Never Miss a Follow-up",
    "gallery.3.description":
      "Smart reminders keep you on top of every waiting item.",
    "gallery.4.title": "Your Personal Waitlist Manager",
    "gallery.4.description":
      "Beautiful onboarding gets you started in seconds.",

    // App Info
    "appinfo.heading": "App Details",
    "appinfo.0.label": "Requirement",
    "appinfo.0.value": "iOS 26+",
    "appinfo.1.label": "Version",
    "appinfo.1.value": "1.0",
    "appinfo.1.badge": "New",
    "appinfo.2.label": "Price",
    "appinfo.2.value": "Free",
    "appinfo.3.label": "Size",
    "appinfo.3.value": "< 15 MB",

    // FAQ
    "faq.heading": "Frequently Asked Questions",
    "faq.subheading": "Everything you need to know about Awaitr.",
    "faq.0.question": "Is Awaitr really free?",
    "faq.0.answer":
      "Yes, completely free with no in-app purchases, ads, or subscriptions.",
    "faq.1.question": "Where is my data stored?",
    "faq.1.answer":
      "All data is stored locally on your iPhone using Apple's SwiftData. Nothing is uploaded anywhere.",
    "faq.2.question": "Can I sync across devices?",
    "faq.2.answer":
      "Not yet. iCloud sync is planned for a future update.",
    "faq.3.question": "What iOS version do I need?",
    "faq.3.answer": "Awaitr requires iOS 26 or later.",
    "faq.4.question": "How do I export my data?",
    "faq.4.answer":
      "Go to Settings > Export CSV. Your data will be exported as a spreadsheet file.",

    // Download CTA
    "cta.heading": "Ready to track everything?",
    "cta.subheading":
      "Download Awaitr for free and never lose track of what you're waiting for again.",
    "cta.requirement":
      "Requires iOS 26 beta \u00b7 Public release September 2026",

    // Footer
    "footer.tagline": "Your personal waitlist manager",
    "footer.privacy": "Privacy Policy",
    "footer.support": "Support",
    "footer.contact": "Contact",
    "footer.appstore": "App Store",
    "footer.producthunt": "Product Hunt",
    "footer.twitter": "X / Twitter",
    "footer.threads": "Threads",
    "footer.copyright": "\u00a9 2026 Awaitr. All rights reserved.",
    "footer.col.product": "Product",
    "footer.col.useCases": "Use Cases",
    "footer.col.resources": "Resources",
    "footer.col.connect": "Connect",
    "footer.link.download": "Download",
    "footer.link.features": "Features",
    "footer.link.screenshots": "Screenshots",
    "footer.link.faq": "FAQ",
    "footer.link.jobSeekers": "Job Seekers",
    "footer.link.students": "Students",
    "footer.link.shoppers": "Shoppers",
    "footer.link.government": "Government",
    "footer.link.events": "Events",
    "footer.link.compare": "Compare",
    "footer.link.blogLosingTrack": "Why You Lose Track",
    "footer.link.blogPrivacyFirst": "Privacy First",

    // Why Awaitr
    "whyAwaitr.heading": "Why Awaitr?",
    "whyAwaitr.subheading": "Purpose-built for tracking what you're waiting for.",
    "whyAwaitr.0.title": "Track Job Applications",
    "whyAwaitr.0.description": "From applied to offer — see every application's status at a glance.",
    "whyAwaitr.1.title": "Never Miss a Deadline",
    "whyAwaitr.1.description": "Scholarships, universities, permits — track deadlines across every category.",
    "whyAwaitr.2.title": "Your Data, Your Device",
    "whyAwaitr.2.description": "100% offline. No accounts. No cloud. Your waitlist data stays private.",
    "whyAwaitr.3.title": "See How We Compare",
    "whyAwaitr.3.description": "Honest comparison with Huntr, Notion, and Apple Reminders.",
  },
  id: {
    // Banner
    "banner.text": "Kami hadir di Product Hunt!",
    "banner.cta": "Dukung kami dengan upvote",

    // Nav
    "nav.features": "Fitur",
    "nav.screenshots": "Tangkapan Layar",
    "nav.faq": "FAQ",
    "nav.privacy": "Privasi",
    "nav.download": "Unduh",
    "nav.downloadFull": "Unduh di App Store",
    "nav.useCases": "Kasus Penggunaan",
    "nav.compare": "Perbandingan",

    // Hero
    "hero.badge": "Baru Diluncurkan",
    "hero.title1": "Lacak Semua ",
    "hero.title2": "yang Sedang Kamu Tunggu",
    "hero.subtitle":
      "Pekerjaan, beasiswa, pre-order, izin, acara — satu aplikasi untuk mengelola semua daftar tunggu. Gratis. Privat. Tanpa perlu akun.",
    "hero.requirement":
      "Memerlukan iOS 26 beta \u00b7 Rilis publik September 2026",

    // Features
    "features.heading1": "Semua yang kamu butuhkan untuk ",
    "features.heading2": "berhenti menunggu tanpa kepastian",
    "features.subheading":
      "Empat fitur andalan. Tanpa kerumitan. Buka aplikasi dan langsung mulai lacak.",
    "features.0.title": "Alur Proses Cerdas",
    "features.0.description":
      "8 template sesuai kategori. Lamaran kerja, beasiswa, pre-order — masing-masing dengan tahapan yang masuk akal.",
    "features.1.title": "Jangan Lewatkan Tindak Lanjut",
    "features.1.description":
      "Atur pengingat dan dapatkan notifikasi saat waktunya menindaklanjuti. Lihat sudah berapa lama kamu menunggu.",
    "features.2.title": "Rayakan Pencapaianmu",
    "features.2.description":
      "Arsip mencatat hasilnya. Lihat tingkat keberhasilanmu dengan analitik visual.",
    "features.3.title": "100% Privat",
    "features.3.description":
      "Semua data tetap di perangkatmu. Tanpa akun, tanpa cloud, tanpa pelacakan. Berfungsi dalam mode pesawat.",

    // Trust Badges
    "trust.0": "Tersedia di App Store",
    "trust.1": "Gratis \u00b7 Tanpa Iklan \u00b7 Tanpa Perlu Akun",
    "trust.2": "100% Offline \u00b7 Datamu Tetap di Perangkatmu",

    // Social Proof
    "social.heading": "Dibuat dengan sepenuh hati",
    "social.0.label": "Native Murni",
    "social.1.label": "Dependensi Pihak Ketiga",
    "social.2.label": "Ukuran Aplikasi",
    "social.3.label": "UI Liquid Glass",

    // Screenshot Gallery
    "gallery.heading": "Lihat langsung",
    "gallery.subheading":
      "Dirancang untuk kejelasan. Dibangun untuk kecepatan. Indah di setiap layar.",
    "gallery.0.title": "Lacak Semua yang Sedang Kamu Tunggu",
    "gallery.0.description":
      "Lihat semua daftar tunggu terorganisir berdasarkan kategori dengan pembaruan status real-time.",
    "gallery.1.title": "Lihat Progresmu Sekilas",
    "gallery.1.description":
      "Tampilan alur proses menunjukkan posisi setiap item dengan tepat.",
    "gallery.2.title": "Rayakan Pencapaianmu",
    "gallery.2.description":
      "Arsip mencatat hasil dengan analitik visual dan tingkat keberhasilan.",
    "gallery.3.title": "Jangan Lewatkan Tindak Lanjut",
    "gallery.3.description":
      "Pengingat cerdas membantumu tetap di atas setiap item yang ditunggu.",
    "gallery.4.title": "Pengelola Daftar Tunggu Pribadimu",
    "gallery.4.description":
      "Onboarding yang indah membantumu memulai dalam hitungan detik.",

    // App Info
    "appinfo.heading": "Detail Aplikasi",
    "appinfo.0.label": "Persyaratan",
    "appinfo.0.value": "iOS 26+",
    "appinfo.1.label": "Versi",
    "appinfo.1.value": "1.0",
    "appinfo.1.badge": "Baru",
    "appinfo.2.label": "Harga",
    "appinfo.2.value": "Gratis",
    "appinfo.3.label": "Ukuran",
    "appinfo.3.value": "< 15 MB",

    // FAQ
    "faq.heading": "Pertanyaan yang Sering Diajukan",
    "faq.subheading": "Semua yang perlu kamu ketahui tentang Awaitr.",
    "faq.0.question": "Apakah Awaitr benar-benar gratis?",
    "faq.0.answer":
      "Ya, sepenuhnya gratis tanpa pembelian dalam aplikasi, iklan, atau langganan.",
    "faq.1.question": "Di mana data saya disimpan?",
    "faq.1.answer":
      "Semua data disimpan secara lokal di iPhone kamu menggunakan SwiftData dari Apple. Tidak ada yang diunggah ke mana pun.",
    "faq.2.question": "Bisakah saya sinkronkan antar perangkat?",
    "faq.2.answer":
      "Belum bisa. Sinkronisasi iCloud direncanakan untuk pembaruan mendatang.",
    "faq.3.question": "Versi iOS apa yang saya butuhkan?",
    "faq.3.answer": "Awaitr memerlukan iOS 26 atau lebih baru.",
    "faq.4.question": "Bagaimana cara mengekspor data saya?",
    "faq.4.answer":
      "Buka Pengaturan > Ekspor CSV. Data kamu akan diekspor sebagai file spreadsheet.",

    // Download CTA
    "cta.heading": "Siap melacak semuanya?",
    "cta.subheading":
      "Unduh Awaitr gratis dan jangan pernah kehilangan jejak dari apa yang sedang kamu tunggu.",
    "cta.requirement":
      "Memerlukan iOS 26 beta \u00b7 Rilis publik September 2026",

    // Footer
    "footer.tagline": "Pengelola daftar tunggu pribadimu",
    "footer.privacy": "Kebijakan Privasi",
    "footer.support": "Dukungan",
    "footer.contact": "Kontak",
    "footer.appstore": "App Store",
    "footer.producthunt": "Product Hunt",
    "footer.twitter": "X / Twitter",
    "footer.threads": "Threads",
    "footer.copyright": "\u00a9 2026 Awaitr. Hak cipta dilindungi.",
    "footer.col.product": "Produk",
    "footer.col.useCases": "Kasus Penggunaan",
    "footer.col.resources": "Sumber Daya",
    "footer.col.connect": "Terhubung",
    "footer.link.download": "Unduh",
    "footer.link.features": "Fitur",
    "footer.link.screenshots": "Tangkapan Layar",
    "footer.link.faq": "FAQ",
    "footer.link.jobSeekers": "Pencari Kerja",
    "footer.link.students": "Pelajar",
    "footer.link.shoppers": "Pembeli",
    "footer.link.government": "Dokumen Pemerintah",
    "footer.link.events": "Acara",
    "footer.link.compare": "Perbandingan",
    "footer.link.blogLosingTrack": "Mengapa Kamu Kehilangan Jejak",
    "footer.link.blogPrivacyFirst": "Privasi Utama",

    // Why Awaitr
    "whyAwaitr.heading": "Mengapa Awaitr?",
    "whyAwaitr.subheading": "Dibuat khusus untuk melacak apa yang sedang kamu tunggu.",
    "whyAwaitr.0.title": "Lacak Lamaran Kerja",
    "whyAwaitr.0.description": "Dari melamar hingga diterima — lihat status setiap lamaran sekilas.",
    "whyAwaitr.1.title": "Jangan Lewatkan Tenggat Waktu",
    "whyAwaitr.1.description": "Beasiswa, universitas, izin — lacak tenggat waktu di setiap kategori.",
    "whyAwaitr.2.title": "Datamu, Perangkatmu",
    "whyAwaitr.2.description": "100% offline. Tanpa akun. Tanpa cloud. Data daftar tunggu tetap privat.",
    "whyAwaitr.3.title": "Lihat Perbandingan Kami",
    "whyAwaitr.3.description": "Perbandingan jujur dengan Huntr, Notion, dan Apple Reminders.",
  },
};
