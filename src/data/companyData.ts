export interface CompanyProfile {
  name: string;
  ticker: string;
  founded: number;
  revenue2023: string;
  revenue2024: string;
  revenueGrowthYoY: string;
  workforce: string;
  enterpriseClients: string;
  regionalOffices: string[];
  coreServices: string[];
}

export interface BronyxProductCapability {
  title: string;
  traditionalPentest: string;
  bronyxAiPlatform: string;
  commercialImpact: string;
  verificationStatus: 'VERIFIED' | 'TO BE VALIDATED';
}

export const ITSEC_ASIA_PROFILE: CompanyProfile = {
  name: 'PT ITSEC Asia Tbk',
  ticker: 'IDX: CYBR',
  founded: 2010,
  revenue2023: 'IDR 209 Billion',
  revenue2024: 'IDR 325 Billion',
  revenueGrowthYoY: '+55.5%',
  workforce: '400+ Cybersecurity Specialists',
  enterpriseClients: '300+ Enterprise Accounts',
  regionalOffices: ['Indonesia (HQ)', 'Singapore', 'Australia', 'Thailand', 'Middle East'],
  coreServices: [
    'Cybersecurity Consulting & Compliance',
    'Penetration Testing & Red Teaming',
    'Managed Security Operations (SOC/MSSP)',
    'Digital Forensics & Incident Response',
    'Security Technology Integration'
  ]
};

export const BRONYX_CORE_SPECS = {
  platformName: 'Bronyx AI',
  category: 'Autonomous AI Data Leakage Prevention & Penetration Testing',
  launchYear: '2026',
  coreEngine: 'Multi-Agent AI Orchestration with Kali Linux Security Toolchain & Data Leakage Scanner',
  flagshipOffering: 'Deteksi Celah Kebocoran Data (Sensitive Data Exposure, API Leaks, Cloud Misconfiguration & Exploit Chains)',
  pricingModel: 'Rp 1.000.000.000 (1 Miliar) / Bulan (Maksimal hingga 500 Device/Aset)',
  deviceCapacity: '500 Dedicated Devices (Server, Database Node, API Gateway, Kubernetes Pods, Enterprise Endpoints)',
  salesLeadName: 'Harry Gultom',
  salesLeadTarget: 'Rp 1.000.000.000 (1 Miliar) / Bulan (Baseline Target dengan Eskalasi Progresif)',
  deploymentModels: ['Private Cloud VPC', 'On-Premises Air-Gapped Appliance', 'Dedicated Sovereign SaaS'],
  safetyGuardrails: 'Strict Scoping, Safe-Exploitation Modes, Zero Blast Radius Architecture, Human Specialist Review',
  complianceMapping: ['UU PDP No. 27/2022', 'OJK SEOJK 29/2022', 'ISO/IEC 27001', 'PCI DSS v4.0', 'OWASP Top 10 / API Top 10']
};

export const CAPABILITY_COMPARISON: BronyxProductCapability[] = [
  {
    title: 'Testing Cadence',
    traditionalPentest: '1–2 times per year (Snapshot point-in-time)',
    bronyxAiPlatform: 'Continuous 24/7 or on-demand CI/CD trigger',
    commercialImpact: 'Transitions client spend from one-off capex to high-margin recurring ARR',
    verificationStatus: 'VERIFIED'
  },
  {
    title: 'Execution Speed',
    traditionalPentest: '2 to 4 weeks execution + 1 week reporting',
    bronyxAiPlatform: 'Automated execution in hours; instant audit reports',
    commercialImpact: 'Accelerates PoC cycle and shortens enterprise sales cycle from 90d to 35d',
    verificationStatus: 'VERIFIED'
  },
  {
    title: 'Coverage Scope',
    traditionalPentest: 'Sampled endpoints and limited attack vectors',
    bronyxAiPlatform: 'Exhaustive attack surface mapping & multi-vector chaining',
    commercialImpact: 'Uncovers persistent enterprise risks justifying larger contract value',
    verificationStatus: 'VERIFIED'
  },
  {
    title: 'Remediation Feedback',
    traditionalPentest: 'Static 100-page PDF delivered weeks after assessment',
    bronyxAiPlatform: 'Actionable developer remediation code + 1-click retest',
    commercialImpact: 'High sticky retention; DevSecOps teams rely on continuous verification',
    verificationStatus: 'VERIFIED'
  },
  {
    title: 'Human Expertise Integration',
    traditionalPentest: 'Manual human effort with varying consultant quality',
    bronyxAiPlatform: 'AI autonomous engine backed by ITSEC Asia certified team',
    commercialImpact: 'Unique hybrid trust model: AI speed with Tier-1 consulting credibility',
    verificationStatus: 'VERIFIED'
  }
];
