import { FactMetric, StrategicPillar } from './types';

export const SLIDE_01_COPY = {
  hero: {
    titlePrefix: 'Becoming Indonesia’s',
    titleHighlight: 'Cybersecurity Market Leader',
    lottieSrc: '/IndonesiaConnect.lottie?v=red',
    descId:
      'Cetak biru strategis penetrasi pasar enterprise untuk mengukuhkan posisi kepemimpinan keamanan siber di Indonesia. Menyatukan teknologi deteksi otonom kebocoran data dan audit eksposur API dengan infrastruktur berstandar nasional guna memproteksi aset digital enterprise dan rantai pasok strategis secara komprehensif.',
    descEn:
      'A strategic enterprise blueprint engineered to establish market leadership in Indonesia’s cybersecurity landscape. Uniting autonomous data leakage discovery and API exposure auditing with trusted enterprise infrastructure to comprehensively secure mission-critical digital assets.',
  },
  quotaCard: {
    labelId: 'Target Kuota Penjualan',
    labelEn: 'Sales Quota Target',
    valueId: 'Rp 3 M',
    valueEn: 'IDR 3 B',
    unitId: '& Growth',
    unitEn: '& Growth',
    timelineId: 'Target Q4 & Akselerasi Growth',
    timelineEn: 'Q4 Target & Growth Trajectory',
    cycleId: 'Skema Kuartal Q4 → Q4',
    cycleEn: 'Quarter Cycle Q4 → Q4',
  },
  action: {
    enterHintId: 'Tekan Enter ↵ untuk mulai',
    enterHintEn: 'Press Enter ↵ to begin',
    buttonId: 'Mulai',
    buttonEn: 'Start',
  },
};

export const FACT_METRICS: FactMetric[] = [
  {
    id: 'cybr_revenue',
    labelId: 'Pendapatan Terbuka (CYBR)',
    labelEn: 'ITSEC Asia Revenue',
    valueId: 'Rp 325 M',
    valueEn: 'IDR 325 B',
    subtextId: '+55.5% YoY Pertumbuhan',
    subtextEn: '+55.5% YoY Pertumbuhan',
    valueColorClass: 'text-white',
  },
  {
    id: 'enterprise_footprint',
    labelId: 'Klien Enterprise Eksisting',
    labelEn: 'Enterprise Footprint',
    valueId: '300+ Akun',
    valueEn: '300+ Accounts',
    subtextId: 'Akses C-Level Langsung',
    subtextEn: 'Immediate C-Level Access',
    valueColorClass: 'text-white',
  },
  {
    id: 'poc_speed',
    labelId: 'Kecepatan Validasi PoC',
    labelEn: 'PoC Speed to Value',
    valueId: '5 Hari Kerja',
    valueEn: '5 Business Days',
    subtextId: 'Zero Blast Radius',
    subtextEn: 'Zero Blast Radius',
    valueColorClass: 'text-amber-400',
  },
  {
    id: 'nrr_retention',
    labelId: 'Tingkat Retensi NRR',
    labelEn: 'Target NRR Retention',
    valueId: '130%',
    valueEn: '130%',
    subtextId: 'DevSecOps & QBR Flywheel',
    subtextEn: 'DevSecOps & QBR Flywheel',
    valueColorClass: 'text-emerald-400',
  },
];

export const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    id: 'tech_diff',
    icon: 'Shield',
    labelId: 'Diferensiasi Teknologi',
    labelEn: 'Core Differentiation',
    valueId: 'Deteksi Otonom Celah Kebocoran Data',
    valueEn: 'Deteksi Otonom Celah Kebocoran Data',
  },
  {
    id: 'target_sector',
    icon: 'Target',
    labelId: 'Fokus Sektor Utama',
    labelEn: 'Target Sectors',
    valueId: 'Perbankan, BUMN & Infrastruktur Kritis',
    valueEn: 'Banking, SOEs & Critical Infrastructure',
  },
  {
    id: 'regulatory',
    icon: 'TrendingUp',
    labelId: 'Kepatuhan Regulasi',
    labelEn: 'Regulatory Mandate',
    valueId: 'UU PDP, POJK 29/2022 & PP 71',
    valueEn: 'UU PDP, POJK 29/2022 & PP 71',
  },
];
