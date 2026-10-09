export interface SegmentPlot {
  id: string;
  name: string;
  sector: string;
  xMaturity: number; // 0-100 (Nascent to Advanced)
  yComplexity: number; // 0-100 (Standard IT to Mission-Critical Core)
  tier: 'Tier 1 Prime Target' | 'Tier 2 High Growth' | 'Tier 3 Hybrid Advisory';
  rationale: string;
  icpPriority: 'Priority 1: Banking & Financial Services' | 'Priority 2: Manufacturing & Distribution' | 'Priority 3: Public Sector & BUMN' | 'Other High-Exposure Enterprise';
  keyDrivers: string[];
}

export interface UseCaseItem {
  id: string;
  title: string;
  businessImpact: number; // 0-100
  adoptionReadiness: number; // 0-100
  triggerEvent: string;
  targetBuyer: string;
  bronyxRole: string;
  commercialValue: string;
}

export interface PositioningDimension {
  dimension: string;
  manualPentest: string;
  automatedScanners: string;
  bronyxAiPlatform: string;
  salesAdvantage: string;
}

// 3B. DUAL PRODUCT POSITIONING: CLOUD/SAAS VS ON-PREMISE
export interface DualPositioningModel {
  deployment: 'CLOUD / SaaS' | 'ON-PREMISE';
  targetSegment: string;
  coreMessage: string;
  valuePillars: {
    title: string;
    description: string;
  }[];
  suitabilityContext: string;
}

// 4A. HUMAN-IN-THE-LOOP POSITIONING
export interface HumanInTheLoopModel {
  title: string;
  coreThesis: string;
  aiContribution: {
    pillar: string;
    description: string;
  }[];
  humanContribution: {
    pillar: string;
    description: string;
  }[];
  criticalFraming: {
    incorrect: string;
    correct: string;
  };
}

// 3C. DUAL LEAD GENERATION ENGINES
export interface LeadGenEngine {
  engineType: 'OUTBOUND ENGINE' | 'INBOUND ENGINE';
  title: string;
  description: string;
  hookMechanism: string;
  stepFlow: {
    step: number;
    title: string;
    detail: string;
  }[];
  expectedOutcome: string;
}

// 3A. IDEAL CUSTOMER PROFILE (ICP) SPECIFICATION
export const ICP_SECTOR_PRIORITIES = [
  {
    priority: 1,
    sectorTitle: 'Banking & Financial Services',
    regulations: ['OJK SEOJK 29/SEOJK.03/2022', 'Bank Indonesia PADG', 'UU PDP No. 27/2022', 'PCI DSS v4.0'],
    characteristics: 'High cybersecurity requirements, high regulatory exposure, sensitive customer financial data, high business risk, continuous security testing mandate.',
    painPoints: 'Annual manual pentests leave 360 days of blind spots as weekly mobile banking features and open banking APIs are deployed.',
    targetRoles: ['Chief Information Security Officer (CISO)', 'Chief Information Officer (CIO)', 'Head of IT Risk & Compliance', 'VP DevSecOps'],
    whyBronyx: 'Autonomous exploit verification in hours with zero blast radius and instant audit-ready reporting mapped 1:1 to SEOJK 29.'
  },
  {
    priority: 2,
    sectorTitle: 'Manufacturing & Distribution',
    regulations: ['UU PDP No. 27/2022', 'ISO/IEC 27001:2022', 'Supply Chain Security Standards'],
    characteristics: 'Modern application security, expanding digital infrastructure, mission-critical supply chain protection, operational continuity, growing digital dependency.',
    painPoints: 'Dealer management portals, IoT ERP bridges, and supplier interfaces exposed to ransomware and perimeter breaches with zero operational downtime tolerance.',
    targetRoles: ['CIO / VP of IT Infrastructure', 'Head of Corporate Cyber Defense', 'Enterprise Architect', 'Operations Security Manager'],
    whyBronyx: 'Safeguards interconnected digital supply chain portals without disruption, ensuring 24/7 business continuity.'
  },
  {
    priority: 3,
    sectorTitle: 'Public Sector & BUMN (Critical Infrastructure)',
    regulations: ['UU PDP No. 27/2022', 'BSSN Perpres No. 82/2022 (Critical Information Infrastructure)', 'ISO 27001'],
    characteristics: 'Strict compliance oversight, citizen data protection, critical national systems, state security governance, strict procurement procedures.',
    painPoints: 'Frequent cyber attacks targeting national assets, heavy bureaucratic pressure for certified assurance, stringent data sovereignty requirements.',
    targetRoles: ['Director of Digital Transformation', 'Head of Computer Security Incident Response Team (CSIRT)', 'BUMN IT Leadership', 'Government CISO'],
    whyBronyx: 'On-premise air-gapped deployment option with 100% Indonesian data residency backed by PT ITSEC Asia Tbk certified specialist attestation.'
  }
];

export const GTM_WHO_WHY_WHEN_HOW = {
  who: {
    target: 'Tier-1 Indonesian Commercial Banks, Regulated Fintech, Manufacturing Supply Chains & Critical BUMN',
    buyers: ['CISO', 'CIO', 'VP DevSecOps', 'Head of IT Risk & Compliance', 'Directors / Management']
  },
  why: {
    drivers: [
      'OJK SEOJK 29/2022 mandates continuous cyber resilience & vulnerability simulation',
      'UU PDP No. 27/2022 personal executive liability & up to 2% annual turnover penalty',
      'Weekly CI/CD releases outpace traditional 4-week manual pentest consulting cycles'
    ],
    roi: 'Cuts testing lead-time by 80% while saving ~60% in recurring consulting TCO'
  },
  when: {
    triggers: [
      'Quarterly/Annual Regulatory Audit Preparation (OJK, PCI DSS, ISO 27001)',
      'Major Mobile Banking / Digital App Version Overhauls & Microservice Expansions',
      'Post-Incident or High-Severity Vulnerability Disclosures (Immediate Verification Need)',
      'CI/CD Feature Releases demanding automated pre-production security gates'
    ]
  },
  how: {
    motions: [
      { name: 'Warm Cross-Sell to ITSEC 300+ Accounts', role: 'Leverage existing trust and contracts for immediate POC intro', priority: 'Day 1–30 Focus' },
      { name: 'Enterprise Direct Outbound (Jabodetabek)', role: 'Target top 50 scored accounts via Free Initial Security Health Check', priority: 'Day 15–60 Focus' },
      { name: 'Inbound Educational Engine', role: 'Webinars & thought leadership on OJK/UU PDP cyber risk driving qualified demo requests', priority: 'Day 20–90 Focus' },
      { name: 'System Integrator Co-Sell', role: 'Attach Bronyx to core banking & cloud migration deals with SIs', priority: 'Day 30–75 Focus' },
      { name: 'DevSecOps & Account Expansion', role: 'Integrate CI/CD pipelines & drive QBR-driven upselling for recurring ARR', priority: 'Continuous ARR Engine' }
    ]
  }
};

// 3B. DUAL PRODUCT POSITIONING SPECIFICATION
export const DUAL_PRODUCT_POSITIONING: DualPositioningModel[] = [
  {
    deployment: 'CLOUD / SaaS',
    targetSegment: 'Startups, Digital Commercial Companies, Mid-Market, Hyper-growth Fintech',
    coreMessage: 'Instant Protection & Zero Infrastructure Cost.',
    valuePillars: [
      {
        title: 'Fast & Instant Deployment',
        description: 'Instant provisioning in minutes via secure cloud VPC without purchasing dedicated hardware appliances.'
      },
      {
        title: 'Zero Infrastructure Overhead',
        description: 'No maintenance, hardware servers, or local virtualization management needed. 100% managed platform.'
      },
      {
        title: 'Scalable & Flexible Adoption',
        description: 'Scale active targets dynamically as digital assets, APIs, and microservices grow sprint-by-sprint.'
      },
      {
        title: 'Quick Security Activation',
        description: 'Immediate vulnerability exploitation testing from day one, unblocking sprint releases effortlessly.'
      }
    ],
    suitabilityContext: 'Ideal for fast-moving engineering teams prioritizing agility, CI/CD speed, and minimal IT overhead.'
  },
  {
    deployment: 'ON-PREMISE',
    targetSegment: 'Commercial Tier-1 Banking, State-Owned Enterprises (BUMN), Government & Public Sector',
    coreMessage: '100% Data Residency & Strict Compliance.',
    valuePillars: [
      {
        title: '100% Data Residency & Sovereignty',
        description: 'Zero sensitive data, telemetry, or payloads leave client intranet/data center, strictly fulfilling PP 71 & UU PDP.'
      },
      {
        title: 'Total Internal Perimeter Control',
        description: 'Deployable on client-managed air-gapped physical servers or private sovereign cloud environments.'
      },
      {
        title: 'Audit & Regulatory Governance',
        description: 'Fully aligns with Bank Indonesia, OJK SEOJK 29/2022, and BSSN critical infrastructure security guidelines.'
      },
      {
        title: 'Zero Third-Party Cloud Exposure',
        description: 'No outbound internet dependencies required for air-gapped transaction banking core networks.'
      }
    ],
    suitabilityContext: 'Mandatory for regulated financial institutions and state critical infrastructure where regulatory compliance overrides cloud convenience.'
  }
];

// 4A. HUMAN-IN-THE-LOOP SPECIFICATION
export const HUMAN_IN_THE_LOOP_MODEL: HumanInTheLoopModel = {
  title: 'Human-in-the-Loop: AI Automation + Certified Expert Validation',
  coreThesis: 'AI provides speed, automation, and cloud scalability. Human expertise provides validation, contextual judgment, and reduction of false positives.',
  aiContribution: [
    { pillar: 'Continuous Speed', description: 'Executes reconnaissance, surface mapping, and Kali exploit toolchain in hours instead of 4 weeks.' },
    { pillar: 'Exhaustive Automation', description: 'Chains multi-agent attack vectors 24/7 across hundreds of microservice endpoints without fatigue.' },
    { pillar: 'Dynamic Scalability', description: 'Instantly tests newly deployed CI/CD builds on-demand with zero consultant scheduling lag.' }
  ],
  humanContribution: [
    { pillar: 'Expert Validation', description: 'ITSEC Asia certified specialists (OSCP, CEH, CISSP) review findings to eliminate false positives.' },
    { pillar: 'Contextual Judgment', description: 'Understands client business logic, operational constraints, and industry-specific transaction flows.' },
    { pillar: 'Board-Ready Attestation', description: 'Delivers formal executive attestations and regulatory compliance letters recognized by OJK and audit committees.' }
  ],
  criticalFraming: {
    incorrect: 'AI replaces human cybersecurity experts.',
    correct: 'AI accelerates security testing, while human expertise ensures results are relevant, accurate, and trustworthy.'
  }
};

// 3C. DUAL LEAD GENERATION ENGINES
export const DUAL_LEAD_GEN_ENGINES: LeadGenEngine[] = [
  {
    engineType: 'OUTBOUND ENGINE',
    title: 'Free Initial Security Health Check (Rapid Attack Surface Discovery)',
    description: 'Proactive outreach to top 50 prioritized enterprise accounts in Jabodetabek offering a non-intrusive security health check.',
    hookMechanism: 'Free initial external attack surface health check exposing active blind spots within 24 hours.',
    stepFlow: [
      { step: 1, title: 'Proactive Prospecting', detail: 'Identify CISO/CIO of top 50 priority accounts in Banking, Manufacturing, and BUMN.' },
      { step: 2, title: 'Initial Engagement', detail: 'Engage via executive threat briefing anchored on OJK/UU PDP regulatory liabilities.' },
      { step: 3, title: 'Security Health Check', detail: 'Perform non-intrusive external reconnaissance identifying high-risk exposed endpoints.' },
      { step: 4, title: 'Identify Security Gap', detail: 'Deliver concise Gap Assessment Report showing verified attack pathways.' },
      { step: 5, title: 'Product Demo', detail: 'Demonstrate how Bronyx multi-agent engine verifies exploitability safely.' },
      { step: 6, title: '5-Day Scoped PoC', detail: 'Controlled test in client staging replica proving zero blast radius exploitability.' },
      { step: 7, title: 'Commercial Opportunity', detail: 'Present annual subscription contract converting empirical proof into closed ARR.' }
    ],
    expectedOutcome: 'Shortens the sales cycle from 90–120 days to 45–60 days by anchoring directly on empirical risk proof.'
  },
  {
    engineType: 'INBOUND ENGINE',
    title: 'Executive Educational Series (Regulatory Compliance & Cyber Risk)',
    description: 'Educational thought leadership addressing executive regulatory liabilities, application security, and cyber risk.',
    hookMechanism: 'Executive webinars and practical whitepapers on OJK SEOJK 29/2022, UU PDP compliance, and DevSecOps security gates.',
    stepFlow: [
      { step: 1, title: 'Educational Awareness', detail: 'Host webinars and publish whitepapers on OJK SEOJK 29, UU PDP, and DevSecOps resilience.' },
      { step: 2, title: 'High-Intent Engagement', detail: 'Targeted C-level attendees register and interact with interactive risk assessment checklists.' },
      { step: 3, title: 'Qualified Lead', detail: 'BANT/MEDDIC qualification by sales lead: active compliance audit or weekly release bottlenecks.' },
      { step: 4, title: 'Product Discussion', detail: 'Executive consultation on automating continuous compliance and replacing legacy scanners.' },
      { step: 5, title: '5-Day Scoped PoC', detail: 'Deploy guided 5-day PoC on flagship digital application backend.' },
      { step: 6, title: 'Commercial Opportunity', detail: 'Formal enterprise proposal presentation directly to budget controller and CISO.' }
    ],
    expectedOutcome: 'Generates high-intent, inbound executive opportunities with pre-allocated compliance budget.'
  }
];

export const TARGET_SEGMENTATION_PLOTS: SegmentPlot[] = [
  {
    id: 'tier1_banks',
    name: 'Tier-1 Commercial Banks (BCA, Mandiri, BRI, BNI)',
    sector: 'Banking & Financial Services',
    xMaturity: 88,
    yComplexity: 96,
    tier: 'Tier 1 Prime Target',
    icpPriority: 'Priority 1: Banking & Financial Services',
    keyDrivers: ['OJK SEOJK 29/2022', 'Bank Indonesia PADG', 'UU PDP No. 27/2022', 'Core Banking Boundaries'],
    rationale: 'Highest regulatory exposure and massive API digital surfaces; urgently require continuous automated validation.'
  },
  {
    id: 'fintech_giants',
    name: 'Digital Banks & Fintech (Jago, DANA, OVO, Xendit)',
    sector: 'Banking & Financial Services',
    xMaturity: 82,
    yComplexity: 92,
    tier: 'Tier 1 Prime Target',
    icpPriority: 'Priority 1: Banking & Financial Services',
    keyDrivers: ['PCI DSS v4.0', 'QRIS Payment Gateways', 'Weekly CI/CD Sprints', 'OJK Fintech Licensing'],
    rationale: 'Weekly release velocity requires CI/CD testing integration; traditional 4-week pentests create unacceptable bottlenecks.'
  },
  {
    id: 'traditional_mfg',
    name: 'Manufacturing & Distribution Conglomerates (Astra, Indofood, Unilever)',
    sector: 'Manufacturing & Distribution',
    xMaturity: 62,
    yComplexity: 78,
    tier: 'Tier 2 High Growth',
    icpPriority: 'Priority 2: Manufacturing & Distribution',
    keyDrivers: ['Supply Chain Protection', 'ERP & Dealer Portals', 'Operational Continuity', 'Zero Downtime Scoping'],
    rationale: 'Supply chain dealer portals and ERP boundaries needing scheduled autonomous validation to protect continuous logistics.'
  },
  {
    id: 'bumn_infrastructure',
    name: 'Public Sector & Critical BUMN (PLN, Pertamina, Telkom, KAI)',
    sector: 'Public Sector & BUMN',
    xMaturity: 74,
    yComplexity: 86,
    tier: 'Tier 1 Prime Target',
    icpPriority: 'Priority 3: Public Sector & BUMN',
    keyDrivers: ['BSSN Critical Infrastructure', 'UU PDP Compliance', 'Strict Procurement Governance', 'Air-Gapped On-Premises'],
    rationale: 'Strict compliance oversight (BSSN); value Bronyx on-premise air-gapped platform wrapped with ITSEC certified expert attestation.'
  },
  {
    id: 'telco_operators',
    name: 'Telecommunication Giants (Telkomsel, Indosat, XL Axiata)',
    sector: 'Telecommunication',
    xMaturity: 84,
    yComplexity: 90,
    tier: 'Tier 1 Prime Target',
    icpPriority: 'Other High-Exposure Enterprise',
    keyDrivers: ['Massive Subscriber Base', '5G Core APIs', 'UU PDP Penalties', '24/7 Attack Surface'],
    rationale: 'Vast subscriber attack surfaces, 5G APIs, and consumer data requiring 24/7 continuous exposure mapping.'
  },
  {
    id: 'ecommerce_tech',
    name: 'E-Commerce & Digital Tech (Tokopedia, Blibli, Traveloka)',
    sector: 'Technology',
    xMaturity: 74,
    yComplexity: 85,
    tier: 'Tier 2 High Growth',
    icpPriority: 'Other High-Exposure Enterprise',
    keyDrivers: ['Rapid Feature Shipping', 'Cloud-Native SaaS VPC', 'Merchant API Integrations', '1-Click Retest'],
    rationale: 'Rapid feature shipping; high developer-to-security ratio creates strong appetite for 1-click retest validation.'
  },
  {
    id: 'healthcare_pharma',
    name: 'Digital Healthcare & Hospital Networks (Siloam, Kalbe)',
    sector: 'Healthcare',
    xMaturity: 60,
    yComplexity: 74,
    tier: 'Tier 2 High Growth',
    icpPriority: 'Other High-Exposure Enterprise',
    keyDrivers: ['Electronic Medical Records', 'UU PDP Protection', 'Patient Portal Security', 'External Exposure'],
    rationale: 'UU PDP compliance pressure on electronic medical records drives urgent need for external attack surface defense.'
  }
];

export const USE_CASE_MATRIX_DATA: UseCaseItem[] = [
  {
    id: 'uc_regulatory',
    title: 'OJK & UU PDP Continuous Regulatory Attestation',
    businessImpact: 96,
    adoptionReadiness: 92,
    triggerEvent: 'Annual audit cycles, OJK inspection readiness, UU PDP compliance deadline',
    targetBuyer: 'CISO / Head of Compliance & Risk',
    bronyxRole: 'Audit-ready reporting mapped directly to SEOJK 29/2022 & UU PDP technical safeguards',
    commercialValue: 'Converts discretionary consulting spend into non-negotiable compliance ARR'
  },
  {
    id: 'uc_cicd',
    title: 'Pre-Production CI/CD Automated Security Gates (DevSecOps)',
    businessImpact: 92,
    adoptionReadiness: 90,
    triggerEvent: 'Weekly or bi-weekly code sprint releases, major feature rollouts',
    targetBuyer: 'VP DevSecOps / Engineering Lead',
    bronyxRole: 'API webhooks trigger autonomous Kali testing; 1-click retest confirms developer code fixes',
    commercialValue: 'Unblocks software delivery bottlenecks; guarantees continuous usage and high retention'
  },
  {
    id: 'uc_supply_chain',
    title: 'Manufacturing & Distribution Supply Chain Portal Hardening',
    businessImpact: 88,
    adoptionReadiness: 85,
    triggerEvent: 'ERP cloud migrations, B2B dealer portal expansion, vendor access audits',
    targetBuyer: 'CIO / Head of IT Infrastructure / Security Operations Lead',
    bronyxRole: 'Safeguards interconnected supplier networks and dealer APIs with zero operational disruption',
    commercialValue: 'Prevents supply chain business interruptions and protects operational continuity'
  },
  {
    id: 'uc_pci_dss',
    title: 'PCI DSS v4.0 Requirement 11 On-Demand Verification',
    businessImpact: 89,
    adoptionReadiness: 91,
    triggerEvent: 'Payment gateway updates, merchant aggregator compliance renewals',
    targetBuyer: 'Head of SecOps / Security Architect',
    bronyxRole: 'Autonomous multi-vector validation verifying payment card data isolation without disruption',
    commercialValue: 'Eliminates repeat consultant fees for recurring quarterly verification'
  },
  {
    id: 'uc_hybrid',
    title: 'Board-Level Cyber Resilience Attestation (Human-in-the-Loop)',
    businessImpact: 94,
    adoptionReadiness: 82,
    triggerEvent: 'Board of Directors risk committee reviews, institutional investor due diligence',
    targetBuyer: 'Board Risk Committee / CEO / CISO',
    bronyxRole: 'Bronyx continuous platform telemetry + ITSEC Asia Senior Red Team certified executive attestation',
    commercialValue: 'Premium enterprise master license bundled with high-margin ITSEC advisory wrap'
  }
];

export const GTM_POSITIONING_DIMENSIONS: PositioningDimension[] = [
  {
    dimension: 'Testing Cadence',
    manualPentest: '1–2 times per year (Spot-check snapshot)',
    automatedScanners: 'Daily or Weekly scheduled scans',
    bronyxAiPlatform: 'Continuous 24/7 + On-demand API trigger',
    salesAdvantage: 'Transitions customer spend from annual project capex to recurring ARR'
  },
  {
    dimension: 'Execution Speed',
    manualPentest: '2 to 4 weeks execution + 1 week reporting',
    automatedScanners: '1 to 4 hours per scan run',
    bronyxAiPlatform: 'Hours for full exploit verification + instant report',
    salesAdvantage: 'Enables 5-day PoC close vs 90-day consulting sales cycles'
  },
  {
    dimension: 'Depth vs Scalability',
    manualPentest: 'Deep exploit chaining but zero scalability',
    automatedScanners: 'High scalability but shallow (surface only)',
    bronyxAiPlatform: 'Autonomous multi-agent exploit chaining at cloud scale',
    salesAdvantage: 'Solves the classic trade-off between depth and speed'
  },
  {
    dimension: 'Signal-to-Noise Ratio',
    manualPentest: 'Low noise (human filtered) but static report',
    automatedScanners: 'High noise: thousands of false positive CVEs',
    bronyxAiPlatform: 'Verified exploit pathways with zero false positives',
    salesAdvantage: 'SecOps teams stop wasting weeks chasing theoretical non-exploitable CVEs'
  },
  {
    dimension: 'Safety & Blast Radius',
    manualPentest: 'Human caution but prone to consultant mistake',
    automatedScanners: 'Generic payloads with occasional service crashes',
    bronyxAiPlatform: 'Configurable safe-exploitation modes & strict scoping',
    salesAdvantage: 'Disarms banking CISOs fear of core system downtime'
  },
  {
    dimension: 'Remediation Output',
    manualPentest: '100-page static PDF weeks after test',
    automatedScanners: 'Generic CVE advisory links',
    bronyxAiPlatform: 'Contextual developer code snippets + 1-click retest',
    salesAdvantage: 'Loved by developers; drives viral bottom-up adoption'
  },
  {
    dimension: 'Trust Architecture',
    manualPentest: 'Depends entirely on consultant quality',
    automatedScanners: 'Blackbox software vendor with no local backing',
    bronyxAiPlatform: 'AI autonomous engine backed by ITSEC Asia certified specialists',
    salesAdvantage: 'Combines SaaS speed with Tier-1 enterprise cybersecurity credibility'
  }
];

export const VALUE_PROPOSITION_CHAIN = [
  {
    step: '1. PRODUCT CAPABILITY',
    content: 'Multi-Agent AI orchestrating Kali Linux security tools with safe-exploitation modes, Cloud VPC / On-Premise air-gapped deployment, and continuous CI/CD triggering.'
  },
  {
    step: '2. CUSTOMER PROBLEM',
    content: 'Weekly digital releases leave 360 days of blind spots between annual manual pentests, creating massive OJK & UU PDP liability and operational risk.'
  },
  {
    step: '3. BUSINESS VALUE',
    content: 'Guarantees audit-ready compliance 24/7, accelerates security testing from weeks to hours, and cuts operational TCO by 60%.'
  },
  {
    step: '4. COMMERCIAL MESSAGE',
    content: '"Continuous Cyber Resilience for Indonesian Enterprise: Autonomous AI Speed with ITSEC Asia Tier-1 Human Credibility."'
  }
];

export const SALES_MOTION_PILLARS = [
  {
    channel: 'Existing ITSEC Base Cross-Sell',
    shareModelled: '40% Initial Pipeline',
    mechanics: 'Audit ITSEC 300+ enterprise client roster; offer continuous Bronyx upgrade to accounts currently paying for annual manual pentests.',
    leadTime: 'Shortest (15–30 Days)'
  },
  {
    channel: 'Enterprise Direct Outbound (Jabodetabek)',
    shareModelled: '35% Initial Pipeline',
    mechanics: 'Target top 50 scored accounts via Free Initial Security Health Checks anchored on OJK SEOJK 29/2022 and UU PDP compliance.',
    leadTime: 'Medium (45–60 Days)'
  },
  {
    channel: 'System Integrator & Cloud Co-Sell',
    shareModelled: '25% Initial Pipeline',
    mechanics: 'Partner with Tier-1 SIs (Multipolar, Reycom Data Solusi, Mastersystem) to attach Bronyx to digital core banking and cloud transformation contracts.',
    leadTime: 'Scale Engine (60–90 Days)'
  }
];
