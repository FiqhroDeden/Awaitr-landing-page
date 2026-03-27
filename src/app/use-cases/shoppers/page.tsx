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
  title: "Awaitr for Shoppers — Track Pre-Orders & Product Launches",
  description:
    "Track pre-orders, product launches, and restocks with Awaitr. Free, offline waitlist tracker for shoppers.",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Use Cases", href: "/use-cases/job-seekers" },
  { label: "Shoppers", href: "/use-cases/shoppers" },
];

const faqItems = [
  {
    question: "Can I track multiple pre-orders at once?",
    answer:
      "Yes. Awaitr has no limit on the number of items you can track. Each pre-order gets its own entry in the pipeline, so you can see every pending order at a glance. Whether you have three items or thirty, the pipeline view keeps them organized by status so nothing slips through the cracks.",
  },
  {
    question: "Does Awaitr notify me about product launches?",
    answer:
      "Awaitr lets you set local reminders for any date you choose, including product launch dates, restock windows, or sale events. These reminders are powered by iOS notifications and work entirely offline. Awaitr does not pull launch data from external sources — you add the dates yourself, which means you stay in control and your browsing habits remain private.",
  },
  {
    question: "Can I use Awaitr for tracking online orders?",
    answer:
      "Absolutely. While Awaitr is not a package tracker with carrier integrations, it works well as a personal order log. You can move items through stages like Interested, Pre-ordered, Shipped, and Delivered. Many users find this simpler than digging through email confirmations or logging into multiple retailer dashboards.",
  },
];

const jsonLd = [
  generateArticleSchema({
    title: "Awaitr for Shoppers — Track Pre-Orders & Product Launches",
    description:
      "Track pre-orders, product launches, and restocks with Awaitr. Free, offline waitlist tracker for shoppers.",
    url: "https://awaitr.vercel.app/use-cases/shoppers",
  }),
  generateFAQSchema(faqItems),
  generateBreadcrumbSchema(breadcrumbs),
];

export default function ShoppersPage() {
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
        Awaitr for Shoppers
      </h1>
      <time
        dateTime="2026-03-27"
        className="text-sm text-foreground/40 block mb-8"
      >
        Published March 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        If you have ever placed a pre-order and then completely forgotten about
        it until a mysterious charge appeared on your credit card statement, you
        already understand the problem Awaitr solves. Modern shopping involves a
        growing number of waitlists, pre-orders, limited drops, and restock
        alerts. Keeping track of all of them is surprisingly difficult when the
        information is scattered across email inboxes, retailer apps, and browser
        bookmarks you saved months ago.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        The Problem: Pre-Orders and Launches Are Easy to Lose Track Of
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Think about the last time you pre-ordered something. Maybe it was a new
        phone, a limited-edition sneaker, a vinyl record, or a piece of
        furniture with a twelve-week lead time. You received a confirmation
        email, maybe a follow-up with an estimated ship date, and then... radio
        silence for weeks or months. That confirmation email got buried under
        hundreds of other messages. The estimated ship date faded from memory.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Product launches create a similar challenge. You hear about an upcoming
        release, make a mental note to check back on launch day, and then life
        happens. By the time you remember, the item is sold out. Restock
        notifications are supposed to help, but they often land in spam folders
        or promotional tabs where they go unread.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Limited-edition drops add time pressure to the mix. Streetwear brands,
        sneaker companies, and collector-focused retailers frequently release
        products in small batches with little advance notice. If you are
        tracking multiple drops across different brands, keeping everything
        straight in your head becomes a part-time job.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>Pre-order confirmations buried in overflowing inboxes</li>
        <li>Product launch dates forgotten weeks after you first heard about them</li>
        <li>Restock notifications lost in spam or promotional email tabs</li>
        <li>Limited-edition drop schedules scattered across social media and brand newsletters</li>
        <li>No single view showing everything you are waiting for</li>
      </ul>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        How Awaitr Solves It
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr includes a pre-order pipeline template designed specifically for
        shoppers. When you add a new item, it enters the pipeline at the first
        stage and moves forward as its status changes. The default stages are
        Interested, Pre-ordered, Shipped, and Delivered, but the key idea is
        simple: every item you are waiting on lives in one place, organized by
        how far along it is.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Pipeline Stages That Match How Shopping Actually Works
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        The <strong>Interested</strong> stage is where you park items you are
        thinking about buying. Maybe you saw a product announcement and want to
        decide later, or you are waiting for reviews before committing. This
        stage replaces the mental wishlist most people keep in their heads and
        inevitably forget.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Once you place an order, move the item to <strong>Pre-ordered</strong>.
        This is your active waiting list. At a glance, you can see every item
        you have paid for but have not yet received. If a retailer sends you an
        updated delivery estimate, you can add a note or adjust your reminder
        date.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        When shipping confirmation arrives, move the item to{" "}
        <strong>Shipped</strong>. When it shows up at your door, move it to{" "}
        <strong>Delivered</strong>. Over time, your delivered items form a
        purchase history you can reference. This is useful during return windows,
        warranty periods, or when you simply want to remember when you bought
        something.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Reminders for the Dates That Matter
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Each item in Awaitr can have a reminder date attached to it. For
        shoppers, this is useful in several ways. Set a reminder for a product
        launch date so you get an iOS notification on the morning of the drop.
        Set a reminder for an estimated delivery date so you know to watch for a
        package. Set a reminder for a return deadline so you do not accidentally
        miss the window. These reminders are local iOS notifications, so they
        work even without an internet connection.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Archive as Purchase History
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Once an item reaches the Delivered stage, you can archive it. Your
        archive becomes a log of past purchases with dates and any notes you
        added along the way. This is more useful than it might sound. Have you
        ever needed to look up when you bought something for a warranty claim?
        Or tried to remember which color variant you ordered six months ago?
        Your Awaitr archive has the answer.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Why Not Just Use Apple Reminders?
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        This is a fair question. Apple Reminders can absolutely set a date-based
        alert for a product launch or a pre-order delivery window. For a single
        item, that might be enough. But Reminders falls short when you are
        tracking multiple items at different stages.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>
          <strong>No pipeline view.</strong> Apple Reminders shows a flat list.
          You cannot see which items are in the Interested stage versus
          Pre-ordered versus Shipped. Everything looks the same.
        </li>
        <li>
          <strong>No status tracking.</strong> A reminder is either pending or
          completed. There is no way to represent intermediate stages like
          &quot;shipped but not yet delivered&quot; without creating a clunky
          workaround.
        </li>
        <li>
          <strong>No category organization.</strong> Awaitr separates your
          shopping waitlist from your job applications, scholarship deadlines,
          and other tracked items. In Apple Reminders, everything mixes
          together unless you manually create and manage multiple lists.
        </li>
        <li>
          <strong>No analytics.</strong> Awaitr can show you how long items
          typically spend in each stage. Apple Reminders does not track
          duration or provide any insight into your waiting patterns.
        </li>
      </ul>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Apple Reminders is a general-purpose tool. Awaitr is purpose-built for
        tracking things you are waiting on. That specificity is the difference
        between a tool that technically works and one that actually fits the
        workflow.
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
              href="/use-cases/events"
              className="text-violet hover:underline"
            >
              Awaitr for Event Registration
            </Link>
          </li>
          <li>
            <Link href="/compare" className="text-violet hover:underline">
              Compare Awaitr to Other Tools
            </Link>
          </li>
          <li>
            <Link
              href="/blog/losing-track"
              className="text-violet hover:underline"
            >
              Why We Lose Track of Things We Are Waiting For
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
        Awaitr untuk Pembeli
      </h1>
      <time
        dateTime="2026-03-27"
        className="text-sm text-foreground/40 block mb-8"
      >
        Diterbitkan Maret 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Pernahkah Anda melakukan pre-order lalu benar-benar melupakannya sampai
        tagihan misterius muncul di rekening kartu kredit? Jika pernah, Anda
        sudah memahami masalah yang diselesaikan Awaitr. Belanja modern
        melibatkan semakin banyak daftar tunggu, pre-order, produk edisi
        terbatas, dan notifikasi restock. Melacak semuanya ternyata sangat sulit
        ketika informasinya tersebar di inbox email, aplikasi toko, dan bookmark
        browser yang disimpan berbulan-bulan lalu.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Masalahnya: Pre-Order dan Peluncuran Produk Mudah Terlupakan
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Coba ingat terakhir kali Anda melakukan pre-order sesuatu. Mungkin
        ponsel baru, sneaker edisi terbatas, piringan hitam vinyl, atau furnitur
        dengan waktu tunggu dua belas minggu. Anda menerima email konfirmasi,
        mungkin follow-up dengan estimasi pengiriman, lalu... hening selama
        berminggu-minggu atau berbulan-bulan. Email konfirmasi itu tenggelam di
        bawah ratusan pesan lainnya. Tanggal estimasi pengiriman menghilang dari
        ingatan.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Peluncuran produk menciptakan tantangan serupa. Anda mendengar tentang
        rilis yang akan datang, membuat catatan mental untuk mengecek kembali di
        hari peluncuran, lalu kehidupan berjalan. Saat Anda ingat, barangnya
        sudah habis terjual. Notifikasi restock seharusnya membantu, tetapi
        sering masuk ke folder spam atau tab promosi yang tidak pernah dibaca.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Produk edisi terbatas menambahkan tekanan waktu. Brand streetwear,
        perusahaan sneaker, dan retailer koleksi sering merilis produk dalam
        jumlah kecil dengan sedikit pemberitahuan. Jika Anda melacak beberapa
        rilis dari brand berbeda, mengingat semuanya menjadi pekerjaan
        tersendiri.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>Konfirmasi pre-order terkubur di inbox yang penuh</li>
        <li>Tanggal peluncuran produk terlupakan berminggu-minggu setelah pertama kali mendengarnya</li>
        <li>Notifikasi restock hilang di spam atau tab email promosi</li>
        <li>Jadwal rilis edisi terbatas tersebar di media sosial dan newsletter brand</li>
        <li>Tidak ada satu tampilan yang menunjukkan semua yang sedang ditunggu</li>
      </ul>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Bagaimana Awaitr Menyelesaikannya
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr menyertakan template alur proses pre-order yang dirancang khusus
        untuk pembeli. Saat Anda menambahkan item baru, item tersebut masuk ke
        alur proses di tahap pertama dan bergerak maju seiring perubahan
        statusnya. Tahap default-nya adalah Tertarik, Di-preorder, Dikirim, dan
        Diterima. Ide utamanya sederhana: setiap item yang Anda tunggu berada di
        satu tempat, diorganisir berdasarkan sejauh mana prosesnya.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Tahapan Alur Proses yang Sesuai dengan Cara Belanja Sebenarnya
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Tahap <strong>Tertarik</strong> adalah tempat Anda menyimpan item yang
        sedang dipertimbangkan untuk dibeli. Mungkin Anda melihat pengumuman
        produk dan ingin memutuskan nanti, atau sedang menunggu review sebelum
        berkomitmen. Tahap ini menggantikan wishlist mental yang kebanyakan orang
        simpan di kepala dan akhirnya lupa.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Setelah Anda memesan, pindahkan item ke{" "}
        <strong>Di-preorder</strong>. Ini adalah daftar tunggu aktif Anda.
        Sekilas, Anda bisa melihat setiap item yang sudah dibayar tapi belum
        diterima. Jika retailer mengirim estimasi pengiriman yang diperbarui,
        Anda bisa menambahkan catatan atau menyesuaikan tanggal pengingat.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Saat konfirmasi pengiriman tiba, pindahkan item ke{" "}
        <strong>Dikirim</strong>. Saat barang sampai di pintu rumah, pindahkan
        ke <strong>Diterima</strong>. Seiring waktu, item yang sudah diterima
        membentuk riwayat pembelian yang bisa Anda rujuk. Ini berguna selama
        periode pengembalian, masa garansi, atau saat Anda ingin mengingat kapan
        membeli sesuatu.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Pengingat untuk Tanggal yang Penting
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Setiap item di Awaitr bisa memiliki tanggal pengingat. Untuk pembeli,
        ini berguna dalam beberapa cara. Atur pengingat untuk tanggal
        peluncuran produk agar mendapat notifikasi iOS di pagi hari rilis. Atur
        pengingat untuk estimasi tanggal pengiriman agar tahu kapan harus
        mengawasi paket. Atur pengingat untuk batas waktu pengembalian agar
        tidak melewatkan jendela return. Pengingat ini adalah notifikasi lokal
        iOS, jadi berfungsi bahkan tanpa koneksi internet.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Arsip sebagai Riwayat Pembelian
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Setelah item mencapai tahap Diterima, Anda bisa mengarsipkannya. Arsip
        Anda menjadi catatan pembelian masa lalu dengan tanggal dan catatan yang
        ditambahkan sepanjang proses. Ini lebih berguna dari yang terdengar.
        Pernahkah Anda perlu mencari kapan membeli sesuatu untuk klaim garansi?
        Atau mencoba mengingat varian warna mana yang dipesan enam bulan lalu?
        Arsip Awaitr Anda memiliki jawabannya.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Kenapa Tidak Pakai Apple Reminders Saja?
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Ini pertanyaan yang wajar. Apple Reminders memang bisa mengatur alert
        berbasis tanggal untuk peluncuran produk atau jendela pengiriman
        pre-order. Untuk satu item, itu mungkin cukup. Tapi Reminders kurang
        memadai saat Anda melacak beberapa item di tahap berbeda.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>
          <strong>Tidak ada tampilan alur proses.</strong> Apple Reminders
          menampilkan daftar datar. Anda tidak bisa melihat item mana yang di
          tahap Tertarik versus Di-preorder versus Dikirim. Semuanya terlihat
          sama.
        </li>
        <li>
          <strong>Tidak ada pelacakan status.</strong> Pengingat hanya bisa
          pending atau selesai. Tidak ada cara untuk merepresentasikan tahap
          perantara seperti &quot;sudah dikirim tapi belum diterima&quot; tanpa
          solusi yang rumit.
        </li>
        <li>
          <strong>Tidak ada organisasi kategori.</strong> Awaitr memisahkan
          daftar tunggu belanja Anda dari lamaran kerja, tenggat beasiswa, dan
          item terlacak lainnya. Di Apple Reminders, semuanya tercampur kecuali
          Anda membuat dan mengelola banyak daftar secara manual.
        </li>
        <li>
          <strong>Tidak ada analitik.</strong> Awaitr bisa menunjukkan berapa
          lama item biasanya menghabiskan waktu di setiap tahap. Apple Reminders
          tidak melacak durasi atau memberikan wawasan tentang pola penantian
          Anda.
        </li>
      </ul>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Apple Reminders adalah alat serbaguna. Awaitr dibuat khusus untuk
        melacak hal-hal yang sedang Anda tunggu. Kekhususan itulah perbedaan
        antara alat yang secara teknis bisa dipakai dan alat yang benar-benar
        sesuai dengan alur kerja.
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
              href="/use-cases/events"
              className="text-violet hover:underline"
            >
              Awaitr untuk Pendaftaran Acara
            </Link>
          </li>
          <li>
            <Link href="/compare" className="text-violet hover:underline">
              Bandingkan Awaitr dengan Alat Lainnya
            </Link>
          </li>
          <li>
            <Link
              href="/blog/losing-track"
              className="text-violet hover:underline"
            >
              Mengapa Kita Kehilangan Jejak Hal yang Kita Tunggu
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
