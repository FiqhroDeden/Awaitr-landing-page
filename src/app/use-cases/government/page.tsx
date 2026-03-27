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
  title: "Awaitr for Government Documents — Track Visas, Permits & IDs",
  description:
    "Track visa applications, permit renewals, and government document waitlists with Awaitr. Private, offline document tracker.",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Use Cases", href: "/use-cases/job-seekers" },
  { label: "Government Documents", href: "/use-cases/government" },
];

const faqItems = [
  {
    question: "Is my visa application data safe in Awaitr?",
    answer:
      "Yes. Awaitr stores all data exclusively on your iPhone using Apple's SwiftData framework. No information is transmitted to any server, cloud service, or third party. There is no account creation, no analytics tracking, and no data collection of any kind. Your visa application details, passport references, and personal notes never leave your device. Even if Awaitr's website went offline tomorrow, your data would remain safely on your phone.",
  },
  {
    question: "Can I track multiple government applications?",
    answer:
      "Absolutely. You can track as many government applications as you need simultaneously. Each application gets its own entry in the pipeline with independent status tracking, notes, and reminder dates. This is especially useful if you are managing renewals for multiple family members or handling several permit applications at once across different agencies.",
  },
  {
    question: "Does Awaitr work in countries with limited internet?",
    answer:
      "Yes. Awaitr is designed to work completely offline. It does not require an internet connection to create entries, update statuses, view your pipeline, or receive reminders. The app functions identically whether you have full connectivity, intermittent service, or no internet at all. This makes it particularly useful in regions where mobile data is expensive or unreliable.",
  },
];

const jsonLd = [
  generateArticleSchema({
    title: "Awaitr for Government Documents — Track Visas, Permits & IDs",
    description:
      "Track visa applications, permit renewals, and government document waitlists with Awaitr. Private, offline document tracker.",
    url: "https://awaitr.vercel.app/use-cases/government",
  }),
  generateFAQSchema(faqItems),
  generateBreadcrumbSchema(breadcrumbs),
];

export default function GovernmentPage() {
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
        Awaitr for Government Documents
      </h1>
      <time
        dateTime="2026-03-27"
        className="text-sm text-foreground/40 block mb-8"
      >
        Published March 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Government bureaucracy operates on its own timeline. Whether you are
        waiting for a visa approval, a building permit, a passport renewal, or a
        driver&apos;s license replacement, the pattern is the same: you submit
        your application, receive a reference number, and then enter an
        indefinite waiting period with minimal updates. Weeks pass. Sometimes
        months. You check the government portal, get a generic &quot;in
        progress&quot; status, and go back to waiting. Meanwhile, deadlines
        creep up, follow-up windows open and close, and related documents
        expire.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        The Problem: Government Processes Are Slow and Opaque
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Government agencies process millions of applications. Individual
        applicants rarely get proactive updates. Instead, the burden falls on you
        to check portals, call hotlines, visit offices, and keep track of where
        each application stands. If you are dealing with a single application,
        this is manageable but tedious. If you are juggling multiple government
        processes simultaneously, it becomes genuinely stressful.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Consider a common scenario: you are renewing your passport, applying for
        a visa to a country you plan to visit, and simultaneously waiting for a
        business permit. Each process has its own timeline, its own follow-up
        requirements, and its own set of deadlines. The passport renewal might
        need to complete before the visa application can proceed. The business
        permit has a sixty-day window for providing supplementary documents. If
        you miss that window, you start over.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Most people manage this with a combination of email searches, browser
        bookmarks to government portals, and mental notes. This approach works
        until it does not. A missed follow-up deadline can set an application
        back by months. A forgotten renewal date can leave you without a valid
        document when you need it most.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>Visa applications that take months with few status updates</li>
        <li>Permit renewals with strict deadlines that are easy to miss</li>
        <li>ID replacements requiring multiple office visits and follow-ups</li>
        <li>Interdependent applications where one must complete before another can start</li>
        <li>Reference numbers and confirmation details scattered across email and paper</li>
      </ul>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        How Awaitr Solves It
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr provides a government documents pipeline template with stages
        that reflect how these processes actually work: Submitted, Under Review,
        and Approved or Denied. Each application you are tracking gets its own
        entry, and you move it through stages as its status changes.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        One Place for All Pending Government Items
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Instead of checking three different government portals and searching
        your email for confirmation numbers, you open Awaitr and see everything
        in one pipeline. Your passport renewal is Under Review. Your visa
        application is still at Submitted. Your business permit was just moved
        to Approved. Each entry can include notes where you store reference
        numbers, the name of the officer you spoke with, or documents you still
        need to provide.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Reminders for Follow-Up Dates
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Government processes often have critical dates that you must not miss.
        A supplementary document deadline. A scheduled interview at an embassy.
        A window to appeal a decision. Awaitr lets you attach a reminder to
        each tracked item, so you receive an iOS notification before these
        dates arrive. This is especially valuable for processes with long gaps
        between action items, where it is easy to lose track of what comes
        next.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Track Processing Time
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        When you move an application between stages, Awaitr records the
        transition. Over time, this gives you a sense of how long different
        government processes take. If your last passport renewal spent six weeks
        in Under Review, you can reference that when planning around your next
        one. This kind of personal data is difficult to find on government
        websites, which typically provide broad estimates that may not reflect
        your actual experience.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Privacy for Sensitive Documents
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Government document tracking involves some of the most sensitive
        personal information you have. Passport numbers, visa application
        statuses, personal identification details, immigration history, permit
        reference codes. This is not data you want sitting on someone
        else&apos;s server.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr stores everything locally on your iPhone using Apple&apos;s
        SwiftData framework. There is no cloud sync. There is no server. There
        is no account to create, no password that could be breached, and no
        database that could be hacked. Your data exists in one place: your
        device. It is protected by your iPhone&apos;s built-in security,
        including Face ID, Touch ID, and device encryption.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        This architecture is a deliberate choice, not a limitation. For
        sensitive government documents, local-only storage is a feature. Awaitr
        collects zero analytics, has zero third-party dependencies, and
        requires zero network access to function. It works in airplane mode. It
        works in countries with restricted internet. It works without Wi-Fi.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        If you are an immigrant navigating a complex visa process, a business
        owner managing multiple permits, or a citizen renewing identification
        documents, Awaitr gives you a structured way to track these processes
        without exposing your personal information to any external service. Your
        government document data stays between you and your phone.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold mb-6">
          Frequently Asked Questions
        </h2>
        {faqItems.map((item, i) => (
          <details
            key={i}
            className="group border-b border-foreground/5 py-4"
          >
            <summary className="font-display font-semibold cursor-pointer hover:text-violet transition-colors">
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
              href="/blog/privacy-first"
              className="text-violet hover:underline"
            >
              Why Awaitr Is Privacy-First by Design
            </Link>
          </li>
          <li>
            <Link href="/compare" className="text-violet hover:underline">
              Compare Awaitr to Other Tools
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
        </ul>
      </section>
    </>
  );
}

function IndonesianContent() {
  return (
    <>
      <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Awaitr untuk Dokumen Pemerintah
      </h1>
      <time
        dateTime="2026-03-27"
        className="text-sm text-foreground/40 block mb-8"
      >
        Diterbitkan Maret 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Birokrasi pemerintah beroperasi dengan jadwalnya sendiri. Baik Anda
        sedang menunggu persetujuan visa, izin mendirikan bangunan, perpanjangan
        paspor, atau penggantian SIM, polanya sama: Anda mengajukan permohonan,
        menerima nomor referensi, lalu memasuki periode penantian yang tidak
        menentu dengan sedikit kabar. Minggu berlalu. Terkadang berbulan-bulan.
        Anda mengecek portal pemerintah, mendapat status generik &quot;sedang
        diproses&quot;, dan kembali menunggu. Sementara itu, tenggat waktu
        mendekat, jendela tindak lanjut terbuka dan tertutup, dan dokumen
        terkait kedaluwarsa.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Masalahnya: Proses Pemerintah Lambat dan Tidak Transparan
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Instansi pemerintah memproses jutaan permohonan. Pemohon individual
        jarang mendapat kabar proaktif. Sebaliknya, beban jatuh pada Anda untuk
        mengecek portal, menelepon hotline, mengunjungi kantor, dan melacak
        status setiap permohonan. Jika Anda hanya berurusan dengan satu
        permohonan, ini bisa dikelola meski melelahkan. Jika Anda menangani
        beberapa proses pemerintah secara bersamaan, ini menjadi sangat
        menekan.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Bayangkan skenario umum: Anda sedang memperpanjang paspor, mengajukan
        visa ke negara yang ingin dikunjungi, dan sekaligus menunggu izin usaha.
        Setiap proses punya jadwal sendiri, persyaratan tindak lanjut sendiri,
        dan tenggat waktu masing-masing. Perpanjangan paspor mungkin harus
        selesai sebelum pengajuan visa bisa dilanjutkan. Izin usaha punya
        jendela enam puluh hari untuk memberikan dokumen tambahan. Jika Anda
        melewatkan jendela itu, Anda harus mulai dari awal.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Kebanyakan orang mengelola ini dengan kombinasi pencarian email, bookmark
        browser ke portal pemerintah, dan catatan mental. Pendekatan ini bekerja
        sampai tidak bekerja lagi. Tenggat tindak lanjut yang terlewat bisa
        menunda permohonan berbulan-bulan. Tanggal perpanjangan yang terlupakan
        bisa membuat Anda tanpa dokumen valid saat paling dibutuhkan.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>Permohonan visa yang memakan waktu berbulan-bulan dengan sedikit pembaruan status</li>
        <li>Perpanjangan izin dengan tenggat ketat yang mudah terlewat</li>
        <li>Penggantian identitas yang memerlukan beberapa kunjungan kantor dan tindak lanjut</li>
        <li>Permohonan yang saling bergantung di mana satu harus selesai sebelum yang lain dimulai</li>
        <li>Nomor referensi dan detail konfirmasi tersebar di email dan kertas</li>
      </ul>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Bagaimana Awaitr Menyelesaikannya
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr menyediakan template alur proses dokumen pemerintah dengan tahap
        yang mencerminkan cara proses ini sebenarnya bekerja: Diajukan, Sedang
        Ditinjau, dan Disetujui atau Ditolak. Setiap permohonan yang Anda lacak
        mendapat entri sendiri, dan Anda memindahkannya melalui tahap-tahap saat
        statusnya berubah.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Satu Tempat untuk Semua Item Pemerintah yang Tertunda
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Alih-alih mengecek tiga portal pemerintah berbeda dan mencari email
        untuk nomor konfirmasi, Anda membuka Awaitr dan melihat semuanya dalam
        satu alur proses. Perpanjangan paspor Anda Sedang Ditinjau. Pengajuan
        visa masih di tahap Diajukan. Izin usaha baru saja dipindahkan ke
        Disetujui. Setiap entri bisa menyertakan catatan tempat Anda menyimpan
        nomor referensi, nama petugas yang Anda ajak bicara, atau dokumen yang
        masih perlu disediakan.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Pengingat untuk Tanggal Tindak Lanjut
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Proses pemerintah sering memiliki tanggal kritis yang tidak boleh
        dilewatkan. Tenggat dokumen tambahan. Wawancara terjadwal di kedutaan.
        Jendela untuk mengajukan banding atas keputusan. Awaitr memungkinkan
        Anda melampirkan pengingat ke setiap item terlacak, sehingga Anda
        menerima notifikasi iOS sebelum tanggal-tanggal ini tiba. Ini sangat
        berharga untuk proses dengan jeda panjang antar langkah aksi, di mana
        mudah kehilangan jejak apa yang selanjutnya.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Lacak Waktu Pemrosesan
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Saat Anda memindahkan permohonan antar tahap, Awaitr mencatat
        perpindahannya. Seiring waktu, ini memberi Anda gambaran berapa lama
        proses pemerintah yang berbeda memakan waktu. Jika perpanjangan paspor
        terakhir Anda menghabiskan enam minggu di Sedang Ditinjau, Anda bisa
        merujuk itu saat merencanakan yang berikutnya. Data personal seperti
        ini sulit ditemukan di situs pemerintah, yang biasanya memberikan
        estimasi luas yang mungkin tidak mencerminkan pengalaman Anda
        sebenarnya.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Privasi untuk Dokumen Sensitif
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Pelacakan dokumen pemerintah melibatkan beberapa informasi pribadi
        paling sensitif yang Anda miliki. Nomor paspor, status pengajuan visa,
        detail identifikasi pribadi, riwayat imigrasi, kode referensi izin.
        Ini bukan data yang ingin Anda simpan di server orang lain.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr menyimpan semuanya secara lokal di iPhone Anda menggunakan
        framework SwiftData dari Apple. Tidak ada sinkronisasi cloud. Tidak ada
        server. Tidak ada akun yang perlu dibuat, tidak ada kata sandi yang bisa
        diretas, dan tidak ada database yang bisa dibobol. Data Anda ada di satu
        tempat: perangkat Anda. Data dilindungi oleh keamanan bawaan iPhone
        Anda, termasuk Face ID, Touch ID, dan enkripsi perangkat.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Arsitektur ini adalah pilihan yang disengaja, bukan keterbatasan. Untuk
        dokumen pemerintah yang sensitif, penyimpanan lokal saja adalah fitur.
        Awaitr mengumpulkan nol analitik, tidak memiliki dependensi pihak
        ketiga, dan tidak memerlukan akses jaringan untuk berfungsi. Berfungsi
        dalam mode pesawat. Berfungsi di negara dengan internet terbatas.
        Berfungsi tanpa Wi-Fi.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Jika Anda seorang imigran yang menavigasi proses visa yang kompleks,
        pemilik bisnis yang mengelola beberapa izin, atau warga negara yang
        memperpanjang dokumen identitas, Awaitr memberi Anda cara terstruktur
        untuk melacak proses-proses ini tanpa mengekspos informasi pribadi Anda
        ke layanan eksternal mana pun. Data dokumen pemerintah Anda tetap antara
        Anda dan ponsel Anda.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold mb-6">
          Pertanyaan yang Sering Diajukan
        </h2>
        {faqItems.map((item, i) => (
          <details
            key={i}
            className="group border-b border-foreground/5 py-4"
          >
            <summary className="font-display font-semibold cursor-pointer hover:text-violet transition-colors">
              {item.question}
            </summary>
            <p className="mt-3 text-foreground/70 leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold mb-4">Terkait</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/blog/privacy-first"
              className="text-violet hover:underline"
            >
              Mengapa Awaitr Mengutamakan Privasi
            </Link>
          </li>
          <li>
            <Link href="/compare" className="text-violet hover:underline">
              Bandingkan Awaitr dengan Alat Lainnya
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
        </ul>
      </section>
    </>
  );
}
