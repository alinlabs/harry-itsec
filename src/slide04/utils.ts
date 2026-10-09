import { SegmentPlot, PipelineStep } from './types';

/**
 * Calculates SVG canvas coordinate (px, py) for a quadrant plot dot.
 * Canvas viewBox is 720 x 300:
 * X axis span: 60 to 670 (width 610) mapping xMaturity 50..100
 * Y axis span: 265 to 30 (height 235) mapping yComplexity 60..100
 */
export const calculatePlotCoordinates = (
  xMaturity: number,
  yComplexity: number
): { px: number; py: number } => {
  const px = 60 + ((xMaturity - 50) / 50) * 610;
  const py = 265 - ((yComplexity - 60) / 40) * 235;
  return { px, py };
};

/**
 * Resolves plot display name tailored for Indonesian / English locale
 */
export const getPlotDisplayName = (plot: SegmentPlot, isId: boolean): string => {
  switch (plot.id) {
    case 'tier1_banks':
      return isId ? 'Perbankan Tier-1' : 'Tier-1 Banks';
    case 'fintech_giants':
      return isId ? 'Fintech & Bank Digital' : 'Fintech & Digital';
    case 'traditional_mfg':
      return isId ? 'Konglomerasi Manufaktur' : 'Manufacturing';
    case 'bumn_infrastructure':
      return isId ? 'BUMN Kritis' : 'Critical BUMN';
    case 'telco_operators':
      return isId ? 'Telekomunikasi' : 'Telecom Giants';
    case 'ecommerce_tech':
      return isId ? 'Tech & E-Commerce' : 'Tech & E-Commerce';
    case 'healthcare_pharma':
      return isId ? 'Kesehatan & RS' : 'Healthcare & Hospitals';
    default:
      return plot.name.split(' (')[0];
  }
};

/**
 * Resolves color code based on tier category
 */
export const getTierColor = (tier: string): string => {
  if (tier === 'Tier 1 Prime Target') return '#e11d48';
  if (tier === 'Tier 2 High Growth') return '#0ea5e9';
  return '#a1a1aa';
};

/**
 * Fine-tunes label Y offset so texts don't collide on canvas
 */
export const getLabelYOffset = (plotId: string, basePy: number): number => {
  if (plotId === 'bumn_infrastructure') return basePy - 4;
  if (plotId === 'ecommerce_tech') return basePy + 10;
  if (plotId === 'fintech_giants') return basePy - 4;
  if (plotId === 'telco_operators') return basePy + 8;
  return basePy + 3.5;
};

/**
 * Factory for localized Outbound Steps
 */
export const getOutboundSteps = (isId: boolean): PipelineStep[] => [
  { 
    num: 1, 
    title: isId ? 'Identifikasi 50 CISO' : 'Identify 50 CISOs', 
    focus: isId ? 'Target 50 Bank, BUMN, Telko prioritas' : 'Target 50 Banking & BUMN accounts', 
    tag: 'Hari 1–10', 
    metric: isId ? '50 Akun' : '50 Accounts' 
  },
  { 
    num: 2, 
    title: isId ? 'Free Health Check' : 'Free Health Check', 
    focus: isId ? 'Audit pasif tanpa agen buktikan celah' : 'Agentless audit proves real exploit', 
    tag: 'Hari 11–20', 
    metric: isId ? 'Bukti Exploit' : 'Exploit Proof' 
  },
  { 
    num: 3, 
    title: isId ? 'PoC 5 Hari Aman' : 'Safe 5-Day PoC', 
    focus: isId ? 'Validasi jalur celah: Zero Blast Radius' : 'Zero Blast Radius sandbox validation', 
    tag: 'Hari 21–35', 
    metric: isId ? 'Zero Blast' : 'Zero Blast' 
  },
  { 
    num: 4, 
    title: isId ? 'Executive Briefing' : 'Executive Briefing', 
    focus: isId ? 'Presentasi laporan audit ke C-Level' : 'Audit presentation to Board & CISO', 
    tag: 'Hari 36–50', 
    metric: isId ? 'C-Level Buy-In' : 'C-Level Buy-In' 
  },
  { 
    num: 5, 
    title: isId ? 'Deal Kontrak ARR' : 'ARR Deal Closing', 
    focus: isId ? 'Konversi ke lisensi tahunan berulang' : 'Conversion to annual recurring ARR', 
    tag: 'Hari 51–60', 
    metric: isId ? 'Kontrak ARR' : 'ARR Deal' 
  }
];

/**
 * Factory for localized Inbound Steps
 */
export const getInboundSteps = (isId: boolean): PipelineStep[] => [
  { 
    num: 1, 
    title: isId ? 'Webinar Regulasi' : 'Regulatory Webinar', 
    focus: isId ? 'Edukasi kepatuhan OJK 29 & UU PDP 27' : 'Compliance education on OJK & PDP', 
    tag: 'Mingguan', 
    metric: isId ? '200+ Peserta' : '200+ Leads' 
  },
  { 
    num: 2, 
    title: isId ? 'Riset & Whitepaper' : 'Whitepaper & Report', 
    focus: isId ? 'Publikasi tolok ukur kerentanan nasional' : 'National cyber benchmark report', 
    tag: 'Publik', 
    metric: isId ? 'Riset ITSEC' : 'ITSEC Intel' 
  },
  { 
    num: 3, 
    title: isId ? 'Inbound Consultation' : 'Inbound Consultation', 
    focus: isId ? 'CISO request evaluasi audit gap siber' : 'CISO requests for audit gap evaluation', 
    tag: 'Kualifikasi', 
    metric: isId ? 'High Intent' : 'High Intent' 
  },
  { 
    num: 4, 
    title: isId ? 'Fast-Track PoC' : 'Fast-Track PoC', 
    focus: isId ? 'Uji coba mandiri dalam tempo 48 jam' : 'Self-service sandbox testing in 48h', 
    tag: '48 Jam', 
    metric: isId ? 'Aktivasi Instan' : 'Instant PoC' 
  },
  { 
    num: 5, 
    title: isId ? 'Ekspansi Holding & ARR' : 'Enterprise Expansion', 
    focus: isId ? 'Ekspansi ke seluruh anak usaha grup' : 'Full subsidiary group expansion', 
    tag: 'Tahunan', 
    metric: isId ? 'Retensi 130%' : '130% NRR' 
  }
];
