import { 
  PricingPackageItem, 
  RevenuePillarItem, 
  QuarterlyTrajectoryItem, 
  RetentionFlywheelStep, 
  ExecutiveObjectionItem 
} from './types';

export const PRICING_PACKAGES: PricingPackageItem[] = [
  {
    id: 'package-snapshot',
    tierBadge: 'ENTRY TIER',
    tierBadgeVariant: 'neutral',
    isFlagship: false,
    nodeRange: '100–250 NODE',
    name: 'Assisted Snapshot',
    subtitle: 'Audit Penetrasi Berkala',
    priceDisplay: 'Rp 450 Juta',
    isAnimatedCounter: false,
    priceSubtext: 'Audit Snapshot Sekali Jasa',
    features: [
      { label: 'Scan 250 host terarah' },
      { label: 'Laporan kepatuhan audit' }
    ],
    footerNote: 'Target: Fintech Tahap Awal'
  },
  {
    id: 'package-flagship',
    tierBadge: 'CONTINUOUS',
    tierBadgeVariant: 'emerald',
    isFlagship: true,
    nodeRange: '500 NODE',
    name: 'Bronyx AI Leakage Det.',
    subtitle: 'PT ITSEC Asia Tbk (CYBR)',
    priceDisplay: 'Rp 1,0 Miliar',
    isAnimatedCounter: true,
    priceSubtext: 'Sekali Jasa / Kuota 500 Node',
    features: [
      { label: 'Deteksi celah kebocoran', isStrong: true },
      { label: 'Zero Blast Radius garansi' },
      { label: '1-Click Retest mandiri' }
    ],
    footerNote: '1 Deal = Rp 1M/Bln'
  },
  {
    id: 'package-bespoke',
    tierBadge: 'BESPOKE',
    tierBadgeVariant: 'purple',
    isFlagship: false,
    nodeRange: '1.000+ NODE',
    name: 'Bespoke Holding',
    subtitle: 'Ekosistem Konglomerasi',
    priceDisplay: 'Rp 2,5 M – Rp 5,0 M',
    isAnimatedCounter: true,
    priceSubtext: 'Multi-Entitas Holding',
    features: [
      { label: 'On-Premise Air-Gapped' },
      { label: 'Multi-tenant anak usaha' }
    ],
    footerNote: 'Target: Bank BUKU IV & BUMN'
  }
];

export const REVENUE_PILLARS: RevenuePillarItem[] = [
  {
    pillarNum: 1,
    percentage: 50,
    amountDisplay: 'Rp 0,5 M – 1,0 M',
    title: 'Warm Client ITSEC',
    description: 'Penetrasi 300+ akun enterprise eksisting lewat vendor code aktif (siklus 20–30 hari).',
    colorScheme: 'rose'
  },
  {
    pillarNum: 2,
    percentage: 35,
    amountDisplay: 'Rp 0,35 M – 0,75 M',
    title: 'Perbankan & FinTech',
    description: 'Urgensi SEOJK 29 & UU PDP lewat PoC 5-Hari terarah zero blast radius.',
    colorScheme: 'amber'
  },
  {
    pillarNum: 3,
    percentage: 15,
    amountDisplay: 'Rp 0,15 M – 0,5 M',
    title: 'Co-Sell Mitra SI/Telko',
    description: 'Leverage Multipolar, Reycom Data Solusi & Mastersystem untuk akselerasi tender korporasi & BUMN.',
    colorScheme: 'sky'
  }
];

export const QUARTERLY_TRAJECTORY: QuarterlyTrajectoryItem[] = [
  {
    quarter: 'Q4 (OKT–DES)',
    amount: 'Rp 3,0 M',
    timelineSubtitle: '90 Hari Pertama',
    isHighlighted: true
  },
  {
    quarter: 'Q1 (JAN–MAR)',
    amount: 'Rp 5,5 M',
    timelineSubtitle: 'Run-Rate Rp 1,8M/bln'
  },
  {
    quarter: 'Q2 (APR–JUN)',
    amount: 'Rp 6,5 M',
    timelineSubtitle: 'Co-Sell SI & Upsell'
  },
  {
    quarter: 'Q3 (JUL–SEP)',
    amount: 'Rp 7,5 M',
    timelineSubtitle: 'BUMN & Audit H2'
  },
  {
    quarter: 'TAHUN 1 (Y1)',
    amount: '~Rp 25,0 M',
    timelineSubtitle: 'Skala ASEAN',
    isFinalScale: true,
    spanColClass: 'col-span-2 sm:col-span-1'
  }
];

export const RETENTION_FLYWHEEL: RetentionFlywheelStep[] = [
  {
    stepNum: 1,
    badge: '1. Land via Flagship',
    title: '500 Node Perimeter',
    description: 'Kontrak perdana Rp 1 Miliar validasi celah kebocoran data.',
    footerMetric: 'ARR Terkunci',
    colorScheme: 'rose'
  },
  {
    stepNum: 2,
    badge: '2. DevSecOps Sticky',
    title: 'CI/CD Webhook',
    description: 'Integrasi pipeline rilis developer; retest 3-menit mandiri.',
    footerMetric: 'Churn < 2%',
    colorScheme: 'amber'
  },
  {
    stepNum: 3,
    badge: '3. QBR Bersama CISO',
    title: 'Holding Expansion',
    description: 'Ekspansi lisensi ke anak usaha konglomerasi via agenda QBR.',
    footerMetric: '2.5x LTV Group',
    colorScheme: 'emerald'
  }
];

export const EXECUTIVE_OBJECTIONS: ExecutiveObjectionItem[] = [
  {
    objection: 'Downtime / Gangguan',
    solution: 'Garansi Zero Blast Radius kontrak resmi.'
  },
  {
    objection: 'Kedaulatan Data (PP 71)',
    solution: 'Air-Gapped Appliance On-Premise di RI.'
  },
  {
    objection: 'Pengadaan 90 Hari',
    solution: 'Vendor code aktif PT ITSEC Asia Tbk.'
  }
];

export const SLIDE_07_COPY = {
  headerTitle: {
    id: 'Arsitektur Revenue & Komersialisasi',
    en: 'Revenue Architecture & Commercialization'
  },
  headerBadges: {
    monthlyDeal: 'Rp 1,0 M / Bulan (1 Deal)',
    retention: '130% NRR Retensi'
  },
  formulaHeader: {
    id: 'FORMULA TARGET RP 1M/BULAN & ESKALASI',
    en: 'IDR 1B/MO QUOTA ALLOCATION'
  },
  formulaBaseline: 'Baseline: 1 Deal @ Rp 1M (Achieve B2–B3)',
  trajectoryHeader: {
    id: 'TRAJEKTORI PERTUMBUHAN KUARTAL (START Q4 OKT–DES)',
    en: 'QUARTERLY GROWTH TRAJECTORY (Q4 OKT–DES START)'
  },
  trajectoryTotal: 'TOTAL 1 TAHUN: ~RP 25,0 M',
  flywheelHeader: {
    id: 'FLYWHEEL RETENSI & EKSPANSI (NRR 130%)',
    en: 'ACCOUNT RETENTION FLYWHEEL (NRR 130%)'
  },
  flywheelBadge: '2.5x LIFETIME VALUE',
  objectionsHeader: {
    id: '3 MITIGASI KEBERATAN EKSEKUTIF',
    en: 'TOP 3 EXECUTIVE OBJECTIONS MITIGATED'
  },
  objectionsSub: 'SOLUSI STRUKTURAL',
  mandateQuote: {
    id: '"Saya memposisikan Bronyx AI untuk deteksi celah kebocoran data: Rp 1 Miliar (500 device) sekali jasa → Bulan 1 (Oktober) fokus PoC & pipeline (Rp 0), First Win di Bulan 2 (November Rp 1M), akselerasi di Bulan 3 (Desember Rp 2M) menutup Q4 Rp 3,0 Miliar — lalu bertumbuh progresif menuju ~Rp 25 Miliar ARR di akhir tahun."',
    en: '"I position Bronyx AI for data leakage detection: IDR 1.0B (500 devices) per engagement → Month 1 (October) focuses on PoC & pipeline (IDR 0), First Win lands in Month 2 (November IDR 1B), accelerating in Month 3 (December IDR 2B) closing Q4 at IDR 3.0B — scaling progressively to ~IDR 25B ARR at year-end."'
  }
};
