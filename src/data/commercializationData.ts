export interface CommercialPackage {
  tierName: string;
  scopeDescription: string;
  targetCustomer: string;
  testingFrequency: string;
  keyCapabilities: string[];
  deploymentOption: string;
  commercialModel: string;
  modelType: 'PROPOSED PACKAGING' | 'MODELLED STRUCTURE';
}

export interface CommercialFlywheelStep {
  step: number;
  name: string;
  action: string;
  output: string;
}

export interface ObjectionItem {
  id: string;
  objection: string;
  rootCause: string;
  response: string;
  proof: string;
  nextStep: string;
}

// 4B. DEVSECOPS CONTINUOUS PIPELINE INTEGRATION
export interface DevSecOpsPipelineStage {
  step: number;
  stageName: string;
  pipelineAction: string;
  bronyxEngineRole: string;
  retentionBenefit: string;
}

export interface QBRTopic {
  topicNumber: number;
  title: string;
  focusArea: string;
  executiveOutcome: string;
  expansionTrigger: string;
}

export interface AccountExpansionFlywheelStep {
  step: number;
  phase: string;
  commercialAction: string;
  targetMetrics: string;
  revenueImpact: string;
}

export const DEVSECOPS_INTEGRATION_PIPELINE: DevSecOpsPipelineStage[] = [
  {
    step: 1,
    stageName: 'Software Development',
    pipelineAction: 'Developer commits code for weekly sprint release (GitLab, GitHub, Azure DevOps, Bitbucket).',
    bronyxEngineRole: 'Monitors repository commits and pull requests via lightweight API webhook listener.',
    retentionBenefit: 'Embedded early into developer habits; avoids security being treated as an afterthought.'
  },
  {
    step: 2,
    stageName: 'CI/CD Pipeline Trigger',
    pipelineAction: 'Automated build pipeline compiles staging artifacts and triggers pre-deployment security gate.',
    bronyxEngineRole: 'Autonomous Kali toolchain instantly spins up non-destructive exploit agent targeting staging URL.',
    retentionBenefit: 'Zero human consultant scheduling lag; testing activates automatically in the CI/CD run.'
  },
  {
    step: 3,
    stageName: 'Automated Security Testing',
    pipelineAction: 'Autonomous multi-agent reconnaissance, API schema parsing, and safe-exploit verification execute in hours.',
    bronyxEngineRole: 'Validates actual exploitability with zero blast radius without crashing staging databases.',
    retentionBenefit: 'Replaces 4-week manual consulting bottlenecks with continuous hours-long execution.'
  },
  {
    step: 4,
    stageName: 'Developer Feedback & Jira Sync',
    pipelineAction: 'Actionable developer remediation code snippets and curl reproduction commands pushed to Jira.',
    bronyxEngineRole: 'Bypasses useless 100-page static PDFs; delivers line-of-code guidance directly to engineering sprint.',
    retentionBenefit: 'High operational stickiness; developers rely on Bronyx for immediate remediation clarity.'
  },
  {
    step: 5,
    stageName: 'Remediation & 1-Click Retest',
    pipelineAction: 'Developer patches vulnerability in code and triggers immediate 1-click retest verification.',
    bronyxEngineRole: 'Reruns targeted exploit vector in under 3 minutes; verifies fix and closes Jira issue automatically.',
    retentionBenefit: 'Eliminates consultant retesting fees; guarantees persistent customer platform dependency.'
  },
  {
    step: 6,
    stageName: 'Secure Production Deployment',
    pipelineAction: 'Automated security gate passes; audit certificate generated for compliance and release unblocked.',
    bronyxEngineRole: 'Signs off audit-ready compliance report mapped 1:1 to OJK SEOJK 29/2022 and PCI DSS v4.0.',
    retentionBenefit: 'Drives annual recurring software ARR because releasing code requires active Bronyx licensing.'
  }
];

export const ACCOUNT_EXPANSION_FLYWHEEL: AccountExpansionFlywheelStep[] = [
  {
    step: 1,
    phase: 'Initial Land Contract',
    commercialAction: 'Land on flagship digital banking application or core payment gateway (Core Tier: up to 10 active endpoints).',
    targetMetrics: 'Flagship Deal: Rp 1,0 Miliar Sekali Jasa (500 Device)',
    revenueImpact: 'Secures enterprise customer relationship and establishes operational foothold.'
  },
  {
    step: 2,
    phase: 'Customer Adoption & Webhook Integration',
    commercialAction: 'Onboard SecOps team, integrate CI/CD webhooks into engineering sprints, establish continuous 24/7 scanning.',
    targetMetrics: 'Daily Active Pipeline Usage: 100% Onboarding',
    revenueImpact: 'Guarantees operational dependency and prevents shelfware syndrome.'
  },
  {
    step: 3,
    phase: 'Quarterly Business Review (QBR)',
    commercialAction: 'Structured executive review with CISO & CIO reviewing scan velocity, remediated vulnerabilities, and new systems.',
    targetMetrics: 'Cadence: 90-Day Executive Review Cycle',
    revenueImpact: 'Elevates commercial relationship to strategic board-level advisory partnership.'
  },
  {
    step: 4,
    phase: 'Identify New Security Needs',
    commercialAction: 'Audit newly launched subsidiaries, microservices, internal networks, or upcoming cloud migration initiatives.',
    targetMetrics: 'Discovery: 15–30 New Exposed Endpoints',
    revenueImpact: 'Uncovers expansion opportunities prior to annual budget allocation cycles.'
  },
  {
    step: 5,
    phase: 'Upselling & Cross-Selling',
    commercialAction: 'Upgrade from Core to Continuous or Hybrid Enterprise Tier; add internal network agents & ITSEC Red Team advisory.',
    targetMetrics: 'Upsell Factor: +60% to +100% Contract Value',
    revenueImpact: 'Expands contract value from Rp 450 Jt to Rp 800 Jt+ ARR.'
  },
  {
    step: 6,
    phase: 'Enterprise Group Expansion',
    commercialAction: 'Roll out Bronyx across regional subsidiaries, supply chain portals, and enterprise conglomerate divisions.',
    targetMetrics: 'Account Expansion: 2.5x Lifetime Value (LTV)',
    revenueImpact: 'Transforms single logo into multi-year enterprise master agreement exceeding Rp 1,5 Miliar ARR.'
  }
];

export const QBR_FRAMEWORK_TOPICS: QBRTopic[] = [
  {
    topicNumber: 1,
    title: 'Product Usage & Scan Cadence',
    focusArea: 'Review total autonomous exploit scans executed across CI/CD pipeline and frequency of 1-click retests.',
    executiveOutcome: 'Proves high return on investment and active platform utilization across developer sprints.',
    expansionTrigger: 'Endpoint target quota reaching 80% capacity triggers tier upgrade recommendation.'
  },
  {
    topicNumber: 2,
    title: 'Security Needs & Evolving Surface',
    focusArea: 'Analyze newly discovered shadow APIs, forgotten subdomains, and external attack surface expansion.',
    executiveOutcome: 'Demonstrates continuous visibility into perimeter changes that occurred between formal audits.',
    expansionTrigger: 'Discovery of 10+ new unmanaged APIs triggers asset bracket expansion addendum.'
  },
  {
    topicNumber: 3,
    title: 'Implementation Results & Remediated Flaws',
    focusArea: 'Quantify mean-time-to-remediate (MTTR) reduction from 35 days (manual) to 3.2 days with Bronyx code snippets.',
    executiveOutcome: 'Presents concrete metrics showcasing engineering efficiency gains and risk reduction to the board.',
    expansionTrigger: 'SecOps leadership endorses expanding toolchain to internal corporate network.'
  },
  {
    topicNumber: 4,
    title: 'New Corporate Pain Points',
    focusArea: 'Identify new M&A digital assets, supply chain vendor integrations, or upcoming cloud migrations.',
    executiveOutcome: 'Positions Bronyx as the proactive security enabler for strategic corporate initiatives.',
    expansionTrigger: 'Supply chain dealer portals added to testing scope under dedicated add-on module.'
  },
  {
    topicNumber: 5,
    title: 'Additional Regulatory Requirements',
    focusArea: 'Audit compliance readiness for upcoming OJK SEOJK 29 inspection, Bank Indonesia audit, and UU PDP enforcement.',
    executiveOutcome: 'Delivers 1-click audit compliance evidence package signed and certified for regulatory submission.',
    expansionTrigger: 'Addition of PCI DSS v4.0 or ISO 27001 specialized compliance reporting module.'
  },
  {
    topicNumber: 6,
    title: 'Additional Modules & License Upgrades',
    focusArea: 'Demonstrate advanced capabilities: internal network lateral movement simulation and sovereign air-gapped agent.',
    executiveOutcome: 'Upgrades account from external-only testing to holistic 360-degree exposure management.',
    expansionTrigger: 'Upgrade from Core Tier to Continuous Enterprise Master Subscription.'
  },
  {
    topicNumber: 7,
    title: 'Expansion Opportunities Across Subsidiaries',
    focusArea: 'Present group-wide enterprise licensing framework covering multi-finance, fintech, and overseas branches.',
    executiveOutcome: 'Consolidates disparate vendor contracts across enterprise group into single ITSEC Asia agreement.',
    expansionTrigger: 'Group-wide master agreement locking 2.5x Customer Lifetime Value (LTV) on renewal.'
  }
];

export const PROPOSED_COMMERCIAL_TIERS: CommercialPackage[] = [
  {
    tierName: 'Bronyx Core (Entry Tier)',
    scopeDescription: 'Continuous external attack surface pentesting for flagship digital applications (up to 10 active domains / APIs)',
    targetCustomer: 'High-growth Fintech, Digital Commerce, Mid-sized Banking',
    testingFrequency: 'Continuous automated scans + on-demand CI/CD runs',
    keyCapabilities: [
      'Multi-agent external reconnaissance & attack surface mapping',
      'Automated exploitation with zero blast radius guarantee',
      'OWASP Top 10 & API security automated test suites',
      'Developer remediation code snippets & Jira integration',
      'Standard compliance reporting (ISO 27001)'
    ],
    deploymentOption: 'Dedicated SaaS VPC (Cloud-Native)',
    commercialModel: 'Annual Subscription (Up to 10 Flagship Endpoints)',
    modelType: 'PROPOSED PACKAGING'
  },
  {
    tierName: 'Bronyx Continuous (Growth Tier)',
    scopeDescription: 'Full-spectrum external + internal network pentesting, CI/CD pipeline integration, unlimited on-demand re-tests (up to 30 targets)',
    targetCustomer: 'Commercial Tier-1 Banks, Digital Telcos, Large Multi-finance',
    testingFrequency: 'Continuous 24/7 autonomous testing + CI/CD automated gates',
    keyCapabilities: [
      'All Core capabilities + Internal Network Agent',
      'Automated lateral movement & exploit chaining simulation',
      'PCI DSS v4.0 & OJK SEOJK 29/2022 mapped audit reports',
      'Jira / GitLab / Azure DevOps bi-directional synchronization',
      'Executive Threat Exposure Dashboard with MTTR analytics'
    ],
    deploymentOption: 'Dedicated VPC or Private On-Prem Appliance',
    commercialModel: 'Annual Recurring License (Enterprise Scope Bracket)',
    modelType: 'PROPOSED PACKAGING'
  },
  {
    tierName: 'Bronyx Hybrid Enterprise (Enterprise Tier)',
    scopeDescription: 'Autonomous Bronyx 24/7 AI platform combined with ITSEC Asia Senior Red Team validation and Board-level attestation',
    targetCustomer: 'Tier-1 Banks, Critical Infrastructure (BUMN), Telecommunication Giants',
    testingFrequency: 'Continuous AI testing + Quarterly ITSEC Human Specialist Red Team sprint',
    keyCapabilities: [
      'Full Bronyx Enterprise Continuous Platform (Unlimited Endpoints)',
      'Quarterly ITSEC Asia certified specialist validation & attestation',
      'Air-gapped on-premise high-security deployment (100% Data Residency)',
      'Dedicated Customer Success Manager & Solutions Architect',
      'Board-ready Cyber Resilience & Regulatory Evidence Pack'
    ],
    deploymentOption: 'On-Premises Air-Gapped or Sovereign Cloud',
    commercialModel: 'Enterprise Master Subscription + Advisory Services SLA',
    modelType: 'PROPOSED PACKAGING'
  }
];

export const COMMERCIALIZATION_FLYWHEEL: CommercialFlywheelStep[] = [
  {
    step: 1,
    name: 'CUSTOMER FEEDBACK',
    action: 'Capture direct objections, pain points, and compliance formats during 5-day enterprise PoCs.',
    output: 'Raw empirical field data from Indonesian CISOs and SecOps leads'
  },
  {
    step: 2,
    name: 'MARKET INSIGHT',
    action: 'Identify cross-sector demand patterns (e.g. banks demanding SEOJK 29 evidence packs without manual consulting delay).',
    output: 'Systematic market requirement briefs for product engineering'
  },
  {
    step: 3,
    name: 'PRODUCT PRIORITY',
    action: 'Prioritize multi-agent Kali exploit modules for local banking architectures (QRIS, open banking APIs, core banking boundaries).',
    output: 'Sprint roadmap directly solving enterprise buying friction'
  },
  {
    step: 4,
    name: 'PACKAGING',
    action: 'Refine scope brackets (Core, Continuous, Hybrid) to match standard Indonesian corporate procurement thresholds.',
    output: 'Standardized scope tiers aligned with enterprise budget approvals'
  },
  {
    step: 5,
    name: 'PRICING',
    action: 'Calibrate multi-year annual recurring pricing against consulting TCO to ensure clear 60% operational ROI.',
    output: 'Repeatable enterprise ARR price structures protecting gross margins'
  },
  {
    step: 6,
    name: 'SALES ENABLEMENT',
    action: 'Equip ITSEC sales directors and channel engineers with objection battlecards, ROI calculators, and PoC templates.',
    output: 'Institutionalized sales knowledge across the entire commercial team'
  },
  {
    step: 7,
    name: 'MARKET EXPANSION',
    action: 'Deploy validated packaging into adjacent vertical sectors (Banking → Fintech → Telco → Critical Infrastructure).',
    output: 'Accelerated pipeline velocity and compound ARR growth ↺'
  }
];

export const ENTERPRISE_OBJECTIONS: ObjectionItem[] = [
  {
    id: 'obj_downtime',
    objection: '"Will automated AI testing crash our live banking services or corrupt database records?"',
    rootCause: 'Past trauma from aggressive legacy scanners that flooded network buffers or injected destructive SQL payloads.',
    response: 'Bronyx operates on strict zero-blast-radius execution modes: safely proving exploitability without executing destructive payloads, backed by human-in-the-loop safety gates.',
    proof: 'Live demo showcasing non-destructive exploit confirmation; written Zero-Downtime SLA embedded in PoC contract.',
    nextStep: 'Stage 5-day PoC on isolated staging replica to empirically prove safe execution before touching production.'
  },
  {
    id: 'obj_audit_compliance',
    objection: '"Can an automated AI tool satisfy formal OJK and ISO 27001 regulatory audit requirements?"',
    rootCause: 'Skepticism over whether regulators accept automated output without certified human consultant signatures.',
    response: 'SEOJK 29/2022 explicitly demands continuous resilience testing. Furthermore, our Hybrid Enterprise tier includes quarterly formal attestation from certified ITSEC Asia specialists.',
    proof: 'Pre-mapped Regulatory Evidence Pack showing 1:1 cross-reference to SEOJK 29/2022 and PCI DSS v4.0 Requirement 11.',
    nextStep: 'Deliver regulatory compliance mapping document to Chief Risk Officer & Head of Internal Audit.'
  },
  {
    id: 'obj_existing_scanners',
    objection: '"We already pay for Nessus / Qualys / Tenable vulnerability scanners."',
    rootCause: 'Conflating passive CVE vulnerability scanning with offensive multi-agent exploit verification.',
    response: 'Scanners only list theoretical vulnerabilities with high false positives (alert fatigue). Bronyx actively and autonomously chains attack vectors to prove which vulnerabilities are genuinely exploitable.',
    proof: 'Side-by-side comparison during PoC: Scanner found 500 CVEs; Bronyx proved only 3 were exploitable and provided exact developer fix code.',
    nextStep: 'Offer a 24-hour comparative scan on client test IP to demonstrate verified exploit pathways vs scanner noise.'
  },
  {
    id: 'obj_developer_bandwidth',
    objection: '"Our engineering team does not have time to read more 100-page security PDF reports."',
    rootCause: 'Developers are measured on sprint feature velocity, not reviewing static consulting PDFs.',
    response: 'Bronyx does not generate useless static PDFs for developers. It delivers contextual curl reproduction commands, code snippets, and direct Jira tickets with 1-click retest validation.',
    proof: 'Show developer workflow: engineer fixes bug in code, clicks "Retest" in Bronyx, verified resolved in 3 minutes.',
    nextStep: 'Demonstrate Jira bi-directional synchronization directly to VP of Engineering and DevSecOps leads.'
  },
  {
    id: 'obj_annual_contract',
    objection: '"We already have an annual manual pentesting contract with another vendor."',
    rootCause: 'Locked in legacy multi-year consulting commitments.',
    response: 'Bronyx does not compete with your annual compliance snapshot; it bridges the dangerous 360-day gap between your annual vendor visits as your applications update weekly.',
    proof: 'Security gap analysis showing new vulnerabilities introduced during weekly CI/CD sprints between annual audits.',
    nextStep: 'Structure Bronyx as an ongoing operational platform subscription alongside their annual audit requirement.'
  }
];

// ==========================================
// 1. DETAIL SPESIFIK PENAWARAN & HARGA
// ==========================================
export const FLAGSHIP_PRODUCT_OFFERING = {
  platformName: 'Bronyx AI — Autonomous Cyber Security Platform',
  developer: 'PT ITSEC Asia Tbk (IDX: CYBR)',
  coreCapabilityId: 'Menemukan celah kebocoran data (Data Leakage & Sensitive Exposure Prevention), API vulnerabilities, kerentanan otorisasi, dan exploit chains pada infrastruktur kritis.',
  coreCapabilityEn: 'Autonomous discovery of data leakage vulnerabilities, sensitive data exposure, API flaws, and complex exploit chains across mission-critical infrastructure.',
  pricePerMonthId: 'Rp 1.000.000.000 (1 Miliar) / Bulan',
  pricePerMonthEn: 'IDR 1,000,000,000 (1 Billion) / Month',
  pricePerYearId: 'Rp 12.000.000.000 (12 Miliar) / Tahun (Annual Contract)',
  pricePerYearEn: 'IDR 12,000,000,000 (12 Billion) / Year (Annual Contract)',
  deviceCoverageId: 'Maksimal 500 Device / Target Aset Digital',
  deviceCoverageEn: 'Maximum 500 Dedicated Devices / Digital Assets',
  deviceDetails: [
    { type: 'Application & Web Servers', description: 'Web servers, customer portals, core enterprise apps (Apache, Nginx, IIS)' },
    { type: 'Database & Data Warehouses', description: 'Core SQL/NoSQL databases, customer data stores, Redis cache nodes' },
    { type: 'API Gateways & Microservices', description: 'REST APIs, GraphQL endpoints, Open Banking & QRIS gateways' },
    { type: 'Kubernetes & Cloud Nodes', description: 'Container nodes, AWS EC2, GCP Compute Engine, Azure VMs' },
    { type: 'Network & Perimeter Devices', description: 'External gateways, VPN concentrators, border firewalls' }
  ],
  keyDeliverablesId: [
    'Pemindaian 24/7 otonom berbasis Multi-Agent Kali Linux tanpa henti',
    'Deteksi eksploitasi nyata celah kebocoran data dengan Zero Blast Radius',
    'Integrasi webhook CI/CD ke GitLab/GitHub/Azure DevOps untuk DevSecOps',
    'Snippet kode perbaikan langsung untuk tim developer dengan fitur 1-Click Retest',
    'Laporan kepatuhan regulasi siap audit: UU PDP No. 27/2022 & OJK SEOJK 29/2022',
    'Validasi berkala pakar siber ITSEC Asia (Human-in-the-Loop Expert Assurance)'
  ]
};

// ===================================================================
// 2. STRATEGI HARRY GULTOM: CARA MENCIPTAKAN REVENUE Rp 1 MILIAR / BULAN & ESKALASI PROGRESIF
// ===================================================================
export interface RevenueCreationPillar {
  titleId: string;
  titleEn: string;
  contributionPct: string;
  monthlyRevenueTarget: string;
  sourceOfDeals: string;
  conversionStrategy: string;
  averageSalesCycle: string;
}

export const SALES_LEAD_REVENUE_CREATION_ENGINE = {
  salesLead: 'Harry Gultom',
  position: 'Sales Lead — ITSEC Asia (IDX: CYBR)',
  monthlyQuotaId: 'Rp 1.000.000.000 (1 Miliar) / Bulan (Baseline Target: Achieve Bulan 2–3, Bertumbuh Progresif)',
  monthlyQuotaEn: 'IDR 1,000,000,000 (1 Billion) / Month (Baseline Target: First Win Months 2–3, Progressive Scaling)',
  annualRunRateTarget: 'Rp 24.000.000.000 – Rp 25.000.000.000 ARR',
  dealUnitEconomics: {
    unitPricePerMonth: 1000000000, // 1 Miliar per deal (sekali jasa / implementasi 500 device)
    dealsNeededPerMonth: 1, // 1 Deal Won / Bulan @ 1M (First Win di Bulan 2 / Nov, akselerasi 2 Deals di Bulan 3 / Des, mengunci 3 Deals / Rp 3,0M di Q4)
    maxDevicesPerDeal: 500,
    annualContractValuePerDeal: 12000000000 // 12 Miliar ARR per deal tahunan jika langganan penuh
  },
  selectionRationaleId: 'Kenapa Harry Gultom Dipilih: Harry menetapkan target kuota baseline yang solid & terukur senilai Rp 1 Miliar per bulan (1 deal @ Rp 1M per 500 device). Di awal (Bulan 1 / Oktober) tidak dipaksakan closing langsung melainkan fokus membangun fondasi, PoC 5-hari, dan pipeline 50 akun; achieve deal perdana diraih pada Bulan 2 (November), lalu akselerasi growth di Bulan 3 (Desember via Year-End Budget Flush) dengan total 90 hari Q4 Rp 3,0 Miliar (3 Deals Won), kemudian bertumbuh progresif secara optimis dan rasional ke Rp 1,5M (Q1), Rp 2,0M–2,5M (Q2), hingga Rp 3,0M/bulan di akhir tahun.',
  selectionRationaleEn: 'Why Harry Gultom Was Selected: Harry sets a realistic, solid baseline target of IDR 1.0 Billion per month (1 deal @ IDR 1B / 500 devices). In Month 1 (October), execution focuses on account warming, PoC validation, and pipeline building without forcing immediate closing; initial win is achieved in Month 2 (November), followed by growth acceleration in Month 3 (December via Year-End Budget Flush) locking initial Q4 at IDR 3.0B (3 Deals Won), and progressing to IDR 1.5B (Q1), IDR 2.0B–2.5B (Q2), reaching IDR 3.0B/month by year-end.',
  // Dari mana Rp 1M ini dibuat & bertumbuh (3 Sumber / Pilar Pendapatan)
  pillars: [
    {
      titleId: 'Pilar 1: Mining & Warm Cross-Sell 300+ Klien Eksisting ITSEC Asia',
      titleEn: 'Pillar 1: Warm Cross-Sell Across 300+ Existing ITSEC Asia Clients',
      contributionPct: '50% (~Rp 500 Jt – Rp 1,0 M / Bulan)',
      monthlyRevenueTarget: 'Rp 500 Jt – Rp 1,0 M / Bulan',
      sourceOfDeals: 'Klien eksisting perbankan tier-1, telko, dan enterprise yang sudah menggunakan jasa pentest manual atau SOC ITSEC Asia.',
      conversionStrategy: 'Mengaktifkan vendor code yang sudah disetujui, menawarkan upgrade dari pentest snapshot 1x setahun ke continuous AI testing bergaransi tanpa blast radius. Siklus closing cepat (20–30 hari) mengamankan deal perdana di Bulan 2 (November).',
      averageSalesCycle: '20–30 Hari (Fast-Track Procurement)'
    },
    {
      titleId: 'Pilar 2: Outbound Hunt 50 Akun Prioritas Terpilih di Jabodetabek',
      titleEn: 'Pillar 2: Outbound Hunt on 50 Scored Enterprise Accounts in Jabodetabek',
      contributionPct: '35% (~Rp 350 Jt – Rp 750 Jt / Bulan)',
      monthlyRevenueTarget: 'Rp 350 Jt – Rp 750 Jt / Bulan',
      sourceOfDeals: '50 target ICP Jabodetabek: Bank Buku 3/4, Fintech berizin OJK, BUMN holding, dan Manufaktur/Distribusi multinasional.',
      conversionStrategy: 'Menggelar Free Initial Security Health Check (3–5 hari) untuk mendeteksi celah kebocoran data aktual. Temuan disajikan dalam C-Level Risk Pitch kepada CISO/CIO untuk langsung dikonversi ke kontrak komersial 500 device.',
      averageSalesCycle: '30–45 Hari (Standard Enterprise Cycle)'
    },
    {
      titleId: 'Pilar 3: Inbound Regulatory Compliance Campaigns & Channel SI Co-Sell',
      titleEn: 'Pillar 3: Inbound Regulatory Compliance Campaigns & SI Co-Selling',
      contributionPct: '15% (~Rp 150 Jt – Rp 500 Jt / Bulan)',
      monthlyRevenueTarget: 'Rp 150 Jt – Rp 500 Jt / Bulan',
      sourceOfDeals: 'Inbound leads dari CISO roundtable/webinar kepatuhan UU PDP & OJK SEOJK 29/2022, serta kemitraan co-selling bersama System Integrator tier-1.',
      conversionStrategy: 'Memanfaatkan tenggat audit regulasi yang mendesak, di mana instansi membutuhkan solusi continuous testing bersertifikat lokal untuk menghindari sanksi administratif kebocoran data.',
      averageSalesCycle: '35–50 Hari'
    }
  ],
  // Pipeline Math yang Terukur (Conversion Mechanics untuk 1M/bulan & Pertumbuhan Progresif)
  pipelineFunnelMath: {
    targetAccountsInRadar: 50, // 50 target accounts Jabodetabek
    cLevelDiscoveryMeetings: 16, // Pertemuan discovery CISO/CIO per bulan
    scopedTechnicalPoCs: 8, // 5-Day Data Leakage PoCs per bulan
    matureNegotiationDeals: 3, // Penawaran komersial matang (konversi closing 33%)
    closedWonDeals: 1, // 1 Deal Won per bulan @ 1M (baseline stabil di B2-B3, bertumbuh progresif ke 2-3 deals di Q2-Q4)
    conversionRateMatureToClose: '33.3% (Standar Enterprise Valid)',
    rollingPipelineBuffer: 'Rp 10,0 M – Rp 20,0 M (Rasio Cakupan 4,0x – 5,0x)'
  }
};

// ===================================================================
// 3. ESTIMASI PERTUMBUHAN REVENUE: SKEMA KUARTAL (MULAI Q4 NOV-DES HINGGA Q4 TAHUN DEPAN)
// ===================================================================
export interface GrowthTrajectoryMilestone {
  periodLabelId: string;
  periodLabelEn: string;
  quarterCode: 'Q4_LAUNCH' | 'Q1' | 'Q2' | 'Q3' | 'Q4_FULL_YEAR';
  monthIndex: number;
  phaseId: string;
  phaseEn: string;
  monthlyRevenueRunRateIdrB: number; // Miliar IDR per bulan
  activeClientsCount: number;
  totalDevicesCovered: number;
  cumulativeRevenueIdrB: number; // Miliar IDR kumulatif
  strategicDriverId: string;
  strategicDriverEn: string;
  statusTag: 'FOUNDATION' | 'RAMPING' | 'TARGET ATTAINED' | 'COMPOUNDING' | 'MARKET DOMINANCE';
}

export const GROWTH_TRAJECTORY_3M_TO_1Y: GrowthTrajectoryMilestone[] = [
  {
    periodLabelId: 'Kuartal 4 (Oktober – Desember / 90 Hari Pertama)',
    periodLabelEn: 'Quarter 4 (October – December / Initial 90 Days)',
    quarterCode: 'Q4_LAUNCH',
    monthIndex: 3,
    phaseId: 'Q4 Penuh: Fondasi (Okt), First Win (Nov), & Akselerasi Budget Flush (Des)',
    phaseEn: 'Full Q4: Foundation (Oct), First Win (Nov), & Budget Flush Acceleration (Dec)',
    monthlyRevenueRunRateIdrB: 2.0, // Rp 2,0 M / bulan di akhir Q4 (Desember)
    activeClientsCount: 3,
    totalDevicesCovered: 1500,
    cumulativeRevenueIdrB: 3.0, // B1 (Okt): Rp 0 + B2 (Nov): Rp 1,0 M + B3 (Des): Rp 2,0 M = Total Q4 Rp 3,0 Miliar
    strategicDriverId: 'Eksekusi dimulai Oktober (Q4)! Rencana 90 hari pertama tuntas 1 kuartal penuh: Bulan 1 (Oktober) fokus 50 akun & 6 PoC (Rp 0), Bulan 2 (November) meraih First Win Rp 1,0 Miliar, dan Bulan 3 (Desember) akselerasi Rp 2,0 Miliar via Year-End Budget Flush. Mengunci Q4 Rp 3,0 Miliar ARR kumulatif (3 Deals Won / 1.500 Node).',
    strategicDriverEn: 'Execution launches October (Full Q4)! Initial 90-day cycle covers one complete quarter: Month 1 (October) sets foundation & PoCs (IDR 0), Month 2 (November) lands First Win IDR 1.0B, and Month 3 (December) accelerates to IDR 2.0B via Year-End Budget Flush. Locking Q4 at IDR 3.0B cumulative ARR (3 Deals Won / 1,500 Nodes).',
    statusTag: 'TARGET ATTAINED'
  },
  {
    periodLabelId: 'Kuartal 1 (Januari – Maret)',
    periodLabelEn: 'Quarter 1 (January – March)',
    quarterCode: 'Q1',
    monthIndex: 6,
    phaseId: 'Q1 Ekspansi Tahun Baru: Penetrasi Fintech & Perbankan (Total Q1 Rp 5,5M)',
    phaseEn: 'Q1 New Year Expansion: Fintech & Banking Penetration (Total Q1 IDR 5.5B)',
    monthlyRevenueRunRateIdrB: 2.0, // Run-rate bulanan Rp 1,75M–2,0M / bulan
    activeClientsCount: 6,
    totalDevicesCovered: 3000,
    cumulativeRevenueIdrB: 8.5, // Q4 (Rp 3,0M) + Q1 (Rp 5,5M) = Kumulatif Rp 8,5 M
    strategicDriverId: 'Transisi bersih ke tahun baru: Melanjutkan ritme kuota dengan penambahan klien fintech berizin OJK & ekspansi kapasitas node (Total pendapatan Q1 Rp 5,5 Miliar), membawa kumulatif ke Rp 8,5 Miliar ARR.',
    strategicDriverEn: 'Clean transition into new calendar year: Maintaining quota rhythm with OJK-licensed fintech clients & node expansions (Total Q1 revenue IDR 5.5B), bringing cumulative revenue to IDR 8.5B ARR.',
    statusTag: 'COMPOUNDING'
  },
  {
    periodLabelId: 'Kuartal 2 (April – Juni)',
    periodLabelEn: 'Quarter 2 (April – June)',
    quarterCode: 'Q2',
    monthIndex: 9,
    phaseId: 'Q2 Pertumbuhan Progresif: Co-Sell Mitra SI & Multi-Entitas (Total Q2 Rp 6,5M)',
    phaseEn: 'Q2 Progressive Growth: SI Channel Co-Sell & Multi-Entity (Total Q2 IDR 6.5B)',
    monthlyRevenueRunRateIdrB: 2.25, // Run-rate meningkat ke Rp 2,25 M / bulan
    activeClientsCount: 9,
    totalDevicesCovered: 4500,
    cumulativeRevenueIdrB: 15.0, // Q4 (3,0M) + Q1 (5,5M) + Q2 (6,5M) = Kumulatif Rp 15,0 M
    strategicDriverId: 'Pertumbuhan meningkat progresif: aktivasi kemitraan co-selling System Integrator Tier-1 (Multipolar, Reycom Data Solusi, Mastersystem) dan upsell 500 node ke 1.000 node (Total Q2 Rp 6,5 Miliar), kumulatif mencapai Rp 15,0 Miliar.',
    strategicDriverEn: 'Progressive compounding: activating Tier-1 SI co-selling (Multipolar, RDS, Mastersystem) and 500-to-1,000 node upsells (Total Q2 IDR 6.5B), reaching IDR 15.0B cumulative.',
    statusTag: 'COMPOUNDING'
  },
  {
    periodLabelId: 'Kuartal 3 (Juli – September / Penutup Tahun ke-1)',
    periodLabelEn: 'Quarter 3 (July – September / Year 1 Close)',
    quarterCode: 'Q3',
    monthIndex: 12,
    phaseId: 'Q3 Puncak Skala 1 Tahun Penuh: BUMN, Energi & Audit H2 (Total Q3 Rp 10,0M)',
    phaseEn: 'Q3 Full Year-1 Peak: SOE, Energy & H2 Audit (Total Q3 IDR 10.0B)',
    monthlyRevenueRunRateIdrB: 2.5, // Run-rate Rp 2,5 M – 3,0 M / bulan di September
    activeClientsCount: 12,
    totalDevicesCovered: 6000,
    cumulativeRevenueIdrB: 25.0, // Q4 (3M) + Q1 (5,5M) + Q2 (6,5M) + Q3 (10M) = Total 1 Tahun Rp 25,0 Miliar!
    strategicDriverId: 'Puncak skala 12 bulan penuh: penetrasi korporasi BUMN holding, pertambangan/energi, serta audit kepatuhan semester kedua. Mencapai total ~Rp 25,0 Miliar ARR kumulatif di tahun pertama dengan retensi NRR 130%.',
    strategicDriverEn: 'Full 12-month peak scale: capturing SOE holdings, energy players, and second-half audit compliance. Reaching ~IDR 25.0B cumulative ARR in year one at 130% NRR retention.',
    statusTag: 'MARKET DOMINANCE'
  },
  {
    periodLabelId: 'Kuartal 4 Tahun ke-2 (Oktober – Desember / Skala Regional ASEAN)',
    periodLabelEn: 'Quarter 4 Year-2 (October – December / ASEAN Regional Scale)',
    quarterCode: 'Q4_FULL_YEAR',
    monthIndex: 15,
    phaseId: 'Ekspansi ASEAN: Replikasi Model ke Singapura, Thailand & Australia',
    phaseEn: 'ASEAN Expansion: Replicating Model to Singapore, Thailand & Australia',
    monthlyRevenueRunRateIdrB: 3.0, // Run-rate Rp 3,0 M+ / bulan
    activeClientsCount: 15,
    totalDevicesCovered: 7500,
    cumulativeRevenueIdrB: 35.0,
    strategicDriverId: 'Ekspansi regional Asia Tenggara melalui kantor ITSEC Asia di Singapura dan Thailand; standardisasi penawaran continuous threat exposure bagi nasabah multinasional.',
    strategicDriverEn: 'Southeast Asian regional scale via ITSEC Asia offices in Singapore and Thailand; standardized continuous threat exposure management for cross-border multinationals.',
    statusTag: 'MARKET DOMINANCE'
  }
];

