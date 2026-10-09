import {
  WeekTrajectoryPoint,
  HorizonQuarterIndicator,
  TrajectoryMetricStripItem,
  FunnelStageItem,
  SectorBreakdownItem,
  PipelineRiskItem,
} from './types';

export const SLIDE_10_COPY = {
  headerTitle: {
    id: 'Pusat Kendali KPI',
    en: 'KPI Control Tower',
  },
  headerBadgePipeline: 'W12 Pipeline: Rp 20,0 M',
  headerBadgeWon: '90D Won: Rp 3,0 M (3 Deals)',
  trajectoryHeader: {
    id: 'KURVA PERTUMBUHAN PIPELINE 12 MINGGU',
    en: '12-WEEK PIPELINE TRAJECTORY',
  },
  targetBuffer: 'TARGET BUFFER: RP 20,0 M',
  funnelHeader: {
    id: 'FUNNEL KONVERSI 4 TAHAP',
    en: '4-STAGE SALES CONVERSION FUNNEL',
  },
  funnelBadge: '37%–50% PROPOSAL-TO-CLOSE',
  funnelFooterNote: {
    id: 'Konversi 90D (Q4): 3 Deal Won (Rp 3,0 M) — B2 (Nov · 1M) & B3 (Des · 2M)',
    en: '90D Conversion (Q4): 3 Deals Won (IDR 3.0B) — M2 (Nov · 1B) & M3 (Dec · 2B)',
  },
  funnelFooterBadge: 'MEASURED VELOCITY',
  sectorHeader: {
    id: 'DISTRIBUSI SEKTOR PIPELINE',
    en: 'SECTOR PIPELINE BREAKDOWN',
  },
  sectorTotalBadge: 'TOTAL RP 20,0 M',
  riskHeader: {
    id: 'MANAJEMEN & MITIGASI 3 RISIKO PIPELINE',
    en: 'TOP 3 PIPELINE RISKS & MITIGATION',
  },
  riskBadge: 'PROAKTIF SALES LEAD',
  riskFooterPrinciple: 'Prinsip: Identifikasi risiko sebelum tahap komersial',
  riskFooterBadge: 'ZERO SURPRISE',
  quote: {
    id: '"Irama mingguan yang ketat mencegah kejutan akhir kuartal; setiap rupiah di pipeline diverifikasi melalui kriteria keberhasilan teknis PoC yang disepakati."',
    en: '"Rigorous weekly cadence prevents quarter-end surprises; every pipeline dollar is verified through mutually agreed PoC technical success criteria."',
  },
};

export const SVG_CHART_CONFIG = {
  svgWidth: 460,
  svgHeight: 110,
  paddingX: 25,
  paddingY: 15,
  maxVal: 22,
};

export const TRAJECTORY_WEEK_POINTS: WeekTrajectoryPoint[] = [
  { w: 1, val: 4.0 },
  { w: 2, val: 6.0 },
  { w: 3, val: 7.5 },
  { w: 4, val: 9.0 },
  { w: 5, val: 10.5 },
  { w: 6, val: 12.0 },
  { w: 7, val: 13.5 },
  { w: 8, val: 15.0 },
  { w: 9, val: 16.5 },
  { w: 10, val: 18.0 },
  { w: 11, val: 19.2 },
  { w: 12, val: 20.0 },
];

export const TRAJECTORY_LABEL_INDICES = [0, 3, 7, 11];

export const HORIZON_QUARTER_INDICATORS: HorizonQuarterIndicator[] = [
  {
    weeks: 'W01–W04',
    labelId: 'Bulan 1 (Okt · Fondasi & PoC)',
    labelEn: 'Month 1 (Oct · Foundation)',
    colorClass: 'text-rose-400',
  },
  {
    weeks: 'W05–W08',
    labelId: 'Bulan 2 (Nov · First Win)',
    labelEn: 'Month 2 (Nov · First Win)',
    colorClass: 'text-amber-400',
  },
  {
    weeks: 'W09–W12',
    labelId: 'Bulan 3 (Des · Q4 Closing)',
    labelEn: 'Month 3 (Dec · Q4 Close)',
    colorClass: 'text-emerald-400',
  },
];

export const TRAJECTORY_METRIC_STRIP: TrajectoryMetricStripItem[] = [
  {
    label: 'Revenue Won (90D)',
    value: 'Rp 3,0 M',
    valueColorClass: 'text-emerald-400',
  },
  {
    label: 'PoC Tested',
    value: '14 Uji',
    valueColorClass: 'text-white',
  },
  {
    label: 'Pipeline Buffer',
    value: 'Rp 20,0 M',
    valueColorClass: 'text-rose-400',
  },
];

export const SALES_FUNNEL_STAGES: FunnelStageItem[] = [
  {
    id: '01',
    title: 'Target Leads Terkualifikasi',
    counterValue: '50 Akun',
    barWidth: '100%',
    barColorClass: 'bg-slate-500',
    badgeBgClass: 'bg-rose-950/80',
    badgeBorderClass: 'border-rose-800/80',
    badgeTextClass: 'text-rose-300',
    valueTextClass: 'text-white',
  },
  {
    id: '02',
    title: '5-Day Guided PoC',
    counterValue: '14 Sesi',
    suffix: ' (28%)',
    barWidth: '28%',
    barColorClass: 'bg-amber-500',
    badgeBgClass: 'bg-amber-950/80',
    badgeBorderClass: 'border-amber-800/80',
    badgeTextClass: 'text-amber-300',
    valueTextClass: 'text-amber-300',
  },
  {
    id: '03',
    title: 'Executive Proposal ARR',
    counterValue: '6–8 Proposal',
    suffix: ' (43%–57%)',
    barWidth: '20%',
    barColorClass: 'bg-rose-500',
    badgeBgClass: 'bg-rose-950/80',
    badgeBorderClass: 'border-rose-800/80',
    badgeTextClass: 'text-rose-300',
    valueTextClass: 'text-rose-300',
  },
  {
    id: '04',
    title: 'Closed Won ARR (90 Hari)',
    counterValue: '3 Won (Rp 3,0 M)',
    barWidth: '20%',
    barColorClass: 'bg-emerald-400',
    badgeBgClass: 'bg-emerald-950/80',
    badgeBorderClass: 'border-emerald-800/80',
    badgeTextClass: 'text-emerald-300',
    valueTextClass: 'text-emerald-400',
    isBoldTitle: true,
  },
];

export const SECTOR_BREAKDOWN_ITEMS: SectorBreakdownItem[] = [
  {
    title: 'Perbankan BUKU III & IV',
    percentageText: '40%',
    valueText: 'Rp 8,0 M',
    barWidth: '40%',
    barColorClass: 'bg-rose-600',
    textColorClass: 'text-rose-400',
  },
  {
    title: 'BUMN Strategis (Telko & Energi)',
    percentageText: '25%',
    valueText: 'Rp 5,0 M',
    barWidth: '25%',
    barColorClass: 'bg-amber-500',
    textColorClass: 'text-amber-400',
  },
  {
    title: 'Manufaktur & Rantai Pasok',
    percentageText: '20%',
    valueText: 'Rp 4,0 M',
    barWidth: '20%',
    barColorClass: 'bg-sky-500',
    textColorClass: 'text-sky-400',
  },
  {
    title: 'Fintech, E-Commerce & Lainnya',
    percentageText: '15%',
    valueText: 'Rp 3,0 M',
    barWidth: '15%',
    barColorClass: 'bg-emerald-500',
    textColorClass: 'text-emerald-400',
  },
];

export const PIPELINE_RISK_ITEMS: PipelineRiskItem[] = [
  {
    id: 1,
    title: '1. Siklus Pengadaan Lambat (Birokrasi Tender)',
    badge: 'BUMN / BANK',
    mitigation: 'Pemanfaatan vendor code aktif PT ITSEC Asia Tbk (IDX: CYBR); bypass tender onboarding 90 hari.',
  },
  {
    id: 2,
    title: '2. Kedaulatan Data & Regulasi On-Premise (PP 71)',
    badge: 'FINANCE / GOV',
    mitigation: 'Opsi On-Premise Air-Gapped Appliance atau Sovereign Cloud VPC berlokasi di wilayah Indonesia.',
  },
  {
    id: 3,
    title: '3. Kekhawatiran Disrupsi Sistem / Downtime',
    badge: 'SECOPS / SOC',
    mitigation: 'Garansi kontraktual Zero Blast Radius & simulasi non-destruktif; zero downtime transaksi.',
  },
];
