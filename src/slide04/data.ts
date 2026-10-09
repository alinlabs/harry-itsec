import { 
  TARGET_SEGMENTATION_PLOTS, 
  ICP_SECTOR_PRIORITIES, 
  DUAL_LEAD_GEN_ENGINES 
} from '../data/goToMarketData';
import { 
  ExecutivePillarItem, 
  PrioritySectorCardData, 
  ChannelMixCard,
  GtmTabKey
} from './types';

export { 
  TARGET_SEGMENTATION_PLOTS, 
  ICP_SECTOR_PRIORITIES, 
  DUAL_LEAD_GEN_ENGINES 
};

export const GTM_TAB_KEYS: readonly GtmTabKey[] = ['segmentation', 'lead_generation'] as const;

export const EXECUTIVE_PILLARS: ExecutivePillarItem[] = [
  {
    key: 'who',
    tagId: 'SIAPA (Prioritas ICP)',
    tagEn: 'WHO (ICP Priority)',
    titleId: 'Perbankan, Manufaktur & BUMN',
    titleEn: 'Banking, Manufacturing & BUMN',
    subtitleId: 'Target: CISO, CIO, IT Risk & DevSecOps',
    subtitleEn: 'Target: CISO, CIO, IT Risk & DevSecOps'
  },
  {
    key: 'why',
    tagId: 'MENGAPA (Nilai & Mandat)',
    tagEn: 'MENGAPA (Nilai & Mandat)',
    titleId: 'OJK 29 & UU PDP · Hemat TCO 60%',
    titleEn: 'OJK 29 & UU PDP · 60% TCO Savings',
    subtitleId: 'Hasil: Pengujian Jam vs 4 Minggu',
    subtitleEn: 'Outcome: Hours vs 4 Weeks Testing'
  },
  {
    key: 'when',
    tagId: 'KAPAN (Pemicu Pembelian)',
    tagEn: 'WHEN (Commercial Triggers)',
    titleId: 'Siklus Audit & Sprint CI/CD',
    titleEn: 'Audit Deadlines & CI/CD Sprints',
    subtitleId: 'Solusi: Tutup Blind Spot 360 Hari',
    subtitleEn: 'Solution: Close 360-Day Blind Spot'
  },
  {
    key: 'how',
    tagId: 'BAGAIMANA (Dual Engine)',
    tagEn: 'HOW (Dual Engine)',
    titleId: 'Outbound Health Check + Inbound',
    titleEn: 'Outbound Health Check + Inbound',
    subtitleId: 'Gerakan: PoC 5 Hari Zero Blast Radius',
    subtitleEn: 'Motion: Safe 5-Day PoC Zero Blast Radius'
  }
];

export const PRIORITY_SECTOR_CARDS: PrioritySectorCardData[] = [
  {
    id: 'banking_fintech',
    titleId: 'Perbankan & Fintech Tier-1',
    titleEn: 'Tier-1 Banks & Fintech',
    percentage: '98%',
    percentageNumber: 98,
    colorTheme: 'rose',
    chips: ['OJK SEOJK 29', 'BI PADG', 'UU PDP No. 27', 'PCI DSS v4.0'],
    focusId: 'Fokus: API Banking & Core System',
    focusEn: 'Focus: Open Banking & Core APIs',
    roles: 'CISO · DevSecOps'
  },
  {
    id: 'manufacturing',
    titleId: 'Konglomerasi Manufaktur',
    titleEn: 'Manufacturing & Logistics',
    percentage: '85%',
    percentageNumber: 85,
    colorTheme: 'sky',
    chips: ['Supply Chain', 'ISO 27001', 'Portal Dealer ERP', 'Zero Downtime'],
    focusId: 'Fokus: Kontinuitas Jalur Logistik',
    focusEn: 'Focus: Supply Chain Continuity',
    roles: 'CIO · Head IT Infra'
  },
  {
    id: 'critical_bumn',
    titleId: 'BUMN & Sektor Publik Kritis',
    titleEn: 'Critical BUMN & Public Sector',
    percentage: '92%',
    percentageNumber: 92,
    colorTheme: 'emerald',
    chips: ['BSSN Standar', 'Infrastruktur Kritis', 'On-Premise Appliance', 'Kedaulatan Data'],
    focusId: 'Fokus: Kepatuhan Standar BSSN',
    focusEn: 'Focus: Critical Infrastructure',
    roles: 'CISO · Tim Tata Kelola'
  }
];

export const CHANNEL_MIX_CARDS: ChannelMixCard[] = [
  {
    id: 'outbound',
    title: 'Direct Outbound (50%)',
    percent: 50,
    duration: '30–60 Hari',
    colorClass: 'text-rose-600 dark:text-rose-400',
    barColor: 'bg-rose-600',
    dotColor: 'bg-rose-500',
    descId: 'Penetrasi 50 CISO via Free Health Check tanpa agen.',
    descEn: 'Target 50 CISOs via agentless Free Health Check.'
  },
  {
    id: 'partner_si',
    title: 'Mitra SI & Co-Sell (30%)',
    percent: 30,
    duration: '60 Hari',
    colorClass: 'text-sky-600 dark:text-sky-400',
    barColor: 'bg-sky-600',
    dotColor: 'bg-sky-500',
    descId: 'Co-selling Telkom, Multipolar, Mastersystem ke BUMN.',
    descEn: 'Co-sell Telkom & Mastersystem to BUMN accounts.'
  },
  {
    id: 'inbound',
    title: 'Inbound Thought (20%)',
    percent: 20,
    duration: '45 Hari',
    colorClass: 'text-emerald-600 dark:text-emerald-400',
    barColor: 'bg-emerald-600',
    dotColor: 'bg-emerald-500',
    descId: 'Webinar edukasi mandat OJK 29 & UU PDP sasar CISO.',
    descEn: 'Regulatory webinars on OJK 29 & PDP mandates.'
  }
];

export const SLIDE_04_COPY = {
  header: {
    titleId: 'Strategi Go To Market',
    titleEn: 'Go-To-Market Strategy',
    tab1Id: 'Target Kuadran & Sektor ICP',
    tab1En: 'Target Quadrant & ICP Sectors',
    tab2Id: 'Alur Akuisisi & Kanal Penjualan',
    tab2En: 'Acquisition Pipeline & Sales Channels'
  },
  quadrant: {
    title: 'KUADRAN TARGET ICP',
    axisX: 'Maturitas (X) →',
    axisY: '↑ Kompleksitas (Y)',
    top3TitleId: '3 Sektor Prioritas Tertinggi',
    top3TitleEn: 'Top 3 Priority Sectors',
    top3Badge: 'TIER-1 ICP',
    deploymentNoteId: '⚡ Fleksibilitas Deployment: Cloud SaaS (Aktif 5-Menit) & On-Premise Air-Gapped (Kedaulatan Data).',
    deploymentNoteEn: '⚡ Deployment Flexibility: Cloud SaaS (5-Min Live) & On-Premise Air-Gapped (Data Sovereignty).'
  },
  pipeline: {
    outboundTitleId: 'Mesin Outbound: Akuisisi 50 Akun CISO Prioritas',
    outboundTitleEn: 'Outbound Engine: Direct CISO Account Acquisition',
    outboundBadge: '50% Bauran Sales',
    outboundCycleId: 'Siklus Penjualan: 60 Hari',
    outboundCycleEn: 'Sales Cycle: 60 Days',
    outboundTargetId: 'Target: 50 Akun Bank, BUMN & Telko',
    outboundTargetEn: 'Target: 50 Tier-1 Accounts',
    inboundTitleId: 'Mesin Inbound: Thought Leadership & Regulasi',
    inboundTitleEn: 'Inbound Engine: Thought Leadership & Regulatory Education',
    inboundBadge: '20% Inbound + 30% Mitra SI',
    inboundCycleId: 'Siklus Penjualan: 45 Hari',
    inboundCycleEn: 'Sales Cycle: 45 Days',
    inboundTargetId: 'Mandat OJK & UU PDP',
    inboundTargetEn: 'OJK & PDP Mandates',
    target90DaysTitleId: 'TARGET OUTPUT 90 HARI',
    target90DaysTitleEn: '90-DAY OUTPUT TARGET',
    target90DaysGoal: '5–8 Deals Kontrak ARR',
    target90DaysSubId: 'Zero Blast Radius · Retensi NRR 130%',
    target90DaysSubEn: 'Zero Blast Radius · 130% NRR'
  },
  bottomNarrative: {
    id: '"Positioning Presisi: Cloud/SaaS untuk akselerasi instan tanpa server · On-Premise untuk kedaulatan data perbankan & BUMN · Zero false positive divalidasi pakar ITSEC."',
    en: '"Precise Positioning: Cloud/SaaS for zero-infra agility · On-Premise for banking data sovereignty · Zero false positives verified by ITSEC experts."'
  }
};
