import type { Metadata } from "next";
import Link from "next/link";
import ContentPageShell from "@/components/content/ContentPageShell";
import BilingualContent from "@/components/content/BilingualContent";
import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Awaitr vs Huntr vs Notion vs Apple Reminders — Awaitr",
  description:
    "Compare Awaitr with Huntr, Notion, and Apple Reminders for tracking waitlists, job applications, and more. Honest, side-by-side feature comparison.",
  openGraph: {
    title: "Awaitr vs Huntr vs Notion vs Apple Reminders",
    description:
      "Compare Awaitr with Huntr, Notion, and Apple Reminders for tracking waitlists, job applications, and more.",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Compare", href: "/compare" },
];

const faqItems = [
  {
    question: "Is Awaitr better than Huntr?",
    answer:
      "It depends on your needs. Awaitr is better if you track multiple categories beyond jobs (scholarships, pre-orders, permits, events) and want a free, fully offline app with no account required. Huntr is better if you focus exclusively on job applications and want AI-powered resume tools, a Chrome extension, and cloud sync across devices.",
  },
  {
    question: "Can Notion replace Awaitr?",
    answer:
      "Notion can replicate some of Awaitr's functionality through custom templates, but it requires significant setup time and is cloud-dependent. Awaitr provides 8 ready-made pipeline templates out of the box with no configuration needed, works completely offline, and is purpose-built for waitlist tracking. Notion is better suited as a general productivity workspace.",
  },
  {
    question: "Why not just use Apple Reminders?",
    answer:
      "Apple Reminders is great for simple to-do lists, but it lacks waitlist-specific features like pipeline stage tracking, category templates, outcome analytics, and archiving. Awaitr is purpose-built for tracking items you're waiting on, with dedicated fields for deadlines, statuses, and follow-up reminders tailored to each category.",
  },
  {
    question: "Which app is most private?",
    answer:
      "Awaitr and Apple Reminders are both fully on-device and do not transmit data to external servers. Awaitr has zero third-party dependencies and collects no analytics whatsoever. Huntr and Notion both require cloud accounts and store your data on their servers, which means your application history and personal details are held by a third party.",
  },
];

const jsonLd = [
  generateArticleSchema({
    title: "Awaitr vs Huntr vs Notion vs Apple Reminders",
    description:
      "Compare Awaitr with Huntr, Notion, and Apple Reminders for tracking waitlists, job applications, and more.",
    url: "https://awaitr.vercel.app/compare",
    datePublished: "2026-03-27",
    dateModified: "2026-03-27",
  }),
  generateFAQSchema(faqItems),
  generateBreadcrumbSchema(breadcrumbs),
];

/* ------------------------------------------------------------------ */
/*  Table                                                              */
/* ------------------------------------------------------------------ */

const thClass = "border border-foreground/10 p-3 text-left font-semibold";
const tdClass = "border border-foreground/10 p-3";

function ComparisonTable({
  rows,
}: {
  rows: { feature: string; awaitr: string; huntr: string; notion: string; reminders: string }[];
}) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-foreground/[0.02]">
          <tr>
            <th className={thClass}>Feature</th>
            <th className={thClass}>Awaitr</th>
            <th className={thClass}>Huntr</th>
            <th className={thClass}>Notion</th>
            <th className={thClass}>Apple Reminders</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature}>
              <td className={`${tdClass} font-medium`}>{row.feature}</td>
              <td className={tdClass}>{row.awaitr}</td>
              <td className={tdClass}>{row.huntr}</td>
              <td className={tdClass}>{row.notion}</td>
              <td className={tdClass}>{row.reminders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  English rows                                                       */
/* ------------------------------------------------------------------ */

const enRows = [
  { feature: "Best For", awaitr: "Multi-category waitlist tracking", huntr: "Job application tracking", notion: "All-purpose productivity", reminders: "Simple to-do lists" },
  { feature: "Price", awaitr: "Free", huntr: "Free tier + $40/mo premium", notion: "Free tier + $10/mo", reminders: "Free (built-in)" },
  { feature: "Platform", awaitr: "iOS 26", huntr: "Web, iOS, Android", notion: "All platforms", reminders: "Apple ecosystem" },
  { feature: "Offline", awaitr: "100% offline", huntr: "No (cloud-only)", notion: "Limited offline mode", reminders: "Yes" },
  { feature: "Privacy", awaitr: "All data on-device, zero analytics", huntr: "Cloud-stored, account required", notion: "Cloud-stored, account required", reminders: "On-device (iCloud optional)" },
  { feature: "Account Required", awaitr: "No", huntr: "Yes", notion: "Yes", reminders: "No" },
  { feature: "Categories Tracked", awaitr: "8 (jobs, scholarships, pre-orders, permits, events, etc.)", huntr: "1 (jobs only)", notion: "Custom (manual setup)", reminders: "Generic lists" },
  { feature: "Pipeline Templates", awaitr: "8 built-in templates", huntr: "1 job pipeline (Kanban)", notion: "Community templates (manual)", reminders: "None" },
  { feature: "Reminders", awaitr: "Stage-specific follow-ups", huntr: "Basic reminders", notion: "Date-based reminders", reminders: "Date/location reminders" },
  { feature: "Analytics / Archive", awaitr: "Outcome analytics + archive", huntr: "Basic stats (premium)", notion: "Manual (via formulas)", reminders: "None" },
  { feature: "Export", awaitr: "Yes", huntr: "CSV (premium)", notion: "Markdown / CSV", reminders: "No" },
  { feature: "App Size", awaitr: "Under 15 MB", huntr: "~80 MB", notion: "~200 MB", reminders: "Built into iOS" },
];

/* ------------------------------------------------------------------ */
/*  Indonesian rows                                                    */
/* ------------------------------------------------------------------ */

const idRows = [
  { feature: "Terbaik Untuk", awaitr: "Pelacakan daftar tunggu multi-kategori", huntr: "Pelacakan lamaran kerja", notion: "Produktivitas serbaguna", reminders: "Daftar tugas sederhana" },
  { feature: "Harga", awaitr: "Gratis", huntr: "Gratis + $40/bln premium", notion: "Gratis + $10/bln", reminders: "Gratis (bawaan)" },
  { feature: "Platform", awaitr: "iOS 26", huntr: "Web, iOS, Android", notion: "Semua platform", reminders: "Ekosistem Apple" },
  { feature: "Offline", awaitr: "100% offline", huntr: "Tidak (hanya cloud)", notion: "Mode offline terbatas", reminders: "Ya" },
  { feature: "Privasi", awaitr: "Semua data di perangkat, tanpa analitik", huntr: "Disimpan di cloud, perlu akun", notion: "Disimpan di cloud, perlu akun", reminders: "Di perangkat (iCloud opsional)" },
  { feature: "Akun Diperlukan", awaitr: "Tidak", huntr: "Ya", notion: "Ya", reminders: "Tidak" },
  { feature: "Kategori Dilacak", awaitr: "8 (kerja, beasiswa, pre-order, izin, acara, dll.)", huntr: "1 (hanya kerja)", notion: "Kustom (setup manual)", reminders: "Daftar generik" },
  { feature: "Template Alur Proses", awaitr: "8 template bawaan", huntr: "1 alur proses kerja (Kanban)", notion: "Template komunitas (manual)", reminders: "Tidak ada" },
  { feature: "Pengingat", awaitr: "Tindak lanjut per tahap", huntr: "Pengingat dasar", notion: "Pengingat berbasis tanggal", reminders: "Pengingat tanggal/lokasi" },
  { feature: "Analitik / Arsip", awaitr: "Analitik hasil + arsip", huntr: "Statistik dasar (premium)", notion: "Manual (via formula)", reminders: "Tidak ada" },
  { feature: "Ekspor", awaitr: "Ya", huntr: "CSV (premium)", notion: "Markdown / CSV", reminders: "Tidak" },
  { feature: "Ukuran Aplikasi", awaitr: "Di bawah 15 MB", huntr: "~80 MB", notion: "~200 MB", reminders: "Bawaan iOS" },
];

/* ------------------------------------------------------------------ */
/*  English Content                                                    */
/* ------------------------------------------------------------------ */

function EnglishContent() {
  return (
    <>
      <header>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Awaitr vs Huntr vs Notion vs Apple Reminders
        </h1>
        <time dateTime="2026-03-27" className="text-sm text-foreground/50 block mb-8">
          March 27, 2026
        </time>
      </header>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Choosing the right tool to track things you&apos;re waiting on — job applications,
        scholarship decisions, pre-order deliveries, permit approvals — can make a real difference
        in how organized and stress-free your life feels. There are several options available today,
        each with its own strengths and trade-offs. This page offers an honest, side-by-side
        comparison of four popular choices: <strong>Awaitr</strong>, <strong>Huntr</strong>,{" "}
        <strong>Notion</strong>, and <strong>Apple Reminders</strong>. We&apos;ll look at features,
        pricing, privacy, and ideal use cases so you can decide which one fits your workflow best.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Quick Comparison</h2>

      <p className="text-foreground/70 leading-relaxed mb-4">
        The table below summarizes the key differences between Awaitr, Huntr, Notion, and Apple
        Reminders across twelve important dimensions. Scroll horizontally on mobile to see all
        columns.
      </p>

      <ComparisonTable rows={enRows} />

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Awaitr</h2>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr is a free iOS 26 app designed specifically for tracking waitlists and pending
        decisions across multiple areas of life. Unlike general productivity tools, Awaitr ships
        with 8 category-specific pipeline templates — covering job applications, scholarships,
        pre-orders, permits, events, and more — so you can start tracking immediately without any
        configuration. Every piece of data stays on your device. There is no account to create, no
        cloud sync, and no analytics collected. Built in Swift 6.2 with zero third-party
        dependencies, the app weighs under 15 MB and features Apple&apos;s new Liquid Glass UI
        design language.
      </p>

      <p className="text-foreground/70 leading-relaxed mb-4">
        What sets Awaitr apart is its focus on the &ldquo;waiting&rdquo; phase of any process.
        Most productivity tools handle tasks you need to do, but Awaitr handles things that are out
        of your hands — decisions pending from other people or organizations. Each template includes
        stage-specific follow-up reminders, outcome tracking, and an archive so you can review past
        results and spot patterns over time.
      </p>

      <p className="text-foreground/70 leading-relaxed mb-4">
        The trade-off is clear: Awaitr is iOS-only and has no cloud sync. If you need to access
        your data across multiple devices or platforms, Awaitr is not the right choice today. It
        prioritizes privacy and simplicity over cross-platform availability.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Huntr</h2>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Huntr is a well-established job application tracker available on web, iOS, and Android. Its
        free tier lets you track a limited number of applications on a Kanban-style board, while the
        premium plan ($40/month) unlocks AI-powered resume and cover letter builders, a Chrome
        extension for saving job listings, advanced analytics, and unlimited tracking. Huntr excels
        at the job search workflow — it understands job-specific fields like company name, role,
        salary range, and interview stages.
      </p>

      <p className="text-foreground/70 leading-relaxed mb-4">
        The main limitation of Huntr is its single-category focus. It tracks job applications and
        nothing else. If you also need to track scholarship applications, apartment waitlists, or
        product pre-orders, you&apos;ll need a separate tool. Huntr also requires an account and
        stores all data in the cloud, which may concern privacy-minded users. The premium pricing at
        $40 per month is significant, especially for job seekers who may be between positions.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Notion</h2>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Notion is a powerful, infinitely customizable workspace that can be adapted to nearly any
        use case, including waitlist and application tracking. Its template ecosystem includes
        community-built job trackers, scholarship organizers, and project pipelines. Notion works
        across all platforms and offers a generous free tier for personal use. For teams and advanced
        features, plans start at $10 per month.
      </p>

      <p className="text-foreground/70 leading-relaxed mb-4">
        However, Notion&apos;s flexibility is also its biggest hurdle for waitlist tracking. Setting
        up a functional pipeline tracker in Notion requires creating databases, configuring
        properties, building views, and potentially writing formulas — a process that can take
        hours. Notion is cloud-dependent, requires an account, and its mobile app (around 200 MB)
        is considerably heavier than purpose-built alternatives. For users who already live in
        Notion, adding a tracker template makes sense. For everyone else, the setup overhead may
        not be worth it for simple waitlist tracking.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Apple Reminders</h2>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Apple Reminders is the default task manager on every iPhone, iPad, and Mac. Since iOS 17,
        it includes a column view that mimics Kanban boards, making it more versatile than before.
        It&apos;s free, already installed, supports date and location-based reminders, and stores
        data on-device with optional iCloud sync. For basic to-do tracking, it is hard to beat.
      </p>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Where Apple Reminders falls short is in structured pipeline tracking. It has no concept of
        categories like &ldquo;job application&rdquo; or &ldquo;scholarship,&rdquo; no built-in
        templates, no stage-specific fields (like &ldquo;interview date&rdquo; or &ldquo;decision
        deadline&rdquo;), and no analytics or archiving features. You can create a list called
        &ldquo;Job Applications&rdquo; and add items to it, but there&apos;s no structure to guide
        you through the process or help you track outcomes. It works for simple reminders but
        struggles as a dedicated waitlist manager.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Which Is Right for You?</h2>

      <ul className="list-disc pl-6 space-y-3 text-foreground/70 leading-relaxed mb-8">
        <li>
          <strong>Choose Awaitr</strong> if you want a free, private, offline app that tracks
          multiple types of waitlists with ready-made pipeline templates and no setup required. Ideal
          for people who value simplicity, privacy, and category-specific tracking on iOS.
        </li>
        <li>
          <strong>Choose Huntr</strong> if your sole focus is job applications and you want
          AI-powered resume tools, a Chrome extension for saving listings, and cloud sync across
          devices. Best for active job seekers who need advanced career-focused features.
        </li>
        <li>
          <strong>Choose Notion</strong> if you already use Notion as your productivity hub and want
          everything in one workspace. Best for power users who enjoy customizing databases and
          don&apos;t mind spending time on setup.
        </li>
        <li>
          <strong>Choose Apple Reminders</strong> if your tracking needs are minimal and you just
          want a simple list with basic reminders. Best for people who don&apos;t need pipeline
          stages, analytics, or category-specific templates.
        </li>
      </ul>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Frequently Asked Questions</h2>

      {faqItems.map((item) => (
        <section key={item.question} className="mb-6">
          <h3 className="font-display text-lg font-semibold mb-2">{item.question}</h3>
          <p className="text-foreground/70 leading-relaxed mb-4">{item.answer}</p>
        </section>
      ))}

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Related</h2>

      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
        <li>
          <Link href="/privacy" className="text-violet hover:underline">
            Privacy Policy
          </Link>{" "}
          — Learn how Awaitr protects your data
        </li>
        <li>
          <Link href="/support" className="text-violet hover:underline">
            Support
          </Link>{" "}
          — Get help with Awaitr
        </li>
        <li>
          <Link href="/" className="text-violet hover:underline">
            Home
          </Link>{" "}
          — Back to the Awaitr landing page
        </li>
      </ul>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Indonesian Content                                                 */
/* ------------------------------------------------------------------ */

function IndonesianContent() {
  return (
    <>
      <header>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Awaitr vs Huntr vs Notion vs Apple Reminders
        </h1>
        <time dateTime="2026-03-27" className="text-sm text-foreground/50 block mb-8">
          27 Maret 2026
        </time>
      </header>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Memilih alat yang tepat untuk melacak hal-hal yang sedang Anda tunggu — lamaran kerja,
        keputusan beasiswa, pengiriman pre-order, persetujuan izin — dapat membuat perbedaan nyata
        dalam keteraturan dan ketenangan hidup Anda. Saat ini ada beberapa pilihan yang tersedia,
        masing-masing dengan kelebihan dan kekurangannya. Halaman ini menyajikan perbandingan jujur
        dan berdampingan dari empat pilihan populer: <strong>Awaitr</strong>,{" "}
        <strong>Huntr</strong>, <strong>Notion</strong>, dan <strong>Apple Reminders</strong>. Kami
        akan melihat fitur, harga, privasi, dan kasus penggunaan ideal agar Anda dapat memutuskan
        mana yang paling cocok untuk alur kerja Anda.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Perbandingan Cepat</h2>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Tabel di bawah merangkum perbedaan utama antara Awaitr, Huntr, Notion, dan Apple Reminders
        dalam dua belas dimensi penting. Gulir ke samping di perangkat seluler untuk melihat semua
        kolom.
      </p>

      <ComparisonTable rows={idRows} />

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Awaitr</h2>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr adalah aplikasi iOS 26 gratis yang dirancang khusus untuk melacak daftar tunggu dan
        keputusan yang tertunda di berbagai bidang kehidupan. Berbeda dengan alat produktivitas
        umum, Awaitr dilengkapi 8 template alur proses spesifik kategori — mencakup lamaran kerja,
        beasiswa, pre-order, izin, acara, dan lainnya — sehingga Anda bisa langsung mulai melacak
        tanpa konfigurasi apa pun. Semua data tetap di perangkat Anda. Tidak ada akun yang perlu
        dibuat, tidak ada sinkronisasi cloud, dan tidak ada analitik yang dikumpulkan. Dibangun
        dengan Swift 6.2 tanpa dependensi pihak ketiga, aplikasi ini berukuran di bawah 15 MB dan
        menampilkan bahasa desain Liquid Glass UI terbaru dari Apple.
      </p>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Yang membedakan Awaitr adalah fokusnya pada fase &ldquo;menunggu&rdquo; dari setiap proses.
        Kebanyakan alat produktivitas menangani tugas yang perlu Anda kerjakan, tetapi Awaitr
        menangani hal-hal yang berada di luar kendali Anda — keputusan yang tertunda dari orang
        atau organisasi lain. Setiap template mencakup pengingat tindak lanjut per tahap, pelacakan
        hasil, dan arsip sehingga Anda dapat meninjau hasil masa lalu dan menemukan pola dari waktu
        ke waktu.
      </p>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Kekurangannya jelas: Awaitr hanya tersedia di iOS dan tidak memiliki sinkronisasi cloud.
        Jika Anda perlu mengakses data di beberapa perangkat atau platform, Awaitr bukan pilihan
        yang tepat saat ini. Aplikasi ini memprioritaskan privasi dan kesederhanaan di atas
        ketersediaan lintas platform.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Huntr</h2>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Huntr adalah pelacak lamaran kerja yang sudah mapan, tersedia di web, iOS, dan Android.
        Paket gratisnya memungkinkan Anda melacak sejumlah terbatas lamaran di papan bergaya Kanban,
        sementara paket premium ($40/bulan) membuka pembuat resume dan surat lamaran berbasis AI,
        ekstensi Chrome untuk menyimpan lowongan, analitik lanjutan, dan pelacakan tanpa batas.
        Huntr unggul dalam alur kerja pencarian kerja — ia memahami bidang khusus pekerjaan seperti
        nama perusahaan, posisi, kisaran gaji, dan tahapan wawancara.
      </p>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Keterbatasan utama Huntr adalah fokusnya pada satu kategori. Huntr melacak lamaran kerja dan
        tidak lebih. Jika Anda juga perlu melacak aplikasi beasiswa, daftar tunggu apartemen, atau
        pre-order produk, Anda memerlukan alat terpisah. Huntr juga memerlukan akun dan menyimpan
        semua data di cloud, yang mungkin menjadi perhatian bagi pengguna yang peduli privasi.
        Harga premium $40 per bulan cukup signifikan, terutama bagi pencari kerja yang mungkin
        sedang di antara posisi.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Notion</h2>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Notion adalah ruang kerja yang kuat dan sangat bisa dikustomisasi yang dapat disesuaikan
        untuk hampir semua kasus penggunaan, termasuk pelacakan daftar tunggu dan lamaran.
        Ekosistem templatenya mencakup pelacak kerja, pengatur beasiswa, dan alur proses proyek
        buatan komunitas. Notion berfungsi di semua platform dan menawarkan paket gratis yang
        cukup besar untuk penggunaan pribadi. Untuk tim dan fitur lanjutan, paket mulai dari $10
        per bulan.
      </p>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Namun, fleksibilitas Notion juga menjadi hambatan terbesarnya untuk pelacakan daftar
        tunggu. Menyiapkan pelacak alur proses yang fungsional di Notion memerlukan pembuatan
        database, konfigurasi properti, pembuatan tampilan, dan mungkin penulisan formula — proses
        yang bisa memakan waktu berjam-jam. Notion bergantung pada cloud, memerlukan akun, dan
        aplikasi selulernya (sekitar 200 MB) jauh lebih berat dibandingkan alternatif yang dibuat
        khusus. Bagi pengguna yang sudah tinggal di Notion, menambahkan template pelacak masuk akal.
        Bagi yang lain, beban setup mungkin tidak sebanding untuk pelacakan daftar tunggu sederhana.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Apple Reminders</h2>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Apple Reminders adalah pengelola tugas bawaan di setiap iPhone, iPad, dan Mac. Sejak iOS
        17, ia menyertakan tampilan kolom yang meniru papan Kanban, menjadikannya lebih serbaguna
        dari sebelumnya. Aplikasi ini gratis, sudah terpasang, mendukung pengingat berbasis tanggal
        dan lokasi, serta menyimpan data di perangkat dengan sinkronisasi iCloud opsional. Untuk
        pelacakan tugas dasar, sulit untuk dikalahkan.
      </p>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Di mana Apple Reminders kurang adalah dalam pelacakan alur proses terstruktur. Ia tidak
        memiliki konsep kategori seperti &ldquo;lamaran kerja&rdquo; atau &ldquo;beasiswa,&rdquo;
        tidak ada template bawaan, tidak ada bidang khusus tahap (seperti &ldquo;tanggal
        wawancara&rdquo; atau &ldquo;batas waktu keputusan&rdquo;), dan tidak ada fitur analitik
        atau pengarsipan. Anda bisa membuat daftar bernama &ldquo;Lamaran Kerja&rdquo; dan
        menambahkan item ke dalamnya, tetapi tidak ada struktur yang memandu Anda melalui proses
        atau membantu melacak hasil. Ia berfungsi untuk pengingat sederhana tetapi kesulitan sebagai
        pengelola daftar tunggu khusus.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Mana yang Tepat untuk Anda?</h2>

      <ul className="list-disc pl-6 space-y-3 text-foreground/70 leading-relaxed mb-8">
        <li>
          <strong>Pilih Awaitr</strong> jika Anda menginginkan aplikasi gratis, privat, dan offline
          yang melacak berbagai jenis daftar tunggu dengan template alur proses siap pakai tanpa
          perlu setup. Ideal untuk orang yang menghargai kesederhanaan, privasi, dan pelacakan
          khusus kategori di iOS.
        </li>
        <li>
          <strong>Pilih Huntr</strong> jika fokus utama Anda adalah lamaran kerja dan Anda
          menginginkan alat resume berbasis AI, ekstensi Chrome untuk menyimpan lowongan, dan
          sinkronisasi cloud antar perangkat. Terbaik untuk pencari kerja aktif yang membutuhkan
          fitur lanjutan berfokus karier.
        </li>
        <li>
          <strong>Pilih Notion</strong> jika Anda sudah menggunakan Notion sebagai pusat
          produktivitas dan ingin semuanya dalam satu ruang kerja. Terbaik untuk pengguna tingkat
          lanjut yang suka mengkustomisasi database dan tidak keberatan menghabiskan waktu untuk
          setup.
        </li>
        <li>
          <strong>Pilih Apple Reminders</strong> jika kebutuhan pelacakan Anda minimal dan Anda
          hanya memerlukan daftar sederhana dengan pengingat dasar. Terbaik untuk orang yang tidak
          membutuhkan tahapan alur proses, analitik, atau template khusus kategori.
        </li>
      </ul>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Pertanyaan yang Sering Diajukan</h2>

      <section className="mb-6">
        <h3 className="font-display text-lg font-semibold mb-2">Apakah Awaitr lebih baik dari Huntr?</h3>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Tergantung kebutuhan Anda. Awaitr lebih baik jika Anda melacak banyak kategori selain
          pekerjaan (beasiswa, pre-order, izin, acara) dan menginginkan aplikasi gratis yang
          sepenuhnya offline tanpa perlu akun. Huntr lebih baik jika Anda fokus secara eksklusif
          pada lamaran kerja dan menginginkan alat resume berbasis AI, ekstensi Chrome, dan
          sinkronisasi cloud antar perangkat.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="font-display text-lg font-semibold mb-2">Bisakah Notion menggantikan Awaitr?</h3>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Notion bisa meniru sebagian fungsionalitas Awaitr melalui template kustom, tetapi
          memerlukan waktu setup yang signifikan dan bergantung pada cloud. Awaitr menyediakan 8
          template alur proses siap pakai tanpa konfigurasi, bekerja sepenuhnya offline, dan dibuat
          khusus untuk pelacakan daftar tunggu. Notion lebih cocok sebagai ruang kerja produktivitas
          umum.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="font-display text-lg font-semibold mb-2">Mengapa tidak cukup menggunakan Apple Reminders?</h3>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Apple Reminders bagus untuk daftar tugas sederhana, tetapi kurang memiliki fitur khusus
          daftar tunggu seperti pelacakan tahap alur proses, template kategori, analitik hasil, dan
          pengarsipan. Awaitr dibuat khusus untuk melacak item yang sedang Anda tunggu, dengan
          bidang khusus untuk tenggat waktu, status, dan pengingat tindak lanjut yang disesuaikan
          untuk setiap kategori.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="font-display text-lg font-semibold mb-2">Aplikasi mana yang paling privat?</h3>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Awaitr dan Apple Reminders keduanya sepenuhnya di perangkat dan tidak mengirim data ke
          server eksternal. Awaitr tidak memiliki dependensi pihak ketiga dan tidak mengumpulkan
          analitik apa pun. Huntr dan Notion keduanya memerlukan akun cloud dan menyimpan data Anda
          di server mereka, yang berarti riwayat lamaran dan detail pribadi Anda dipegang oleh pihak
          ketiga.
        </p>
      </section>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">Terkait</h2>

      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
        <li>
          <Link href="/privacy" className="text-violet hover:underline">
            Kebijakan Privasi
          </Link>{" "}
          — Pelajari bagaimana Awaitr melindungi data Anda
        </li>
        <li>
          <Link href="/support" className="text-violet hover:underline">
            Dukungan
          </Link>{" "}
          — Dapatkan bantuan dengan Awaitr
        </li>
        <li>
          <Link href="/" className="text-violet hover:underline">
            Beranda
          </Link>{" "}
          — Kembali ke halaman utama Awaitr
        </li>
      </ul>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ComparePage() {
  return (
    <ContentPageShell breadcrumbs={breadcrumbs} jsonLd={jsonLd}>
      <BilingualContent en={<EnglishContent />} id={<IndonesianContent />} />
    </ContentPageShell>
  );
}
