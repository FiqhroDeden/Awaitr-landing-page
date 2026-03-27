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
  title: "Awaitr for Students — Track Scholarships & University Applications",
  description:
    "Track scholarship deadlines, university applications, and academic waitlists with Awaitr. Free, offline student application tracker.",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Use Cases", href: "/use-cases/job-seekers" },
  { label: "Students", href: "/use-cases/students" },
];

const faqItems = [
  {
    question:
      "Can I track both scholarship and university applications in Awaitr?",
    answer:
      "Yes. Awaitr supports multiple pipeline categories, so you can have a separate pipeline for scholarship applications and another for university admissions. Each pipeline has its own stages and entries, so nothing gets mixed together. You can also add pipelines for internship applications, exchange programs, or anything else you are waiting on.",
  },
  {
    question: "Does Awaitr work without internet?",
    answer:
      "Awaitr works entirely offline. All data is stored on your device, and all features including reminders, pipeline management, and archiving work without an internet connection. This makes it ideal for students who study in libraries, commute on subways, or attend campuses with unreliable wifi. There is no cloud sync and no server dependency.",
  },
  {
    question: "Is Awaitr free for students?",
    answer:
      "Awaitr is free for everyone, including students. There are no paid tiers, no subscriptions, no in-app purchases, and no ads. Every feature is available from the moment you download it. The app is under 15 MB, so it will not take up significant storage on your phone.",
  },
];

const jsonLd = [
  generateArticleSchema({
    title:
      "Awaitr for Students — Track Scholarships & University Applications",
    description:
      "Track scholarship deadlines, university applications, and academic waitlists with Awaitr. Free, offline student application tracker.",
    url: "https://awaitr.vercel.app/use-cases/students",
  }),
  generateFAQSchema(faqItems),
  generateBreadcrumbSchema(breadcrumbs),
];

export default function StudentsPage() {
  return (
    <ContentPageShell breadcrumbs={breadcrumbs} jsonLd={jsonLd}>
      <BilingualContent en={<EnglishContent />} id={<IndonesianContent />} />
    </ContentPageShell>
  );
}

function EnglishContent() {
  return (
    <>
      <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Awaitr for Students
      </h1>
      <time dateTime="2026-03-27" className="text-sm text-foreground/40 block mb-8">
        Published March 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        If you are a student applying to universities, scholarships, exchange
        programs, or internships, you already know the feeling. You have six
        scholarship applications open, each with different deadlines and
        different portals. You submitted your university application three weeks
        ago and you are not sure whether the status page ever updated. You are
        waiting to hear back from an exchange program coordinator who said they
        would email you &quot;soon.&quot; And somewhere in all of this, you also
        need to study for exams.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr is a free iOS app that helps you track all of these applications
        in one place, without needing an account, an internet connection, or any
        setup time. It is built for people who are waiting on decisions, and
        students spend a lot of their time doing exactly that.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        The Problem: Too Many Applications, Too Many Portals
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        The modern student application landscape is fragmented in a way that
        previous generations did not have to deal with. A high school senior
        applying to universities might submit applications through the Common
        App, individual university portals, and separate financial aid systems.
        A college student applying for scholarships might be tracking
        applications across five or six different foundations, each with their
        own timeline and notification method.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Add exchange programs, study abroad applications, research assistant
        positions, and internships to the mix, and you can easily have 15 to 20
        active applications running simultaneously. Each one is in a different
        stage. Some are waiting for your documents. Some are waiting for a
        committee decision. Some you submitted months ago and have not heard
        anything about.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        The typical student response is to keep a mental list, maybe backed by a
        few sticky notes or a spreadsheet that they update when they remember.
        This works for four or five applications. It breaks down completely at
        ten or fifteen. Deadlines get missed. Follow-up emails do not get sent.
        Acceptance letters get lost in spam folders because the student forgot
        they had applied to that particular program.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        How Awaitr Helps Students
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr provides category-specific pipeline templates, including one
        designed for scholarship and academic applications. When you create a new
        pipeline, you choose a category, and the app sets up stages that match
        the typical progression of that type of application.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Track Multiple Application Types
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        You are not limited to one pipeline. A student might have separate
        pipelines for university admissions, scholarship applications, and
        internship searches, all within the same app. Each pipeline operates
        independently, so you can see at a glance how your scholarship
        applications are progressing without them getting mixed up with your
        internship applications.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Reminders for Deadlines and Follow-Ups
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Every entry in Awaitr can have a reminder attached to it. If a
        scholarship requires additional documents by April 15th, you can set a
        reminder for April 12th to give yourself time to prepare. If you
        submitted a university application and the admissions office said
        decisions would be released in six weeks, you can set a reminder so you
        know when to start checking. These reminders are local notifications that
        work without internet, which matters when you are studying in a library
        basement or commuting underground.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        See Your Progress and History
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        As you move applications through their stages, Awaitr keeps a record of
        the journey. When an application reaches its final stage, whether
        accepted or rejected, it moves to your archive. Over time, your archive
        becomes a personal record of your application history. This can be
        genuinely useful when you are applying for future opportunities and need
        to remember what you applied for previously, what essays you wrote, or
        which programs you were accepted into.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Seeing your application history can also help you understand your own
        patterns. If you notice that you consistently apply to scholarships at
        the last minute, or that you tend to forget follow-ups with exchange
        program coordinators, those are patterns you can work on improving.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Why Not Spreadsheets or Notion?
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Many students use Google Sheets or Excel to track their applications,
        and it can work. The problem is that a spreadsheet is passive. It stores
        information, but it does not act on it. It will not remind you that a
        deadline is three days away. It will not show you which applications have
        been sitting without updates for too long. It will not tell you how many
        of your scholarship applications moved past the first round versus how
        many were rejected. You have to build all of that logic yourself, and
        most students do not have the time or interest to maintain a complex
        spreadsheet system.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Notion is more capable. You can build a database with custom properties,
        filtered views, and even automated reminders through integrations. But
        Notion requires significant setup to work well for application tracking.
        You need to create the database structure, define status fields, set up
        views, and learn how to use the platform if you are not already familiar
        with it. Notion is also cloud-dependent, so it requires an internet
        connection to access your data. It requires an account, which means your
        application data lives on Notion&apos;s servers. For a student who just
        wants to track where their applications stand, Notion is like using a
        construction crane to hang a picture frame.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr is purpose-built for this specific problem. You open it, pick a
        template, add your applications, and start tracking. No database design.
        No account creation. No dependency on internet access.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Built for Students
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Several aspects of Awaitr make it particularly well-suited for students:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>
          <strong>Completely free.</strong> No subscriptions, no paid tiers, no
          in-app purchases. Students already deal with enough expenses. A
          tracking tool should not be one of them.
        </li>
        <li>
          <strong>Lightweight.</strong> Awaitr is under 15 MB. It downloads in
          seconds, even on slow campus wifi, and takes up virtually no storage on
          your phone.
        </li>
        <li>
          <strong>Works offline.</strong> Libraries, subway commutes, lecture
          halls with spotty wifi, rural campuses with unreliable connections.
          Awaitr works in all of these situations because it never needs to
          contact a server.
        </li>
        <li>
          <strong>No account needed.</strong> You do not need to create an
          account, verify an email, or remember another password. Open the app
          and start using it.
        </li>
        <li>
          <strong>Private by default.</strong> Your scholarship application
          history, university acceptance and rejection decisions, and personal
          notes stay on your device. Nobody else can access them.
        </li>
        <li>
          <strong>Zero third-party dependencies.</strong> Built entirely in
          Swift 6.2 with no external libraries. This means fewer potential
          security issues and a smaller app footprint.
        </li>
      </ul>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr uses Apple&apos;s Liquid Glass design language introduced with
        iOS 26, so it feels native and modern on the latest iPhones. It is not a
        web app wrapped in a native shell. It is a genuine iOS application built
        with SwiftUI, which means it is fast, responsive, and integrates
        properly with your device.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold mb-6">
          Frequently Asked Questions
        </h2>
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group border-b border-foreground/10 py-4"
          >
            <summary className="cursor-pointer font-medium text-foreground/80 hover:text-foreground transition-colors">
              {item.question}
            </summary>
            <p className="mt-3 text-foreground/70 leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">Related</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/use-cases/job-seekers"
              className="text-violet hover:underline"
            >
              Awaitr for Job Seekers
            </Link>
          </li>
          <li>
            <Link href="/compare" className="text-violet hover:underline">
              How Awaitr compares to other tracking tools
            </Link>
          </li>
          <li>
            <Link
              href="/blog/losing-track"
              className="text-violet hover:underline"
            >
              The real cost of losing track
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

function IndonesianContent() {
  return (
    <>
      <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Awaitr untuk Pelajar
      </h1>
      <time dateTime="2026-03-27" className="text-sm text-foreground/40 block mb-8">
        Diterbitkan Maret 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Jika Anda seorang pelajar yang melamar ke universitas, beasiswa,
        program pertukaran, atau magang, Anda pasti sudah tahu rasanya. Anda
        punya enam lamaran beasiswa terbuka, masing-masing dengan tenggat waktu
        dan portal yang berbeda. Anda mengirimkan lamaran universitas tiga
        minggu lalu dan tidak yakin apakah halaman statusnya pernah diperbarui.
        Anda menunggu kabar dari koordinator program pertukaran yang bilang akan
        mengirim email &quot;segera.&quot; Dan di tengah semua ini, Anda juga
        perlu belajar untuk ujian.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr adalah aplikasi iOS gratis yang membantu Anda melacak semua
        lamaran ini di satu tempat, tanpa memerlukan akun, koneksi internet,
        atau waktu pengaturan. Aplikasi ini dibuat untuk orang-orang yang
        menunggu keputusan, dan pelajar menghabiskan banyak waktu melakukan hal
        itu.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Masalahnya: Terlalu Banyak Lamaran, Terlalu Banyak Portal
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Lanskap lamaran pelajar modern terfragmentasi dengan cara yang tidak
        pernah dialami generasi sebelumnya. Siswa SMA yang melamar universitas
        mungkin mengirimkan lamaran melalui Common App, portal universitas
        individual, dan sistem bantuan keuangan terpisah. Mahasiswa yang melamar
        beasiswa mungkin melacak lamaran di lima atau enam yayasan berbeda,
        masing-masing dengan jadwal dan metode notifikasi sendiri.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Tambahkan program pertukaran, lamaran studi ke luar negeri, posisi
        asisten peneliti, dan magang ke dalam campuran, dan Anda bisa dengan
        mudah memiliki 15 hingga 20 lamaran aktif berjalan bersamaan.
        Masing-masing berada di tahap yang berbeda. Beberapa menunggu dokumen
        dari Anda. Beberapa menunggu keputusan komite. Beberapa Anda kirimkan
        berbulan-bulan lalu dan belum mendengar kabar apa pun.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Respons khas pelajar adalah menyimpan daftar di kepala, mungkin didukung
        beberapa catatan tempel atau spreadsheet yang diperbarui saat mereka
        ingat. Ini berfungsi untuk empat atau lima lamaran. Tapi benar-benar
        gagal di angka sepuluh atau lima belas. Tenggat waktu terlewat. Email
        tindak lanjut tidak terkirim. Surat penerimaan hilang di folder spam
        karena pelajar lupa pernah melamar ke program tersebut.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Bagaimana Awaitr Membantu Pelajar
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr menyediakan template alur proses spesifik per kategori, termasuk
        yang dirancang untuk lamaran beasiswa dan akademik. Saat Anda membuat
        alur proses baru, Anda memilih kategori, dan aplikasi menyiapkan
        tahapan yang sesuai dengan perkembangan khas jenis lamaran tersebut.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Lacak Berbagai Jenis Lamaran
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Anda tidak dibatasi pada satu alur proses. Seorang pelajar mungkin
        memiliki alur proses terpisah untuk penerimaan universitas, lamaran
        beasiswa, dan pencarian magang, semuanya dalam satu aplikasi. Setiap
        alur proses beroperasi secara independen, sehingga Anda bisa melihat
        sekilas bagaimana perkembangan lamaran beasiswa tanpa tercampur dengan
        lamaran magang Anda.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Pengingat untuk Tenggat Waktu dan Tindak Lanjut
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Setiap entri di Awaitr bisa dilampirkan pengingat. Jika beasiswa
        memerlukan dokumen tambahan sebelum 15 April, Anda bisa mengatur
        pengingat untuk 12 April agar punya waktu mempersiapkan. Jika Anda
        mengirimkan lamaran universitas dan kantor penerimaan mengatakan
        keputusan akan dirilis dalam enam minggu, Anda bisa mengatur pengingat
        agar tahu kapan harus mulai memeriksa. Pengingat ini adalah notifikasi
        lokal yang berfungsi tanpa internet, yang penting saat Anda belajar di
        ruang bawah tanah perpustakaan atau naik kereta bawah tanah.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Lihat Perkembangan dan Riwayat Anda
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Saat Anda memindahkan lamaran melalui tahapan-tahapannya, Awaitr
        menyimpan catatan perjalanannya. Ketika lamaran mencapai tahap akhir,
        baik diterima maupun ditolak, ia pindah ke arsip Anda. Seiring waktu,
        arsip Anda menjadi catatan pribadi riwayat lamaran. Ini bisa sangat
        berguna saat Anda melamar kesempatan di masa depan dan perlu mengingat
        apa saja yang pernah dilamar, esai apa yang pernah ditulis, atau
        program mana yang diterima.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Melihat riwayat lamaran juga bisa membantu Anda memahami pola sendiri.
        Jika Anda menyadari bahwa Anda secara konsisten melamar beasiswa di
        menit terakhir, atau cenderung lupa menindaklanjuti koordinator program
        pertukaran, itu adalah pola yang bisa Anda perbaiki.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Kenapa Bukan Spreadsheet atau Notion?
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Banyak pelajar menggunakan Google Sheets atau Excel untuk melacak
        lamaran mereka, dan itu bisa berfungsi. Masalahnya adalah spreadsheet
        itu pasif. Ia menyimpan informasi, tapi tidak bertindak. Tidak akan
        mengingatkan Anda bahwa tenggat waktu tinggal tiga hari lagi. Tidak
        akan menunjukkan lamaran mana yang terlalu lama tanpa pembaruan. Tidak
        akan memberi tahu berapa banyak lamaran beasiswa yang lolos babak
        pertama dibanding yang ditolak. Anda harus membangun semua logika itu
        sendiri, dan kebanyakan pelajar tidak punya waktu atau minat untuk
        memelihara sistem spreadsheet yang kompleks.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Notion lebih mampu. Anda bisa membangun database dengan properti kustom,
        tampilan terfilter, dan bahkan pengingat otomatis melalui integrasi.
        Tapi Notion memerlukan pengaturan yang signifikan agar berfungsi baik
        untuk pelacakan lamaran. Anda perlu membuat struktur database,
        mendefinisikan bidang status, menyiapkan tampilan, dan belajar cara
        menggunakan platform jika belum familiar. Notion juga bergantung pada
        cloud, sehingga memerlukan koneksi internet untuk mengakses data Anda.
        Memerlukan akun, yang berarti data lamaran Anda ada di server Notion.
        Bagi pelajar yang hanya ingin melacak status lamaran, Notion seperti
        menggunakan derek konstruksi untuk menggantung bingkai foto.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr dibuat khusus untuk masalah spesifik ini. Anda membukanya,
        memilih template, menambahkan lamaran, dan mulai melacak. Tanpa desain
        database. Tanpa pembuatan akun. Tanpa ketergantungan pada akses
        internet.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Dibuat untuk Pelajar
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Beberapa aspek Awaitr membuatnya sangat cocok untuk pelajar:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>
          <strong>Sepenuhnya gratis.</strong> Tidak ada langganan, tidak ada
          paket berbayar, tidak ada pembelian dalam aplikasi. Pelajar sudah
          cukup banyak pengeluaran. Alat pelacakan seharusnya bukan salah
          satunya.
        </li>
        <li>
          <strong>Ringan.</strong> Awaitr berukuran di bawah 15 MB. Unduh dalam
          hitungan detik, bahkan dengan wifi kampus yang lambat, dan hampir
          tidak menggunakan penyimpanan di ponsel Anda.
        </li>
        <li>
          <strong>Berfungsi offline.</strong> Perpustakaan, perjalanan kereta
          bawah tanah, ruang kuliah dengan wifi tidak stabil, kampus di daerah
          dengan koneksi tidak andal. Awaitr berfungsi di semua situasi ini
          karena tidak pernah perlu menghubungi server.
        </li>
        <li>
          <strong>Tidak perlu akun.</strong> Anda tidak perlu membuat akun,
          memverifikasi email, atau mengingat kata sandi lain. Buka aplikasi
          dan langsung gunakan.
        </li>
        <li>
          <strong>Privat secara default.</strong> Riwayat lamaran beasiswa,
          keputusan penerimaan dan penolakan universitas, dan catatan pribadi
          Anda tetap di perangkat. Tidak ada orang lain yang bisa mengaksesnya.
        </li>
        <li>
          <strong>Tanpa dependensi pihak ketiga.</strong> Dibangun sepenuhnya
          dengan Swift 6.2 tanpa pustaka eksternal. Ini berarti lebih sedikit
          potensi masalah keamanan dan jejak aplikasi yang lebih kecil.
        </li>
      </ul>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr menggunakan bahasa desain Liquid Glass dari Apple yang
        diperkenalkan dengan iOS 26, sehingga terasa native dan modern di
        iPhone terbaru. Ini bukan aplikasi web yang dibungkus dalam shell
        native. Ini adalah aplikasi iOS asli yang dibangun dengan SwiftUI,
        yang berarti cepat, responsif, dan terintegrasi dengan baik dengan
        perangkat Anda.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold mb-6">
          Pertanyaan yang Sering Diajukan
        </h2>
        <details className="group border-b border-foreground/10 py-4">
          <summary className="cursor-pointer font-medium text-foreground/80 hover:text-foreground transition-colors">
            Bisakah saya melacak lamaran beasiswa dan universitas sekaligus?
          </summary>
          <p className="mt-3 text-foreground/70 leading-relaxed">
            Ya. Awaitr mendukung beberapa kategori alur proses, jadi Anda bisa
            memiliki alur proses terpisah untuk lamaran beasiswa dan satu lagi
            untuk penerimaan universitas. Setiap alur proses memiliki tahapan
            dan entri sendiri, jadi tidak ada yang tercampur. Anda juga bisa
            menambahkan alur proses untuk lamaran magang, program pertukaran,
            atau hal lain yang sedang Anda tunggu.
          </p>
        </details>
        <details className="group border-b border-foreground/10 py-4">
          <summary className="cursor-pointer font-medium text-foreground/80 hover:text-foreground transition-colors">
            Apakah Awaitr berfungsi tanpa internet?
          </summary>
          <p className="mt-3 text-foreground/70 leading-relaxed">
            Awaitr berfungsi sepenuhnya offline. Semua data disimpan di
            perangkat Anda, dan semua fitur termasuk pengingat, pengelolaan
            alur proses, dan pengarsipan berfungsi tanpa koneksi internet. Ini
            menjadikannya ideal untuk pelajar yang belajar di perpustakaan,
            bepergian dengan kereta bawah tanah, atau kuliah di kampus dengan
            wifi yang tidak andal. Tidak ada sinkronisasi cloud dan tidak ada
            ketergantungan server.
          </p>
        </details>
        <details className="group border-b border-foreground/10 py-4">
          <summary className="cursor-pointer font-medium text-foreground/80 hover:text-foreground transition-colors">
            Apakah Awaitr gratis untuk pelajar?
          </summary>
          <p className="mt-3 text-foreground/70 leading-relaxed">
            Awaitr gratis untuk semua orang, termasuk pelajar. Tidak ada paket
            berbayar, tidak ada langganan, tidak ada pembelian dalam aplikasi,
            dan tidak ada iklan. Setiap fitur tersedia sejak Anda
            mengunduhnya. Aplikasi berukuran di bawah 15 MB, jadi tidak akan
            mengambil penyimpanan yang signifikan di ponsel Anda.
          </p>
        </details>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">Terkait</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/use-cases/job-seekers"
              className="text-violet hover:underline"
            >
              Awaitr untuk Pencari Kerja
            </Link>
          </li>
          <li>
            <Link href="/compare" className="text-violet hover:underline">
              Perbandingan Awaitr dengan alat pelacakan lain
            </Link>
          </li>
          <li>
            <Link
              href="/blog/losing-track"
              className="text-violet hover:underline"
            >
              Biaya nyata dari kehilangan jejak
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
