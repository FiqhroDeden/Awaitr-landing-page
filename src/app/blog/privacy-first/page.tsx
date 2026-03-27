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
  title: "Why Your Waitlist Data Should Stay on Your Device | Awaitr",
  description:
    "Most productivity apps upload your data to the cloud. Here's why waitlist and application data deserves better privacy protection.",
  openGraph: {
    title: "Why Your Waitlist Data Should Stay on Your Device",
    description:
      "Most productivity apps upload your data to the cloud. Here's why waitlist and application data deserves better privacy protection.",
    type: "article",
    url: "https://awaitr.vercel.app/blog/privacy-first",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog/losing-track" },
  { label: "Privacy-First Tracking", href: "/blog/privacy-first" },
];

const faqItems = [
  {
    question: "Does Awaitr collect any user data?",
    answer:
      "No. Awaitr has zero analytics SDKs, no user accounts, and makes no network requests for user data. All information you enter stays on your device in Apple's SwiftData storage. The app works fully offline.",
  },
  {
    question:
      "How is local-only storage different from end-to-end encryption?",
    answer:
      "End-to-end encryption means your data is encrypted before being uploaded to a server, so the server can't read it. Local-only storage means your data never leaves your device at all — there is no server involved. Local-only eliminates the entire category of server-side risks: breaches, subpoenas, employee access, and policy changes.",
  },
  {
    question: "Will Awaitr add cloud sync in the future?",
    answer:
      "iCloud sync is planned for a future update, which would keep data within Apple's ecosystem using your personal iCloud account. This is fundamentally different from third-party cloud storage because Apple manages the encryption and you control the account. No third-party server would ever hold your data.",
  },
];

const jsonLd = [
  generateArticleSchema({
    title: "Why Your Waitlist Data Should Stay on Your Device",
    description:
      "Most productivity apps upload your data to the cloud. Here's why waitlist and application data deserves better privacy protection.",
    url: "https://awaitr.vercel.app/blog/privacy-first",
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
        Why Your Waitlist Data Should Stay on Your Device
      </h1>
      <time className="text-sm text-foreground/40 block mb-8">
        March 27, 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Most apps today default to cloud storage. Your notes, tasks, and
        trackers live on someone else&apos;s server. For general productivity —
        shared documents, team wikis, collaborative projects — that tradeoff
        makes sense. The convenience of access from any device outweighs the
        privacy cost.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        But waitlist data is different. Job applications contain salary
        expectations, career vulnerabilities, and rejection histories. Visa and
        government document trackers reveal immigration status, identity
        details, and legal proceedings. Shopping pre-orders expose financial
        habits and purchasing patterns. This is{" "}
        <strong className="text-foreground font-medium">
          uniquely sensitive information
        </strong>{" "}
        that deserves more protection than a typical cloud-based productivity
        app provides.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        What Your Waitlist Data Reveals
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Consider what a complete picture of someone&apos;s waitlist data
        actually contains. A job application tracker doesn&apos;t just list
        company names. It shows which companies rejected you, how far you
        progressed in each process, how long you&apos;ve been searching, and
        what roles and salary ranges you&apos;re targeting. For someone in a
        sensitive employment situation — looking for work while still employed,
        for example — this data is genuinely damaging if exposed.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Government document tracking is even more sensitive. Visa application
        statuses reveal immigration intentions and timelines. Passport renewal
        tracking exposes identity document details. Tax-related waitlists can
        indicate financial situations. This is the kind of data that identity
        thieves specifically target, and it&apos;s the kind of data that
        governments and employers could use against individuals.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Even seemingly innocuous categories carry weight. A pre-order tracker
        shows what you&apos;re willing to spend money on before products are
        available — information that advertising networks would find extremely
        valuable. Event waitlists reveal your social patterns, interests, and
        physical locations you plan to visit.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Individually, any single item might seem harmless. But in aggregate,
        your waitlist data paints a{" "}
        <strong className="text-foreground font-medium">
          remarkably detailed portrait of your life circumstances
        </strong>
        : your career status, financial position, legal situation, and personal
        priorities. That portrait belongs to you, not to a cloud provider.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        The Cloud-by-Default Problem
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        The modern app ecosystem has normalized cloud storage to the point
        where local-first apps feel unusual. Most productivity tools require
        account creation before you can use them. Your data is uploaded to
        servers as a default behavior, often before you&apos;ve had a chance to
        evaluate whether you trust the service.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        This isn&apos;t inherently malicious. Cloud storage enables real
        features: cross-device sync, collaboration, backup, and web access. But
        it also enables business models that depend on your data. Even
        &quot;free&quot; apps have costs. Those costs are covered by analytics
        that track your behavior, ad targeting based on your content, or data
        partnerships with third parties. Few users read privacy policies, and
        fewer still understand the implications of the data-sharing clauses
        buried in them.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        The uncomfortable truth is that once your data is on someone
        else&apos;s server, you no longer fully control it. The company can
        change its privacy policy. It can be acquired by another company with
        different practices. Its servers can be breached. It can receive legal
        demands to hand over data. These aren&apos;t hypothetical risks — they
        are events that happen regularly to well-known companies.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        What Privacy-First Actually Means
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        &quot;Privacy-first&quot; has become a marketing phrase that many apps
        use without substantive backing. A meaningful definition requires
        specific, verifiable technical commitments — not vague reassurances.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Genuine privacy-first architecture means:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>
          <strong className="text-foreground font-medium">
            Data never leaves the device.
          </strong>{" "}
          Not &quot;data is encrypted before upload&quot; — data literally does
          not leave the physical device unless you explicitly export it.
        </li>
        <li>
          <strong className="text-foreground font-medium">
            No account creation.
          </strong>{" "}
          Accounts create identity linkage. If no account exists, there is no
          user profile on a server that can be associated with your data.
        </li>
        <li>
          <strong className="text-foreground font-medium">
            No analytics SDK.
          </strong>{" "}
          No Firebase Analytics, no Amplitude, no Mixpanel, no custom telemetry.
          Zero usage data is collected or transmitted.
        </li>
        <li>
          <strong className="text-foreground font-medium">
            No network requests for user data.
          </strong>{" "}
          The app should function identically with network access disabled.
          Airplane mode is a valid test of a privacy-first app.
        </li>
        <li>
          <strong className="text-foreground font-medium">
            No third-party dependencies that could phone home.
          </strong>{" "}
          Every third-party library is a potential data leak. The fewer
          dependencies, the smaller the attack surface.
        </li>
      </ul>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        How Awaitr Implements Privacy
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <Link href="/" className="text-violet hover:underline">
          Awaitr
        </Link>{" "}
        meets every criterion listed above, and the technical decisions behind
        the app make these claims verifiable rather than aspirational.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">
          Local storage with Apple&apos;s SwiftData.
        </strong>{" "}
        All data is stored on-device using SwiftData, Apple&apos;s native
        persistence framework. SwiftData stores data in a local database file
        that never syncs to any server. Your waitlist items, pipeline stages,
        notes, and dates exist only on your iPhone.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">
          Zero third-party dependencies.
        </strong>{" "}
        Awaitr is built entirely with Apple&apos;s first-party frameworks:
        SwiftUI, SwiftData, and standard Swift 6.2 libraries. There is no
        Firebase, no Amplitude, no Sentry, no Crashlytics, no third-party
        networking library. Zero. This isn&apos;t a philosophical stance — it&apos;s
        an engineering decision that eliminates entire categories of privacy
        risk. Every third-party SDK is code you don&apos;t control, written by
        people with their own data collection incentives.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">
          No user accounts.
        </strong>{" "}
        You open Awaitr and start using it. No email, no password, no
        &quot;Sign in with Apple,&quot; no anonymous user ID. Without an
        account, there is no way to associate your data with your identity on
        any server.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">
          Works in airplane mode.
        </strong>{" "}
        Every feature in Awaitr works without network connectivity. You can add
        items, move them through pipeline stages, set reminders, and view your
        dashboard on a flight with no Wi-Fi. This isn&apos;t just a convenience
        — it&apos;s proof that the app doesn&apos;t need a server to function.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">Under 15 MB.</strong>{" "}
        The app&apos;s size is itself a privacy signal. A 15 MB app
        doesn&apos;t have room for hidden tracking frameworks, bundled
        advertising SDKs, or background data collection services. What you see
        is what you get.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Privacy Comparison
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Here&apos;s how Awaitr compares to common alternatives on privacy
        dimensions:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-foreground/10">
              <th className="text-left py-3 pr-4 font-semibold text-foreground">
                Dimension
              </th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">
                Awaitr
              </th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">
                Huntr
              </th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">
                Notion
              </th>
            </tr>
          </thead>
          <tbody className="text-foreground/70">
            <tr className="border-b border-foreground/5">
              <td className="py-3 pr-4 font-medium text-foreground">
                Data location
              </td>
              <td className="py-3 px-4">On-device only</td>
              <td className="py-3 px-4">Cloud servers</td>
              <td className="py-3 px-4">Cloud servers</td>
            </tr>
            <tr className="border-b border-foreground/5">
              <td className="py-3 pr-4 font-medium text-foreground">
                Account required
              </td>
              <td className="py-3 px-4">No</td>
              <td className="py-3 px-4">Yes</td>
              <td className="py-3 px-4">Yes</td>
            </tr>
            <tr className="border-b border-foreground/5">
              <td className="py-3 pr-4 font-medium text-foreground">
                Third-party SDKs
              </td>
              <td className="py-3 px-4">None</td>
              <td className="py-3 px-4">Multiple</td>
              <td className="py-3 px-4">Multiple</td>
            </tr>
            <tr className="border-b border-foreground/5">
              <td className="py-3 pr-4 font-medium text-foreground">
                Offline capability
              </td>
              <td className="py-3 px-4">Full functionality</td>
              <td className="py-3 px-4">Limited</td>
              <td className="py-3 px-4">Partial (cached pages)</td>
            </tr>
            <tr className="border-b border-foreground/5">
              <td className="py-3 pr-4 font-medium text-foreground">
                Analytics collection
              </td>
              <td className="py-3 px-4">None</td>
              <td className="py-3 px-4">Yes</td>
              <td className="py-3 px-4">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        When Cloud Makes Sense
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Honesty about tradeoffs matters. Local-only storage is not the right
        choice for everyone or every situation. If you need{" "}
        <strong className="text-foreground font-medium">
          cross-device sync
        </strong>{" "}
        — accessing your waitlist from your phone, tablet, and computer — a
        cloud-based tool is currently necessary. If you need{" "}
        <strong className="text-foreground font-medium">collaboration</strong>{" "}
        — sharing your application tracker with a career counselor or partner —
        cloud enables that. If you need{" "}
        <strong className="text-foreground font-medium">web access</strong>,
        local-only native apps can&apos;t provide it.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr is designed for{" "}
        <strong className="text-foreground font-medium">
          personal, single-device tracking where privacy matters more than sync
        </strong>
        . For most people managing their own job applications, government
        documents, or personal purchases, single-device access is sufficient.
        You&apos;re adding and checking items from your phone — the same device
        you carry everywhere.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        iCloud sync is planned for a future Awaitr update, which would allow
        multi-device access while keeping data within Apple&apos;s ecosystem
        rather than on third-party servers. This approach preserves the
        privacy-first principle: your data stays under your control, managed
        through your personal Apple account, with Apple&apos;s end-to-end
        encryption protecting it in transit and at rest.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        The core question isn&apos;t whether cloud storage is bad. It&apos;s
        whether{" "}
        <strong className="text-foreground font-medium">
          your specific data
        </strong>{" "}
        needs to be on someone else&apos;s server. For waitlist data — with its
        unique mix of career, legal, financial, and personal information — the
        answer, for most people, is no. Your waiting data is your business. It
        should stay on your device until you decide otherwise.
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
            href="/use-cases/government"
            className="text-violet hover:underline"
          >
            Awaitr for Government Documents
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="text-violet hover:underline">
            Awaitr Privacy Policy
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
        Mengapa Data Daftar Tunggu Anda Harus Tetap di Perangkat Anda
      </h1>
      <time className="text-sm text-foreground/40 block mb-8">
        27 Maret 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Sebagian besar aplikasi saat ini menggunakan penyimpanan cloud secara
        default. Catatan, tugas, dan pelacak Anda tersimpan di server orang
        lain. Untuk produktivitas umum — dokumen bersama, wiki tim, proyek
        kolaboratif — pertukaran ini masuk akal. Kenyamanan akses dari perangkat
        mana pun melebihi biaya privasi.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Tapi data daftar tunggu berbeda. Lamaran kerja mengandung ekspektasi
        gaji, kerentanan karir, dan riwayat penolakan. Pelacak visa dan dokumen
        pemerintah mengungkapkan status imigrasi, detail identitas, dan proses
        hukum. Pre-order belanja mengekspos kebiasaan finansial dan pola
        pembelian. Ini adalah{" "}
        <strong className="text-foreground font-medium">
          informasi yang sangat sensitif
        </strong>{" "}
        yang membutuhkan perlindungan lebih dari yang disediakan aplikasi
        produktivitas berbasis cloud biasa.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Apa yang Diungkapkan Data Daftar Tunggu Anda
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Pertimbangkan apa yang sebenarnya terkandung dalam gambaran lengkap data
        daftar tunggu seseorang. Pelacak lamaran kerja tidak hanya mencantumkan
        nama perusahaan. Ini menunjukkan perusahaan mana yang menolak Anda,
        seberapa jauh Anda dalam setiap proses, berapa lama Anda sudah mencari,
        dan peran serta rentang gaji apa yang Anda targetkan. Untuk seseorang
        dalam situasi pekerjaan sensitif — mencari kerja sambil masih bekerja,
        misalnya — data ini benar-benar merugikan jika terekspos.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Pelacakan dokumen pemerintah bahkan lebih sensitif. Status pengajuan
        visa mengungkapkan niat dan timeline imigrasi. Pelacakan perpanjangan
        paspor mengekspos detail dokumen identitas. Daftar tunggu terkait pajak
        bisa menunjukkan situasi keuangan. Ini adalah jenis data yang secara
        khusus ditargetkan oleh pencuri identitas, dan jenis data yang bisa
        digunakan pemerintah dan pemberi kerja terhadap individu.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Bahkan kategori yang tampak tidak berbahaya pun membawa bobot. Pelacak
        pre-order menunjukkan apa yang bersedia Anda habiskan sebelum produk
        tersedia — informasi yang sangat berharga bagi jaringan periklanan.
        Daftar tunggu acara mengungkapkan pola sosial, minat, dan lokasi fisik
        yang Anda rencanakan untuk dikunjungi.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Secara individual, setiap item mungkin tampak tidak berbahaya. Tapi
        secara keseluruhan, data daftar tunggu Anda melukiskan{" "}
        <strong className="text-foreground font-medium">
          potret yang sangat detail tentang keadaan hidup Anda
        </strong>
        : status karir, posisi keuangan, situasi hukum, dan prioritas pribadi.
        Potret itu milik Anda, bukan milik penyedia cloud.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Masalah Cloud-secara-Default
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Ekosistem aplikasi modern telah menormalisasi penyimpanan cloud sampai
        pada titik di mana aplikasi local-first terasa tidak biasa. Sebagian
        besar alat produktivitas memerlukan pembuatan akun sebelum Anda bisa
        menggunakannya. Data Anda diunggah ke server sebagai perilaku default,
        seringkali sebelum Anda sempat mengevaluasi apakah Anda mempercayai
        layanan tersebut.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Ini tidak selalu jahat. Penyimpanan cloud memungkinkan fitur nyata:
        sinkronisasi antar perangkat, kolaborasi, backup, dan akses web. Tapi
        ini juga memungkinkan model bisnis yang bergantung pada data Anda.
        Bahkan aplikasi &quot;gratis&quot; memiliki biaya. Biaya tersebut
        ditutupi oleh analitik yang melacak perilaku Anda, penargetan iklan
        berdasarkan konten Anda, atau kemitraan data dengan pihak ketiga.
        Sedikit pengguna yang membaca kebijakan privasi, dan lebih sedikit lagi
        yang memahami implikasi klausul pembagian data yang tersembunyi di
        dalamnya.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Kenyataan yang tidak nyaman adalah begitu data Anda berada di server
        orang lain, Anda tidak lagi sepenuhnya mengendalikannya. Perusahaan
        bisa mengubah kebijakan privasinya. Bisa diakuisisi oleh perusahaan
        lain dengan praktik berbeda. Servernya bisa diretas. Bisa menerima
        tuntutan hukum untuk menyerahkan data. Ini bukan risiko hipotetis —
        ini adalah peristiwa yang terjadi secara reguler pada perusahaan
        terkenal.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Apa Arti Privacy-First yang Sebenarnya
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        &quot;Privacy-first&quot; telah menjadi frasa pemasaran yang digunakan
        banyak aplikasi tanpa dukungan substantif. Definisi yang bermakna
        memerlukan komitmen teknis yang spesifik dan bisa diverifikasi — bukan
        jaminan yang samar.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Arsitektur privacy-first yang sesungguhnya berarti:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>
          <strong className="text-foreground font-medium">
            Data tidak pernah meninggalkan perangkat.
          </strong>{" "}
          Bukan &quot;data dienkripsi sebelum diunggah&quot; — data secara
          harfiah tidak meninggalkan perangkat fisik kecuali Anda secara
          eksplisit mengekspornya.
        </li>
        <li>
          <strong className="text-foreground font-medium">
            Tanpa pembuatan akun.
          </strong>{" "}
          Akun menciptakan tautan identitas. Jika tidak ada akun, tidak ada
          profil pengguna di server yang bisa dikaitkan dengan data Anda.
        </li>
        <li>
          <strong className="text-foreground font-medium">
            Tanpa SDK analitik.
          </strong>{" "}
          Tanpa Firebase Analytics, tanpa Amplitude, tanpa Mixpanel, tanpa
          telemetri kustom. Nol data penggunaan yang dikumpulkan atau
          ditransmisikan.
        </li>
        <li>
          <strong className="text-foreground font-medium">
            Tanpa permintaan jaringan untuk data pengguna.
          </strong>{" "}
          Aplikasi harus berfungsi identik tanpa akses jaringan. Mode pesawat
          adalah tes yang valid untuk aplikasi privacy-first.
        </li>
        <li>
          <strong className="text-foreground font-medium">
            Tanpa dependensi pihak ketiga yang bisa menelepon pulang.
          </strong>{" "}
          Setiap library pihak ketiga adalah potensi kebocoran data. Semakin
          sedikit dependensi, semakin kecil permukaan serangan.
        </li>
      </ul>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Bagaimana Awaitr Mengimplementasikan Privasi
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <Link href="/" className="text-violet hover:underline">
          Awaitr
        </Link>{" "}
        memenuhi setiap kriteria yang tercantum di atas, dan keputusan teknis
        di balik aplikasi ini membuat klaim-klaim tersebut bisa diverifikasi,
        bukan sekadar aspirasional.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">
          Penyimpanan lokal dengan SwiftData Apple.
        </strong>{" "}
        Semua data disimpan di perangkat menggunakan SwiftData, framework
        persistensi native Apple. SwiftData menyimpan data dalam file database
        lokal yang tidak pernah disinkronkan ke server mana pun. Item daftar
        tunggu, tahapan alur proses, catatan, dan tanggal Anda hanya ada di
        iPhone Anda.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">
          Nol dependensi pihak ketiga.
        </strong>{" "}
        Awaitr dibangun sepenuhnya dengan framework first-party Apple: SwiftUI,
        SwiftData, dan library standar Swift 6.2. Tidak ada Firebase, tidak ada
        Amplitude, tidak ada Sentry, tidak ada Crashlytics, tidak ada library
        jaringan pihak ketiga. Nol. Ini bukan sikap filosofis — ini adalah
        keputusan teknis yang menghilangkan seluruh kategori risiko privasi.
        Setiap SDK pihak ketiga adalah kode yang tidak Anda kendalikan, ditulis
        oleh orang-orang dengan insentif pengumpulan data mereka sendiri.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">
          Tanpa akun pengguna.
        </strong>{" "}
        Anda membuka Awaitr dan langsung menggunakannya. Tanpa email, tanpa
        password, tanpa &quot;Masuk dengan Apple,&quot; tanpa ID pengguna
        anonim. Tanpa akun, tidak ada cara untuk mengaitkan data Anda dengan
        identitas Anda di server mana pun.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">
          Berfungsi dalam mode pesawat.
        </strong>{" "}
        Setiap fitur di Awaitr berfungsi tanpa konektivitas jaringan. Anda bisa
        menambahkan item, memindahkannya melalui tahapan alur proses, mengatur
        pengingat, dan melihat dashboard Anda di pesawat tanpa Wi-Fi. Ini bukan
        sekadar kenyamanan — ini bukti bahwa aplikasi tidak membutuhkan server
        untuk berfungsi.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        <strong className="text-foreground font-medium">
          Di bawah 15 MB.
        </strong>{" "}
        Ukuran aplikasi itu sendiri adalah sinyal privasi. Aplikasi 15 MB tidak
        memiliki ruang untuk framework pelacakan tersembunyi, SDK periklanan
        yang dibundel, atau layanan pengumpulan data di latar belakang. Apa yang
        Anda lihat adalah apa yang Anda dapatkan.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Perbandingan Privasi
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Berikut perbandingan Awaitr dengan alternatif umum dalam dimensi
        privasi:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-foreground/10">
              <th className="text-left py-3 pr-4 font-semibold text-foreground">
                Dimensi
              </th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">
                Awaitr
              </th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">
                Huntr
              </th>
              <th className="text-left py-3 px-4 font-semibold text-foreground">
                Notion
              </th>
            </tr>
          </thead>
          <tbody className="text-foreground/70">
            <tr className="border-b border-foreground/5">
              <td className="py-3 pr-4 font-medium text-foreground">
                Lokasi data
              </td>
              <td className="py-3 px-4">Hanya di perangkat</td>
              <td className="py-3 px-4">Server cloud</td>
              <td className="py-3 px-4">Server cloud</td>
            </tr>
            <tr className="border-b border-foreground/5">
              <td className="py-3 pr-4 font-medium text-foreground">
                Akun diperlukan
              </td>
              <td className="py-3 px-4">Tidak</td>
              <td className="py-3 px-4">Ya</td>
              <td className="py-3 px-4">Ya</td>
            </tr>
            <tr className="border-b border-foreground/5">
              <td className="py-3 pr-4 font-medium text-foreground">
                SDK pihak ketiga
              </td>
              <td className="py-3 px-4">Tidak ada</td>
              <td className="py-3 px-4">Beberapa</td>
              <td className="py-3 px-4">Beberapa</td>
            </tr>
            <tr className="border-b border-foreground/5">
              <td className="py-3 pr-4 font-medium text-foreground">
                Kemampuan offline
              </td>
              <td className="py-3 px-4">Fungsionalitas penuh</td>
              <td className="py-3 px-4">Terbatas</td>
              <td className="py-3 px-4">Sebagian (halaman cache)</td>
            </tr>
            <tr className="border-b border-foreground/5">
              <td className="py-3 pr-4 font-medium text-foreground">
                Pengumpulan analitik
              </td>
              <td className="py-3 px-4">Tidak ada</td>
              <td className="py-3 px-4">Ya</td>
              <td className="py-3 px-4">Ya</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Kapan Cloud Masuk Akal
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Kejujuran tentang pertukaran itu penting. Penyimpanan local-only bukan
        pilihan yang tepat untuk semua orang atau setiap situasi. Jika Anda
        membutuhkan{" "}
        <strong className="text-foreground font-medium">
          sinkronisasi antar perangkat
        </strong>{" "}
        — mengakses daftar tunggu dari ponsel, tablet, dan komputer — alat
        berbasis cloud saat ini diperlukan. Jika Anda membutuhkan{" "}
        <strong className="text-foreground font-medium">kolaborasi</strong> —
        berbagi pelacak lamaran dengan konselor karir atau pasangan — cloud
        memungkinkan itu. Jika Anda membutuhkan{" "}
        <strong className="text-foreground font-medium">akses web</strong>,
        aplikasi native local-only tidak bisa menyediakannya.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr dirancang untuk{" "}
        <strong className="text-foreground font-medium">
          pelacakan pribadi satu perangkat di mana privasi lebih penting
          daripada sinkronisasi
        </strong>
        . Untuk kebanyakan orang yang mengelola lamaran kerja, dokumen
        pemerintah, atau pembelian pribadi mereka sendiri, akses satu perangkat
        sudah cukup. Anda menambahkan dan memeriksa item dari ponsel — perangkat
        yang sama yang Anda bawa ke mana-mana.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Sinkronisasi iCloud direncanakan untuk pembaruan Awaitr di masa depan,
        yang akan memungkinkan akses multi-perangkat sambil menjaga data dalam
        ekosistem Apple daripada di server pihak ketiga. Pendekatan ini
        mempertahankan prinsip privacy-first: data Anda tetap di bawah kendali
        Anda, dikelola melalui akun Apple pribadi Anda, dengan enkripsi
        end-to-end Apple yang melindunginya saat transit dan saat tersimpan.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Pertanyaan intinya bukan apakah penyimpanan cloud itu buruk. Tetapi
        apakah{" "}
        <strong className="text-foreground font-medium">
          data spesifik Anda
        </strong>{" "}
        perlu berada di server orang lain. Untuk data daftar tunggu — dengan
        campuran unik informasi karir, hukum, keuangan, dan pribadi — jawabannya,
        bagi kebanyakan orang, adalah tidak. Data penantian Anda adalah urusan
        Anda. Seharusnya tetap di perangkat Anda sampai Anda memutuskan
        sebaliknya.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Pertanyaan yang Sering Diajukan
      </h2>
      <div className="mb-6">
        <h3 className="font-display text-xl font-semibold mb-3 mt-8">
          Apakah Awaitr mengumpulkan data pengguna?
        </h3>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Tidak. Awaitr tidak memiliki SDK analitik, tidak ada akun pengguna,
          dan tidak melakukan permintaan jaringan untuk data pengguna. Semua
          informasi yang Anda masukkan tetap di perangkat Anda dalam penyimpanan
          SwiftData Apple. Aplikasi berfungsi sepenuhnya offline.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="font-display text-xl font-semibold mb-3 mt-8">
          Apa perbedaan penyimpanan local-only dengan enkripsi end-to-end?
        </h3>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Enkripsi end-to-end berarti data Anda dienkripsi sebelum diunggah ke
          server, sehingga server tidak bisa membacanya. Penyimpanan local-only
          berarti data Anda tidak pernah meninggalkan perangkat sama sekali —
          tidak ada server yang terlibat. Local-only menghilangkan seluruh
          kategori risiko sisi server: pelanggaran, panggilan pengadilan, akses
          karyawan, dan perubahan kebijakan.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="font-display text-xl font-semibold mb-3 mt-8">
          Apakah Awaitr akan menambahkan sinkronisasi cloud di masa depan?
        </h3>
        <p className="text-foreground/70 leading-relaxed mb-4">
          Sinkronisasi iCloud direncanakan untuk pembaruan di masa depan, yang
          akan menjaga data dalam ekosistem Apple menggunakan akun iCloud
          pribadi Anda. Ini secara fundamental berbeda dari penyimpanan cloud
          pihak ketiga karena Apple mengelola enkripsi dan Anda mengendalikan
          akunnya. Tidak ada server pihak ketiga yang akan pernah menyimpan
          data Anda.
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
            href="/use-cases/government"
            className="text-violet hover:underline"
          >
            Awaitr untuk Dokumen Pemerintah
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="text-violet hover:underline">
            Kebijakan Privasi Awaitr
          </Link>
        </li>
      </ul>
    </>
  );
}

export default function PrivacyFirstPage() {
  return (
    <ContentPageShell breadcrumbs={breadcrumbs} jsonLd={jsonLd}>
      <BilingualContent en={<EnglishContent />} id={<IndonesianContent />} />
    </ContentPageShell>
  );
}
