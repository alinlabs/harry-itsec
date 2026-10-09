# Bronyx 90-Day Commercial Strategy — Harry Gultom
## PT ITSEC Asia Tbk (IDX: CYBR) · Sales Command Center & Presentation Deck

Dokumentasi lengkap mengenai rancangan, arsitektur, struktur pembuatan, dan fitur-fitur teknis aplikasi web **Bronyx 90-Day Commercial Strategy** untuk Sales Lead **Harry Gultom** di **PT ITSEC Asia Tbk**.

---

## 1. Ringkasan Eksekutif & Konteks Bisnis

Aplikasi web ini merupakan pusat komando penjualan interaktif (*Interactive Sales Command Center*) dan dek presentasi eksekutif berstandar enterprise yang dirancang khusus untuk mengartikulasikan rencana penetrasi pasar, target kuota pendapatan, dan strategi eksekusi 90 hari bagi kepemimpinan keamanan siber di Indonesia.

- **Profil Penjualan**: Harry Gultom
- **Perusahaan**: PT ITSEC Asia Tbk (Kode Saham IDX: `CYBR`)
- **Produk Unggulan**: Bronyx Autonomous Data Leakage Detection & Continuous Attack Surface Management (ASM)
- **Target Kuota Bulanan**: Rp 3,0 Miliar / Bulan (3 Deal Enterprise @ Rp 1,0 Miliar per 500 Node)
- **Target Kumulatif Q1**: Rp 12,0 Miliar ARR (12 Deal Won)
- **Wilayah Fokus Utama**: Enterprise & Regulated Hubs di Jabodetabek (Perbankan, FinTech OJK, BUMN, Energi, Manufaktur)

---

## 2. Arsitektur & Teknologi (Tech Stack)

Aplikasi dibangun menggunakan fondasi modern React SPA berbasis Vite dengan performa tinggi dan tipografi berstandar enterprise:

- **Framework**: React 19 dengan TypeScript (Strict Mode)
- **Build Tool**: Vite 6 (Fast HMR & Optimized Production Bundler)
- **Styling**: Tailwind CSS v4 dengan sistem tema dinamis
- **Animasi & Interaksi**: Motion (`motion/react`) & `@lottiefiles/dotlottie-react`
- **Peta Wilayah**: Leaflet & `react-leaflet` (Citra Esri High-Resolution World Imagery Satelit & Esri Canvas Base Bebas Label)
- **Ikonografi**: Lucide React Icons
- **Manajemen State**: React Context API (`LanguageContext` untuk dwibahasa, `ThemeContext` untuk Dark/Light mode)

---

## 3. Struktur Slide & Konten Modul (11 Bab Lengkap)

Aplikasi memiliki navigasi terstruktur yang mencakup 11 bab strategi komersialisasi:

### Slide 01: Strategic Vision & Executive Opening
- Menampilkan visi *"Becoming Indonesia’s Cybersecurity Market Leader"*.
- Animasi Lottie interaktif kepulauan Indonesia (`/public/IndonesiaConnect.lottie`).
- Metrik kunci: Target Kuota Rp 3,0 M/Bulan, Pendapatan Eksisting CYBR Rp 325 M (+55.5% YoY), 300+ Akun Enterprise, Validasi PoC 5 Hari Kerja (*Zero Blast Radius*), dan Retensi NRR 130%.

### Slide 02: Market Intelligence & Landsekap Regulasi
- Analisis penggerak pasar regulasi: UU PDP No. 27/2022, POJK No. 29/2022, dan Perpres Keamanan Siber.
- Lanskap ancaman: Kebocoran kredensial, eksfiltrasi data API perbankan, dan serangan rantai pasok (*supply chain*).
- Kalkulasi TAM (Total Addressable Market), SAM, dan SOM di pasar Indonesia.

### Slide 03: Radar 50 Akun Enterprise & Segmentasi ICP
- Radar 50 akun target potensial di Indonesia terbagi ke dalam 7 sektor strategis:
  1. Perbankan (Bank Mandiri, BCA, BRI, BNI, Bank Jatim, dll.)
  2. FinTech & Dompet Digital (DANA, OVO, GoTo Financial, Bank Jago, dll.)
  3. Telekomunikasi (Telkomsel, Indosat Ooredoo Hutchison, XL Axiata)
  4. BUMN & Energi Kritis (PLN, Pertamina RU V, PGN, Pelindo)
  5. Manufaktur & Pertambangan (Vale Indonesia, Astra, Freeport)
  6. Layanan Kesehatan & Farmasi (Siloam Hospitals, Bio Farma, Kimia Farma)
  7. E-Commerce & Ekosistem Digital (Tokopedia, Blibli, Bukalapak)
- Dilengkapi kalkulator skor komposit (Potensi, Fit, Urgensi, Akses, Probabilitas).

### Slide 04: Product Positioning & Go-To-Market Strategy
- Matriks perbandingan Bronyx vs Pentest Tradisional vs Scanner Otomatis Konvensional.
- Diferensiasi kunci: Deteksi otonom celah kebocoran data dengan *Zero Blast Radius* dan 1-Click Retest.
- 4 Pilar Go-To-Market: Account-Based Marketing (ABM), Aliansi SI Tier-1, Program PoC 5-Hari Bergaransi, dan Eksekutif C-Level Briefing.

### Slide 05: Sales Pipeline Command Center
- **Papan Kanban 8 Tahap Penjualan**: Simulasi interaktif *Drag & Drop* untuk menggeser akun melintasi tahap *Prospect* → *Qualified* → *Discovery* → *Demo* → *PoC (5 Hari)* → *Proposal* → *Negosiasi* → *Dimenangkan*.
- **Pembaruan Nama Singkat**: Kartu kanban menampilkan nama perusahaan tersingkat (BCA, Mandiri, Telkomsel, Jago, DANA, BRI, BNI, PLN, dll.) tanpa awalan "PT".
- **Corong Konversi 50 Akun**: Visualisasi corong 4 tahap menuju pencapaian 3 deal komersial per bulan.
- **Peta Wilayah Interaktif**: Peta geospasial sebaran akun enterprise (Jabodetabek, Surabaya, Balikpapan, Bandung, Makassar).

### Slide 06: Sales Motion & Kualifikasi Berkecepatan Tinggi
- Framework kualifikasi ketat: MEDDPICC & BANT.
- Safe Harbor PoC Protocol: Parameter teknis penjaminan nol risiko operasional (*Zero Blast Radius*) pada lingkungan produksi.
- Alur akselerasi siklus penjualan dari 120 hari menjadi 45–60 hari.

### Slide 07: Arsitektur Revenue & Model Komersialisasi
- Formulasi Kuota Rp 3,0 Miliar/Bulan (3 deal @ Rp 1,0 Miliar per 500 Node).
- Paket penawaran bertingkat:
  - *Entry Tier*: Assisted Snapshot (Rp 450 Juta)
  - *Continuous Flagship*: Bronyx AI Leakage Detection (Rp 1,0 Miliar / 500 Node)
  - *Bespoke Holding*: Ekosistem Konglomerasi (Rp 2,5 M – Rp 5,0 M)
- Flywheel ekspansi akun: *Land & Expand* dengan target Net Retention Rate (NRR) 130%.

### Slide 08: Kemitraan Strategis & Sinergi Ekosistem
- Kolaborasi Sistem Integrator (SI) Tier-1 Terverifikasi Non-Kompetitor: Multipolar Technology, Mastersystem Infotama, Reycom Data Solusi (RDS Group), Sentral Mitra Informatika, dan Kirana Sakti Komputindo.
- Distributor Nasional Nilai Tambah: Computrade Technology International (CTI Group) dan ACA Pacific Indonesia.
- Sinergi Co-Sell dengan operator telekomunikasi (Telkomsel Enterprise, Indosat Business) dan Cloud Hyperscalers (AWS, Google Cloud, Azure).
- Strategi pemanfaatan kode vendor aktif ITSEC Asia untuk mempercepat proses procurement enterprise.

### Slide 09: Rencana Eksekusi 90 Hari & Target Kuota
- Horizon Triptych 3 Bulan:
  - **Bulan 1 (Hari 1–30)**: Fondasi & Start — Aktivasi 3 warm client ITSEC, 10 sesi CISO Briefing, Target Rp 3,0 Miliar.
  - **Bulan 2 (Hari 31–60)**: Akselerasi Growth — 12 PoC paralel, onboarding 3 mitra SI, Target Rp 4,0 Miliar (Kumulatif Rp 7,0 M).
  - **Bulan 3 (Hari 61–90)**: Puncak Kuota Q1 — Tutup 5 deal tier-1 & tender BUMN, QBR ekspansi, Target Rp 5,0 Miliar (Kumulatif Rp 12,0 M).
- Skor KPI Q1: 12 Deal Won, 12 Klien (6.000 Node), Win Rate PoC 65%, NRR 130%.

### Slide 10: KPI Control Tower & Tata Kelola Performa
- Metrik Leading: Jumlah pertemuan CISO (26+/bln), Pelaksanaan PoC 5-Hari (14/bln), Cakupan Pipeline (3.5x–4.0x).
- Metrik Lagging: Pendapatan ARR Bulanan, Win Rate, Siklus Transaksi Rata-Rata, Customer Acquisition Cost (CAC).
- Sistem pemantauan risiko pipeline dan mitigasi deviasi target secara proaktif.

### Slide 11: Komitmen Eksekutif & Closing Mandate
- Pernyataan komitmen pribadi Harry Gultom dalam merealisasikan target pertumbuhan pendapatan ITSEC Asia.
- Ringkasan 5 pilar keberhasilan: Kecepatan eksekusi, diferensiasi teknologi, penguasaan regulasi, sinergi ekosistem, dan integritas profesional.

---

## 4. Fitur Interaktif & Pengalaman Pengguna (UX)

1. **Dukungan Dwibahasa (Bilingual ID/EN)**:
   - Pengalih bahasa instan di bilah header antara Bahasa Indonesia dan Bahasa Inggris.
2. **Mode Tema Eksekutif (Dark & Light Mode)**:
   - Tema gelap berstandar *cybersecurity dark minimalist*.
   - Tema terang eksekutif (*crisp light theme*) berlatar putih bersih dengan kontras tinggi tanpa kartu hitam yang tersisa.
3. **Peta Interaktif 2 Mode (Bebas Teks & Label Pengganggu)**:
   - 🛰️ **Esri Satelit**: Citra satelit resolusi tinggi murni.
   - 🗺️ **Maps Biasa**: Esri Canvas Base yang bersih khusus visualisasi titik akun tanpa label toko atau teks jalan pengganggu.
   - Penanganan CORS penuh (`crossOrigin="anonymous"`) dan bebas dari kebutuhan API Key eksternal.
4. **Navigasi Keyboard Penuh**:
   - `Arrow Right` / `Space` / `PageDown`: Slide / Tab berikutnya.
   - `Arrow Left` / `PageUp`: Slide / Tab sebelumnya.
   - `Enter`: Mulai presentasi dari halaman pembuka.
   - Tombol Angka `1` – `9`: Lompat langsung ke bab tertentu.
   - Tombol `N`: Buka Presenter Notes (Catatan Presenter).
   - Tombol `T`: Buka Modal Transparansi Data & Metodologi.
   - Tombol `G`: Buka Glosarium Istilah Keamanan Siber.
   - `Escape`: Menutup semua modal yang aktif.
5. **Drawer Navigasi Slide**:
   - Laci navigasi cepat dengan indikator progres presentasi dan jumlah sub-tab per slide.

---

## 5. Konfigurasi SEO, Favicon & Social Share Cards

- **Favicon**: Terhubung langsung ke ikon logo resmi di `/public/logo.ico`.
- **Judul Tab Browser**: Teks ringkas **`"Harry Gultom"`**.
- **Gambar Pratinjau Tautan (OpenGraph & Twitter Card)**:
  - Berkas: `/public/metatag.webp` (Resolusi standar 1200×630, format WebP teroptimasi).
  - Judul Berbagi: *"Harry Gultom – 90-Day Enterprise Commercial Strategy | PT ITSEC Asia Tbk"*
  - Deskripsi Berbagi: *"Cetak biru strategi penetrasi pasar enterprise 90 hari & target kuota penjualan PT ITSEC Asia Tbk (IDX: CYBR) oleh Harry Gultom."*
- **Structured Data**: JSON-LD Schema.org (`WebApplication`) untuk pengenalan mesin pencari dan robot penjelajah (*crawlers*).

---

## 6. Struktur Berkas & Direktori Proyek

```
/
├── index.html                           # Entry point HTML, favicon (/logo.ico), OpenGraph & Twitter metadata
├── metadata.json                        # Metadata konfigurasi AI Studio
├── package.json                         # Dependensi NPM & skrip build
├── tsconfig.json                        # Konfigurasi TypeScript
├── vite.config.ts                       # Konfigurasi Vite
│
├── public/                              # Aset statis publik
│   ├── logo.ico                         # Favicon logo resmi ITSEC
│   ├── metatag.webp                     # Kartu gambar pratinjau media sosial (OpenGraph)
│   ├── IndonesiaConnect.lottie          # Berkas animasi peta Indonesia Lottie
│   ├── IndonesiaConnect.json            # JSON cadangan animasi Lottie
│   ├── robots.txt                       # Konfigurasi perayapan mesin pencari
│   ├── sitemap.xml                      # Peta situs XML
│   └── README.md                        # Dokumentasi menyeluruh aplikasi (berkas ini)
│
└── src/                                 # Sumber kode aplikasi
    ├── main.tsx                         # Entry point React
    ├── App.tsx                          # Kontrol utama alur presentasi, tab, & navigasi slide
    ├── index.css                        # Styling Tailwind CSS v4 & tema terang/gelap
    │
    ├── context/
    │   ├── LanguageContext.tsx          # Penyedia konteks dwibahasa (ID/EN)
    │   └── ThemeContext.tsx             # Penyedia konteks tema (Dark/Light)
    │
    ├── components/
    │   ├── HeaderBar.tsx                # Bilah atas dengan logo, status kuota, & kontrol tema/bahasa
    │   ├── NavigationControls.tsx       # Tombol kontrol bawah untuk navigasi maju/mundur slide
    │   ├── AccountPipelineMap.tsx       # Komponen Leaflet dengan Esri Satelit & Maps Biasa
    │   ├── AnimatedCounter.tsx          # Komponen penghitung angka dinamis yang halus
    │   ├── SlideDrawer.tsx              # Laci navigasi cepat untuk melompat antar bab
    │   ├── PresenterNotesModal.tsx      # Modal catatan berbicara presenter (Shortcut: N)
    │   ├── DataTransparencyModal.tsx    # Modal metodologi data & validasi sumber (Shortcut: T)
    │   ├── GlossaryModal.tsx            # Modal glosarium terminologi keamanan siber (Shortcut: G)
    │   └── ContextMenu.tsx              # Menu klik kanan interaktif
    │
    ├── data/
    │   ├── pipelineModelData.ts         # Data akun pipeline 8 tahap, koordinat peta, & target kuota
    │   ├── targetAccounts.ts            # Data 50 akun enterprise Jabodetabek & filter 7 sektor
    │   ├── commercializationData.ts     # Data paket harga (Continuous, Snapshot, Bespoke)
    │   ├── executionPlanData.ts         # Data rencana eksekusi 90 hari & pembagian bulan 1-3
    │   ├── kpiData.ts                   # Data metrik leading & lagging KPI Control Tower
    │   ├── partnershipData.ts           # Data kemitraan SI tier-1 & operator telekomunikasi
    │   ├── salesMotionData.ts           # Data framework MEDDPICC & protokol PoC 5-Hari
    │   ├── marketData.ts                # Data TAM, SAM, SOM, dan pendorong regulasi
    │   ├── glossaryData.ts              # Data glosarium istilah teknis keamanan siber
    │   └── translations.ts              # Kamus kamus terjemahan bilingual (ID & EN)
    │
    └── slide/                           # Komponen slide presentasi (Bab 1–11)
        ├── Slide01Opening.tsx           # Halaman judul & visi pasar
        ├── Slide02MarketIntelligence.tsx # Intelijen pasar & pendorong regulasi
        ├── Slide03TargetMarketMap.tsx   # Radar 50 akun target enterprise
        ├── Slide04GoToMarket.tsx        # Strategi diferensiasi & Go-To-Market
        ├── Slide05AccountPipeline.tsx   # Papan kanban, corong 50 akun, & peta wilayah
        ├── Slide06SalesMotion.tsx       # Sales motion, MEDDPICC, & PoC 5-Hari
        ├── Slide07Commercialization.tsx # Model komersialisasi & kuota Rp 3M/bulan
        ├── Slide08Partnerships.tsx      # Kemitraan SI Tier-1 & Telco Co-Sell
        ├── Slide09NinetyDayExecution.tsx# Rencana eksekusi 90 hari (Bulan 1, 2, 3)
        ├── Slide10KPIControlTower.tsx   # Menara pengawas KPI & tata kelola
        └── Slide11Closing.tsx           # Pernyataan komitmen & mandat penutup
```

---

## 7. Petunjuk Instalasi & Pengembangan Lokal

### Prasyarat
- Node.js versi 18 atau lebih tinggi
- NPM atau Bun package manager

### Menjalankan Server Pengembangan
```bash
# Instal dependensi
npm install

# Jalankan server pengembangan Vite lokal (Port 3000)
npm run dev
```

### Memeriksa Kerapihan & Linting Kode
```bash
npm run lint
```

### Membangun Berkas Produksi (Production Build)
```bash
npm run build
```

---

*Hak Cipta © PT ITSEC Asia Tbk (IDX: CYBR). Dikembangkan untuk Rencana Strategis Penjualan Enterprise Harry Gultom.*
