import type { Messages } from "./ja";

export const id: Messages = {
  meta: {
    siteTitle: "whenly | Atur jadwal & cek kehadiran gratis, tanpa login",
    siteDescription:
      "Temukan tanggal terbaik untuk kumpul-kumpul, reuni, dan rapat tanpa daftar. Buat acara dengan satu klik; peserta cukup buka tautan dan pilih ○△×. Gratis.",
    keywords: [
      "atur jadwal",
      "polling jadwal",
      "konfirmasi kehadiran",
      "aplikasi atur jadwal",
      "tanpa login",
      "cari waktu kumpul",
      "reuni",
      "resepsi pernikahan",
      "acara penyambutan",
      "acara perpisahan",
      "komunitas",
      "jadwal rapat",
    ],
  },
  common: {
    login: "Masuk",
    signup: "Buat akun",
    logout: "Keluar",
    register: "Daftar",
    save: "Simpan",
    saving: "Menyimpan...",
    saved: "Tersimpan",
    delete: "Hapus",
    copy: "Salin",
    copied: "Tersalin ✓",
    processing: "Memproses...",
    print: "Cetak",
    guest: "Tamu",
    unnamed: "(tanpa nama)",
    nobodyYet: "Belum ada",
    backToTop: "← Kembali ke beranda",
    backToLogin: "← Kembali ke halaman masuk",
    backToDashboard: "← Kembali ke dasbor",
    backToEvents: "← Kembali ke daftar acara",
    backToMyPage: "← Kembali ke halaman saya",
    forgotPassword: "Lupa kata sandi?",
    noAccount: "Belum punya akun?",
    haveAccount: "Sudah punya akun?",
    tryNow: "Ingin langsung mencoba?",
    startWithoutAccount: "Mulai tanpa akun",
    name: "Nama",
    nameOptional: "Nama (opsional)",
    email: "Alamat email",
    password: "Kata sandi",
    passwordHint: "Minimal 8 karakter",
    copyright: "© PAPS",
    language: "Bahasa",
    listSeparator: ", ",
  },
  home: {
    tagline:
      "Aplikasi pengatur jadwal: penyelenggara mengusulkan tanggal, peserta cukup menjawab ya atau tidak",
    description:
      "Untuk kumpul-kumpul, reuni, resepsi pernikahan, acara penyambutan dan perpisahan, komunitas, rapat, dan berbagai kesempatan lain saat Anda perlu mengatur jadwal dan mengelola kehadiran. Peserta bisa menjawab cukup dengan membuka tautan, tanpa login atau membuat akun.",
    organizerTitle: "Penyelenggara",
    organizerDescription: "Buat acara dan tambahkan tanggal kandidat",
    participantTitle: "Peserta",
    participantDescription: "Ikut serta dan jawab melalui tautan yang dibagikan kepada Anda",
  },
  start: {
    metaTitle: "Mulai tanpa akun",
    metaDescription:
      "Buat acara pengaturan jadwal seketika dengan satu klik, tanpa perlu mendaftar akun.",
    title: "Mulai tanpa akun",
    description: "Cukup tekan tombol dan Anda bisa langsung membuat acara.",
    startButton: "Mulai membuat acara",
    note: "* Acara dikelola melalui sesi yang tersimpan di browser ini. Anda tidak bisa mengelolanya dari perangkat lain dan tidak bisa menambahkan email di kemudian hari.",
    makeAccountPrompt: "Ingin membuat akun dengan email?",
  },
  auth: {
    organizerLogin: "Masuk penyelenggara",
    organizerSignup: "Daftar penyelenggara",
    participantLogin: "Masuk peserta",
    participantSignup: "Daftar peserta",
    forgotMetaTitle: "Atur ulang kata sandi",
    forgotOrganizerTitle: "Atur ulang kata sandi (penyelenggara)",
    forgotParticipantTitle: "Atur ulang kata sandi (peserta)",
    forgotDescription: "Masukkan alamat email yang terdaftar.",
    forgotSent:
      "Jika alamat email yang Anda masukkan terdaftar, kami telah mengirim tautan untuk mengatur ulang kata sandi. Silakan periksa kotak masuk Anda.",
    sendResetMail: "Kirim email pengaturan ulang",
    resetTitle: "Buat kata sandi baru",
    resetInvalid:
      "Tautan ini tidak valid atau sudah kedaluwarsa. Silakan ajukan pengaturan ulang kata sandi lagi.",
    toLoginPage: "Ke halaman masuk",
    newPassword: "Kata sandi baru",
    newPasswordConfirm: "Kata sandi baru (konfirmasi)",
    passwordMismatch: "Kata sandi tidak cocok",
    resetSubmit: "Simpan kata sandi baru",
  },
  dashboard: {
    title: "Dasbor",
    greeting: "{name}",
    guestWarning:
      "⚠️ Anda menggunakan whenly tanpa akun. Acara Anda hanya bisa dikelola dari sesi browser ini. Jika Anda keluar atau menghapus cookie, Anda akan kehilangan akses ke acara ini secara permanen.",
    upgradeLink: "Buat akun untuk menyimpan acara Anda →",
    newEvent: "+ Buat acara baru",
    memberApprovals: "Persetujuan peserta",
    pendingBadge: "{n}",
    eventsHeading: "Acara Anda",
    noEvents: "Belum ada acara. Mulai dengan \"Buat acara baru\".",
    dateCount: "{n} tanggal",
    approvalRequired: "Perlu persetujuan",
    anyoneCanAnswer: "Siapa saja bisa menjawab",
    finishedHistory: "Lihat acara yang sudah selesai ({n})",
    deleteEventConfirm:
      "Hapus \"{title}\"? Tindakan ini tidak bisa dibatalkan. Semua tanggal dan jawaban juga akan dihapus.",
    logoutGuestConfirm:
      "Anda menggunakan whenly tanpa akun. Jika keluar, Anda akan kehilangan akses ke acara ini secara permanen. Lanjutkan?",
  },
  newEvent: {
    title: "Buat acara baru",
    titleLabel: "Judul",
    titlePlaceholder: "Contoh: Gathering tim",
    commentLabel: "Komentar (opsional)",
    commentPlaceholder: "Titik kumpul, barang bawaan, dll.",
    aiChecking: "Memeriksa ketersediaan pengisian jadwal otomatis dengan AI…",
    aiLabel: "Isi tanggal dengan AI (opsional)",
    aiHelp:
      "Tulis dengan bebas, misalnya \"Jumat dan Sabtu minggu depan, Jumat pagi dan sore\", dan kolom tanggal di bawah akan terisi otomatis. Anda bisa memeriksa dan mengubahnya setelahnya. Pengulangan tanpa batas akhir seperti \"setiap hari\" atau \"akhir pekan\" akan dijabarkan untuk 4 minggu ke depan mulai hari ini.",
    aiPlaceholder:
      "Contoh: Jumat dan Sabtu minggu depan. Jumat ada dua sesi: pagi dan sore.",
    aiGenerating: "Membuat...",
    aiButton: "Isi dengan AI",
    aiUnavailable:
      "Pengisian jadwal otomatis dengan AI sedang tidak tersedia karena permintaan tinggi. Silakan coba lagi nanti.",
    datesLabel: "Tanggal",
    datesHelp:
      "Anda bisa menambahkan beberapa tanggal. Jika Anda menambahkan sesi waktu pada suatu tanggal (misalnya pagi / sore), peserta akan menjawab untuk setiap sesi secara terpisah. Tanggal tanpa sesi hanya memiliki satu jawaban.",
    removeDate: "Hapus tanggal",
    removeDateAria: "Hapus tanggal ini",
    dayCommentPlaceholder: "Komentar untuk tanggal ini (opsional)",
    slotPlaceholder: "Contoh: Pagi / Sore / Mulai 19.00",
    removeSlotAria: "Hapus sesi ini",
    addSlot: "+ Tambah sesi waktu ke tanggal ini (opsional)",
    exampleHint:
      "Contoh: 4 Sep sebagai tanggal tunggal / 5 Sep dengan sesi \"Pagi\" dan \"Sore\"",
    addDate: "+ Tambah tanggal",
    duplicate: "+ Duplikat",
    requireLoginLabel: "Wajibkan login dan persetujuan untuk ikut serta",
    requireLoginHelp:
      "Jika dimatikan, siapa saja bisa menjawab tanpa login (nama boleh dikosongkan).",
    create: "Buat",
  },
  eventDetail: {
    urlEditWarning:
      "⚠️ Siapa pun yang mengetahui URL halaman ini bisa mengedit acara ini. Jangan bagikan kepada orang lain.",
    editUrlLabel: "URL edit (halaman ini)",
    editUrlHint: "Simpan sebagai bookmark agar bisa kembali mengedit tanpa login.",
    lockedNotice:
      "🔒 Hanya Anda, saat sudah login, yang bisa mengedit acara ini (membagikan URL saja tidak memungkinkan pengeditan).",
    shareUrlLabel: "URL berbagi untuk peserta",
  },
  settings: {
    deleteDayConfirm: "Hapus {date}? Semua jawaban untuk tanggal ini juga akan dihapus.",
    upcomingTab: "Mendatang ({n})",
    historyTab: "Sudah lewat ({n})",
    noUpcomingDates: "Tidak ada tanggal mendatang.",
    noPastDates: "Tidak ada tanggal yang sudah lewat.",
    prevMonth: "← Bulan sebelumnya",
    nextMonth: "Bulan berikutnya →",
    commentPlaceholder: "Komentar (opsional)",
    optionsTitle: "Pilihan jawaban",
    optionsHelp:
      "Bawaannya adalah ○/△/×, tetapi Anda bebas mengubahnya dan menggunakan 1 sampai {max} pilihan (misalnya OK / Tidak / Mungkin).",
    optionRemoveConfirm:
      "\"{label}\" sudah digunakan pada {count} jawaban. Menghapusnya juga akan menghapus jawaban tersebut. Lanjutkan?",
    newOptionPlaceholder: "Contoh: Mungkin",
    addOption: "+ Tambah pilihan",
    requireLogin: "Wajibkan login dan persetujuan untuk ikut serta",
    showNames: "Izinkan peserta melihat nama dan jawaban peserta lain",
    allowMultiple: "Izinkan memilih lebih dari satu pilihan per tanggal atau sesi",
    allowUrlEdit: "Izinkan pengeditan tanpa login bagi siapa pun yang mengetahui URL edit",
    allowUrlEditConfirm:
      "Jika dimatikan, mengetahui URL edit saja tidak lagi cukup; hanya sesi login Anda yang bisa mengedit. Lanjutkan?",
    participationHeading: "Jawaban per tanggal",
    addDatesTitle: "Tambah tanggal (opsional)",
    addDatesHelp:
      "Gunakan \"+ Tambah tanggal\" atau \"+ Duplikat\" untuk menambahkan tanggal. Menekan Duplikat berulang kali akan terus menambahkan tanggal dengan selang waktu dua tanggal terakhir.",
    saved: "Tersimpan ✓",
  },
  members: {
    title: "Persetujuan peserta",
    pendingHeading: "Menunggu persetujuan",
    noPending: "Tidak ada peserta yang menunggu persetujuan.",
    approve: "Setujui",
    reject: "Tolak",
    approvedHeading: "Peserta yang disetujui ({n})",
    noneYet: "Belum ada.",
    rejectedHeading: "Ditolak",
  },
  upgrade: {
    metaTitle: "Buat akun",
    title: "Buat akun",
    description:
      "Daftarkan alamat email dan kata sandi untuk menyimpan acara Anda saat ini dan masuk dari perangkat lain.",
    submit: "Buat akun",
  },
  share: {
    pendingApproval:
      "Menunggu persetujuan penyelenggara. Anda bisa menjawab setelah disetujui.",
    rejected: "Keikutsertaan Anda tidak disetujui.",
    namesShown: "* Nama dan jawaban peserta lain akan ditampilkan.",
    namesHidden:
      "* Hanya jumlah peserta yang ditampilkan; nama dan jawaban peserta lain disembunyikan.",
    multipleHint: " Anda bisa memilih lebih dari satu pilihan. Tekan lagi untuk membatalkan pilihan.",
    noUpcomingDates: "Tidak ada tanggal mendatang.",
    pastHistory: "Lihat tanggal yang sudah lewat ({n})",
    answer: "Jawab",
    saveAnswers: "Simpan",
    unanswered: "Belum dijawab",
    yourAnswer: "Jawaban Anda: {answer}",
    conflictPrompt: "Sudah ada yang menjawab dengan nama \"{name}\". Apakah itu Anda?",
    yesMe: "Ya, itu saya",
    notMe: "Bukan, orang lain",
    loginRequired: "Anda perlu masuk atau mendaftar untuk menjawab.",
    namePlaceholder: "Contoh: Sari Dewi",
    createNewPrompt: "Baru di sini?",
    countBadge: "{label} {n}",
  },
  calendar: {
    title: "Sinkronisasi kalender",
    description:
      "Tanggal yang Anda jawab bisa disinkronkan otomatis ke kalender Anda (mungkin perlu beberapa menit hingga beberapa jam untuk muncul).",
    google: "Tambahkan ke Google Kalender",
    outlookCom: "Tambahkan ke Outlook.com",
    office365: "Tambahkan ke Outlook (kantor atau sekolah)",
    apple: "Tambahkan ke Kalender iPhone",
    copyUrl: "Salin URL langsung",
  },
  memberPage: {
    title: "Halaman saya",
    pendingNotice: "Menunggu persetujuan dari {n} penyelenggara",
    noOrganizers:
      "Anda belum bergabung dengan penyelenggara mana pun. Buka URL acara yang dibagikan untuk bergabung.",
    organizerEvents: "Acara dari {name}",
    organizerEventsUnnamed: "Acara penyelenggara",
    noEvents: "Belum ada acara.",
    answered: "Sudah dijawab {answered}/{total}",
  },
  landing: {
    heroTitle: "Atur jadwal dan cek kehadiran gratis, tanpa login, langsung pakai",
    heroLead:
      "Penyelenggara mengusulkan tanggal, peserta menjawab dengan ○△×. Selesai. Cocok untuk kumpul-kumpul, reuni, resepsi pernikahan, acara penyambutan, perpisahan, komunitas, rapat, dan apa pun yang butuh tanggal dan jumlah peserta.",
    heroCta: "Buat acara gratis",
    heroNote: "Tanpa daftar, tanpa instal. Bagikan tanggal kandidat dalam sekitar 30 detik.",
    howHeading: "Cara kerja: 3 langkah",
    step1Title: "Tambahkan tanggal kandidat",
    step1Body:
      "Masukkan nama acara dan tanggal yang Anda pikirkan. Jika perlu, tambahkan slot waktu seperti \"pagi / siang\", atau ketik \"Jumat dan Sabtu depan\" dan biarkan AI mengisinya.",
    step2Title: "Bagikan tautannya",
    step2Body:
      "Kirim tautan peserta lewat LINE, email, Slack, atau aplikasi chat apa pun. Peserta bisa membukanya tanpa membuat akun.",
    step3Title: "Jawab dengan ○△× dan lihat rekapnya",
    step3Body:
      "Peserta memilih ○△× untuk setiap kandidat, dan kehadiran tiap tanggal langsung direkap. Jawaban bisa diubah kapan saja.",
    featuresHeading: "Mengapa orang memilih whenly",
    feature1Title: "Tanpa login atau daftar",
    feature1Body:
      "Penyelenggara maupun peserta bisa memakainya tanpa akun. Tidak perlu mengumpulkan alamat email.",
    feature2Title: "Slot waktu dalam satu tanggal",
    feature2Body:
      "Buat beberapa kandidat dalam satu hari, misalnya \"5 September pagi / siang\", dan kumpulkan jawaban untuk tiap slot.",
    feature3Title: "Pilihan jawaban bisa disesuaikan",
    feature3Body:
      "Bukan hanya ○△×: gunakan \"Ya / Tidak / Mungkin\", \"OK / NG\", atau apa pun, hingga 10 pilihan.",
    feature4Title: "Mode persetujuan dan tampilan nama",
    feature4Body:
      "Pilih antara acara terbuka yang bisa dijawab siapa saja atau acara yang hanya bisa dijawab oleh peserta yang disetujui penyelenggara. Nama peserta juga bisa disembunyikan sehingga hanya jumlahnya yang tampil.",
    feature5Title: "Sinkronisasi kalender dan cetak",
    feature5Body:
      "Sinkronkan tanggal yang Anda jawab ke Google Calendar, Outlook, atau Kalender iPhone, dan cetak tabel kehadiran di kertas A4 apa adanya.",
    feature6Title: "Isi tanggal dibantu AI",
    feature6Body:
      "Buat tanggal kandidat dari teks bebas seperti \"setiap Senin mulai jam 7 malam\". Antarmuka tersedia dalam 12 bahasa.",
    useCasesHeading: "Contoh penggunaan",
    useCase1: "Mengatur jadwal kumpul-kumpul dan makan bersama",
    useCase2: "Konfirmasi kehadiran reuni dan acara alumni",
    useCase3: "Mengelola kehadiran resepsi pernikahan",
    useCase4: "Menentukan tanggal acara penyambutan dan perpisahan",
    useCase5: "Hari kegiatan komunitas, tim, dan komite orang tua",
    useCase6: "Mengatur jadwal rapat",
    useCase7: "Mengumpulkan shift relawan dan acara",
    useCase8: "Konfirmasi kehadiran les dan kelas",
    securityHeading: "Mengapa aman digunakan",
    security1Title: "Tidak perlu data pribadi",
    security1Body: "Peserta cukup memasukkan nama (opsional). Tidak perlu alamat email atau nomor telepon.",
    security2Title: "Kontrol siapa yang bisa mengedit",
    security2Body:
      "Pengeditan bisa dibatasi hanya untuk orang yang tahu URL edit, atau hanya untuk penyelenggara yang sudah login.",
    security3Title: "Koneksi terenkripsi",
    security3Body: "Semua lalu lintas dienkripsi melalui HTTPS.",
    faqHeading: "Pertanyaan yang sering diajukan",
    faq1Q: "Benar-benar gratis?",
    faq1A:
      "Ya. Membuat acara, menjawab, merekap, dan sinkronisasi kalender semuanya gratis.",
    faq2Q: "Apakah peserta perlu akun?",
    faq2A:
      "Tidak. Peserta membuka tautan yang dibagikan dan memasukkan nama (opsional) untuk menjawab. Login di sisi peserta hanya diperlukan jika penyelenggara mengaktifkan mode persetujuan.",
    faq3Q: "Apakah penyelenggara juga bisa memakainya tanpa login?",
    faq3A:
      "Bisa. Tekan \"Mulai tanpa akun\" untuk langsung membuat acara. Nanti Anda bisa mendaftarkan email dan kata sandi agar bisa mengelolanya dari perangkat lain juga.",
    faq4Q: "Apakah kandidat hanya berupa tanggal, atau bisa menentukan slot waktu?",
    faq4A:
      "Anda bisa menambahkan slot waktu seperti \"pagi\", \"siang\", atau \"mulai jam 7 malam\" ke setiap tanggal. Tanggal yang punya slot dijawab per slot.",
    faq5Q: "Apakah jawaban bisa diubah nanti?",
    faq5A: "Ya. Buka lagi tautan yang sama dan Anda bisa mengubah jawaban kapan saja.",
    faq6Q: "Bisakah tanggal yang saya jawab dimasukkan ke kalender?",
    faq6A:
      "Langganan URL kalender pribadi Anda di Google Calendar, Outlook, atau Kalender iPhone, dan tanggal yang Anda jawab akan tersinkron otomatis.",
    faq7Q: "Apa bedanya dengan alat pengatur jadwal lain?",
    faq7A:
      "Slot waktu dalam satu tanggal, pilihan jawaban yang bisa disesuaikan, mode persetujuan, nama peserta tersembunyi, sinkronisasi kalender, isi otomatis AI, dan 12 bahasa, semuanya gratis.",
    ctaHeading: "Bagikan tanggal kandidat Anda sekarang",
    ctaBody: "Tanpa daftar, tanpa instal. Satu klik dan halaman acara Anda siap.",
    navHome: "Beranda",
  },
  useCasePage: {
    breadcrumbUseCases: "Contoh penggunaan",
    painsHeading: "Pernah mengalami ini?",
    solutionsHeading: "Begini whenly menyelesaikannya",
    tipsHeading: "Tips agar makin efektif",
    relatedHeading: "Contoh penggunaan lainnya",
  },
  useCases: {
    nomikai: {
      title: "Atur jadwal kumpul-kumpul gratis, tanpa login",
      description:
        "Untuk yang mengatur kumpul-kumpul dan makan bersama: tambahkan tanggal kandidat, kirim tautannya, dan peserta menjawab ○△× tanpa login. Rekap otomatis, slot waktu, dan mode persetujuan, semuanya gratis.",
      heading: "Mengatur jadwal kumpul-kumpul dan makan bersama",
      lead:
        "Bagian paling merepotkan saat mengatur acara adalah menanyai satu per satu kapan bisa. Dengan whenly, Anda tambahkan tanggal kandidat dan kirim satu tautan; peserta memilih ○△× tanpa akun dan rekapnya langsung terbarui.",
      pain1: "Tanya di grup WhatsApp, jawabannya tenggelam di antara pesan lain, dan Anda tidak tahu lagi siapa yang sudah menjawab",
      pain2: "Jawaban bersyarat seperti \"bisa kalau setelah jam 7 malam\" atau \"nyusul belakangan\" sulit dirapikan",
      pain3: "Setiap kali menambah atau mengubah tanggal, harus tanya ulang ke semua orang",
      solution1Title: "Tanyakan tanggal dan slot waktu sekaligus",
      solution1Body:
        "Tambahkan slot per tanggal seperti \"Jumat mulai jam 7 malam\" atau \"Sabtu jam 6 / jam 8 malam\", sehingga jawaban bersyarat jadi jawaban biasa.",
      solution2Title: "Peserta cukup buka tautan dan isi nama",
      solution2Body:
        "Tidak perlu akun dan nama bersifat opsional, jadi orang menjawab tanpa ragu. Jawaban bisa diubah nanti.",
      solution3Title: "Jumlah peserta per tanggal, direkap otomatis",
      solution3Body:
        "Jumlah ○△× dan nama tampil per kandidat, jadi Anda langsung tahu harus pesan tempat untuk berapa orang. Tanggal bisa ditambah kapan saja.",
      tip1: "Batasi kandidat di 3–5 tanggal agar lebih banyak yang menjawab. Terlalu banyak pilihan bikin orang menunda.",
      tip2: "Menampilkan nama peserta membuat orang lebih tertarik ikut begitu melihat siapa saja yang datang.",
      faq1Q: "Apakah peserta butuh aplikasi selain WhatsApp?",
      faq1A:
        "Tidak. Tempel tautan yang dibagikan di grup dan peserta membukanya di browser. Tidak ada aplikasi yang perlu diinstal.",
      faq2Q: "Bagaimana kalau jumlah orang berubah setelah tempat dipesan?",
      faq2A:
        "Peserta bisa mengubah jawaban kapan saja dan penyelenggara langsung melihatnya. Satu pengingat sebelum tenggat membantu memastikan jumlahnya.",
    },
    dousoukai: {
      title: "Konfirmasi kehadiran reuni dan acara alumni gratis",
      description:
        "Untuk panitia reuni dan acara alumni: kumpulkan konfirmasi kehadiran lewat satu tautan meski setiap orang memakai jalur komunikasi berbeda. Peserta tidak perlu login; nama bisa disembunyikan atau pakai mode persetujuan. Gratis.",
      heading: "Konfirmasi kehadiran reuni dan acara alumni",
      lead:
        "Meminta orang yang sudah bertahun-tahun tidak berkabar untuk menginstal aplikasi terasa tidak enak. Dengan whenly mereka cukup membuka tautan untuk konfirmasi, dan Anda bisa melihat sekilas siapa yang sudah menjawab.",
      pain1: "Tiap orang memakai jalur berbeda (email, WhatsApp, media sosial) dan mengumpulkan jawabannya melelahkan",
      pain2: "Menyalin \"hadir / belum pasti / tidak hadir\" ke daftar peserta memakan waktu",
      pain3: "Kalau pesertanya banyak, sulit tahu siapa yang belum menjawab",
      solution1Title: "Satu tautan berlaku di semua jalur",
      solution1Body:
        "Kirim tautan yang sama lewat jalur apa pun. Peserta menjawab dari browser tanpa menginstal apa pun.",
      solution2Title: "Ubah pilihan menjadi \"Hadir / Belum pasti / Tidak hadir\"",
      solution2Body:
        "Pilihan jawaban sepenuhnya bisa disesuaikan, jadi Anda bisa memakai istilah yang cocok untuk reuni.",
      solution3Title: "Nama dan jawaban dalam satu daftar",
      solution3Body:
        "Tampilan penyelenggara memuat siapa yang menjawab untuk tiap kandidat, jadi memperbarui daftar dan menemukan yang belum menjawab hanya butuh beberapa detik.",
      tip1: "Pisahkan acara utama dan acara lanjutan setelahnya ke dalam slot waktu untuk melihat siapa yang ikut belakangan.",
      tip2: "Anda bisa mengatur apakah peserta melihat nama satu sama lain. Kalau privasi jadi perhatian, tampilkan jumlahnya saja.",
      faq1Q: "Apakah saya jadi mengumpulkan data pribadi?",
      faq1A:
        "Peserta hanya mengisi nama (opsional). Tidak diminta alamat email atau nomor telepon, dan penyelenggara pun tidak melihatnya.",
      faq2Q: "Bisakah seseorang menjawab dengan memakai nama orang lain?",
      faq2A:
        "Dalam mode persetujuan, hanya peserta yang disetujui penyelenggara yang bisa menjawab. Bahkan dalam mode terbuka, mencoba menjawab dengan nama yang sudah menjawab akan memunculkan verifikasi identitas.",
    },
    nijikai: {
      title: "Kelola kehadiran resepsi pernikahan dan pesta gratis",
      description:
        "Untuk resepsi pernikahan, pesta, dan acara perayaan: atur tanggalnya dan pantau kehadiran akhir. Tamu tidak perlu login, dan panitia mendapat daftar hadir yang bisa dicetak. Gratis.",
      heading: "Kehadiran resepsi pernikahan dan pesta",
      lead:
        "Saat diminta jadi panitia pesta, semuanya dimulai dari menentukan tanggal dan memantau siapa yang datang. Dengan whenly, polling tanggal dan konfirmasi akhir ada di tautan yang sama.",
      pain1: "Pihak mempelai wanita dan pihak mempelai pria memakai jalur berbeda, jadi Anda memegang dua daftar",
      pain2: "Mengumpulkan semua jawaban sebelum tenggat jumlah tamu dari pihak gedung bikin stres",
      pain3: "Anda harus menyusun ulang daftar tamu untuk meja registrasi di hari H",
      solution1Title: "Kedua pihak dalam satu acara",
      solution1Body:
        "Bagikan tautan ke masing-masing pihak dan semua jawaban masuk ke satu layar.",
      solution2Title: "Tahu siapa yang belum menjawab sebelum tenggat",
      solution2Body:
        "Nama yang sudah menjawab tampil per kandidat, jadi Anda cukup mengingatkan yang masih belum menjawab.",
      solution3Title: "Cetak daftar hadir apa adanya",
      solution3Body:
        "Tombol cetak menghasilkan daftar hadir ukuran A4 yang bisa langsung dipakai di meja registrasi.",
      tip1: "Pantau pembayaran dengan mengubah pilihan menjadi \"Hadir (sudah bayar) / Hadir (belum bayar) / Tidak hadir\".",
      tip2: "Sinkronisasi kalender menyimpan tanggalnya di kalender tamu, jadi lebih sedikit yang lupa.",
      faq1Q: "Bisakah dipakai untuk konfirmasi kehadiran setelah undangan dikirim?",
      faq1A:
        "Bisa. Daftarkan satu tanggal acara saja dan atur pilihannya menjadi \"Hadir / Tidak hadir\" sebagai pengganti kartu RSVP.",
      faq2Q: "Bisakah saya mengumpulkan kontak tamu?",
      faq2A:
        "whenly tidak punya fitur untuk mengumpulkan kontak. Dirancang untuk tidak menyimpan data pribadi, jadi tamu bisa memakainya dengan tenang.",
    },
    kangeikai: {
      title: "Tentukan tanggal acara penyambutan dan perpisahan gratis",
      description:
        "Untuk acara penyambutan dan perpisahan di kantor: utamakan jadwal tamu kehormatan sambil tetap mengumpulkan ketersediaan seluruh tim. Tanpa login dan tanpa alamat email. Gratis.",
      heading: "Mengatur jadwal acara penyambutan dan perpisahan",
      lead:
        "Anda ingin menyesuaikan dengan jadwal orang yang dirayakan sekaligus mendengar seluruh tim. Dengan whenly, Anda susun tanggal kandidat dan bagikan tautannya; siapa yang bisa datang di hari mana tampil dalam satu tampilan.",
      pain1: "Bertanya lewat email ke seluruh divisi membuat jawaban tenggelam dan rekapnya lambat",
      pain2: "Hari terbaik bagi yang dirayakan dan hari terbaik bagi mayoritas tidak cocok",
      pain3: "Tamu dari luar tidak bisa memakai aplikasi chat internal perusahaan",
      solution1Title: "Jumlah peserta per kandidat terlihat sekilas",
      solution1Body: "Jumlah ○△× direkap per kandidat, jadi hari yang paling ramai langsung kelihatan.",
      solution2Title: "Susun kandidat berdasarkan jadwal orang yang dirayakan",
      solution2Body:
        "Tanyakan dulu ke orang yang dirayakan, lalu daftarkan kandidatnya, dan Anda cukup bertanya ke semua orang satu kali. Tanggal bisa ditambah belakangan.",
      solution3Title: "Tamu dari luar cukup pakai tautan",
      solution3Body:
        "Tidak perlu akun, jadi orang di luar perusahaan bisa menjawab hanya dari satu email.",
      tip1: "Gunakan kolom komentar per tanggal untuk catatan seperti \"hari terakhir di kantor\" agar peserta lebih mudah memutuskan.",
      tip2: "Dengan mode persetujuan, hanya orang yang disetujui penyelenggara yang bisa menjawab, meski tautannya diteruskan.",
      faq1Q: "Apakah saya harus mendaftarkan email kantor?",
      faq1A:
        "Penyelenggara maupun peserta tidak perlu alamat email. Penyelenggara bisa langsung mulai dari \"Mulai tanpa akun\".",
      faq2Q: "Bagaimana kalau saya tidak ingin peserta melihat jawaban satu sama lain?",
      faq2A:
        "Sembunyikan nama peserta, maka peserta lain hanya melihat jumlahnya. Penyelenggara tetap melihat semuanya.",
    },
    circle: {
      title: "Jadwal kegiatan komunitas, tim, dan komite orang tua gratis",
      description:
        "Untuk komunitas, tim olahraga, komite orang tua, dan kelompok warga: kumpulkan ketersediaan untuk latihan rutin dan jadwal piket sekaligus. Tanpa login, dengan jawaban per slot waktu. Gratis.",
      heading: "Hari kegiatan komunitas, tim, dan komite orang tua",
      lead:
        "Latihan mingguan dan jadwal piket berarti menanyakan hal yang sama tiap minggu. Dengan whenly, Anda daftarkan kandidat untuk empat minggu sekaligus dan anggota menjawab dalam sekali duduk.",
      pain1: "Menanyakan ketersediaan setiap minggu itu melelahkan",
      pain2: "Anggota yang bisa pagi dan yang bisa siang berbeda-beda",
      pain3: "Tiap ada pergantian anggota, harus mengumpulkan kontak lagi",
      solution1Title: "Daftarkan kandidat berulang sekaligus",
      solution1Body:
        "Tombol Duplikat terus menambahkan tanggal dengan jarak yang sama. Atau ketik \"setiap Sabtu mulai jam 10 pagi\" dan biarkan AI mengisinya.",
      solution2Title: "Kumpulkan jawaban per slot waktu",
      solution2Body:
        "Tambahkan slot seperti \"pagi / siang\" ke satu tanggal dan lihat siapa yang bisa hadir di tiap slot.",
      solution3Title: "Hanya anggota yang disetujui yang bisa menjawab",
      solution3Body:
        "Dalam mode persetujuan, orang luar yang membuka tautan tidak bisa menjawab. Pergantian anggota diatur dengan menyetujui atau menolak.",
      tip1: "Tanggal yang sudah lewat otomatis pindah ke riwayat, jadi Anda bisa terus memakai acara yang sama.",
      tip2: "Anggota bisa menyinkronkan tanggal yang mereka jawab ke kalender masing-masing.",
      faq1Q: "Berapa minggu yang bisa didaftarkan?",
      faq1A:
        "Tidak ada batas jumlah tanggal. Dengan isi otomatis AI, pengulangan tanpa tanggal akhir diperluas menjadi empat minggu dari hari ini.",
      faq2Q: "Apakah orang tua yang kurang terbiasa dengan ponsel bisa menjawab?",
      faq2A:
        "Mereka membuka tautan, mengetuk ○△×, lalu simpan. Tidak perlu instal aplikasi atau membuat akun.",
    },
    kaigi: {
      title: "Atur jadwal rapat gratis, tanpa login",
      description:
        "Untuk rapat internal dan pertemuan dengan klien: kirim waktu kandidat dan pihak lain menjawab tanpa login. Hasilnya bisa disinkronkan ke Google Calendar dan Outlook. Gratis.",
      heading: "Mengatur jadwal rapat dan pertemuan",
      lead:
        "Daripada bolak-balik bertukar waktu kandidat lewat email, kirim semuanya dalam satu tautan. Pihak lain memilih yang cocok tanpa mendaftar, dan hasilnya bisa masuk ke kalender mereka.",
      pain1: "Menulis waktu kandidat di email dan mencocokkan balasannya tidak efisien",
      pain2: "Makin banyak peserta, makin sulit menemukan waktu yang cocok untuk semua",
      pain3: "Orang lupa memasukkan waktu yang disepakati ke kalender mereka",
      solution1Title: "Tawarkan tanggal beserta slot waktu",
      solution1Body:
        "Slot seperti \"10 September, 10.00 / 14.00\" bisa jadi kandidat, cocok untuk menentukan waktu rapat.",
      solution2Title: "Bandingkan ○△× semua orang secara berdampingan",
      solution2Body:
        "Jawaban ditampilkan per kandidat, jadi Anda cepat menemukan slot yang semuanya ○, atau yang bisa jalan kalau △ dihitung.",
      solution3Title: "Sinkronkan tanggal yang dipilih ke kalender",
      solution3Body:
        "Peserta cukup berlangganan sekali di Google Calendar, Outlook, atau Kalender iPhone, dan tanggal yang mereka jawab muncul otomatis.",
      tip1: "Ubah pilihan menjadi \"Bisa / Fleksibel / Tidak bisa\" agar istilahnya lebih cocok untuk urusan bisnis.",
      tip2: "Izinkan pengeditan oleh siapa pun yang tahu URL edit, dan rekan panitia bisa mengelolanya bersama Anda.",
      faq1Q: "Bisakah dipakai dengan orang di luar perusahaan saya?",
      faq1A: "Bisa. Mereka membuka tautan dan menjawab. Tidak perlu mendaftar akun.",
      faq2Q: "Bisakah memesan ruang rapat atau mengirim undangan?",
      faq2A:
        "whenly berfokus pada pencarian tanggal dan rekap kehadiran. Kirim undangan untuk waktu yang disepakati dari kalender yang biasa Anda pakai.",
    },
    volunteer: {
      title: "Kumpulkan shift relawan dan acara gratis, tanpa login",
      description:
        "Untuk kelompok relawan dan tim acara: buat shift per slot waktu di tiap tanggal dan kumpulkan siapa yang bisa mengisi masing-masing, tanpa login. Gratis.",
      heading: "Mengumpulkan shift relawan dan acara",
      lead:
        "Shift yang mencakup beberapa hari dan slot waktu sulit dijaga tetap mutakhir di spreadsheet. Dengan whenly, setiap orang menandai ○△× pada kandidat tanggal × slot dan Anda melihat jumlahnya per shift.",
      pain1: "Banyaknya kombinasi tanggal dan waktu membuat tabel shift sulit dikelola",
      pain2: "Pergantian relawan yang tinggi membuat pengelolaan kontak jadi beban",
      pain3: "Anda tidak bisa melihat secara real-time berapa orang di tiap shift",
      solution1Title: "Buat shift per slot waktu di tiap tanggal",
      solution1Body:
        "Tambahkan slot seperti \"pagi / siang / malam\" ke tiap tanggal dan kumpulkan jawaban per shift.",
      solution2Title: "Jumlah dan nama per shift, langsung terekap",
      solution2Body:
        "Tampilan penyelenggara memuat jumlah ○△× dan nama per shift, jadi shift yang kekurangan orang langsung terlihat.",
      solution3Title: "Tidak ada kontak yang perlu disimpan",
      solution3Body: "Relawan menjawab cukup dengan nama. Tidak ada data pribadi yang harus Anda kelola.",
      tip1: "Tulis aturan \"○ = bisa mengisi / △ = fleksibel / × = tidak bisa\" di komentar acara agar jawabannya konsisten.",
      tip2: "Mode persetujuan membatasi jawaban hanya untuk relawan yang terdaftar.",
      faq1Q: "Bisakah relawan menambahkan shift mereka ke kalender?",
      faq1A: "Bisa. Setelah berlangganan URL kalender, shift yang ditandai ○ muncul sebagai acara sepanjang hari.",
      faq2Q: "Berapa banyak orang yang bisa menjawab?",
      faq2A: "Tidak ada batasnya.",
    },
    lesson: {
      title: "Konfirmasi kehadiran les dan kelas gratis, tanpa login",
      description:
        "Untuk les, kelas, dan sanggar: pengajar mendaftarkan tanggal, lalu murid atau orang tua menandai ○ di hari mereka hadir, tanpa login. Termasuk sinkronisasi kalender. Gratis.",
      heading: "Konfirmasi kehadiran les dan kelas",
      lead:
        "Kelas pengganti dan kelas yang boleh datang sesuka hati membuat sulit tahu siapa yang datang tiap kali. Dengan whenly, Anda susun tanggalnya dan murid atau orang tua memilih hari lewat tautan.",
      pain1: "Anda menghubungi peserta sebelum setiap les untuk konfirmasi",
      pain2: "Balasan dari orang tua datang satu per satu dan rekapnya memakan waktu",
      pain3: "Murid lupa hari apa saja yang sudah mereka pilih",
      solution1Title: "Tampilkan semua tanggal sebulan sekaligus",
      solution1Body:
        "Duplikat menambahkan hari yang sama dalam seminggu secara berurutan. Anda juga bisa membagi satu tanggal ke beberapa slot waktu.",
      solution2Title: "Peserta cukup isi nama dan tandai ○",
      solution2Body:
        "Tidak perlu akun. Orang tua yang menjawab untuk anaknya bisa memakai nama si anak.",
      solution3Title: "Hari kehadiran tersinkron ke kalender",
      solution3Body:
        "Dengan sinkronisasi kalender, hari yang dijawab peserta muncul di Google Calendar atau Kalender iPhone.",
      tip1: "Sembunyikan nama peserta, maka murid lain hanya melihat jumlahnya.",
      tip2: "Kalau ada batas kuota, tulis di komentar tanggal, misalnya \"maks. 6 orang\".",
      faq1Q: "Bisakah dipakai peserta yang tidak punya smartphone?",
      faq1A:
        "Mereka bisa menjawab dari browser komputer. Anda juga bisa mengonfirmasi secara lisan memakai daftar cetak dan mengisi jawabannya sendiri.",
      faq2Q: "Apakah ada biayanya?",
      faq2A: "Semua fitur gratis.",
    },
  },
  errors: {
    titleRequired: "Masukkan judul",
    addAtLeastOneDate: "Tambahkan minimal satu tanggal",
    dateRequired: "Masukkan tanggal",
    invalidDate: "Format tanggal tidak valid",
    eventNotFound: "Acara tidak ditemukan",
    loginRequired: "Anda perlu masuk",
    optionsAtLeastOne: "Diperlukan minimal satu pilihan",
    optionsMax: "Gunakan maksimal {max} pilihan",
    nameRequired: "Masukkan nama Anda",
    invalidEmail: "Format alamat email tidak valid",
    passwordTooShort: "Kata sandi minimal 8 karakter",
    passwordRequired: "Masukkan kata sandi Anda",
    emailTaken: "Alamat email ini sudah terdaftar",
    invalidCredentials: "Alamat email atau kata sandi salah",
    identityFailed: "Verifikasi identitas gagal",
    accountNotFound: "Akun tidak ditemukan",
    alreadyRegistered: "Akun ini sudah terdaftar",
    resetLinkInvalid:
      "Tautan ini sudah kedaluwarsa atau sudah digunakan. Silakan ajukan pengaturan ulang kata sandi lagi.",
    unknownError: "Terjadi kesalahan yang tidak diketahui",
    optionsChanged: "Pilihan telah berubah. Silakan muat ulang halaman",
    noMultipleAnswers: "Acara ini tidak mengizinkan pilihan ganda",
    noPermission: "Anda tidak memiliki izin untuk menjawab",
    aiEmpty: "Tuliskan rencana jadwal Anda",
    aiNoSchedule: "Tidak dapat membaca tanggal apa pun. Tuliskan sedikit lebih spesifik.",
    aiFailed: "Pengisian otomatis dengan AI gagal. Silakan coba lagi nanti.",
  },
  mail: {
    resetSubject: "[whenly] Pengaturan ulang kata sandi",
    resetBody:
      "Kami menerima permintaan untuk mengatur ulang kata sandi Anda.\n\nSilakan buat kata sandi baru dalam waktu 1 jam melalui tautan berikut.\n\n{url}\n\nJika Anda tidak merasa mengajukan permintaan ini, abaikan saja email ini.",
  },
};
