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
  title: "Awaitr for Job Seekers — Track Every Application",
  description:
    "Track every job application from applied to offer with Awaitr. Free, offline, and private pipeline tracking for job seekers.",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Use Cases", href: "/use-cases/job-seekers" },
  { label: "Job Seekers", href: "/use-cases/job-seekers" },
];

const faqItems = [
  {
    question: "Is Awaitr better than a spreadsheet for job tracking?",
    answer:
      "For most job seekers, yes. Spreadsheets are flexible but they do not send reminders, they do not show you how long you have been waiting at each stage, and they require manual formatting. Awaitr gives you a ready-made pipeline with stages like Applied, Screening, Interview, and Offer, so you can start tracking immediately without building a system from scratch. If you already have a spreadsheet workflow that works well for you, there is no pressure to switch. But if you find yourself constantly checking email threads to remember where each application stands, Awaitr will save you time.",
  },
  {
    question: "Can Awaitr track internship applications?",
    answer:
      "Absolutely. The job application pipeline template in Awaitr works for any type of employment application, whether it is a full-time role, part-time position, internship, freelance gig, or contract opportunity. The stages (Applied, Screening, Interview, Offer, Accepted/Rejected) apply to all of them. You can track as many applications as you need across different categories.",
  },
  {
    question: "Does Awaitr send reminders for job follow-ups?",
    answer:
      "Yes. You can set reminders on any entry in your pipeline. For example, if a recruiter said they would get back to you within two weeks, you can set a reminder for day 14 so you know when to follow up. Reminders work entirely through local notifications on your device and do not require an internet connection or a server.",
  },
  {
    question: "Is my job application data private?",
    answer:
      "Completely private. Awaitr stores all data on your device. There is no cloud sync, no account creation, no analytics on your personal data, and no way for anyone else to access your application history. Your salary expectations, company names, rejection history, and notes stay on your iPhone and nowhere else.",
  },
];

const jsonLd = [
  generateArticleSchema({
    title: "Awaitr for Job Seekers — Track Every Application",
    description:
      "Track every job application from applied to offer with Awaitr. Free, offline, and private pipeline tracking for job seekers.",
    url: "https://awaitr.vercel.app/use-cases/job-seekers",
  }),
  generateFAQSchema(faqItems),
  generateBreadcrumbSchema(breadcrumbs),
];

export default function JobSeekersPage() {
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
        Awaitr for Job Seekers
      </h1>
      <time dateTime="2026-03-27" className="text-sm text-foreground/40 block mb-8">
        Published March 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Looking for a new job is one of the most stressful experiences in modern
        life. It is not just about writing a great resume or preparing for
        interviews. A huge part of the struggle is keeping track of everything:
        which companies have you applied to, which ones have responded, who asked
        you to complete a coding challenge by Friday, and which recruiter said
        they would get back to you &quot;within two weeks&quot; three weeks ago.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr is a free iOS app that gives you a simple, private pipeline to
        track every job application from the moment you hit send to the moment
        you accept an offer or move on.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        The Problem: Application Chaos
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Most active job seekers send out dozens of applications over the course
        of a few weeks. Some people apply to 50, 80, or even 100 positions
        during a single job search. At that scale, things start falling through
        the cracks almost immediately.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        You might start by keeping a mental note of the first five or six
        applications. Then you open a spreadsheet to track the rest. But the
        spreadsheet does not remind you when it has been two weeks since you
        heard back. It does not tell you at a glance how many applications are
        stuck in the &quot;waiting for response&quot; stage. And if you are also
        using email searches, bookmarked job postings, and notes on your phone,
        your tracking system is now scattered across four different places.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        The result is predictable. You forget to follow up with a company that
        was actually interested. You accidentally apply to the same role twice.
        You show up to a phone screen without remembering which position it was
        for. These are not signs of disorganization. They are the natural
        consequence of trying to manage a complex, multi-stage process without
        the right tool.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        How Awaitr Solves It
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr includes a job application pipeline template with stages designed
        around how hiring actually works:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>
          <strong>Applied</strong> — You submitted your resume or application.
          This is where every entry starts.
        </li>
        <li>
          <strong>Screening</strong> — The company acknowledged your
          application, or a recruiter reached out for an initial conversation.
        </li>
        <li>
          <strong>Interview</strong> — You have been invited to a formal
          interview, whether it is a phone screen, a technical assessment, or an
          on-site.
        </li>
        <li>
          <strong>Offer</strong> — You received an offer letter or verbal offer.
        </li>
        <li>
          <strong>Accepted / Rejected</strong> — The final outcome, whether you
          accepted the offer or the company passed.
        </li>
      </ul>
      <p className="text-foreground/70 leading-relaxed mb-4">
        When you add a new application, you give it a name (like the company and
        role title) and it drops into the Applied stage. As things progress, you
        move it forward. At any point, you can see exactly how many applications
        are in each stage, which ones have been sitting idle for too long, and
        which ones need your attention.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Reminders That Actually Help
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        One of the most useful features for job seekers is the ability to set
        reminders on individual entries. If a recruiter says &quot;we will get
        back to you by next Wednesday,&quot; you can set a reminder for Thursday
        morning. If a company asks you to complete a take-home assignment within
        five days, you can set a reminder for day four. These reminders are local
        notifications, so they work even when you are offline or in airplane
        mode.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        See How Long You Have Been Waiting
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Every entry in Awaitr shows how long it has been in its current stage.
        This is surprisingly helpful during a job search. When you can see that
        an application has been in &quot;Screening&quot; for 18 days without any
        update, you know it is time to send a polite follow-up email. When you
        see that three applications have been in &quot;Applied&quot; for over a
        month, you can mentally move on and focus your energy elsewhere.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Why Not Huntr or Notion?
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        There are existing tools that job seekers use, and it is worth being
        honest about how Awaitr compares to them.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong>Huntr</strong> is a well-designed job tracking platform. It has a
        Kanban board, metrics, and a browser extension for saving job postings.
        If you want a full-featured, cloud-based job search CRM, Huntr is a
        solid choice. However, Huntr requires an account, stores your data on
        their servers, and limits certain features to paid tiers. Some people are
        uncomfortable having their entire job search history stored in someone
        else&apos;s cloud, especially when it includes salary expectations and
        notes about specific companies. Huntr also only tracks jobs, so if you
        are also applying for scholarships, waiting on a visa, or tracking a
        pre-order alongside your job search, you need a separate tool.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong>Notion</strong> is incredibly flexible, and many people build job
        tracking boards in it. The downside is that flexibility comes with setup
        time. You need to create a database, define properties, build views, and
        maintain the system yourself. Notion is cloud-dependent, requires an
        account, and is a general-purpose tool, not one designed for tracking
        things you are waiting on. For people who already live in Notion, adding
        a job tracker might make sense. For everyone else, it is a lot of
        overhead for a single purpose.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr takes a different approach. It gives you a ready-to-use pipeline
        template, keeps everything on your device, requires no account, and
        works offline. It is not trying to be a full CRM or a general-purpose
        workspace. It is a focused tool for tracking things you are waiting on,
        and job applications happen to be one of the most common things people
        wait on.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Your Applications, Your Privacy
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Job application data is more sensitive than most people realize. Your
        tracking system might contain the names of companies you are considering
        leaving your current job for, salary expectations that you would not want
        your current employer to see, notes about interviewers, and a full
        history of rejections. This is deeply personal information.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr keeps all of this data on your device. There is no cloud sync, no
        account, no server that stores your information. Your data lives on your
        iPhone and stays there. If you delete the app, the data is gone. There is
        no backup on someone else&apos;s infrastructure, no data broker who
        might buy anonymized versions of your job search activity, and no
        account that could be compromised in a data breach.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        For job seekers who are currently employed and searching discreetly, this
        privacy model is not just a nice feature. It is a requirement.
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
            <Link href="/compare" className="text-violet hover:underline">
              How Awaitr compares to other tracking tools
            </Link>
          </li>
          <li>
            <Link
              href="/blog/privacy-first"
              className="text-violet hover:underline"
            >
              Why Awaitr is privacy-first
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
      </section>
    </>
  );
}

function IndonesianContent() {
  return (
    <>
      <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Awaitr untuk Pencari Kerja
      </h1>
      <time dateTime="2026-03-27" className="text-sm text-foreground/40 block mb-8">
        Diterbitkan Maret 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Mencari pekerjaan baru adalah salah satu pengalaman paling menegangkan
        dalam kehidupan modern. Bukan hanya soal menulis CV yang bagus atau
        mempersiapkan wawancara. Sebagian besar tantangannya adalah melacak
        semuanya: perusahaan mana saja yang sudah dilamar, mana yang sudah
        merespons, siapa yang meminta Anda menyelesaikan tes coding sebelum hari
        Jumat, dan rekruter mana yang bilang akan menghubungi Anda &quot;dalam
        dua minggu&quot; tiga minggu yang lalu.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr adalah aplikasi iOS gratis yang memberikan Anda alur proses
        sederhana dan privat untuk melacak setiap lamaran kerja dari saat Anda
        mengirimnya hingga saat Anda menerima tawaran atau melanjutkan pencarian.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Masalahnya: Kekacauan Lamaran
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Kebanyakan pencari kerja aktif mengirimkan puluhan lamaran dalam
        beberapa minggu. Beberapa orang melamar ke 50, 80, bahkan 100 posisi
        dalam satu periode pencarian kerja. Dengan skala seperti itu, hal-hal
        mulai terlewat hampir seketika.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Mungkin Anda mulai dengan mengingat lima atau enam lamaran pertama.
        Lalu Anda membuka spreadsheet untuk melacak sisanya. Tapi spreadsheet
        tidak mengingatkan Anda saat sudah dua minggu tanpa kabar. Spreadsheet
        tidak menunjukkan secara langsung berapa banyak lamaran yang terjebak
        di tahap &quot;menunggu respons.&quot; Dan jika Anda juga menggunakan
        pencarian email, bookmark lowongan kerja, dan catatan di ponsel, sistem
        pelacakan Anda sekarang tersebar di empat tempat berbeda.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Hasilnya bisa ditebak. Anda lupa menindaklanjuti perusahaan yang
        sebenarnya tertarik. Anda tidak sengaja melamar posisi yang sama dua
        kali. Anda datang ke sesi wawancara telepon tanpa ingat untuk posisi
        apa. Ini bukan tanda ketidakteraturan. Ini adalah konsekuensi alami
        dari mencoba mengelola proses multi-tahap yang kompleks tanpa alat yang
        tepat.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Bagaimana Awaitr Menyelesaikannya
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr menyertakan template alur proses lamaran kerja dengan tahapan
        yang dirancang sesuai cara perekrutan sebenarnya:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>
          <strong>Dilamar (Applied)</strong> — Anda sudah mengirimkan CV atau
          lamaran. Di sinilah setiap entri dimulai.
        </li>
        <li>
          <strong>Penyaringan (Screening)</strong> — Perusahaan mengakui
          lamaran Anda, atau rekruter menghubungi untuk percakapan awal.
        </li>
        <li>
          <strong>Wawancara (Interview)</strong> — Anda diundang untuk
          wawancara formal, baik itu wawancara telepon, tes teknis, atau
          pertemuan langsung.
        </li>
        <li>
          <strong>Tawaran (Offer)</strong> — Anda menerima surat tawaran atau
          tawaran verbal.
        </li>
        <li>
          <strong>Diterima / Ditolak</strong> — Hasil akhir, baik Anda
          menerima tawaran atau perusahaan tidak melanjutkan.
        </li>
      </ul>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Saat Anda menambahkan lamaran baru, Anda memberi nama (seperti nama
        perusahaan dan posisi) dan entri tersebut masuk ke tahap Dilamar.
        Seiring perkembangan, Anda memindahkannya ke depan. Kapan saja, Anda
        bisa melihat dengan tepat berapa banyak lamaran di setiap tahap, mana
        yang terlalu lama diam, dan mana yang perlu perhatian Anda.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Pengingat yang Benar-Benar Membantu
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Salah satu fitur paling berguna untuk pencari kerja adalah kemampuan
        mengatur pengingat pada setiap entri. Jika rekruter bilang &quot;kami
        akan menghubungi Anda minggu depan,&quot; Anda bisa mengatur pengingat
        untuk keesokan harinya. Jika perusahaan meminta Anda menyelesaikan
        tugas dalam lima hari, Anda bisa mengatur pengingat untuk hari
        keempat. Pengingat ini berupa notifikasi lokal, jadi berfungsi bahkan
        saat Anda offline atau dalam mode pesawat.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Lihat Sudah Berapa Lama Anda Menunggu
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Setiap entri di Awaitr menunjukkan sudah berapa lama berada di tahap
        saat ini. Ini sangat membantu selama pencarian kerja. Ketika Anda bisa
        melihat bahwa lamaran sudah 18 hari di &quot;Penyaringan&quot; tanpa
        kabar, Anda tahu sudah waktunya mengirim email tindak lanjut. Ketika
        Anda melihat tiga lamaran sudah lebih dari sebulan di
        &quot;Dilamar,&quot; Anda bisa secara mental melanjutkan dan
        memfokuskan energi di tempat lain.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Kenapa Bukan Huntr atau Notion?
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Ada alat yang sudah digunakan pencari kerja, dan perlu diakui secara
        jujur bagaimana Awaitr dibandingkan dengan mereka.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong>Huntr</strong> adalah platform pelacakan kerja yang dirancang
        dengan baik. Memiliki papan Kanban, metrik, dan ekstensi browser untuk
        menyimpan lowongan. Jika Anda menginginkan CRM pencarian kerja berbasis
        cloud yang lengkap, Huntr adalah pilihan yang solid. Namun, Huntr
        memerlukan akun, menyimpan data Anda di server mereka, dan membatasi
        fitur tertentu ke paket berbayar. Beberapa orang tidak nyaman seluruh
        riwayat pencarian kerja mereka disimpan di cloud orang lain, terutama
        ketika berisi ekspektasi gaji dan catatan tentang perusahaan tertentu.
        Huntr juga hanya melacak pekerjaan, jadi jika Anda juga melamar
        beasiswa, menunggu visa, atau melacak pre-order, Anda butuh alat
        terpisah.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong>Notion</strong> sangat fleksibel, dan banyak orang membuat
        papan pelacakan kerja di dalamnya. Kekurangannya adalah fleksibilitas
        itu membutuhkan waktu setup. Anda perlu membuat database, mendefinisikan
        properti, membangun tampilan, dan memelihara sistem sendiri. Notion
        bergantung pada cloud, memerlukan akun, dan merupakan alat serbaguna,
        bukan yang dirancang khusus untuk melacak daftar tunggu. Bagi yang
        sudah hidup di Notion, menambahkan pelacak kerja mungkin masuk akal.
        Bagi yang lain, itu terlalu berlebihan untuk satu tujuan.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr mengambil pendekatan berbeda. Memberikan template alur proses
        siap pakai, menyimpan semuanya di perangkat Anda, tidak memerlukan
        akun, dan berfungsi offline. Awaitr tidak mencoba menjadi CRM lengkap
        atau workspace serbaguna. Ini adalah alat fokus untuk melacak hal-hal
        yang Anda tunggu, dan lamaran kerja kebetulan adalah salah satu hal
        paling umum yang orang tunggu.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Lamaran Anda, Privasi Anda
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Data lamaran kerja lebih sensitif dari yang disadari kebanyakan orang.
        Sistem pelacakan Anda mungkin berisi nama perusahaan yang Anda
        pertimbangkan untuk pindah dari pekerjaan saat ini, ekspektasi gaji
        yang tidak ingin dilihat atasan Anda, catatan tentang pewawancara, dan
        riwayat lengkap penolakan. Ini adalah informasi yang sangat pribadi.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr menyimpan semua data ini di perangkat Anda. Tidak ada sinkronisasi
        cloud, tidak ada akun, tidak ada server yang menyimpan informasi Anda.
        Data Anda hidup di iPhone Anda dan tetap di sana. Jika Anda menghapus
        aplikasinya, datanya hilang. Tidak ada cadangan di infrastruktur orang
        lain, tidak ada pialang data yang mungkin membeli versi anonim dari
        aktivitas pencarian kerja Anda, dan tidak ada akun yang bisa dibobol
        dalam pelanggaran data.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Bagi pencari kerja yang saat ini masih bekerja dan mencari secara
        diam-diam, model privasi ini bukan sekadar fitur bagus. Ini adalah
        keharusan.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold mb-6">
          Pertanyaan yang Sering Diajukan
        </h2>
        <details className="group border-b border-foreground/10 py-4">
          <summary className="cursor-pointer font-medium text-foreground/80 hover:text-foreground transition-colors">
            Apakah Awaitr lebih baik dari spreadsheet untuk melacak lamaran kerja?
          </summary>
          <p className="mt-3 text-foreground/70 leading-relaxed">
            Untuk kebanyakan pencari kerja, ya. Spreadsheet fleksibel tapi tidak
            mengirim pengingat, tidak menunjukkan sudah berapa lama Anda
            menunggu di setiap tahap, dan memerlukan pemformatan manual. Awaitr
            memberikan alur proses siap pakai dengan tahapan seperti Dilamar,
            Penyaringan, Wawancara, dan Tawaran, sehingga Anda bisa mulai
            melacak langsung tanpa membangun sistem dari nol. Jika Anda sudah
            punya alur spreadsheet yang berfungsi baik, tidak ada tekanan untuk
            beralih. Tapi jika Anda terus-menerus mengecek thread email untuk
            mengingat status setiap lamaran, Awaitr akan menghemat waktu Anda.
          </p>
        </details>
        <details className="group border-b border-foreground/10 py-4">
          <summary className="cursor-pointer font-medium text-foreground/80 hover:text-foreground transition-colors">
            Bisakah Awaitr melacak lamaran magang?
          </summary>
          <p className="mt-3 text-foreground/70 leading-relaxed">
            Tentu saja. Template alur proses lamaran kerja di Awaitr berfungsi
            untuk semua jenis lamaran pekerjaan, baik itu posisi penuh waktu,
            paruh waktu, magang, pekerjaan lepas, atau kontrak. Tahapannya
            (Dilamar, Penyaringan, Wawancara, Tawaran, Diterima/Ditolak)
            berlaku untuk semuanya. Anda bisa melacak sebanyak mungkin lamaran
            di berbagai kategori.
          </p>
        </details>
        <details className="group border-b border-foreground/10 py-4">
          <summary className="cursor-pointer font-medium text-foreground/80 hover:text-foreground transition-colors">
            Apakah Awaitr mengirim pengingat untuk tindak lanjut lamaran?
          </summary>
          <p className="mt-3 text-foreground/70 leading-relaxed">
            Ya. Anda bisa mengatur pengingat pada setiap entri di alur proses.
            Misalnya, jika rekruter bilang akan menghubungi dalam dua minggu,
            Anda bisa mengatur pengingat untuk hari ke-14 agar tahu kapan harus
            menindaklanjuti. Pengingat berfungsi sepenuhnya melalui notifikasi
            lokal di perangkat Anda dan tidak memerlukan koneksi internet atau
            server.
          </p>
        </details>
        <details className="group border-b border-foreground/10 py-4">
          <summary className="cursor-pointer font-medium text-foreground/80 hover:text-foreground transition-colors">
            Apakah data lamaran kerja saya privat?
          </summary>
          <p className="mt-3 text-foreground/70 leading-relaxed">
            Sepenuhnya privat. Awaitr menyimpan semua data di perangkat Anda.
            Tidak ada sinkronisasi cloud, tidak ada pembuatan akun, tidak ada
            analitik pada data pribadi Anda, dan tidak ada cara bagi siapa pun
            untuk mengakses riwayat lamaran Anda. Ekspektasi gaji, nama
            perusahaan, riwayat penolakan, dan catatan Anda tetap di iPhone
            Anda dan tidak di tempat lain.
          </p>
        </details>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">Terkait</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/compare" className="text-violet hover:underline">
              Perbandingan Awaitr dengan alat pelacakan lain
            </Link>
          </li>
          <li>
            <Link
              href="/blog/privacy-first"
              className="text-violet hover:underline"
            >
              Mengapa Awaitr mengutamakan privasi
            </Link>
          </li>
          <li>
            <Link
              href="/use-cases/students"
              className="text-violet hover:underline"
            >
              Awaitr untuk Pelajar
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
