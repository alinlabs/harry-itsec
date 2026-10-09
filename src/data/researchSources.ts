export type DataType = 
  | 'ACTUAL' 
  | 'PUBLIC MARKET DATA' 
  | 'DERIVED' 
  | 'MODELLED' 
  | 'PROPOSED TARGET' 
  | 'ILLUSTRATIVE';

export interface ResearchSource {
  id: string;
  source: string;
  sourceUrl?: string;
  year: string;
  dataType: DataType;
  confidence: 'HIGH' | 'MEDIUM' | 'ESTIMATED';
  description: string;
  scope: string;
}

export const RESEARCH_SOURCES: Record<string, ResearchSource> = {
  itsec_idx: {
    id: 'itsec_idx',
    source: 'PT ITSEC Asia Tbk (IDX: CYBR) Public Disclosures & Financial Statements',
    sourceUrl: 'https://www.idx.co.id',
    year: '2023 - 2024',
    dataType: 'ACTUAL',
    confidence: 'HIGH',
    description: 'Revenue growth from IDR 209B (FY2023) to IDR 325B (FY2024), 300+ enterprise clients across APAC, IPO August 2023.',
    scope: 'Indonesia & APAC'
  },
  bronyx_official: {
    id: 'bronyx_official',
    source: 'Bronyx AI Product Announcement & Architecture Documentation',
    sourceUrl: 'https://bronyx.ai',
    year: '2026',
    dataType: 'ACTUAL',
    confidence: 'HIGH',
    description: 'Autonomous AI penetration testing platform, multi-agent Kali Linux orchestration, continuous compliance, safe-exploitation mode.',
    scope: 'Enterprise Cybersecurity Platform'
  },
  bssn_threat_report: {
    id: 'bssn_threat_report',
    source: 'BSSN (Badan Siber dan Sandi Negara) Cyber Threat Landscape',
    sourceUrl: 'https://bssn.go.id',
    year: '2023 - 2024',
    dataType: 'PUBLIC MARKET DATA',
    confidence: 'HIGH',
    description: 'Hundreds of millions of cyber traffic anomalies logged annually in Indonesia; critical infrastructure and financial sector as primary targets.',
    scope: 'Indonesia National'
  },
  ojk_seojk29: {
    id: 'ojk_seojk29',
    source: 'Otoritas Jasa Keuangan (OJK) SEOJK No. 29/SEOJK.03/2022',
    year: '2022 - Ongoing',
    dataType: 'PUBLIC MARKET DATA',
    confidence: 'HIGH',
    description: 'Mandate on Cyber Resilience for Commercial Banks, requiring regular security testing, vulnerability management, and incident response readiness.',
    scope: 'Indonesian Commercial Banking'
  },
  uu_pdp: {
    id: 'uu_pdp',
    source: 'Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)',
    year: '2022 - Full Enforcement 2024+',
    dataType: 'PUBLIC MARKET DATA',
    confidence: 'HIGH',
    description: 'Mandatory technical measures to safeguard personal data, administrative sanctions up to 2% of annual turnover for data breaches.',
    scope: 'All Data Controllers & Processors in Indonesia'
  },
  idc_frost_security: {
    id: 'idc_frost_security',
    source: 'IDC & Frost Sullivan Asia-Pacific Security Services Research',
    year: '2023 - 2026',
    dataType: 'PUBLIC MARKET DATA',
    confidence: 'MEDIUM',
    description: 'Indonesia cybersecurity spending growing at >14% CAGR, driven by cloud migration, API expansion, and regulatory compliance.',
    scope: 'Indonesia Enterprise'
  },
  sales_lead_operating_model: {
    id: 'sales_lead_operating_model',
    source: 'Candidate 90-Day Commercial Execution Architecture',
    year: '2026',
    dataType: 'PROPOSED TARGET',
    confidence: 'ESTIMATED',
    description: 'Proposed 90-day operating model with measured monthly quota pacing (Month 1 IDR 0 data gathering & PoC, Month 2 IDR 1.0B first win, Month 3 IDR 2.0B growth acceleration = IDR 3.0B ARR cumulative / 3 Deals Won), pipeline acceleration, and conversion benchmarks.',
    scope: 'Bronyx Commercial Motion at ITSEC Asia'
  },
  account_prioritization_matrix: {
    id: 'account_prioritization_matrix',
    source: 'Candidate Analytical Scoring Framework',
    year: '2026',
    dataType: 'MODELLED',
    confidence: 'ESTIMATED',
    description: 'Opportunity Score = Digital Complexity + Security Exposure + Regulatory Pressure + Enterprise Scale + Strategic Fit.',
    scope: 'Target Account Universe Analysis'
  }
};
