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
  title: "Why You Keep Losing Track of Things You're Waiting For | Awaitr",
  description:
    "You're waiting for dozens of things right now — job responses, deliveries, approvals. Here's why you keep losing track, and what to do about it.",
  openGraph: {
    title: "Why You Keep Losing Track of Things You're Waiting For",
    description:
      "You're waiting for dozens of things right now — job responses, deliveries, approvals. Here's why you keep losing track, and what to do about it.",
    type: "article",
    url: "https://awaitr.vercel.app/blog/losing-track",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog/losing-track" },
  { label: "Why You Keep Losing Track", href: "/blog/losing-track" },
];

const faqItems = [
  {
    question: "What is the best way to track things I'm waiting for?",
    answer:
      "A purpose-built waitlist tracker like Awaitr gives you a single place to manage all your pending items — job applications, deliveries, approvals, and more — with category-specific pipeline stages and automatic reminders, so nothing falls through the cracks.",
  },
  {
    question: "Why do spreadsheets fail for tracking waitlists?",
    answer:
      "Spreadsheets require constant manual upkeep, don't send reminders, and have no concept of pipeline stages. Most people abandon their tracking spreadsheets within a few weeks because the overhead of maintaining them outweighs the benefit.",
  },
  {
    question: "Is Awaitr free to use?",
    answer:
      "Yes. Awaitr is completely free, requires no account, and stores all data locally on your device. It includes 8 category-specific pipeline templates and works entirely offline.",
  },
];

const jsonLd = [
  generateArticleSchema({
    title: "Why You Keep Losing Track of Things You're Waiting For",
    description:
      "You're waiting for dozens of things right now — job responses, deliveries, approvals. Here's why you keep losing track, and what to do about it.",
    url: "https://awaitr.vercel.app/blog/losing-track",
    datePublished: "2026-03-27",
    dateModified: "2026-03-27",
  }),
  generateFAQSchema(faqItems),
  generateBreadcrumbSchema(breadcrumbs),
];

function EnglishContent() {
  return (
    <>
      <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Why You Keep Losing Track of Things You&apos;re Waiting For
      </h1>
      <time className="text-sm text-foreground/40 block mb-8">
        March 27, 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Right now, you are waiting for something. Probably several things.
        A response to a job application you submitted two weeks ago. A package
        that should have arrived by Thursday. An approval from your landlord
        about that maintenance request. A confirmation email for an event
        you signed up for last month.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        If you&apos;re like most people, these things live in different places.
        The job application status is somewhere in your email. The package
        tracking number is in a confirmation email you&apos;ve already archived.
        The maintenance request? You texted your landlord, so it&apos;s in
        Messages. The event confirmation might be in your calendar — or maybe
        you forgot to add it.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        This is how things get lost. Not because you&apos;re disorganized, but
        because{" "}
        <strong className="text-foreground font-medium">
          no single tool is designed to show you everything you&apos;re waiting
          for
        </strong>
        . You end up with a fragmented system that relies on your memory to
        hold it all together — and memory is the least reliable tool you have.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        The Scattered Tracking Problem
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Most people use a combination of tools to keep track of pending items,
        and every single one of them has fundamental limitations when used for
        waitlist tracking.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">Email</strong> is where
        most waiting begins. You apply for a job, you get a confirmation email.
        You order a product, you get a receipt. But email is a communication
        tool, not a tracking tool. That confirmation gets buried under
        newsletters, promotions, and other messages within hours. Searching for
        it later means remembering exactly who sent it and when — information
        you&apos;ve often forgotten by the time you need it.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">Notes apps</strong>{" "}
        seem like a natural solution. You create a note called &quot;Things
        I&apos;m Waiting For&quot; and start listing items. This works for about
        three days. Then you forget to update it. Or you update it but
        don&apos;t check it. Notes are passive — they don&apos;t remind you that
        it&apos;s been 14 days since you submitted that application and you
        should probably follow up.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">Calendars</strong> are
        for events with fixed dates and times. A waitlist item is fundamentally
        different: it has an uncertain timeline. You don&apos;t know when
        you&apos;ll hear back from that company. Putting &quot;Check on job
        application&quot; on your calendar for next Friday is a guess, not a
        system.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">Memory</strong> is the
        default fallback, and it is the worst option. Research in cognitive
        psychology consistently shows that humans are poor at remembering
        open-ended tasks. We remember what&apos;s urgent and recent, and forget
        what&apos;s important but not immediately pressing. A visa application
        you submitted three weeks ago is critically important, but your brain
        has moved on to today&apos;s problems.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Why Spreadsheets Aren&apos;t the Answer
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        The organized among us eventually reach for spreadsheets. Google Sheets
        or Excel, with columns for item name, date submitted, status, next
        action, and notes. On paper, this is a solid system. In practice, it
        falls apart for a specific reason:{" "}
        <strong className="text-foreground font-medium">
          spreadsheets demand discipline that the tool itself does nothing to
          enforce
        </strong>
        .
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        A spreadsheet won&apos;t remind you to update it. It won&apos;t notify
        you when an item has been sitting in &quot;Pending&quot; for too long.
        It won&apos;t tell you that you submitted five applications last week
        and haven&apos;t heard back from any of them. It&apos;s a grid of cells.
        Everything beyond data storage is your responsibility.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Most spreadsheet-based tracking systems get abandoned within two to
        three weeks. The initial setup feels productive — you&apos;re
        organizing! — but the ongoing maintenance is tedious. You open the
        spreadsheet, scan through rows, try to remember what changed, update a
        few cells, and close it. Next week, you forget. The week after, the
        spreadsheet is out of date and unreliable, so you stop trusting it.
        Without trust, no tracking system works.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Why Notion Falls Short
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Notion is genuinely excellent software. For documentation, wikis, and
        collaborative workspaces, it&apos;s hard to beat. But using Notion as a
        personal waitlist tracker means fighting against its strengths.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        First, setup. Creating a useful waitlist tracker in Notion requires
        designing a database, defining properties, setting up views, and
        possibly configuring automations. There are templates for this, but they
        invariably need customization to match your specific categories. Most
        people spend an hour setting things up and another hour tweaking the
        system before they ever track a single item.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Second, Notion is cloud-dependent. Your data lives on Notion&apos;s
        servers. For many use cases, that&apos;s fine. But for personal waiting
        data — job applications with salary expectations, government document
        statuses, financial decisions — cloud storage adds an unnecessary layer
        of exposure.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Third, Notion doesn&apos;t have native reminders tied to pipeline
        stages. You can set date-based reminders, but there&apos;s no built-in
        concept of &quot;this item has been in the Interview stage for 10 days,
        you should follow up.&quot; That kind of context-aware nudging requires
        a tool that understands what waitlist stages mean.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        What Actually Works
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        The tracking tool that actually works is the one you don&apos;t have to
        think about maintaining. It needs to be{" "}
        <strong className="text-foreground font-medium">
          ready immediately
        </strong>{" "}
        — no setup, no configuration, no database design. It needs to{" "}
        <strong className="text-foreground font-medium">
          remind you automatically
        </strong>{" "}
        — not on arbitrary dates, but based on how long something has been in a
        particular stage. It needs to{" "}
        <strong className="text-foreground font-medium">
          show your progress
        </strong>{" "}
        — so you can see at a glance what&apos;s moving and what&apos;s stuck.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        This is why we built{" "}
        <Link href="/" className="text-violet hover:underline">
          Awaitr
        </Link>
        . It comes with 8 category-specific pipeline templates — job
        applications, government documents, shopping pre-orders, event
        registrations, and more — so you&apos;re tracking items in stages that
        make sense from the moment you open the app. No setup. No account.
        Everything stays on your device.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        When you add a job application, it starts in &quot;Applied&quot; and
        moves through stages like &quot;Screening,&quot;
        &quot;Interview,&quot; and &quot;Offer.&quot; When you add a package,
        it moves through &quot;Ordered,&quot; &quot;Shipped,&quot; and
        &quot;Delivered.&quot; The stages match reality because they were
        designed for these specific categories, not adapted from a generic
        template.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Who This Is For
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Let&apos;s be honest about scope. If you&apos;re tracking one thing —
        a single package or a single job application — you don&apos;t need a
        dedicated app. A sticky note works fine.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr is for the person juggling{" "}
        <strong className="text-foreground font-medium">
          five or more waiting items across multiple categories
        </strong>
        . The job seeker who has applied to 15 positions and needs to track
        which ones responded, which ones want interviews, and which ones went
        silent. The student managing scholarship applications, housing
        waitlists, and course enrollment deadlines simultaneously. The person
        who ordered holiday gifts from six different stores and needs to know
        what has shipped and what hasn&apos;t.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        If that sounds like you — if you&apos;ve ever thought &quot;wait, did I
        ever hear back about that?&quot; — then you understand the problem. And
        you know that the solution isn&apos;t another note or another
        spreadsheet column. It&apos;s a tool that was built specifically for
        this.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Frequently Asked Questions
      </h2>
      {faqItems.map((item) => (
        <div key={item.question} className="mb-6">
          <h3 className="font-display text-xl font-semibold mb-3 mt-8">
            {item.question}
          </h3>
          <p className="text-foreground/70 leading-relaxed mb-4">
            {item.answer}
          </p>
        </div>
      ))}

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Related Reading
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>
          <Link href="/compare" className="text-violet hover:underline">
            How Awaitr Compares to Other Tracking Tools
          </Link>
        </li>
        <li>
          <Link
            href="/use-cases/job-seekers"
            className="text-violet hover:underline"
          >
            Awaitr for Job Seekers
          </Link>
        </li>
        <li>
          <Link
            href="/use-cases/students"
            className="text-violet hover:underline"
          >
            Awaitr for Students
          </Link>
        </li>
      </ul>
    </>
  );
}

function IndonesianContent() {
  return (
    <>
      <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Mengapa Anda Terus Kehilangan Jejak Hal-Hal yang Anda Tunggu
      </h1>
      <time className="text-sm text-foreground/40 block mb-8">
        27 Maret 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Saat ini, Anda sedang menunggu sesuatu. Mungkin beberapa hal sekaligus.
        Balasan dari lamaran kerja yang Anda kirim dua minggu lalu. Paket yang
        seharusnya sudah tiba hari Kamis. Persetujuan dari pemilik kos tentang
        permintaan perbaikan. Email konfirmasi untuk acara yang Anda daftarkan
        bulan lalu.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Jika Anda seperti kebanyakan orang, hal-hal ini tersebar di berbagai
        tempat. Status lamaran kerja ada di suatu tempat di email Anda. Nomor
        pelacakan paket ada di email konfirmasi yang sudah Anda arsipkan.
        Permintaan perbaikan? Anda mengirim pesan ke pemilik kos, jadi ada di
        Messages. Konfirmasi acara mungkin ada di kalender — atau mungkin Anda
        lupa menambahkannya.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Beginilah cara hal-hal hilang. Bukan karena Anda tidak terorganisir,
        tetapi karena{" "}
        <strong className="text-foreground font-medium">
          tidak ada satu alat pun yang dirancang untuk menunjukkan semua hal
          yang sedang Anda tunggu
        </strong>
        . Anda berakhir dengan sistem yang terfragmentasi yang mengandalkan
        ingatan Anda untuk menyatukan semuanya — dan ingatan adalah alat yang
        paling tidak bisa diandalkan.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Masalah Pelacakan yang Tersebar
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Kebanyakan orang menggunakan kombinasi alat untuk melacak hal-hal yang
        tertunda, dan setiap alat memiliki keterbatasan fundamental ketika
        digunakan untuk melacak daftar tunggu.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">Email</strong> adalah
        tempat sebagian besar penantian dimulai. Anda melamar kerja, Anda
        mendapat email konfirmasi. Anda memesan produk, Anda mendapat kwitansi.
        Tapi email adalah alat komunikasi, bukan alat pelacakan. Konfirmasi itu
        terkubur di bawah newsletter, promosi, dan pesan lain dalam hitungan
        jam. Mencarinya nanti berarti harus mengingat persis siapa yang
        mengirimnya dan kapan — informasi yang sering sudah Anda lupakan saat
        Anda membutuhkannya.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">Aplikasi catatan</strong>{" "}
        tampak seperti solusi alami. Anda membuat catatan berjudul &quot;Hal-Hal
        yang Saya Tunggu&quot; dan mulai membuat daftar. Ini bekerja selama
        sekitar tiga hari. Lalu Anda lupa memperbarui. Atau Anda memperbarui
        tapi tidak mengeceknya. Catatan bersifat pasif — tidak mengingatkan
        Anda bahwa sudah 14 hari sejak Anda mengirim lamaran itu dan mungkin
        sudah waktunya untuk menindaklanjuti.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">Kalender</strong>{" "}
        dirancang untuk acara dengan tanggal dan waktu tetap. Item daftar tunggu
        pada dasarnya berbeda: memiliki timeline yang tidak pasti. Anda tidak
        tahu kapan perusahaan itu akan menghubungi. Memasukkan &quot;Cek
        lamaran kerja&quot; di kalender untuk hari Jumat depan adalah tebakan,
        bukan sistem.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">Ingatan</strong> adalah
        cadangan terakhir, dan ini adalah opsi terburuk. Penelitian dalam
        psikologi kognitif secara konsisten menunjukkan bahwa manusia buruk
        dalam mengingat tugas yang bersifat terbuka. Kita mengingat yang
        mendesak dan baru, dan melupakan yang penting tapi tidak mendesak.
        Pengajuan visa yang Anda kirim tiga minggu lalu sangat penting, tapi
        otak Anda sudah beralih ke masalah hari ini.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Mengapa Spreadsheet Bukan Jawabannya
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Mereka yang terorganisir pada akhirnya beralih ke spreadsheet. Google
        Sheets atau Excel, dengan kolom untuk nama item, tanggal pengiriman,
        status, tindakan selanjutnya, dan catatan. Di atas kertas, ini adalah
        sistem yang solid. Dalam praktiknya, ini gagal karena alasan spesifik:{" "}
        <strong className="text-foreground font-medium">
          spreadsheet menuntut disiplin yang tidak bisa ditegakkan oleh alat itu
          sendiri
        </strong>
        .
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Spreadsheet tidak akan mengingatkan Anda untuk memperbaruinya. Tidak
        akan memberi tahu ketika item sudah terlalu lama berstatus
        &quot;Menunggu&quot;. Tidak akan memberitahu bahwa Anda mengirim lima
        lamaran minggu lalu dan belum mendapat balasan dari satupun. Ini hanya
        kumpulan sel. Semua di luar penyimpanan data adalah tanggung jawab Anda.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Kebanyakan sistem pelacakan berbasis spreadsheet ditinggalkan dalam dua
        hingga tiga minggu. Setup awal terasa produktif — Anda sedang
        mengorganisir! — tapi pemeliharaan yang berkelanjutan membosankan. Anda
        membuka spreadsheet, memindai baris demi baris, mencoba mengingat apa
        yang berubah, memperbarui beberapa sel, dan menutupnya. Minggu depan,
        Anda lupa. Minggu setelahnya, spreadsheet sudah usang dan tidak bisa
        diandalkan, jadi Anda berhenti mempercayainya. Tanpa kepercayaan, tidak
        ada sistem pelacakan yang berhasil.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Mengapa Notion Kurang Memadai
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Notion benar-benar perangkat lunak yang luar biasa. Untuk dokumentasi,
        wiki, dan ruang kerja kolaboratif, sulit ditandingi. Tapi menggunakan
        Notion sebagai pelacak daftar tunggu pribadi berarti melawan kekuatan
        utamanya.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Pertama, setup. Membuat pelacak daftar tunggu yang berguna di Notion
        memerlukan perancangan database, mendefinisikan properti, mengatur
        tampilan, dan mungkin mengonfigurasi otomasi. Ada template untuk ini,
        tapi selalu membutuhkan kustomisasi agar sesuai dengan kategori spesifik
        Anda. Kebanyakan orang menghabiskan satu jam untuk mengatur dan satu jam
        lagi untuk menyesuaikan sistem sebelum mereka melacak satu item pun.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Kedua, Notion bergantung pada cloud. Data Anda tersimpan di server
        Notion. Untuk banyak kasus penggunaan, itu tidak masalah. Tapi untuk
        data penantian pribadi — lamaran kerja dengan ekspektasi gaji, status
        dokumen pemerintah, keputusan finansial — penyimpanan cloud menambah
        lapisan eksposur yang tidak perlu.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Ketiga, Notion tidak memiliki pengingat bawaan yang terkait dengan
        tahapan alur proses. Anda bisa mengatur pengingat berdasarkan tanggal,
        tapi tidak ada konsep bawaan &quot;item ini sudah di tahap Wawancara
        selama 10 hari, Anda harus menindaklanjuti.&quot; Jenis dorongan yang
        sadar konteks seperti itu memerlukan alat yang memahami arti tahapan
        daftar tunggu.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Apa yang Benar-Benar Berhasil
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Alat pelacakan yang benar-benar berhasil adalah yang tidak perlu Anda
        pikirkan pemeliharaannya. Harus{" "}
        <strong className="text-foreground font-medium">
          langsung siap pakai
        </strong>{" "}
        — tanpa setup, tanpa konfigurasi, tanpa desain database. Harus{" "}
        <strong className="text-foreground font-medium">
          mengingatkan secara otomatis
        </strong>{" "}
        — bukan pada tanggal sembarang, tapi berdasarkan berapa lama sesuatu
        berada di tahap tertentu. Harus{" "}
        <strong className="text-foreground font-medium">
          menunjukkan progres Anda
        </strong>{" "}
        — sehingga Anda bisa melihat sekilas apa yang bergerak dan apa yang
        macet.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Inilah mengapa kami membuat{" "}
        <Link href="/" className="text-violet hover:underline">
          Awaitr
        </Link>
        . Aplikasi ini dilengkapi 8 template alur proses khusus kategori —
        lamaran kerja, dokumen pemerintah, pre-order belanja, pendaftaran acara,
        dan lainnya — sehingga Anda melacak item dalam tahapan yang masuk akal
        sejak pertama kali membuka aplikasi. Tanpa setup. Tanpa akun. Semua
        tetap di perangkat Anda.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Saat Anda menambahkan lamaran kerja, dimulai dari &quot;Melamar&quot;
        dan bergerak melalui tahapan seperti &quot;Penyaringan,&quot;
        &quot;Wawancara,&quot; dan &quot;Penawaran.&quot; Saat Anda menambahkan
        paket, bergerak melalui &quot;Dipesan,&quot; &quot;Dikirim,&quot; dan
        &quot;Diterima.&quot; Tahapan sesuai kenyataan karena dirancang untuk
        kategori spesifik ini, bukan diadaptasi dari template generik.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Untuk Siapa Ini
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Mari jujur tentang cakupannya. Jika Anda melacak satu hal — satu paket
        atau satu lamaran kerja — Anda tidak perlu aplikasi khusus. Sticky note
        sudah cukup.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr untuk orang yang mengelola{" "}
        <strong className="text-foreground font-medium">
          lima atau lebih item yang ditunggu di berbagai kategori
        </strong>
        . Pencari kerja yang sudah melamar ke 15 posisi dan perlu melacak mana
        yang merespons, mana yang ingin wawancara, dan mana yang diam saja.
        Mahasiswa yang mengelola aplikasi beasiswa, daftar tunggu perumahan, dan
        tenggat pendaftaran mata kuliah secara bersamaan. Orang yang memesan
        hadiah liburan dari enam toko berbeda dan perlu tahu mana yang sudah
        dikirim dan mana yang belum.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Jika itu terdengar seperti Anda — jika Anda pernah berpikir &quot;tunggu,
        apakah saya pernah mendapat balasan tentang itu?&quot; — maka Anda
        memahami masalahnya. Dan Anda tahu bahwa solusinya bukan catatan lain
        atau kolom spreadsheet lain. Ini adalah alat yang dibangun khusus untuk
        ini.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Pertanyaan yang Sering Diajukan
      </h2>
      <div className="mb-6">
        <h3 className="font-display text-xl font-semibold mb-3 mt-8">
          Apa cara terbaik untuk melacak hal-hal yang sedang ditunggu?
        </h3>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Pelacak daftar tunggu khusus seperti Awaitr memberi Anda satu tempat
          untuk mengelola semua item yang tertunda — lamaran kerja, pengiriman,
          persetujuan, dan lainnya — dengan tahapan alur proses khusus kategori
          dan pengingat otomatis, sehingga tidak ada yang terlewat.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="font-display text-xl font-semibold mb-3 mt-8">
          Mengapa spreadsheet gagal untuk melacak daftar tunggu?
        </h3>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Spreadsheet memerlukan pemeliharaan manual yang konstan, tidak
          mengirim pengingat, dan tidak memiliki konsep tahapan alur proses.
          Kebanyakan orang meninggalkan spreadsheet pelacakan mereka dalam
          beberapa minggu karena beban pemeliharaannya melebihi manfaatnya.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="font-display text-xl font-semibold mb-3 mt-8">
          Apakah Awaitr gratis?
        </h3>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Ya. Awaitr sepenuhnya gratis, tidak memerlukan akun, dan menyimpan
          semua data secara lokal di perangkat Anda. Termasuk 8 template alur
          proses khusus kategori dan berfungsi sepenuhnya offline.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Bacaan Terkait
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>
          <Link href="/compare" className="text-violet hover:underline">
            Perbandingan Awaitr dengan Alat Pelacakan Lain
          </Link>
        </li>
        <li>
          <Link
            href="/use-cases/job-seekers"
            className="text-violet hover:underline"
          >
            Awaitr untuk Pencari Kerja
          </Link>
        </li>
        <li>
          <Link
            href="/use-cases/students"
            className="text-violet hover:underline"
          >
            Awaitr untuk Mahasiswa
          </Link>
        </li>
      </ul>
    </>
  );
}

export default function LosingTrackPage() {
  return (
    <ContentPageShell breadcrumbs={breadcrumbs} jsonLd={jsonLd}>
      <BilingualContent en={<EnglishContent />} id={<IndonesianContent />} />
    </ContentPageShell>
  );
}
