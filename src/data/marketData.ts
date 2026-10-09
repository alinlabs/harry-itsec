export interface MarketDriver {
  title: string;
  regulatoryBody: string;
  mandate: string;
  impactOnBronyx: string;
  targetSector: string;
}

export interface MarketMetric {
  label: string;
  value: string;
  change: string;
  source: string;
  dataType: 'ACTUAL' | 'PUBLIC MARKET DATA' | 'DERIVED' | 'MODELLED';
}

export interface AddressableMarketLayer {
  tier: 'TAM' | 'SAM' | 'SOM';
  name: string;
  valueUsd: string;
  valueIdr: string;
  description: string;
  methodology: string;
  dataType: 'PUBLIC MARKET DATA' | 'DERIVED' | 'PROPOSED TARGET';
  source: string;
}

export interface MarketTrendPoint {
  year: string;
  marketSizeUsdBillions: number; // in USD Billion
  marketSizeIdrTrillions: number; // in IDR Trillion (~15,500 IDR/USD)
  testingSegmentUsdMillions: number; // Security testing subset in USD Million
  growthRateYoY: string;
}

export const INDONESIA_MARKET_TREND: MarketTrendPoint[] = [
  { year: '2022', marketSizeUsdBillions: 1.85, marketSizeIdrTrillions: 28.6, testingSegmentUsdMillions: 95, growthRateYoY: '+10.8%' },
  { year: '2023', marketSizeUsdBillions: 2.05, marketSizeIdrTrillions: 31.7, testingSegmentUsdMillions: 110, growthRateYoY: '+10.8%' },
  { year: '2024', marketSizeUsdBillions: 2.38, marketSizeIdrTrillions: 36.8, testingSegmentUsdMillions: 135, growthRateYoY: '+16.1% (IDC)' },
  { year: '2025 (P)', marketSizeUsdBillions: 2.71, marketSizeIdrTrillions: 42.0, testingSegmentUsdMillions: 165, growthRateYoY: '+13.8%' },
  { year: '2026 (P)', marketSizeUsdBillions: 3.08, marketSizeIdrTrillions: 47.7, testingSegmentUsdMillions: 198, growthRateYoY: '+13.6%' },
  { year: '2027 (P)', marketSizeUsdBillions: 3.49, marketSizeIdrTrillions: 54.1, testingSegmentUsdMillions: 235, growthRateYoY: '+13.3%' }
];

export const TAM_SAM_SOM_DATA: AddressableMarketLayer[] = [
  {
    tier: 'TAM',
    name: 'Total Addressable Market',
    valueUsd: '$2.71 Billion',
    valueIdr: 'IDR 42.0 Trillion',
    description: 'Total Indonesian Cybersecurity Market (Enterprise Software, Hardware & Security Services).',
    methodology: 'Statista Cybersecurity Market Indonesia Report (2025 projection) projecting growth to $3.92B by 2029 at 9.63% CAGR.',
    dataType: 'PUBLIC MARKET DATA',
    source: 'Statista Market Forecast (2025) & International Trade Administration'
  },
  {
    tier: 'SAM',
    name: 'Serviceable Addressable Market',
    valueUsd: '$165 Million',
    valueIdr: 'IDR 2.55 Trillion',
    description: 'Enterprise Security Testing, Penetration Testing & Threat Exposure Validation in Indonesia.',
    methodology: 'Derived from ~6.1% of national cyber spend allocated to proactive penetration testing, automated vulnerability validation, and continuous compliance (OJK/BSSN mandates).',
    dataType: 'DERIVED',
    source: 'Derived Model based on IDC Software Security Share & Global Testing Ratios'
  },
  {
    tier: 'SOM',
    name: 'Serviceable Obtainable Market (90-Day Horizon)',
    valueUsd: '$3.1 Million Pool',
    valueIdr: 'IDR 48.0 Billion Pool',
    description: 'Initial Target Account Universe: 120 prioritized regulated enterprise accounts in Indonesia (Tier-1 Banking, Fintech, Telco, Critical Infrastructure BUMN).',
    methodology: 'Bottom-up account model: 120 target enterprise accounts. 90-Day operating target (mulai Q4 / Oktober): pengumpulan data & PoC di Bulan 1 (Okt · Rp 0), First Win Rp 1,0M di Bulan 2 (November), dan akselerasi growth Rp 2,0M di Bulan 3 (Desember via Budget Flush) dengan total Rp 3,0 Miliar ARR kumulatif 90 hari (3 Deals Won) menutup Q4, pipeline bergulir Rp 20,0 Miliar, lalu eskalasi progresif per kuartal.',
    dataType: 'PROPOSED TARGET',
    source: 'Candidate 90-Day Bottom-Up Account Universe Architecture'
  }
];

export const KEY_MARKET_SIGNALS: MarketMetric[] = [
  {
    label: 'Indonesia Cyber Market Size (2025)',
    value: '$2.71 B',
    change: 'Growing to $3.92B by 2029',
    source: 'Statista Market Forecast & ITA (2025)',
    dataType: 'PUBLIC MARKET DATA'
  },
  {
    label: 'Security Software YoY Growth',
    value: '+16.1%',
    change: 'Fastest-growing enterprise IT segment',
    source: 'IDC Security Software Tracker (2H 2024)',
    dataType: 'PUBLIC MARKET DATA'
  },
  {
    label: 'ITSEC Asia FY2024 Revenue (CYBR)',
    value: 'IDR 325 B',
    change: '+55.5% YoY (vs IDR 209B FY23)',
    source: 'PT ITSEC Asia Tbk Audited Financial Disclosures (IDX: CYBR)',
    dataType: 'ACTUAL'
  },
  {
    label: 'National Cyber Traffic Anomalies',
    value: '400M+',
    change: 'Recorded annually across critical sectors',
    source: 'BSSN Threat Landscape Annual Report',
    dataType: 'PUBLIC MARKET DATA'
  },
  {
    label: 'UU PDP Data Breach Statutory Fine',
    value: 'Up to 2%',
    change: 'Annual total corporate revenue',
    source: 'UU No. 27/2022 (Law on Personal Data Protection)',
    dataType: 'PUBLIC MARKET DATA'
  }
];

export const INDONESIA_MARKET_METRICS = KEY_MARKET_SIGNALS;

export const REGULATORY_CATALYSTS: MarketDriver[] = [
  {
    title: 'OJK SEOJK 29/SEOJK.03/2022',
    regulatoryBody: 'Otoritas Jasa Keuangan (OJK)',
    mandate: 'Mandates systemic cyber resilience, continuous vulnerability assessment, and threat simulation for all commercial banks in Indonesia.',
    impactOnBronyx: 'High urgency for banks to move from annual manual pentests to continuous, automated penetration testing engines.',
    targetSector: 'Commercial Banks & Financial Institutions'
  },
  {
    title: 'UU PDP No. 27/2022',
    regulatoryBody: 'Ministry of Communication & Digital / Government of Indonesia',
    mandate: 'Requires data controllers & processors to implement rigorous technical safeguards; personal liability & up to 2% annual turnover penalty.',
    impactOnBronyx: 'Expands buying center beyond IT/CISO to Board Level, General Counsel, and Chief Risk Officers seeking audit-ready validation.',
    targetSector: 'Fintech, Telco, E-commerce, Healthcare, Multi-finance'
  },
  {
    title: 'BSSN Cyber Security Framework',
    regulatoryBody: 'Badan Siber dan Sandi Negara (BSSN)',
    mandate: 'Prescribes continuous threat intelligence, vulnerability mitigation, and critical information infrastructure (IIP) protection.',
    impactOnBronyx: 'Positions Bronyx as sovereign/local compliant automated testing platform integrated with ITSEC Asia SOC.',
    targetSector: 'State-Owned Enterprises (BUMN), Energy, Public Infrastructure'
  },
  {
    title: 'PCI DSS v4.0 Requirement 11',
    regulatoryBody: 'PCI Security Standards Council',
    mandate: 'Requires ongoing testing and rapid remediation of vulnerabilities in payment card environments, replacing static spot-checks.',
    impactOnBronyx: 'Bronyx on-demand re-testing provides instant proof of patch verification without waiting for manual consultants.',
    targetSector: 'Payment Gateways, Digital Banking, Merchant Aggregators'
  }
];

export const PENTEST_MARKET_SHIFT_DATA = [
  { year: '2022', traditionalManualShare: 88, continuousAiShare: 12 },
  { year: '2023', traditionalManualShare: 80, continuousAiShare: 20 },
  { year: '2024', traditionalManualShare: 68, continuousAiShare: 32 },
  { year: '2025', traditionalManualShare: 52, continuousAiShare: 48 },
  { year: '2026 (Est.)', traditionalManualShare: 38, continuousAiShare: 62 },
];

