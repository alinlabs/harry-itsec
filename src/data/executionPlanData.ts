export interface MonthlyTargetQuota {
  monthNumber: 1 | 2 | 3;
  monthNameId: string;
  monthNameEn: string;
  monthlyNewArrIdr: string; // Target ARR baru bulan ini
  cumulativeArrIdr: string; // Target akumulasi ARR
  monthlyNewPipelineIdr: string;
  cumulativePipelineIdr: string;
  qualifiedAccounts: number;
  activePocs: number;
  closedDealsCount: number;
  coreAchievementId: string;
  coreAchievementEn: string;
  strategyEvolutionId: string;
  strategyEvolutionEn: string;
}

export interface ExecutionSprint {
  week: string;
  focus: string;
  keyActions: string[];
  deliverables: string[];
  decisionGate: string;
}

export interface ExecutionPhase {
  phaseId: 'phase1' | 'phase2' | 'phase3';
  phaseName: string;
  monthTitle: string;
  timeframe: string;
  theme: string;
  coreObjective: string;
  monthlyQuota: MonthlyTargetQuota;
  visualDomainPillars: { name: string; focus: string }[];
  tangibleOutputs: string[];
  sprints: ExecutionSprint[];
  keyDecisions: string;
}

export interface ScorecardMetric {
  id: string;
  label: string;
  targetValue: string;
  achievedProgressPercent: number; // 0-100 for visual progress
  subtext: string;
  category: 'COVERAGE' | 'ENGAGEMENT' | 'PIPELINE' | 'CONVERSION' | 'REVENUE';
  monthlyPacing?: string;
}

export const MONTHLY_PACING_MODEL: MonthlyTargetQuota[] = [
  {
    monthNumber: 1,
    monthNameId: 'Bulan 1 / Oktober (Hari 1–30): Fondasi, Pengumpulan Data 50 Akun & PoC Ramp-Up',
    monthNameEn: 'Month 1 / October (Days 1–30): Foundation, 50-Account Data Gathering & PoC Ramp-Up',
    monthlyNewArrIdr: 'Rp 0 (Pengumpulan Data & PoC)',
    cumulativeArrIdr: 'Rp 0 (Fase Validasi Teknis)',
    monthlyNewPipelineIdr: 'Rp 9,0 Miliar',
    cumulativePipelineIdr: 'Rp 9,0 Miliar',
    qualifiedAccounts: 26,
    activePocs: 6,
    closedDealsCount: 0,
    coreAchievementId: 'Eksekusi dimulai Oktober (Kuartal 4)! Di awal tidak langsung memaksakan closing instan; fokus utama adalah penambangan 300+ klien warm ITSEC Asia, pemetaan 50 akun prioritas Jabodetabek, dan peluncuran 6 PoC 5-hari terarah tanpa blast radius. Fondasi pipeline Rp 9,0 Miliar berhasil diamankan.',
    coreAchievementEn: 'Execution launches October (Quarter 4)! Month 1 deliberately avoids forcing premature closing; key focus is mining 300+ warm ITSEC accounts, mapping 50 Jabodetabek priority targets, and deploying 6 zero-blast-radius 5-day PoCs. A solid IDR 9.0B pipeline foundation is secured.',
    strategyEvolutionId: 'Fokus Strategi Bulan 1 (Oktober): Penguasaan solusi teknis, pemetaan vendor code aktif, peluncuran PoC 5-hari di staging non-produksi, dan penyiapan proposal komersial untuk konversi closing di Bulan 2 (November).',
    strategyEvolutionEn: 'Strategic Focus Month 1 (October): Technical mastery, active vendor code mapping, staging 5-day PoC deployment, and commercial proposal formulation for Month 2 (November) conversion.'
  },
  {
    monthNumber: 2,
    monthNameId: 'Bulan 2 / November (Hari 31–60): First Win & Achieve Perdana (1 Deal @ Rp 1,0 Miliar)',
    monthNameEn: 'Month 2 / November (Days 31–60): First Win & Initial Achievement (1 Deal @ IDR 1.0B)',
    monthlyNewArrIdr: 'Rp 1,0 Miliar / Bulan',
    cumulativeArrIdr: 'Rp 1,0 Miliar Kumulatif (First Win)',
    monthlyNewPipelineIdr: 'Rp 6,0 Miliar',
    cumulativePipelineIdr: 'Rp 15,0 Miliar',
    qualifiedAccounts: 50,
    activePocs: 10,
    closedDealsCount: 1, // 1 deal perdana dimenangkan di Bulan 2
    coreAchievementId: 'Achieve perdana di progres 2 bulan! Konversi PoC 5-hari deteksi celah kebocoran data pada perbankan digital/fintech prioritas menjadi 1 Kontrak Enterprise Perdana (@ Rp 1,0 Miliar per 500 device). Pendapatan November terkunci Rp 1,0 Miliar ARR.',
    coreAchievementEn: 'First commercial win landed in Month 2! Converting 5-day data leakage PoC findings into 1 lighthouse enterprise contract (@ IDR 1.0B / 500 devices). November revenue locks at IDR 1.0B ARR.',
    strategyEvolutionId: 'Fokus Strategi Bulan 2 (November): Presentasi temuan celah keamanan konkret kepada C-Level (CISO/CIO), negosiasi klausul pengadaan cepat via vendor code ITSEC, dan penutupan 1 deal perdana untuk membuktikan konversi komersial.',
    strategyEvolutionEn: 'Strategic Focus Month 2 (November): Presenting concrete security gaps to C-Level (CISO/CIO), accelerating procurement negotiations via active vendor codes, and closing deal #1.'
  },
  {
    monthNumber: 3,
    monthNameId: 'Bulan 3 / Desember (Hari 61–90): Akselerasi Growth Rp 2,0 Miliar & Penutupan Q4 Rp 3,0 Miliar (3 Deals)',
    monthNameEn: 'Month 3 / December (Days 61–90): Growth Acceleration at IDR 2.0B & Q4 Close at IDR 3.0B (3 Deals)',
    monthlyNewArrIdr: 'Rp 2,0 Miliar / Bulan',
    cumulativeArrIdr: 'Rp 3,0 Miliar Kumulatif (Total 90 Hari Q4 / 3 Deals)',
    monthlyNewPipelineIdr: 'Rp 5,0 Miliar',
    cumulativePipelineIdr: 'Rp 20,0 Miliar',
    qualifiedAccounts: 50,
    activePocs: 14,
    closedDealsCount: 3, // 3 deals total kumulatif 90-hari (1 di Nov + 2 di Des)
    coreAchievementId: 'Akselerasi growth di Bulan 3 (Desember) memanfaatkan Year-End Budget Flush berhasil memenangkan 2 deal enterprise baru (@ Rp 1,0 Miliar / 500 device = Rp 2,0 Miliar bulan ini)! Menuntaskan target 90 hari pertama (Q4 Penuh) sebesar Rp 3,0 Miliar kumulatif (3 Deals Won / 1.500 Node terlindungi) dengan rolling pipeline Rp 20,0 Miliar sebagai landasan ekspansi skala besar di Q1 tahun berikutnya.',
    coreAchievementEn: 'Month 3 (December) growth acceleration captures Year-End Budget Flush landing 2 new enterprise deals (@ IDR 1.0B / 500 devices = IDR 2.0B this month)! Locking initial 90-day total Q4 revenue at IDR 3.0B cumulative ARR (3 Deals Won / 1,500 Nodes secured) with IDR 20.0B rolling pipeline ready for scaling into Q1 next year.',
    strategyEvolutionId: 'Fokus Strategi Bulan 3 (Desember): Akselerasi growth Rp 2,0 M/bulan (2 deals won via Year-End Budget Flush), aktivasi co-selling bersama System Integrator Tier-1 (Multipolar, Reycom Data Solusi, Mastersystem), perluasan PoC ke perbankan BUKU 4, dan penyelesaian Q4 penuh Rp 3,0 Miliar.',
    strategyEvolutionEn: 'Strategic Focus Month 3 (December): Growth acceleration at IDR 2.0B/mo (2 deals won via Year-End Budget Flush), activating Tier-1 SI co-selling (Multipolar, Reycom Data Solusi, Mastersystem), expanding banking PoCs, and locking full Q4 at IDR 3.0B.'
  }
];

export const SCORECARD_METRICS: ScorecardMetric[] = [
  {
    id: 'monthly_revenue_pacing',
    label: 'Target Penjualan Bulanan (Harry Gultom)',
    targetValue: 'Rp 1,0 M – 2,0 M / Bulan (Total 90 Hari Q4: Rp 3,0 Miliar / 3 Deals Won)',
    achievedProgressPercent: 100,
    subtext: 'B1 (Okt): Rp 0 (Pengumpulan Data) | B2 (Nov): 1 Deal = Rp 1,0M | B3 (Des): 2 Deals = Rp 2,0M (Total Q4: Rp 3,0 Miliar)',
    category: 'REVENUE',
    monthlyPacing: 'Pacing 90D: B1 (Okt) Rp 0 → B2 (Nov) Rp 1,0M → B3 (Des) Rp 2,0M = Rp 3,0M (Q4 Penuh) → Lanjut Q1 Bersih'
  },
  {
    id: 'flagship_pricing',
    label: 'Harga Lisensi & Kapasitas Device (Per Deal Sekali Jasa)',
    targetValue: 'Rp 1,0 Miliar / Deal (Maks. 500 Device)',
    achievedProgressPercent: 100,
    subtext: 'Perhitungan sekali jasa: Rp 1 Miliar per deal untuk audit deteksi celah kebocoran data dan lisensi Bronyx AI 500 device',
    category: 'REVENUE',
    monthlyPacing: 'Unit Economics: 1 Deal Enterprise = Rp 1,0 Miliar / 500 Device'
  },
  {
    id: 'coverage',
    label: 'Akun Target Prioritas Jabodetabek',
    targetValue: '50 Akun Terpilih',
    achievedProgressPercent: 100,
    subtext: 'Fokus intensif 50 akun perbankan, BUMN, & manufaktur di wilayah Jabodetabek',
    category: 'COVERAGE',
    monthlyPacing: 'B1: 50 Akun Terpetakan | B2: 16 Discovery Sesi | B3: 3 Deal Won Q4 (1.500 Node)'
  },
  {
    id: 'engagement',
    label: 'CISO / CIO Discovery Velocity',
    targetValue: '16 Discovery Sesi / Bulan',
    achievedProgressPercent: 95,
    subtext: 'Briefing ancaman kebocoran data eksekutif & kepatuhan UU PDP No. 27/2022 serta OJK SEOJK 29/2022',
    category: 'ENGAGEMENT',
    monthlyPacing: 'B1: 12 Sesi Fast-Track | B2: 16 Sesi Outbound | B3: 16 Sesi Reguler'
  },
  {
    id: 'qualified_pipeline',
    label: 'Qualified Pipeline Growth',
    targetValue: 'Rp 20,0 Miliar Pool',
    achievedProgressPercent: 100,
    subtext: 'Progres bertumbuh terukur: B1 Rp 9,0M → B2 Rp 15,0M → B3 Rp 20,0M (4,0x cakupan buffer terhadap target)',
    category: 'PIPELINE',
    monthlyPacing: 'Progres Pipeline: B1 (Okt) Rp 9,0M | B2 (Nov) Rp 15,0M | B3 (Des) Rp 20,0M'
  },
  {
    id: 'pocs',
    label: '5-Day Scoped PoCs Executed',
    targetValue: '8–14 Active / Completed',
    achievedProgressPercent: 92,
    subtext: 'Verifikasi otonom tanpa dampak negatif (zero blast radius) di staging perbankan & fintech',
    category: 'CONVERSION',
    monthlyPacing: 'B1: 6 PoC Fast-Track | B2: 10 PoC Berjalan/Selesai | B3: 14 PoC Aktif'
  },
  {
    id: 'conversion',
    label: 'PoC to Proposal Win Rate',
    targetValue: '60% PoC-to-Proposal · 37%–50% Closing (3 Won)',
    achievedProgressPercent: 90,
    subtext: 'Konversi terukur: 3 kontrak komersial enterprise dimenangkan dari proposal matang',
    category: 'CONVERSION',
    monthlyPacing: 'B1: 0 Deal (Pengumpulan Data) | B2: 1 Deal Won (Nov · Rp 1M) | B3: 2 Deals Won (Des · Rp 2M) = Total 3 Deals (Rp 3M)'
  }
];

export const NINETY_DAY_EXECUTION_PLAN: ExecutionPhase[] = [
  {
    phaseId: 'phase1',
    phaseName: 'Phase 1: UNDERSTAND, MINE & PIPELINE BUILD (OKTOBER)',
    monthTitle: 'BULAN 1 / OKTOBER: FONDASI & PIPELINE BUILDING (TIDAK LANGSUNG CLOSING)',
    timeframe: 'Hari 1 – Hari 30 (Oktober)',
    theme: 'BULAN 1 (OKTOBER) — FONDASI, PEMETAAN 50 AKUN & RAMP-UP POC 5-HARI',
    coreObjective: 'Eksekusi dimulai Oktober (Kuartal 4)! Di awal tidak langsung memaksakan closing instan; fokus pada pemetaan 50 akun Jabodetabek, penambangan 300+ klien warm ITSEC Asia, pelaksanaan 6 PoC 5-hari terarah tanpa blast radius, dan pengamanan pipeline awal Rp 9,0 Miliar.',
    monthlyQuota: MONTHLY_PACING_MODEL[0],
    visualDomainPillars: [
      { name: 'TARGET BULAN 1: PIPELINE 9M', focus: 'Membangun pipeline awal Rp 9,0 Miliar di CRM ITSEC, pemetaan 50 akun, dan 6 PoC aktif (tidak memaksakan closing dini).' },
      { name: 'MINING CLIENT ITSEC', focus: 'Menggali 40 akun prioritas ITSEC Asia di Perbankan & Fintech yang sudah memiliki kontrak pentest berulang dan vendor code aktif.' },
      { name: 'PRODUCT MASTERY', focus: 'Penguasaan orkestrasi agen Kali Linux, batas aman safe-exploitation, dan integrasi webhook CI/CD.' },
      { name: 'CISO CALIBRATION', focus: 'Wawancara dengan 5 CISO mitra terpercaya untuk menyelaraskan narasi kepatuhan OJK SEOJK 29 & UU PDP No. 27/2022.' },
      { name: 'FAST-TRACK POC', focus: 'Meluncurkan 6 PoC 5-hari cepat pada aset staging non-produksi untuk persiapan closing di Bulan 2 (November).' }
    ],
    tangibleOutputs: [
      'Pencapaian Fondasi Bulan 1: Pipeline Terkualifikasi Senilai Rp 9,0 Miliar Terkunci di CRM',
      '6 PoC 5-Hari Deteksi Kebocoran Data Berjalan di Lingkungan Staging Nasabah',
      'Pemetaan Komprehensif 50 Akun Enterprise Jabodetabek Siap Eksekusi',
      'Daftar 40 Klien Prioritas ITSEC Asia untuk Program Cross-Sell Terarah',
      'Paket Scoping PoC 5-Hari & Perjanjian Uji Coba Aman (Zero Blast Radius SLA)'
    ],
    sprints: [
      {
        week: 'Minggu 1–2 (Hari 1–14)',
        focus: 'Penguasaan Solusi, Mapping 50 Akun & Penambangan Klien Warm ITSEC',
        keyActions: [
          'Saya menguji langsung orkestrasi agen Bronyx dengan tim teknis untuk memverifikasi batasan non-destruktif.',
          'Saya menemui 10 Account Director ITSEC Asia untuk memetakan akun perbankan dan fintech dengan trust tinggi dan vendor code aktif.',
          'Saya memetakan 50 target akun ICP di Jabodetabek dan menyusun matriks prioritas penetrasi.'
        ],
        deliverables: ['Battlecard produk vs scanner tradisional', 'Daftar 40 kandidat cross-sell warm ITSEC Asia', 'Peta 50 Akun Jabodetabek'],
        decisionGate: 'Apakah batasan zero blast radius terverifikasi 100% aman untuk diuji di lingkungan nasabah?'
      },
      {
        week: 'Minggu 3–4 (Hari 15–30)',
        focus: 'Peluncuran Gelombang 6 PoC 5-Hari & Pembentukan Pipeline Rp 9,0 Miliar',
        keyActions: [
          'Saya menggelar 12 sesi executive threat briefing langsung ke CISO/CIO perbankan & fintech terarah.',
          'Saya meluncurkan 6 PoC 5-hari secara paralel di sandbox staging nasabah.',
          'Saya menyusun baseline pipeline Rp 9,0 Miliar dan menyiapkan draf penawaran komersial untuk closing di Bulan 2 (November).'
        ],
        deliverables: ['6 PoC Aktif Berjalan', 'Pipeline CRM Terkunci Rp 9,0 Miliar', 'Draf Proposal Komersial Siap Uji'],
        decisionGate: 'GERBANG HARI 30 (AKHIR OKTOBER): Apakah pipeline Rp 9,0 Miliar dan 6 PoC aktif terpasang untuk mengamankan First Win di Bulan 2 (November)?'
      }
    ],
    keyDecisions: 'GERBANG KEPUTUSAN BULAN 1: Pertahankan disiplin ramp-up; jangan memaksakan closing dini tanpa validasi PoC yang meyakinkan, lalu percepat penyajian temuan di Bulan 2 untuk meraih First Win.'
  },
  {
    phaseId: 'phase2',
    phaseName: 'Phase 2: PROVE, CONVERT & FIRST WIN CLOSING (NOVEMBER)',
    monthTitle: 'BULAN 2 / NOVEMBER: FIRST WIN CLOSING RP 1,0 MILIAR (KUARTAL 4 BERJALAN)',
    timeframe: 'Hari 31 – Hari 60 (November)',
    theme: 'BULAN 2 (NOVEMBER) — FIRST WIN: ACHIEVE PERDANA RP 1,0 MILIAR (1 DEAL)',
    coreObjective: 'Akselerasi konversi PoC 5-hari yang selesai di Bulan 1 menjadi kesepakatan komersial, penyelesaian pengadaan via vendor code aktif, dan penutupan 1 deal enterprise perdana senilai Rp 1,0 Miliar ARR di November.',
    monthlyQuota: MONTHLY_PACING_MODEL[1],
    visualDomainPillars: [
      { name: 'TARGET BULAN 2: RP 1,0M', focus: 'Mencapai First Win komersial: 1 deal enterprise @ Rp 1,0 Miliar (500 device), akumulasi Q4 Rp 1,0 Miliar ARR, dan pipeline Rp 15,0 Miliar.' },
      { name: 'POC FINDINGS PITCH', focus: 'Mempresentasikan temuan celah kebocoran data nyata kepada CISO & Komite Risiko untuk mempercepat approval.' },
      { name: 'FAST-TRACK PROCUREMENT', focus: 'Memanfaatkan master vendor code ITSEC Asia eksisting untuk memangkas birokrasi pengadaan.' },
      { name: 'PARTNER CO-SELL', focus: 'Menjalin koordinasi awal bersama System Integrator Tier-1 (Multipolar, Reycom Data Solusi, Mastersystem) untuk persiapan closing Q4.' },
      { name: 'PIPELINE EXPANSION', focus: 'Memperluas pipeline aktif dari Rp 9,0 Miliar menjadi Rp 15,0 Miliar melalui gelombang outreach kedua.' }
    ],
    tangibleOutputs: [
      'Pencapaian Target Finansial Bulan 2: Rp 1,0 Miliar ARR (1 Deal Enterprise Won @ Rp 1 Miliar)',
      '1 Kontrak Enterprise Perdana Ditandatangani di Sektor Perbankan Digital/Fintech',
      '500 Endpoint/Device Pertama Aktif Terproteksi oleh Bronyx AI',
      'Pipeline Terkualifikasi Tumbuh Pesat Mencapai Rp 15,0 Miliar di CRM',
      'Inisiasi Kerjasama Co-Sell Bersama Mitra Sistem Integrator Tier-1'
    ],
    sprints: [
      {
        week: 'Minggu 5–6 (Hari 31–44)',
        focus: 'Presentasi Temuan PoC C-Level & Negosiasi Proposal Komersial Perdana',
        keyActions: [
          'Saya menyajikan laporan pembuktian eksploitasi celah data dalam hitungan jam kepada CISO & CIO perbankan digital prioritas.',
          'Saya mengajukan proposal komersial flagship 500 device senilai Rp 1,0 Miliar sekali jasa.',
          'Saya memimpin pembahasan klausul SLA, kepatuhan SEOJK 29/2022, dan jaminan keamanan non-destruktif.'
        ],
        deliverables: ['16 sesi discovery terlaksana', 'Laporan evaluasi teknis PoC disetujui CISO', 'Proposal komersial masuk antrean pengadaan'],
        decisionGate: 'Apakah CISO dan tim teknis telah menandatangani persetujuan teknis (Technical Sign-off)?'
      },
      {
        week: 'Minggu 7–8 (Hari 45–60)',
        focus: 'Finalisasi Kontrak & Penutupan Deal Perdana (Target November Rp 1,0 Miliar)',
        keyActions: [
          'Saya menyelesaikan proses pengadaan dan mengunci penandatanganan 1 kontrak komersial enterprise perdana senilai Rp 1,0 Miliar ARR.',
          'Saya memastikan onboarding teknis 500 endpoint berjalan mulus bersama tim customer success ITSEC Asia.',
          'Saya memperluas pipeline qualified menjadi Rp 15,0 Miliar untuk mengamankan target Bulan 3 (Desember).',
          'Saya memastikan pencapaian Bulan 2 (November) tercapai 100% sebesar Rp 1,0 Miliar ARR.'
        ],
        deliverables: ['1 Kontrak Enterprise Won (Rp 1,0 M ARR)', '500 Device Terlindungi', 'Total ARR Kumulatif Rp 1,0 Miliar Terkunci'],
        decisionGate: 'GERBANG HARI 60 (AKHIR NOVEMBER): Apakah target First Win Bulan 2 (Rp 1,0 M ARR) tercapai dan momentum siap berlanjut ke Desember?'
      }
    ],
    keyDecisions: 'GERBANG KEPUTUSAN BULAN 2: Rayakan First Win perdana, gunakan kesuksesan ini sebagai studi kasus (case study) kredibel, dan bawa momentum ini ke Bulan 3 (Desember) memanfaatkan Year-End Budget Flush.'
  },
  {
    phaseId: 'phase3',
    phaseName: 'Phase 3: GROWTH ACCELERATION & YEAR-END Q4 QUOTA (DESEMBER)',
    monthTitle: 'BULAN 3 / DESEMBER: AKSELERASI GROWTH RP 2,0 MILIAR & KONSOLIDASI Q4 RP 3,0 MILIAR',
    timeframe: 'Hari 61 – Hari 90 (Desember)',
    theme: 'BULAN 3 (DESEMBER) — AKSELERASI GROWTH RP 2,0M/BLN & KONSOLIDASI Q4 (TOTAL RP 3,0M)',
    coreObjective: 'Penutupan 2 deal enterprise baru senilai Rp 2,0 Miliar di Desember memanfaatkan Year-End Budget Flush, penuntasan target 90 hari pertama sebesar Rp 3,0 Miliar kumulatif (3 Deals Won / 1.500 Node), dan penguncian pipeline Rp 20,0 Miliar untuk menutup Q4 secara sempurna.',
    monthlyQuota: MONTHLY_PACING_MODEL[2],
    visualDomainPillars: [
      { name: 'TARGET BULAN 3: RP 2,0M', focus: 'Mencapai target kuota Bulan 3: Rp 2,0 Miliar ARR baru (2 deals won), Total 90 Hari Q4 Rp 3,0 Miliar ARR Kumulatif (3 deals won), dan Pipeline Rp 20,0 Miliar.' },
      { name: 'YEAR-END BUDGET FLUSH', focus: 'Menyerap anggaran akhir tahun enterprise dan pemenuhan kepatuhan audit akhir tahun OJK/UU PDP.' },
      { name: 'LAND & EXPAND', focus: 'Menyusun peta jalan ekspansi lisensi (upsell dari 500 ke 1.000 endpoint) pasca implementasi awal.' },
      { name: 'PLAYBOOK CODIFICATION', focus: 'Mendokumentasikan siklus penjualan, penanganan keberatan, dan taktik kemenangan ke dalam sales playbook baku.' },
      { name: 'Q1 FRESH SCALING', focus: 'Menyajikan pencapaian target Q4 (Rp 3,0 Miliar) dan proyeksi pertumbuhan progresif Q1–Q4 tahun berikutnya kepada Dewan Direksi.' }
    ],
    tangibleOutputs: [
      'Pencapaian Target Finansial 90 Hari (Q4 Penuh): Rp 3,0 Miliar ARR Kumulatif (3 Logo Enterprise Ditutup / 1.500 Node Terproteksi)',
      'Akselerasi Growth Bulan 3: Rp 2,0 Miliar / Bulan Terkunci (2 Deals Won @ Rp 1,0M via Year-End Budget Flush)',
      'Pipeline Bergulir Sehat Senilai Rp 20,0 Miliar (Rasio Perlindungan 4,0x Terhadap Target)',
      '6–8 Proposal Komersial Aktif Berada di Antrean Pengadaan untuk Lanjutan Q1',
      'Buku Panduan Penjualan Enterprise Berulang (Repeatable Enterprise Sales Playbook)',
      'Laporan Strategis Kinerja 90 Hari & Roadmap Eskalasi Kuartal (Q1–Q4) kepada Dewan Direksi'
    ],
    sprints: [
      {
        week: 'Minggu 9–10 (Hari 61–74)',
        focus: 'Akselerasi Pengadaan Akun Kedua & Aktivasi Channel Co-Sell SI Tier-1',
        keyActions: [
          'Saya memfasilitasi komite legal dan pengadaan bank kedua & ketiga dengan dokumen verifikasi kepatuhan OJK & ISO ITSEC Asia.',
          'Saya mengikat Multipolar & Reycom Data Solusi dengan perjanjian co-sell untuk memasukkan Bronyx ke tender korporasi.',
          'Saya mengamankan persetujuan harga komersial deal ke-2 senilai Rp 1,0 Miliar bersama pimpinan CISO.'
        ],
        deliverables: ['Draf final kontrak deal ke-2 disetujui', 'MOU kemitraan co-sell SI Tier-1 aktif'],
        decisionGate: 'Apakah persetujuan komite pengadaan untuk deal ke-2 sudah terkunci sepenuhnya?'
      },
      {
        week: 'Minggu 11–12 (Hari 75–90)',
        focus: 'Closing Deal ke-2 & ke-3 (Desember Rp 2,0M), Total Q4 Rp 3,0 Miliar & Penutupan Tahun Sempurna',
        keyActions: [
          'Saya menandatangani kontrak enterprise ke-2 dan ke-3 senilai Rp 2,0 Miliar ARR di Desember memanfaatkan Year-End Budget Flush, menuntaskan target Q4 kumulatif sebesar Rp 3,0 Miliar (3 Deals Won).',
          'Saya melakukan serah terima akun yang telah dimenangkan ke tim Customer Success untuk memastikan onboarding instan 1.500 device.',
          'Saya menyusun proyeksi kuartal berjalan tahun depan: Q1 (Jan–Mar Rp 5,5M–6,0M), Q2 (Rp 6,5M), Q3 (Rp 7,5M) = Total ~Rp 25M–28M.',
          'Saya mempresentasikan laporan pencapaian 90 hari pertama (Rp 3,0 Miliar ARR) dan kesiapan transisi bersih ke Q1 kepada Dewan Direksi PT ITSEC Asia Tbk.'
        ],
        deliverables: ['Target 90 Hari (Q4) Rp 3,0 Miliar ARR Terkunci 100% (3 Deals Won)', 'Akselerasi Growth Bulan 3: Rp 2,0 M/Bulan Tercapai', 'Roadmap Pertumbuhan Progresif Tahun Depan (Q1–Q4)'],
        decisionGate: 'GERBANG HARI 90 (AKHIR DESEMBER / TUTUP TAHUN Q4): Apakah target Rp 3,0 Miliar tuntas tercapai (3 Deals Won), Q4 ditutup sempurna, dan siap bertumbuh di Q1 tahun berikutnya?'
      }
    ],
    keyDecisions: 'GERBANG KEPUTUSAN BULAN 3: Resmikan model penjualan berulang, tutup Kuartal 4 dengan sukses Rp 3,0 Miliar, dan mulai proses eskalasi kuota bersih di Q1 (Januari) menuju target tahunan skala besar.'
  }
];
