import { CategoryFilterOption, RoadmapPhaseItem } from './types';

export const PARTNERSHIP_TAB_KEYS = ['pillars_margins', 'verified_matrix', 'execution_roadmap'] as const;

export const CATEGORY_FILTER_OPTIONS: CategoryFilterOption[] = [
  { id: 'ALL', labelId: 'Semua', labelEn: 'All' },
  { id: 'TIER1_SI', labelId: 'Tier-1 SI', labelEn: 'Tier-1 SI' },
  { id: 'TIER2_SI', labelId: 'Tier-2 SI & Spesialis', labelEn: 'Tier-2 SI & Specialized' },
  { id: 'DISTRIBUTOR', labelId: 'Distributor', labelEn: 'Distributor' },
  { id: 'CLOUD_ADVISORY', labelId: 'Cloud & Advisory', labelEn: 'Cloud & Advisory' }
];

export const ROADMAP_PHASES: RoadmapPhaseItem[] = [
  {
    phaseNumber: 1,
    badgeTitleId: 'FASE 1: SCREENING & MOU KERANGKA KERJA (HARI 1 – 30)',
    badgeTitleEn: 'PHASE 1: SCREENING & FRAMEWORK MOU (DAYS 1 – 30)',
    monthId: 'November',
    monthEn: 'November',
    descriptionId: 'Audit menyeluruh latar belakang mitra untuk memastikan 100% bebas afiliasi kompetitor, penandatanganan NDA timbal balik, dan penentuan 5 SI target utama (Multipolar, Mastersystem, RDS, Kirana Sakti, Sentral Mitra).',
    descriptionEn: 'Comprehensive background audit to ensure 100% non-competitor status, mutual NDA execution, and selecting 5 key target SIs (Multipolar, Mastersystem, RDS, Kirana Sakti, Sentral Mitra).',
    outputId: 'Output: 5 Draf Kerjasama Co-Sell & MOU Anti-Conflict Deal',
    outputEn: 'Output: 5 Co-Sell Partnership Drafts & Anti-Conflict Deal MOUs',
    colorScheme: {
      text: 'text-rose-400',
      badgeBg: 'bg-rose-950',
      badgeText: 'text-rose-300',
      badgeBorder: 'border-rose-800'
    }
  },
  {
    phaseNumber: 2,
    badgeTitleId: 'FASE 2: TECHNICAL ENABLEMENT & JOINT ACCOUNT MAPPING (HARI 31 – 60)',
    badgeTitleEn: 'PHASE 2: TECHNICAL ENABLEMENT & JOINT ACCOUNT MAPPING (DAYS 31 – 60)',
    monthId: 'Desember',
    monthEn: 'December',
    descriptionId: 'Program sertifikasi teknis mandatori bagi minimal 2 cyber pre-sales engineer di masing-masing mitra SI. Bersama-sama memetakan 20 akun target perbankan & BUMN bernilai tinggi untuk penawaran bersama.',
    descriptionEn: 'Mandatory technical certification program for min. 2 cyber pre-sales engineers per SI partner. Jointly mapping 20 high-value target banking & SOE accounts for co-selling.',
    outputId: 'Output: 10 Pre-Sales Engineers Tersertifikasi Bronyx AI + Account Mapping Matrix',
    outputEn: 'Output: 10 Certified Bronyx AI Pre-Sales Engineers + Account Mapping Matrix',
    colorScheme: {
      text: 'text-amber-400',
      badgeBg: 'bg-amber-950',
      badgeText: 'text-amber-300',
      badgeBorder: 'border-amber-800'
    }
  },
  {
    phaseNumber: 3,
    badgeTitleId: 'FASE 3: EKSEKUSI POC GABUNGAN & CLOSING DEAL KANAL (HARI 61 – 90)',
    badgeTitleEn: 'PHASE 3: JOINT POC EXECUTION & CHANNEL DEAL CLOSING (DAYS 61 – 90)',
    monthId: 'Januari',
    monthEn: 'January',
    descriptionId: 'Peluncuran 3 PoC enterprise gabungan memanfaatkan akses C-Level mitra SI. Mengamankan kontrak lisensi tahunan bernilai minimal Rp 1,0 Miliar – Rp 2,0 Miliar ARR melalui payung pengadaan SI.',
    descriptionEn: 'Launch of 3 joint enterprise PoCs leveraging SI partner C-Level access. Securing annual software license agreements of min. IDR 1.0B – IDR 2.0B ARR via SI procurement umbrella.',
    outputId: 'Output: Rp 5,0 M – Rp 6,0 M Rolling Pipeline Terkualifikasi dari Kanal Mitra',
    outputEn: 'Output: IDR 5.0B – IDR 6.0B Qualified Rolling Pipeline from Channel Partners',
    colorScheme: {
      text: 'text-emerald-400',
      badgeBg: 'bg-emerald-950',
      badgeText: 'text-emerald-300',
      badgeBorder: 'border-emerald-800'
    }
  }
];

export const SLIDE_08_COPY = {
  header: {
    title: {
      id: 'Kemitraan Saluran & Co-Selling',
      en: 'Channel Partnerships & Co-Selling'
    },
    badge: {
      id: '100% NON-KOMPETITOR',
      en: '100% NON-COMPETITOR AUDITED'
    },
    subtitle: {
      id: 'Multiplikasi jangkauan enterprise melalui System Integrator kredibel, Distributor Nasional & Cloud Marketplace.',
      en: 'Enterprise market multiplication via credible System Integrators, National Distributors & Cloud Marketplaces.'
    },
    tabs: [
      { id: 'Pilar & Margin', en: 'Pillars & Margins' },
      { id: 'Matriks SI Terverifikasi', en: 'Verified SI Matrix' },
      { id: 'Rekomendasi 90 Hari', en: '90-Day Roadmap' }
    ]
  },
  footerQuote: {
    id: '"Saya memprioritaskan SI Tier-1 independen seperti Multipolar, Mastersystem, Reycom Data Solusi, dan Kirana Sakti yang memegang kepercayaan dewan direksi di perbankan; margin saluran 25–35% dilindungi oleh komitmen ARR tahunan tanpa melibatkan kompetitor."',
    en: '"I prioritize independent Tier-1 SIs such as Multipolar, Mastersystem, Reycom Data Solusi, and Kirana Sakti holding board-level trust in banking; 25–35% channel margins are protected by annual ARR commitments with zero competitor involvement."'
  }
};
