export interface KPIMetric {
  id: string;
  category: 'LEADING' | 'LAGGING' | 'EFFICIENCY';
  name: string;
  proposedTarget: string;
  operatingCadence: string;
  strategicSignificance: string;
  salesLeadActionIfBlocked: string;
}

export interface PrimaryKPISummary {
  id: string;
  label: string;
  value: string;
  target: string;
  unit?: string;
  category: 'VELOCITY' | 'CONVERSION' | 'FINANCIAL' | 'COVERAGE';
  trendDirection: 'up' | 'neutral';
  benchmarkNote: string;
}

export interface WeeklyTimeSeriesPoint {
  week: number;
  weekLabel: string;
  phase: 'Phase 1: Learn' | 'Phase 2: Build' | 'Phase 3: Prove & Scale';
  pipelineValueB: number; // IDR in Billions
  qualifiedOpps: number;
  activePocs: number;
  closedSeedArrM: number; // IDR in Millions
  sprintMilestone: string;
  salesLeadKeyFocus: string;
}

export interface PipelineRiskItem {
  id: string;
  accountGroup: string;
  riskLevel: 'HIGH_RISK' | 'MEDIUM_RISK' | 'HEALTHY';
  pipelineValueIdr: string;
  percentageOfPipeline: number;
  dealCount: number;
  coreVulnerability: string;
  salesLeadMitigation: string;
}

export interface SectorPipelineDistribution {
  sector: string;
  valueIdrB: number;
  dealCount: number;
  percentage: number;
}

export interface FunnelStep {
  stage: string;
  count: number;
  valueIdrB: number;
  conversionRate: string;
}

export interface MonthlyQuotaPacing {
  month: 1 | 2 | 3;
  monthLabelId: string;
  monthLabelEn: string;
  targetNewArrIdrM: number; // Target ARR baru bulan berjalan dalam Juta IDR
  achievedArrIdrM: number;
  cumulativeTargetArrIdrM: number;
  targetPipelineIdrB: number;
  dealsTarget: number;
  dealsAchieved: number;
  keyMonthlyMilestoneId: string;
  keyMonthlyMilestoneEn: string;
  gateCriteriaId: string;
  gateCriteriaEn: string;
}

export const MONTHLY_QUOTA_PACING: MonthlyQuotaPacing[] = [
  {
    month: 1,
    monthLabelId: 'Bulan 1 / Okt (W01–W04)',
    monthLabelEn: 'Month 1 / Oct (W01–W04)',
    targetNewArrIdrM: 0,
    achievedArrIdrM: 0,
    cumulativeTargetArrIdrM: 0,
    targetPipelineIdrB: 9.0,
    dealsTarget: 0,
    dealsAchieved: 0,
    keyMonthlyMilestoneId: 'Fondasi & Ramp-up Bulan 1 (Oktober): Pemetaan 50 akun prioritas Jabodetabek, penambangan 300+ klien warm ITSEC Asia, dan peluncuran 6 PoC 5-hari (tidak memaksakan closing dini di awal).',
    keyMonthlyMilestoneEn: 'Foundation & Ramp-up Month 1 (October): Mapping 50 priority Jabodetabek accounts, mining 300+ warm ITSEC accounts, and launching 6 5-day PoCs (deliberately avoiding rushed premature closing).',
    gateCriteriaId: 'Gerbang Bulan 1 (Akhir Oktober): 6 PoC 5-hari aktif terpasang + pipeline terkualifikasi Rp 9,0 Miliar terkunci di CRM.',
    gateCriteriaEn: 'Month 1 Gate (End of Oct): 6 active 5-day PoCs deployed + IDR 9.0B qualified pipeline locked.'
  },
  {
    month: 2,
    monthLabelId: 'Bulan 2 / Nov (W05–W08)',
    monthLabelEn: 'Month 2 / Nov (W05–W08)',
    targetNewArrIdrM: 1000,
    achievedArrIdrM: 1000,
    cumulativeTargetArrIdrM: 1000,
    targetPipelineIdrB: 15.0,
    dealsTarget: 1,
    dealsAchieved: 1,
    keyMonthlyMilestoneId: 'First Win & Achieve Perdana di Bulan 2 (November): 1 Deal Enterprise Won (@ Rp 1,0 Miliar / 500 device) via konversi temuan celah data PoC. Membuktikan konversi komersial!',
    keyMonthlyMilestoneEn: 'First Win & Initial Achievement in Month 2 (November): 1 Enterprise Deal Won (@ IDR 1.0B / 500 devices) converting PoC findings. Commercial conversion proven!',
    gateCriteriaId: 'Gerbang Bulan 2 (Akhir November): 1 kontrak enterprise terkunci (Rp 1,0 Miliar ARR) + 500 device terproteksi + pipeline berkembang ke Rp 15,0 Miliar.',
    gateCriteriaEn: 'Month 2 Gate (End of Nov): 1 enterprise contract signed (IDR 1.0B ARR) + 500 devices protected + IDR 15.0B pipeline.'
  },
  {
    month: 3,
    monthLabelId: 'Bulan 3 / Des (W09–W12)',
    monthLabelEn: 'Month 3 / Dec (W09–W12)',
    targetNewArrIdrM: 2000,
    achievedArrIdrM: 2000,
    cumulativeTargetArrIdrM: 3000,
    targetPipelineIdrB: 20.0,
    dealsTarget: 2,
    dealsAchieved: 2,
    keyMonthlyMilestoneId: 'Akselerasi Growth Rp 2,0 M/Bulan & Konsolidasi Q4: 2 Deal Baru Dimenangkan (@ Rp 1,0 Miliar = Rp 2,0 Miliar via Year-End Budget Flush). TOTAL PENDAPATAN 90 HARI PERTAMA (OKT–DES) MENCAPAI RP 3,0 MILIAR KUMULATIF (3 DEALS WON / 1.500 NODE TERLINDUNGI)!',
    keyMonthlyMilestoneEn: 'Growth Acceleration at IDR 2.0B/mo & Q4 Consolidation: 2 New Deals Won (@ IDR 1.0B = IDR 2.0B via Year-End Budget Flush). INITIAL 90-DAY TOTAL (OCT–DEC) HITS IDR 3.0B CUMULATIVE (3 DEALS WON / 1,500 NODES SECURED)!',
    gateCriteriaId: 'Gerbang Bulan 3 (Akhir Desember / Tutup Tahun Q4): Kumulatif 3 deal terkunci (1.500 device) = Rp 3,0 Miliar ARR Kumulatif (B2: 1M + B3: 2M) + pipeline buffer Rp 20,0 Miliar.',
    gateCriteriaEn: 'Month 3 Gate (End of Dec / Q4 Year-End): Cumulative 3 closed deals (1,500 devices) = IDR 3.0B ARR (M2: 1B + M3: 2B) + IDR 20.0B pipeline buffer.'
  }
];

// 9 Primary Executive KPIs
export const PRIMARY_CONTROL_KPIS: PrimaryKPISummary[] = [
  {
    id: 'monthly_quota_target',
    label: 'Monthly Target (Harry Gultom)',
    value: 'Rp 1.0M – 2.0M / Bulan',
    target: '90D: Rp 3.0M (3 Won)',
    category: 'FINANCIAL',
    trendDirection: 'up',
    benchmarkNote: 'Target Harry Gultom: B1 (Okt) Rp 0 (Data Gathering) → B2 (Nov) Rp 1,0M (First Win) → B3 (Des) Rp 2,0M (Growth) = Total 90 Hari (Q4) Rp 3,0 Miliar (3 Deals Won)'
  },
  {
    id: 'flagship_deal_price',
    label: 'Flagship Price / Sekali Jasa',
    value: 'Rp 1.0B / Deal',
    target: 'Maks. 500 Device',
    category: 'FINANCIAL',
    trendDirection: 'up',
    benchmarkNote: 'Hitungan sekali jasa: Rp 1 Miliar per deal untuk deteksi celah kebocoran data & lisensi 500 device'
  },
  {
    id: 'pipeline_value',
    label: 'Total Pipeline Value',
    value: 'IDR 20.0B+',
    target: 'IDR 20.0B Target',
    category: 'FINANCIAL',
    trendDirection: 'up',
    benchmarkNote: 'Pipa bergulir bertumbuh terukur: B1 (Okt) Rp 9M → B2 (Nov) Rp 15M → B3 (Des) Rp 20M (4,0x cakupan buffer)'
  },
  {
    id: 'pipeline_coverage',
    label: 'Pipeline Coverage Ratio',
    value: '4.0x',
    target: '3.5x – 4.5x',
    category: 'COVERAGE',
    trendDirection: 'up',
    benchmarkNote: 'Buffer pengaman terhadap jeda persetujuan komite pengadaan perbankan & BUMN'
  },
  {
    id: 'conversion_rate',
    label: 'PoC-to-Proposal Rate',
    value: '64.3%',
    target: '60.0% Target',
    category: 'CONVERSION',
    trendDirection: 'up',
    benchmarkNote: '9 dari 14 PoC 5-hari deteksi celah kebocoran data maju ke negosiasi proposal formal'
  },
  {
    id: 'win_rate',
    label: 'Mature Closing Win Rate',
    value: '33.3%',
    target: '30% – 35%',
    category: 'CONVERSION',
    trendDirection: 'up',
    benchmarkNote: '1 dari 3 proposal matang dimenangkan per bulan = konsisten mencetak revenue bulanan'
  },
  {
    id: 'poc_velocity',
    label: 'Scoped 5-Day PoCs',
    value: '8–14 / Mo',
    target: '8–14 PoCs',
    category: 'VELOCITY',
    trendDirection: 'up',
    benchmarkNote: 'Uji aman celah kebocoran data 5-hari zero-blast-radius di staging perbankan'
  },
  {
    id: 'account_coverage',
    label: 'Jabodetabek Target Accounts',
    value: '50 Accounts',
    target: '50 Accounts',
    category: 'COVERAGE',
    trendDirection: 'up',
    benchmarkNote: 'Fokus intensif 50 akun perbankan, BUMN, & manufaktur di wilayah Jabodetabek'
  },
  {
    id: 'annual_run_rate',
    label: '90-Day Initial / 1-Year ARR Basis',
    value: 'Rp 3.0B (90D) / 25B ARR',
    target: 'Rp 3.0B (90D) · Rp 25B (Y1)',
    category: 'FINANCIAL',
    trendDirection: 'up',
    benchmarkNote: 'Total kumulatif 90-hari pertama Rp 3,0 Miliar (3 Deals Won); eskalasi kuartal memproyeksikan ~Rp 25 Miliar kumulatif di tahun pertama'
  }
];

// 12-Week Time Series: Trend in Pipeline Growth, PoCs, and Milestones
// Catatan Fundamental: Dimulai Oktober (Q4 Penuh); Bulan 1 (Okt) fokus pipeline & PoC, Bulan 2 (Nov) First Win, Bulan 3 (Des) akselerasi Q4!
export const TWELVE_WEEK_TIME_SERIES: WeeklyTimeSeriesPoint[] = [
  {
    week: 1,
    weekLabel: 'W01',
    phase: 'Phase 1: Learn',
    pipelineValueB: 4.0,
    qualifiedOpps: 8,
    activePocs: 1,
    closedSeedArrM: 0,
    sprintMilestone: 'Penambangan 300+ Klien ITSEC',
    salesLeadKeyFocus: 'Audit 300+ klien aktif ITSEC; petakan 40 akun perbankan & fintech dengan trust tinggi & vendor code aktif'
  },
  {
    week: 2,
    weekLabel: 'W02',
    phase: 'Phase 1: Learn',
    pipelineValueB: 6.0,
    qualifiedOpps: 14,
    activePocs: 3,
    closedSeedArrM: 0,
    sprintMilestone: 'Pemetaan 50 Akun Jabodetabek',
    salesLeadKeyFocus: 'Prioritisasi 50 akun ICP Jabodetabek berdasarkan regulasi OJK SEOJK 29 dan risiko kebocoran data'
  },
  {
    week: 3,
    weekLabel: 'W03',
    phase: 'Phase 1: Learn',
    pipelineValueB: 7.5,
    qualifiedOpps: 20,
    activePocs: 5,
    closedSeedArrM: 0,
    sprintMilestone: 'Peluncuran PoC 5-Hari Awal',
    salesLeadKeyFocus: 'Inisiasi 5 PoC non-destruktif bergaransi Zero Blast Radius pada staging bank & fintech'
  },
  {
    week: 4,
    weekLabel: 'W04',
    phase: 'Phase 1: Learn',
    pipelineValueB: 9.0,
    qualifiedOpps: 26,
    activePocs: 6,
    closedSeedArrM: 0,
    sprintMilestone: 'GERBANG B1 (OKT): PIPELINE RP 9,0B TERKUNCI',
    salesLeadKeyFocus: 'Bulan 1 (Oktober) tuntas tanpa pemaksaan closing dini: pipeline Rp 9,0B siap dan 6 PoC aktif memasuki tahap evaluasi akhir'
  },
  {
    week: 5,
    weekLabel: 'W05',
    phase: 'Phase 2: Build',
    pipelineValueB: 10.5,
    qualifiedOpps: 32,
    activePocs: 7,
    closedSeedArrM: 0,
    sprintMilestone: 'C-Level Risk Briefing Temuan',
    salesLeadKeyFocus: 'Presentasi temuan celah data nyata kepada CISO perbankan digital prioritas'
  },
  {
    week: 6,
    weekLabel: 'W06',
    phase: 'Phase 2: Build',
    pipelineValueB: 12.0,
    qualifiedOpps: 36,
    activePocs: 8,
    closedSeedArrM: 0,
    sprintMilestone: 'Pengajuan Proposal Rp 1,0 Miliar',
    salesLeadKeyFocus: 'Penyerahan proposal komersial flagship 500 device (@ Rp 1,0 Miliar) dan kaji klausul SLA'
  },
  {
    week: 7,
    weekLabel: 'W07',
    phase: 'Phase 2: Build',
    pipelineValueB: 13.5,
    qualifiedOpps: 42,
    activePocs: 9,
    closedSeedArrM: 0,
    sprintMilestone: 'Persetujuan Komite Pengadaan',
    salesLeadKeyFocus: 'Aktivasi jalur vendor code ITSEC Asia eksisting untuk mempercepat penerbitan PO'
  },
  {
    week: 8,
    weekLabel: 'W08',
    phase: 'Phase 2: Build',
    pipelineValueB: 15.0,
    qualifiedOpps: 48,
    activePocs: 10,
    closedSeedArrM: 1000,
    sprintMilestone: 'GERBANG B2 (NOV): FIRST WIN RP 1,0M TERKUNCI',
    salesLeadKeyFocus: 'Achieve perdana di Bulan 2 (November): Kontrak perdana 1 deal @ Rp 1,0 Miliar ditandatangani; membuktikan konversi komersial!'
  },
  {
    week: 9,
    weekLabel: 'W09',
    phase: 'Phase 3: Prove & Scale',
    pipelineValueB: 16.5,
    qualifiedOpps: 50,
    activePocs: 11,
    closedSeedArrM: 1000,
    sprintMilestone: 'Kick-off Bulan 3 (Des): Aktivasi Co-Sell SI',
    salesLeadKeyFocus: 'Koordinasi bersama Multipolar & Reycom Data Solusi serta eksekusi serapan anggaran Year-End Budget Flush'
  },
  {
    week: 10,
    weekLabel: 'W10',
    phase: 'Phase 3: Prove & Scale',
    pipelineValueB: 18.0,
    qualifiedOpps: 52,
    activePocs: 12,
    closedSeedArrM: 1000,
    sprintMilestone: 'Negosiasi Deal Enterprise ke-2',
    salesLeadKeyFocus: 'Finalisasi klausul kontrak deal ke-2 pada holding perbankan nasional'
  },
  {
    week: 11,
    weekLabel: 'W11',
    phase: 'Phase 3: Prove & Scale',
    pipelineValueB: 19.2,
    qualifiedOpps: 54,
    activePocs: 13,
    closedSeedArrM: 2000,
    sprintMilestone: 'Deal ke-2 Ditutup (+Rp 1,0 Miliar)',
    salesLeadKeyFocus: 'Penandatanganan kontrak komersial ke-2 senilai Rp 1,0 Miliar; kumulatif ARR capai Rp 2,0 Miliar'
  },
  {
    week: 12,
    weekLabel: 'W12',
    phase: 'Phase 3: Prove & Scale',
    pipelineValueB: 20.0,
    qualifiedOpps: 56,
    activePocs: 14,
    closedSeedArrM: 3000,
    sprintMilestone: 'GERBANG B3 (DES): TOTAL 90-HARI Q4 RP 3,0M TUNTAS (3 DEALS)',
    salesLeadKeyFocus: 'Target 90 hari pertama tercapai: Kumulatif Rp 3,0 Miliar ARR (3 Deals Won @ Rp 1,0M — B2 Nov: 1M + B3 Des: 2M via Year-End Budget Flush), 1.500 node terlindungi, run-rate Rp 2,0M/bln tercapai, pipeline buffer Rp 20,0M siap untuk ekspansi Q1 tahun berikutnya!'
  }
];

// Pipeline Risk Map Data (Red, Dark Gray, White — No Badges)
export const PIPELINE_RISK_MAP: PipelineRiskItem[] = [
  {
    id: 'risk_high',
    accountGroup: 'Procurement & Vendor Onboarding Bottleneck',
    riskLevel: 'HIGH_RISK',
    pipelineValueIdr: 'IDR 4.2B',
    percentageOfPipeline: 16.9,
    dealCount: 5,
    coreVulnerability: 'Traditional state-owned bank procurement committees with 90-day vendor security vetting cycles',
    salesLeadMitigation: 'I will leverage PT ITSEC Asia Tbk existing vendor registrations and ISO certifications to bypass new-vendor onboarding friction.'
  },
  {
    id: 'risk_medium',
    accountGroup: 'Internal Engineering Resistance & Safety Scrutiny',
    riskLevel: 'MEDIUM_RISK',
    pipelineValueIdr: 'IDR 7.8B',
    percentageOfPipeline: 31.5,
    dealCount: 11,
    coreVulnerability: 'SecOps engineers questioning autonomous exploit safety and potential blast radius in production',
    salesLeadMitigation: 'I will mandate isolated non-prod staging testing with signed Zero-Downtime SLA guarantees and live engineering toolchain transparency.'
  },
  {
    id: 'risk_healthy',
    accountGroup: 'Compliance-Urgent & Technical Sponsor Aligned',
    riskLevel: 'HEALTHY',
    pipelineValueIdr: 'IDR 12.8B',
    percentageOfPipeline: 51.6,
    dealCount: 18,
    coreVulnerability: 'No major structural roadblocks; CISO urgency driven by OJK SEOJK 29 audit and UU PDP enforcement deadline',
    salesLeadMitigation: 'I will expedite executive commercial sign-off by bundling automated executive board summary reporting into standard pricing.'
  }
];

// Pipeline Sector Distribution (for Donut and Bar visualization)
export const SECTOR_PIPELINE_DISTRIBUTION: SectorPipelineDistribution[] = [
  { sector: 'Tier-1 Banking', valueIdrB: 8.6, dealCount: 14, percentage: 34.7 },
  { sector: 'Regulated Fintech', valueIdrB: 5.4, dealCount: 12, percentage: 21.8 },
  { sector: 'Telecommunication', valueIdrB: 4.2, dealCount: 8, percentage: 16.9 },
  { sector: 'Public Sector & BUMN', valueIdrB: 3.6, dealCount: 10, percentage: 14.5 },
  { sector: 'Energy & Mining', valueIdrB: 1.8, dealCount: 4, percentage: 7.3 },
  { sector: 'Healthcare & Logistics', valueIdrB: 1.2, dealCount: 4, percentage: 4.8 }
];

// Conversion Funnel Data
export const CONTROL_FUNNEL_STEPS: FunnelStep[] = [
  { stage: '1. Scored Target Universe', count: 120, valueIdrB: 48.0, conversionRate: '100%' },
  { stage: '2. Qualified Opportunities', count: 60, valueIdrB: 24.8, conversionRate: '50.0%' },
  { stage: '3. Executive Discovery Briefings', count: 36, valueIdrB: 15.6, conversionRate: '60.0%' },
  { stage: '4. Tailored Platform Demos', count: 24, valueIdrB: 10.4, conversionRate: '66.7%' },
  { stage: '5. Scoped 5-Day PoCs', count: 14, valueIdrB: 6.2, conversionRate: '58.3%' },
  { stage: '6. Commercial Proposals', count: 8, valueIdrB: 3.6, conversionRate: '57.1%' },
  { stage: '7. Closed Enterprise ARR', count: 4, valueIdrB: 1.6, conversionRate: '50.0%' }
];

export const CONTROL_TOWER_KPIS: KPIMetric[] = [
  {
    id: 'account_coverage',
    category: 'LEADING',
    name: 'Enterprise Account Coverage',
    proposedTarget: '120 Scored Enterprise Accounts',
    operatingCadence: 'Weekly Cadence (Days 1–30)',
    strategicSignificance: 'Ensures thorough penetration of Tier-1 Indonesian banks, fintech, and critical infrastructure.',
    salesLeadActionIfBlocked: 'If coverage lags, activate ITSEC Asia internal account executives to unlock direct executive relationships.'
  },
  {
    id: 'discovery_velocity',
    category: 'LEADING',
    name: 'Executive Discovery Sessions',
    proposedTarget: '35+ Completed Sessions',
    operatingCadence: 'Weekly Tracking (Days 15–60)',
    strategicSignificance: 'Direct conversations with CISOs and CIOs uncover active compliance and release cycle triggers.',
    salesLeadActionIfBlocked: 'If meeting booking slows, pivot outreach to regulatory compliance angles (OJK SEOJK 29/2022).'
  },
  {
    id: 'poc_initiation',
    category: 'LEADING',
    name: 'Technical Live PoCs Initiated',
    proposedTarget: '12–14 Scoped 5-Day PoCs',
    operatingCadence: 'Bi-Weekly Tracking (Days 30–75)',
    strategicSignificance: 'In autonomous cybersecurity platforms, live exploit verification is the decisive moment of proof.',
    salesLeadActionIfBlocked: 'If PoC approvals stall due to safety fears, offer isolated staging scopes with written zero-downtime SLA.'
  },
  {
    id: 'poc_win_rate',
    category: 'EFFICIENCY',
    name: 'PoC to Proposal Conversion',
    proposedTarget: '60% – 65% Conversion Rate',
    operatingCadence: 'Monthly Review (Days 45–90)',
    strategicSignificance: 'Measures product effectiveness and technical alignment with client security teams.',
    salesLeadActionIfBlocked: 'If conversion is weak, conduct immediate technical debrief with Bronyx R&D to refine exploit reporting.'
  },
  {
    id: 'sales_cycle',
    category: 'EFFICIENCY',
    name: 'Average Enterprise Sales Cycle',
    proposedTarget: '45–60 Days (vs Traditional 90–120 Days)',
    operatingCadence: 'Continuous Velocity Tracking',
    strategicSignificance: 'Rapid 5-day automated PoC cuts months off traditional manual pentest procurement cycles.',
    salesLeadActionIfBlocked: 'If procurement delays arise, provide pre-approved standard legal terms and local compliance attestations.'
  },
  {
    id: 'pipeline_coverage',
    category: 'LAGGING',
    name: 'Pipeline Coverage Ratio',
    proposedTarget: '3.5x – 4.0x of Annual Target',
    operatingCadence: 'Weekly Forecast Cadence',
    strategicSignificance: 'Provides buffer against delayed enterprise procurement and ensures steady quarterly revenue delivery.',
    salesLeadActionIfBlocked: 'If coverage drops below 3.0x, accelerate partner channel co-sell and launch targeted BUMN campaign.'
  },
  {
    id: 'seed_arr',
    category: 'LAGGING',
    name: 'Closed Revenue & Quota Attainment (Irama Bulanan)',
    proposedTarget: 'B1 (Okt): Rp 0 (Pengumpulan Data) · B2 (Nov): Rp 1,0M (First Win) · B3 (Des): Rp 2,0M = Total 90D Q4 Rp 3,0M (3 Deals)',
    operatingCadence: 'Monthly Quota Gate (Bulan 1, 2, 3)',
    strategicSignificance: 'Membuktikan pencapaian terukur: pengumpulan data di awal (B1 Okt), achieve pertama di Bulan 2 (November Rp 1M), akselerasi growth di Bulan 3 (Desember Rp 2M via Year-End Budget Flush), total 90 hari Q4 Rp 3,0 Miliar (3 Deals Won), dan bertumbuh progresif ke Q1 tahun berikutnya.',
    salesLeadActionIfBlocked: 'Jika deal tertunda di salah satu akun, aktifkan fast-track pilot lisensi pada kandidat warm ITSEC berikutnya.'
  },
  {
    id: 'rolling_pipeline',
    category: 'LAGGING',
    name: 'Rolling Qualified Pipeline Value',
    proposedTarget: 'IDR 20.0B Pipeline Value (4.0x Coverage)',
    operatingCadence: 'Quarter-End Baseline (Day 90)',
    strategicSignificance: 'Guarantees commercial sustainability and predictable hypergrowth trajectory for Quarters 2 through 4.',
    salesLeadActionIfBlocked: 'If rolling pipeline is below target, institute weekly pipeline generation sprints across all sales engineers.'
  }
];

export interface BalancedSalesKPISection {
  titleId: string;
  titleEn: string;
  type: 'REVENUE' | 'ACTIVITY';
  descriptionId: string;
  descriptionEn: string;
  metrics: {
    nameId: string;
    nameEn: string;
    targetValue: string;
    frequency: string;
    formula: string;
    strategicPurposeId: string;
    strategicPurposeEn: string;
    alertThreshold: string;
  }[];
}

export const BALANCED_SALES_KPIS: BalancedSalesKPISection[] = [
  {
    titleId: 'Metrik Revenue (Hasil Finansial & Nilai Kontrak)',
    titleEn: 'Revenue Metrics (Financial Outcomes & Contract Value)',
    type: 'REVENUE',
    descriptionId: 'Tolok ukur keberhasilan komersial Sales Lead dalam menciptakan pendapatan berulang dan nilai kontrak enterprise.',
    descriptionEn: 'Commercial success metrics for Sales Lead in driving recurring enterprise revenue and contract value.',
    metrics: [
      {
        nameId: 'Sales Revenue (Annual Recurring Revenue)',
        nameEn: 'Sales Revenue (ARR Target)',
        targetValue: 'Rp 6,5 M – Rp 8,0 M ARR',
        frequency: 'Tahunan (Evaluasi Kuartalan)',
        formula: 'Total ARR terkontrak dari lisensi Bronyx AI tahun berjalan',
        strategicPurposeId: 'Menjamin keberlanjutan bisnis dengan margin kotor tinggi (80%+) khas model SaaS/perangkat lunak.',
        strategicPurposeEn: 'Secures high-margin business sustainability typical of software/SaaS recurring economics.',
        alertThreshold: '< 85% dari target kuartalan'
      },
      {
        nameId: 'Contract Value (ACV & TCV)',
        nameEn: 'Contract Value (ACV & TCV)',
        targetValue: 'ACV Rp 350 Jt – Rp 850 Jt / Akun',
        frequency: 'Per Deal Komersial',
        formula: 'Nilai kontrak tahunan bersih per logo enterprise yang dimenangkan',
        strategicPurposeId: 'Mendorong penetrasi akun tier-1 dan mencegah diskon tidak sehat saat negosiasi pengadaan.',
        strategicPurposeEn: 'Drives tier-1 account penetration and defends against unbudgeted discounting.',
        alertThreshold: 'ACV < Rp 300 Jt tanpa add-on multi-app'
      },
      {
        nameId: 'Closing Rate & Won Deals',
        nameEn: 'Closing Deals & Won Count',
        targetValue: '14–18 Akun Enterprise Menang / Tahun',
        frequency: 'Bulanan & Kuartalan',
        formula: 'Jumlah transaksi kontrak komersial yang mencapai status CLOSED-WON',
        strategicPurposeId: 'Membuktikan konsistensi konversi dari tahap negosiasi legal & C-level proposal.',
        strategicPurposeEn: 'Demonstrates consistent execution across legal negotiation and C-level approvals.',
        alertThreshold: '< 3 deal per kuartal'
      },
      {
        nameId: 'Recurring Revenue & Net Retention (NRR)',
        nameEn: 'Recurring Revenue & Net Retention (NRR)',
        targetValue: 'NRR 120% – 125% | Churn < 3%',
        frequency: 'Evaluasi Semester & Tahunan',
        formula: '(Beginning ARR + Ekspansi - Churn) / Beginning ARR',
        strategicPurposeId: 'Dihasilkan dari ekspansi DevSecOps CI/CD, add-on scope API, dan upgrade tier pasca-QBR.',
        strategicPurposeEn: 'Generated via DevSecOps CI/CD adoption, API scope expansions, and post-QBR tier upgrades.',
        alertThreshold: 'NRR < 110% atau renewal risk terdeteksi'
      }
    ]
  },
  {
    titleId: 'Metrik Aktivitas (Pipeline, Discovery, Demo & PoC)',
    titleEn: 'Activity Metrics (Pipeline, Discovery, Demo & PoC)',
    type: 'ACTIVITY',
    descriptionId: 'Indikator leading sales motion yang dikendalikan penuh oleh Sales Lead untuk mengisi dan mematangkan pipeline.',
    descriptionEn: 'Leading sales motion indicators controlled by the Sales Lead to feed and mature the sales pipeline.',
    metrics: [
      {
        nameId: 'Qualified Prospects (Jabodetabek ICP Target)',
        nameEn: 'Qualified Prospects (Jabodetabek Target)',
        targetValue: '50 Akun Terkualifikasi (Tier-1 Target)',
        frequency: 'Sprint Triwulan',
        formula: 'Akun BUMN, Perbankan, dan Manufaktur yang lolos filter ICP',
        strategicPurposeId: 'Fokus awal pada 50 akun target Jabodetabek dengan profil regulasi dan risiko tinggi.',
        strategicPurposeEn: 'Initial hyper-focus on 50 Jabodetabek accounts with high regulatory and risk exposure.',
        alertThreshold: '< 40 akun terdaftar dalam radar aktif'
      },
      {
        nameId: 'C-Level Executive Discovery Meetings',
        nameEn: 'Executive Discovery Meetings',
        targetValue: '60+ Pertemuan CISO / CIO / IT Leadership',
        frequency: '5–6 Sesi / Bulan',
        formula: 'Discovery terstruktur mendiagnosis cyber risk, regulasi OJK/PDP, dan postur devsecops',
        strategicPurposeId: 'Membangun sponsor eksekutif sebelum masuk ke demonstrasi teknis.',
        strategicPurposeEn: 'Establishes executive sponsorship and budget authority prior to technical demo.',
        alertThreshold: '< 4 pertemuan C-level per bulan'
      },
      {
        nameId: 'Product Demos & High-Impact Demos',
        nameEn: 'Product Demos & High-Impact Success Rate',
        targetValue: '40 Demo | Rasio Berhasil > 80%',
        frequency: '3–4 Demo / Bulan',
        formula: 'Demo produk yang dinilai "High Impact" oleh Technical Evaluation Committee',
        strategicPurposeId: 'Membuktikan kapabilitas otonom Bronyx AI dalam simulasi live exploit tanpa risiko blast radius.',
        strategicPurposeEn: 'Proves autonomous agent capabilities in live exploit simulation with zero blast radius.',
        alertThreshold: 'Tingkat keberhasilan demo < 75%'
      },
      {
        nameId: 'Scoped 5-Day PoC & Conversion Rate to Closing',
        nameEn: 'Scoped 5-Day PoCs & Closing Conversion',
        targetValue: '22 PoC | Konversi Min. 30% ke Closing',
        frequency: '2 PoC Selesai / Bulan',
        formula: 'Rasio deal menang dibagi seluruh peluang matang yang menyelesaikan PoC',
        strategicPurposeId: 'Standar emas enterprise: Memastikan minimal 30% dari mature opportunities terkonversi menjadi kontrak komersial.',
        strategicPurposeEn: 'Enterprise gold standard: Ensures minimum 30% conversion from mature opportunities to closed-won.',
        alertThreshold: 'Konversi PoC-to-close < 30%'
      },
      {
        nameId: 'Rolling Pipeline Value & Coverage Ratio',
        nameEn: 'Rolling Pipeline Value & Coverage',
        targetValue: 'Rp 24,0 M+ | Rasio Cakupan 3,5x – 4,0x',
        frequency: 'Mingguan & Bulanan',
        formula: 'Total nilai pipeline peluang terkualifikasi dibagi target kuota tahunan',
        strategicPurposeId: 'Memberikan bantalan proteksi terhadap perpanjangan siklus pengadaan BUMN/perbankan.',
        strategicPurposeEn: 'Provides critical buffer against prolonged state-owned/bank procurement cycles.',
        alertThreshold: 'Cakupan pipeline < 3,0x kuota berjalan'
      }
    ]
  }
];

export const CONTROL_TOWER_STATUS_PANEL = {
  currentHorizon: '90-DAY COMMERCIAL OPERATING ARCHITECTURE',
  questions: [
    {
      query: 'WHERE ARE WE?',
      subtitle: 'Current Baseline & Asset Position',
      answer: 'Day 0 Launch Baseline: Mobilizing Bronyx go-to-market atop ITSEC Asia\'s IDR 325B audited revenue foundation and 300+ enterprise client relationships across Indonesia.'
    },
    {
      query: 'WHERE ARE WE GOING?',
      subtitle: '90-Day Target Destination & Monthly Quotas',
      answer: 'Eksekusi dimulai di Bulan Oktober (Q4) dengan skema optimisme terukur: Bulan 1 (Oktober) fokus pengumpulan data 50 akun & PoC (Rp 0); First Win Rp 1,0 Miliar diraih di Bulan 2 (November); lalu akselerasi growth Rp 2,0 Miliar di Bulan 3 (Desember via Year-End Budget Flush) dengan total Rp 3,0 Miliar ARR kumulatif 90 hari (3 Deals Won / 1.500 Node) menutup Q4 dengan sempurna dan buffer pipeline Rp 20,0 Miliar. Selanjutnya bertumbuh bersih ke Q1 tahun berikutnya.'
    },
    {
      query: 'WHAT IS BLOCKED?',
      subtitle: 'Identified Friction Points',
      answer: '16.9% of pipeline faces traditional state-owned bank procurement vetting delays, while 31.5% experiences initial SecOps hesitation regarding automated exploit safety.'
    },
    {
      query: 'WHAT SHOULD HAPPEN NEXT?',
      subtitle: 'Actionable Sales Lead Mitigation',
      answer: 'Leverage ITSEC Asia\'s active vendor codes to bypass onboarding delays, mandate isolated staging 5-day PoCs with Zero-Downtime SLAs, and anchor on mandatory OJK compliance deadlines.'
    }
  ]
};


