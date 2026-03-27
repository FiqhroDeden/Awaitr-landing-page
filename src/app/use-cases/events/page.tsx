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
  title: "Awaitr for Event Registration — Track RSVPs & Tickets",
  description:
    "Track event registrations, RSVPs, and ticket waitlists with Awaitr. Free, offline event tracker for iOS.",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Use Cases", href: "/use-cases/job-seekers" },
  { label: "Event Registration", href: "/use-cases/events" },
];

const faqItems = [
  {
    question: "Can I track different types of events?",
    answer:
      "Yes. Awaitr does not distinguish between event types. You can track tech conferences, music festivals, community meetups, weddings, sports events, and casual get-togethers all in the same pipeline. Each entry is independent, so a concert ticket waitlist and a wedding RSVP can coexist without any conflict. You organize by status, not by event category, which keeps the view simple regardless of how many different kinds of events you are tracking.",
  },
  {
    question: "Does Awaitr replace my calendar app?",
    answer:
      "No, and it is not trying to. Your calendar app is great for scheduling — it tells you where to be and when. Awaitr handles what happens before the event: the registration process, the waitlist status, the confirmation you are waiting on. Think of Awaitr as the pre-event tracker and your calendar as the day-of scheduler. They complement each other. Once an event is confirmed and you know the date and time, add it to your calendar. Use Awaitr to track the process of getting there.",
  },
  {
    question: "Can I set reminders for event dates?",
    answer:
      "Yes. Every item in Awaitr can have a reminder date attached. For events, you might set a reminder for when registration opens, when early-bird pricing ends, when your RSVP deadline is, or a few days before the event itself so you can prepare. Reminders are delivered as local iOS notifications and work entirely offline — no internet connection required.",
  },
];

const jsonLd = [
  generateArticleSchema({
    title: "Awaitr for Event Registration — Track RSVPs & Tickets",
    description:
      "Track event registrations, RSVPs, and ticket waitlists with Awaitr. Free, offline event tracker for iOS.",
    url: "https://awaitr.vercel.app/use-cases/events",
  }),
  generateFAQSchema(faqItems),
  generateBreadcrumbSchema(breadcrumbs),
];

export default function EventsPage() {
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
        Awaitr for Event Registration
      </h1>
      <time
        dateTime="2026-03-27"
        className="text-sm text-foreground/40 block mb-8"
      >
        Published March 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        You registered for a tech conference three months ago. The confirmation
        email is somewhere in your inbox. You think you are on the waitlist for
        that sold-out workshop, but you are not entirely sure because the
        notification came through a messaging app and you cannot find the
        thread. Your friend sent you a wedding RSVP link two weeks ago and you
        meant to respond but forgot. Meanwhile, tickets for a concert you want
        to attend go on sale next Friday, and you have already made a mental
        note that you will probably forget by Thursday.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        This is how most people manage event registrations. It is not a system.
        It is a collection of scattered information held together by hope and
        occasional inbox searches. Awaitr gives you a better way.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        The Problem: Event Information Lives Everywhere Except One Place
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Event-related information is uniquely fragmented. A concert ticket
        purchase confirmation arrives by email. A meetup RSVP lives on a
        platform you check once a month. A conference registration status page
        requires logging into a portal you have already forgotten the password
        for. A friend&apos;s birthday party invitation came through a group
        chat that now has three hundred unrelated messages on top of it.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Each channel makes sense in isolation. Event organizers use whatever
        platform works best for them. The problem is entirely on the attendee
        side. You are the one who needs to synthesize information from a dozen
        different sources into a coherent picture of what you are registered
        for, what you are waitlisted on, and what you have not yet responded
        to.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Calendar apps partially solve this, but only for confirmed events with
        known dates and times. They do not handle the pre-event process: the
        registration you submitted but have not heard back about, the ticket
        waitlist you joined, the RSVP you need to send before a deadline. These
        in-between states are exactly where things fall through the cracks.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>Conference registration confirmations buried in email</li>
        <li>Ticket waitlist positions tracked on platforms you rarely check</li>
        <li>RSVP deadlines hidden in group chat messages</li>
        <li>Meetup registrations scattered across multiple event platforms</li>
        <li>No unified view of pending, confirmed, and attended events</li>
      </ul>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        How Awaitr Solves It
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr includes an event registration pipeline template with stages
        that match the natural flow of event attendance: Registered, Confirmed,
        and Attended. This simple three-stage model captures the progression
        from &quot;I signed up&quot; to &quot;I went.&quot; You add each event
        as an entry, move it through stages as its status changes, and always
        have a clear picture of where things stand.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        A Pipeline That Reflects How Events Actually Work
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        The <strong>Registered</strong> stage captures everything you have
        signed up for but have not yet received confirmation on. This includes
        ticket waitlists, RSVPs you have submitted, conference registrations
        pending approval, and event invitations you have accepted but are
        waiting for confirmation. At a glance, you can see every event that is
        still in limbo.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        The <strong>Confirmed</strong> stage is for events where you have a
        definite spot. Your ticket was issued. Your RSVP was acknowledged. Your
        conference badge is ready for pickup. These are the events you are
        definitely attending, and seeing them separated from pending
        registrations reduces the mental noise of uncertainty.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        The <strong>Attended</strong> stage serves as your event history. After
        the event, move it here. Over time, this becomes a personal log of
        events you have been to. This is surprisingly useful for professional
        events where you might need to reference which conferences you attended
        for a resume, expense report, or conversation with a colleague.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Group Events by Type
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr lets you use its category system to distinguish between event
        types if you want to. Professional conferences in one view, social
        events in another, concerts and festivals in a third. Or keep
        everything together in a single pipeline. The flexibility is yours. The
        point is that all your event registrations are in Awaitr instead of
        scattered across your digital life.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Reminders for the Dates That Matter
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Events come with multiple important dates, not just the event itself.
        There is the registration opening date, the early-bird deadline, the
        RSVP cutoff, and the event date. Awaitr lets you attach a reminder to
        each entry, so you can set alerts for whichever date is most important
        for that particular event. These are local iOS notifications that work
        offline, so you will get the reminder regardless of your connectivity.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        All Your Events in One Place
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Whether it is a tech conference in Jakarta, a music festival in
        Bandung, a community meetup in your neighborhood, or a family gathering
        next month, Awaitr gives you a single view of everything you are
        registered for. The value is not in any single feature but in the act
        of consolidation. When every event registration lives in one app, you
        stop worrying about what you might have forgotten.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        People who attend a lot of events often describe a low-level background
        anxiety: the feeling that there is something they signed up for that
        they have lost track of. Awaitr eliminates that feeling. Open the app,
        look at the pipeline, and you know exactly where you stand with every
        event in your life.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Because Awaitr is completely offline and stores data only on your
        device, there is no concern about event organizers or third parties
        seeing your registration data. Your event attendance patterns, your
        interests, and your RSVP history are private. No analytics. No
        tracking. No account required. Just a clean pipeline view of the events
        you care about.
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
              href="/use-cases/shoppers"
              className="text-violet hover:underline"
            >
              Awaitr for Shoppers
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
        Awaitr untuk Pendaftaran Acara
      </h1>
      <time
        dateTime="2026-03-27"
        className="text-sm text-foreground/40 block mb-8"
      >
        Diterbitkan Maret 2026
      </time>

      <p className="text-foreground/70 leading-relaxed mb-4">
        Anda mendaftar konferensi teknologi tiga bulan lalu. Email
        konfirmasinya ada di suatu tempat di inbox. Anda rasa Anda masuk daftar
        tunggu workshop yang sold-out itu, tapi tidak sepenuhnya yakin karena
        notifikasinya datang melalui aplikasi pesan dan Anda tidak bisa
        menemukan pesannya. Teman Anda mengirim link RSVP pernikahan dua minggu
        lalu dan Anda berniat merespons tapi lupa. Sementara itu, tiket konser
        yang ingin Anda hadiri mulai dijual Jumat depan, dan Anda sudah membuat
        catatan mental yang kemungkinan besar akan terlupakan pada hari Kamis.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Begitulah kebanyakan orang mengelola pendaftaran acara. Ini bukan
        sebuah sistem. Ini kumpulan informasi tersebar yang disatukan oleh
        harapan dan pencarian inbox sesekali. Awaitr memberi Anda cara yang
        lebih baik.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Masalahnya: Informasi Acara Ada di Mana-Mana Kecuali Satu Tempat
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Informasi terkait acara sangat terfragmentasi. Konfirmasi pembelian
        tiket konser datang lewat email. RSVP meetup ada di platform yang Anda
        cek sebulan sekali. Halaman status pendaftaran konferensi memerlukan
        login ke portal yang kata sandinya sudah Anda lupakan. Undangan pesta
        ulang tahun teman datang melalui group chat yang sekarang sudah punya
        tiga ratus pesan tidak terkait di atasnya.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Setiap kanal masuk akal secara terpisah. Penyelenggara acara
        menggunakan platform apa pun yang paling cocok bagi mereka. Masalahnya
        sepenuhnya ada di sisi peserta. Andalah yang perlu menyintesis
        informasi dari belasan sumber berbeda menjadi gambaran yang koheren
        tentang apa yang sudah didaftarkan, apa yang masuk daftar tunggu, dan
        apa yang belum direspons.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Aplikasi kalender menyelesaikan ini sebagian, tapi hanya untuk acara
        yang sudah terkonfirmasi dengan tanggal dan waktu yang jelas. Kalender
        tidak menangani proses pra-acara: pendaftaran yang sudah diajukan tapi
        belum ada kabar, daftar tunggu tiket yang sudah diikuti, RSVP yang
        perlu dikirim sebelum tenggat. Kondisi di-antara ini persis di mana
        hal-hal jatuh dari perhatian.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70 mb-6">
        <li>Konfirmasi pendaftaran konferensi terkubur di email</li>
        <li>Posisi daftar tunggu tiket dilacak di platform yang jarang dicek</li>
        <li>Tenggat RSVP tersembunyi di pesan group chat</li>
        <li>Pendaftaran meetup tersebar di beberapa platform acara</li>
        <li>Tidak ada tampilan terpadu untuk acara yang tertunda, terkonfirmasi, dan sudah dihadiri</li>
      </ul>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Bagaimana Awaitr Menyelesaikannya
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr menyertakan template alur proses pendaftaran acara dengan tahap
        yang sesuai dengan alur alami kehadiran acara: Terdaftar, Terkonfirmasi,
        dan Hadir. Model tiga tahap sederhana ini menangkap progresi dari
        &quot;saya sudah mendaftar&quot; hingga &quot;saya sudah hadir.&quot;
        Anda menambahkan setiap acara sebagai entri, memindahkannya melalui
        tahap saat statusnya berubah, dan selalu memiliki gambaran jelas tentang
        posisi setiap hal.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Alur Proses yang Mencerminkan Cara Acara Sebenarnya Bekerja
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Tahap <strong>Terdaftar</strong> menangkap semua yang sudah Anda
        daftarkan tetapi belum menerima konfirmasi. Ini termasuk daftar tunggu
        tiket, RSVP yang sudah dikirim, pendaftaran konferensi yang menunggu
        persetujuan, dan undangan acara yang sudah diterima tapi menunggu
        konfirmasi. Sekilas, Anda bisa melihat setiap acara yang masih
        menggantung.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Tahap <strong>Terkonfirmasi</strong> untuk acara di mana Anda sudah
        punya tempat pasti. Tiket Anda sudah diterbitkan. RSVP Anda sudah
        diakui. Badge konferensi Anda siap diambil. Ini adalah acara yang pasti
        akan Anda hadiri, dan melihatnya terpisah dari pendaftaran yang masih
        tertunda mengurangi kebisingan mental dari ketidakpastian.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Tahap <strong>Hadir</strong> berfungsi sebagai riwayat acara Anda.
        Setelah acara, pindahkan ke sini. Seiring waktu, ini menjadi catatan
        personal acara yang pernah Anda hadiri. Ini ternyata berguna untuk
        acara profesional di mana Anda mungkin perlu merujuk konferensi mana
        yang pernah dihadiri untuk resume, laporan pengeluaran, atau
        percakapan dengan kolega.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Kelompokkan Acara Berdasarkan Jenis
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Awaitr memungkinkan Anda menggunakan sistem kategorinya untuk
        membedakan jenis acara jika diinginkan. Konferensi profesional di satu
        tampilan, acara sosial di tampilan lain, konser dan festival di tampilan
        ketiga. Atau simpan semuanya bersama dalam satu alur proses.
        Fleksibilitasnya milik Anda. Intinya adalah semua pendaftaran acara
        Anda ada di Awaitr alih-alih tersebar di kehidupan digital Anda.
      </p>

      <h3 className="font-display text-xl font-semibold mb-3 mt-8">
        Pengingat untuk Tanggal yang Penting
      </h3>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Acara datang dengan beberapa tanggal penting, bukan hanya acara itu
        sendiri. Ada tanggal pembukaan pendaftaran, tenggat early-bird, batas
        waktu RSVP, dan tanggal acara. Awaitr memungkinkan Anda melampirkan
        pengingat ke setiap entri, sehingga Anda bisa mengatur alert untuk
        tanggal mana pun yang paling penting untuk acara tertentu. Ini adalah
        notifikasi lokal iOS yang berfungsi offline, jadi Anda akan mendapat
        pengingat terlepas dari konektivitas.
      </p>

      <h2 className="font-display text-2xl font-bold mb-4 mt-10">
        Semua Acara Anda di Satu Tempat
      </h2>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Baik itu konferensi teknologi di Jakarta, festival musik di Bandung,
        meetup komunitas di lingkungan Anda, atau acara keluarga bulan depan,
        Awaitr memberi Anda satu tampilan dari semua yang sudah Anda daftarkan.
        Nilainya bukan pada satu fitur tunggal melainkan pada konsolidasi. Saat
        setiap pendaftaran acara ada di satu aplikasi, Anda berhenti khawatir
        tentang apa yang mungkin terlupakan.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Orang yang sering menghadiri banyak acara sering menggambarkan
        kecemasan latar belakang yang rendah: perasaan bahwa ada sesuatu yang
        sudah didaftarkan tapi kehilangan jejaknya. Awaitr menghilangkan
        perasaan itu. Buka aplikasi, lihat alur proses, dan Anda tahu persis
        posisi Anda dengan setiap acara dalam hidup Anda.
      </p>
      <p className="text-foreground/70 leading-relaxed mb-4">
        Karena Awaitr sepenuhnya offline dan menyimpan data hanya di perangkat
        Anda, tidak ada kekhawatiran tentang penyelenggara acara atau pihak
        ketiga melihat data pendaftaran Anda. Pola kehadiran acara, minat, dan
        riwayat RSVP Anda bersifat privat. Tanpa analitik. Tanpa pelacakan.
        Tanpa akun yang diperlukan. Hanya tampilan alur proses yang bersih dari
        acara yang Anda pedulikan.
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
              href="/use-cases/shoppers"
              className="text-violet hover:underline"
            >
              Awaitr untuk Pembeli
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
