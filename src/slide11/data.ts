import {
  ExecutionTrajectoryCard,
  RegionalExpansionStage,
  ExecutiveMandateReason,
} from './types';

export const SLIDE_11_COPY = {
  headerTitle: {
    id: 'Ringkasan Eksekutif',
    en: 'Executive Summary',
  },
  companyBadge: 'PT ITSEC ASIA TBK (IDX: CYBR)',
  trajectoryHeader: {
    title: {
      id: 'TRAJEKTORI EKSEKUSI KUOTA: 30D · 60D · 90D',
      en: 'QUOTA EXECUTION TRAJECTORY: 30D · 60D · 90D',
    },
    totalQ4: {
      id: 'TOTAL 90 HARI (Q4): RP 3,0 MILIAR',
      en: 'TOTAL 90-DAY (Q4): IDR 3.0B',
    },
  },
  regionalExpansion: {
    title: {
      id: 'JEMBATAN EKSPANSI REGIONAL (ASEAN SCALE)',
      en: 'REGIONAL EXPANSION BRIDGE (ASEAN SCALE)',
    },
    badge: 'BERTAHAP & TERUKUR',
    footerText: 'Ekspansi Regional Dibangun di Atas Kredibilitas Pasar Domestik Terbukti',
    footerTag: 'PROGRESSIVE SCALE',
  },
  executiveMandate: {
    preTitle: 'PERNYATAAN PENUTUP EKSEKUTIF',
    leaderTitle: 'Komitmen Kepemimpinan Harry Gultom',
    restartButton: {
      id: 'Kembali ke Awal Presentasi (Slide 01)',
      en: 'Return to Slide 01',
    },
    restartTitle: {
      id: 'Kembali ke Awal Presentasi',
      en: 'Return to Slide 01',
    },
    readinessText: 'Kesiapan Komersial: Eksekusi Penuh Hari Pertama',
    readinessTag: 'READY TO SCALE',
  },
  bottomQuote: {
    id: '"Eksekusi dimulai Oktober (Q4 Penuh): Bulan 1 (Okt) fokus pada fondasi & PoC (Rp 0), Bulan 2 (Nov) meraih First Win Rp 1,0 Miliar, dan Bulan 3 (Des) menutup Kuartal 4 dengan akselerasi penuh Rp 2,0 Miliar — mengunci total Rp 3,0 Miliar (3 Deals Won) secara sempurna."',
    en: '"Execution launches October (Full Q4): Month 1 (Oct) focuses on foundation & PoC (IDR 0), Month 2 (Nov) secures First Win IDR 1.0B, and Month 3 (Dec) closes Quarter 4 with full acceleration IDR 2.0B — flawlessly locking IDR 3.0B total (3 Deals Won)."',
  },
};

export const TRAJECTORY_CARDS: ExecutionTrajectoryCard[] = [
  {
    badge: '30D',
    badgeColorClass: 'text-rose-400',
    titleId: 'Bulan 1 (Okt): Fondasi, 50 Akun & 6 PoC',
    titleEn: 'Month 1 (Oct): Foundation, 50 Accounts & 6 PoCs',
    descId: 'Progres pengumpulan data 50 akun, mining warm client ITSEC & 6 PoC staging (Rp 0).',
    descEn: 'Progres pengumpulan data 50 akun, mining warm client ITSEC & 6 PoC staging (Rp 0).',
    counterValue: 'Rp 0 (Ramp-up)',
    subCounterText: 'Pipeline Rp 9,0 M',
    subCounterColorClass: 'text-rose-400',
    cardBgClass: 'bg-neutral-950/80',
    cardBorderClass: 'border-neutral-900',
    badgeBoxBgClass: 'bg-neutral-900',
    badgeBoxBorderClass: 'border-neutral-800',
    descTextColorClass: 'text-neutral-300',
  },
  {
    badge: '60D',
    badgeColorClass: 'text-amber-400',
    titleId: 'Bulan 2 (Nov): First Win & Achieve Perdana',
    titleEn: 'Month 2 (Nov): First Win & Initial Achievement',
    descId: 'Closing deal enterprise perdana (@ Rp 1,0 Miliar / 500 device), sukses membuktikan konversi komersial di November.',
    descEn: 'Closing deal enterprise perdana (@ Rp 1,0 Miliar / 500 device), sukses membuktikan konversi komersial di November.',
    counterValue: 'Rp 1,0 M',
    subCounterText: '1 Deal Won (Nov)',
    subCounterColorClass: 'text-amber-400 font-bold',
    cardBgClass: 'bg-neutral-950/80',
    cardBorderClass: 'border-neutral-900',
    badgeBoxBgClass: 'bg-neutral-900',
    badgeBoxBorderClass: 'border-neutral-800',
    descTextColorClass: 'text-neutral-300',
  },
  {
    badge: '90D',
    badgeColorClass: 'text-white',
    titleId: 'Bulan 3 (Des): Akselerasi Q4 & Total 90D Rp 3,0 M',
    titleEn: 'Month 3 (Dec): Q4 Acceleration & 90D Total IDR 3.0B',
    descId: '2 Deal Won closing (@ Rp 1,0M via Year-End Budget Flush), akselerasi growth Rp 2,0 M/bulan, mengunci total 90 hari (Q4 Penuh) Rp 3,0 Miliar kumulatif (3 Deals Won), pipeline Rp 20 M.',
    descEn: '2 Deal Won closing (@ Rp 1,0M via Year-End Budget Flush), akselerasi growth Rp 2,0 M/bulan, mengunci total 90 hari (Q4 Penuh) Rp 3,0 Miliar kumulatif (3 Deals Won), pipeline Rp 20 M.',
    counterValue: 'Rp 2,0 M',
    subCounterText: 'Total 90D Rp 3,0 M (3 Deals)',
    subCounterColorClass: 'text-emerald-300 font-bold',
    cardBgClass: 'bg-emerald-950/20',
    cardBorderClass: 'border-emerald-900/50',
    badgeBoxBgClass: 'bg-emerald-900/60',
    badgeBoxBorderClass: 'border-emerald-700',
    descTextColorClass: 'text-emerald-100',
  },
];

export const REGIONAL_EXPANSION_STAGES: RegionalExpansionStage[] = [
  {
    step: '1. BASIS INDONESIA (Q4–Q1)',
    title: 'Lighthouse Wins',
    sub: 'Fintech & Bank (Rp 2M–3,5M)',
    stepColorClass: 'text-rose-400',
    subColorClass: 'text-neutral-400',
  },
  {
    step: '2. ESKALASI NASIONAL (Q2–Q3)',
    title: 'BUMN & Telko',
    sub: 'Co-Sell SI Tier-1 (Multipolar / RDS)',
    stepColorClass: 'text-amber-400',
    subColorClass: 'text-neutral-400',
  },
  {
    step: '3. ASIA TENGGARA (Q4/Y1)',
    title: 'Scale Rp 3,0M / Bln',
    sub: '~Rp 25M ARR Kumulatif',
    stepColorClass: 'text-emerald-400',
    subColorClass: 'text-emerald-400 font-bold',
  },
];

export const EXECUTIVE_MANDATE_REASONS: ExecutiveMandateReason[] = [
  {
    title: 'Urgensi Kepatuhan Nyata (OJK & UU PDP)',
    desc: 'Menjawab kewajiban hukum personal direksi SEOJK 29/2022 menghilangkan penundaan anggaran.',
  },
  {
    title: 'Bukti Empiris 5 Hari (Zero Blast Radius)',
    desc: 'Menggantikan perdebatan berbulan-bulan dengan PoC terarah yang membuktikan ketiadaan risiko disrupsi.',
  },
  {
    title: 'Kredibilitas Emiten Publik PT ITSEC Asia Tbk',
    desc: 'Memanfaatkan reputasi pendapatan Rp 325 M & master vendor code aktif untuk closing instan.',
  },
];
