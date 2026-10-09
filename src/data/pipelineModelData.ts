export type PipelineStageKey = 
  | 'prospect'
  | 'qualified'
  | 'discovery'
  | 'demo'
  | 'poc'
  | 'proposal'
  | 'negotiation'
  | 'won';

export interface PipelineStageConfig {
  key: PipelineStageKey;
  label: string;
  order: number;
  probabilityWeight: number; // e.g. 0.10 for prospect, 0.90 for negotiation, 1.0 for won
  stageColor: string;
}

export const PIPELINE_STAGES: PipelineStageConfig[] = [
  { key: 'prospect', label: 'Prospect', order: 1, probabilityWeight: 0.10, stageColor: '#71717a' },
  { key: 'qualified', label: 'Qualified', order: 2, probabilityWeight: 0.20, stageColor: '#a1a1aa' },
  { key: 'discovery', label: 'Discovery', order: 3, probabilityWeight: 0.35, stageColor: '#38bdf8' },
  { key: 'demo', label: 'Demo', order: 4, probabilityWeight: 0.50, stageColor: '#818cf8' },
  { key: 'poc', label: 'PoC (5-Day)', order: 5, probabilityWeight: 0.65, stageColor: '#fb7185' },
  { key: 'proposal', label: 'Proposal', order: 6, probabilityWeight: 0.75, stageColor: '#f43f5e' },
  { key: 'negotiation', label: 'Negotiation', order: 7, probabilityWeight: 0.85, stageColor: '#e11d48' },
  { key: 'won', label: 'Closed Won', order: 8, probabilityWeight: 1.00, stageColor: '#10b981' },
];

export interface PipelineAccount {
  id: string;
  name: string;
  shortName?: string;
  sector: string;
  city: string;
  mapCoords: { x: number; y: number };
  dealValueIdrMillions: number; // e.g. 450 = IDR 450 Million ARR
  stage: PipelineStageKey;
  // Composite Score Components (0-20 each, Total 100)
  potential: number;
  fit: number;
  urgency: number;
  access: number;
  probability: number;
  compositeScore: number;
  decisionMaker: string;
  useCase: string;
  nextAction: string;
  nextMeetingDate: string;
  listingStatus: string;
}

export const INITIAL_PIPELINE_ACCOUNTS: PipelineAccount[] = [
  {
    id: 'bca',
    name: 'PT Bank Central Asia Tbk',
    shortName: 'BCA',
    sector: 'Banking',
    city: 'Jakarta',
    mapCoords: { x: 295, y: 295 },
    dealValueIdrMillions: 650,
    stage: 'negotiation',
    potential: 20,
    fit: 19,
    urgency: 20,
    access: 18,
    probability: 19,
    compositeScore: 96,
    decisionMaker: 'CISO / Head of Information Security',
    useCase: 'Continuous API Pentest for myBCA & Mobile Core under SEOJK 29/2022',
    nextAction: 'Finalize SLA & Safe-Exploitation Safe Harbor clause with legal team',
    nextMeetingDate: 'Day 68 · Contract Finalization',
    listingStatus: 'IDX: BBCA'
  },
  {
    id: 'mandiri',
    name: 'PT Bank Mandiri (Persero) Tbk',
    shortName: 'Mandiri',
    sector: 'Banking',
    city: 'Jakarta',
    mapCoords: { x: 300, y: 290 },
    dealValueIdrMillions: 600,
    stage: 'proposal',
    potential: 20,
    fit: 19,
    urgency: 19,
    access: 18,
    probability: 19,
    compositeScore: 95,
    decisionMaker: 'CISO / Chief Technology Officer',
    useCase: 'Livin ecosystem microservices automated vulnerability verification',
    nextAction: 'Submit formal Enterprise Master Subscription proposal for Board review',
    nextMeetingDate: 'Day 62 · Commercial Proposal Review',
    listingStatus: 'IDX: BMRI'
  },
  {
    id: 'telkomsel',
    name: 'PT Telekomunikasi Selular (Telkomsel)',
    shortName: 'Telkomsel',
    sector: 'Telecommunication',
    city: 'Jakarta',
    mapCoords: { x: 296, y: 296 },
    dealValueIdrMillions: 550,
    stage: 'poc',
    potential: 20,
    fit: 19,
    urgency: 19,
    access: 19,
    probability: 19,
    compositeScore: 96,
    decisionMaker: 'VP Information Security / GM Cyber Defense',
    useCase: 'MyTelkomsel super-app external attack surface 5-day scoped PoC',
    nextAction: 'Present Day-5 exploit scorecard showing zero blast radius verification',
    nextMeetingDate: 'Day 52 · PoC Readout Session',
    listingStatus: 'Subsidiary TLKM'
  },
  {
    id: 'jago',
    name: 'PT Bank Jago Tbk',
    shortName: 'Jago',
    sector: 'Fintech',
    city: 'Jakarta',
    mapCoords: { x: 302, y: 298 },
    dealValueIdrMillions: 480,
    stage: 'won',
    potential: 19,
    fit: 20,
    urgency: 19,
    access: 18,
    probability: 20,
    compositeScore: 96,
    decisionMaker: 'Head of Information Security / VP Engineering',
    useCase: 'CI/CD pipeline webhook integration with automated 1-click retest',
    nextAction: 'Customer Success handoff & agent deployment into dedicated VPC',
    nextMeetingDate: 'Day 75 · Production Kickoff',
    listingStatus: 'IDX: ARTO'
  },
  {
    id: 'dana',
    name: 'PT Espay Debit Indonesia Koe (DANA)',
    shortName: 'DANA',
    sector: 'Fintech',
    city: 'Jakarta',
    mapCoords: { x: 298, y: 302 },
    dealValueIdrMillions: 450,
    stage: 'poc',
    potential: 19,
    fit: 19,
    urgency: 19,
    access: 18,
    probability: 18,
    compositeScore: 93,
    decisionMaker: 'Head of Cyber Security / Lead SecOps',
    useCase: 'PCI DSS v4.0 Requirement 11 automated pentest and QRIS gateway testing',
    nextAction: 'Execute scheduled non-destructive attack simulation on staging environment',
    nextMeetingDate: 'Day 48 · PoC Milestone 2',
    listingStatus: 'Private Enterprise'
  },
  {
    id: 'bri',
    name: 'PT Bank Rakyat Indonesia (Persero) Tbk',
    shortName: 'BRI',
    sector: 'Banking',
    city: 'Jakarta',
    mapCoords: { x: 290, y: 300 },
    dealValueIdrMillions: 600,
    stage: 'demo',
    potential: 20,
    fit: 19,
    urgency: 19,
    access: 18,
    probability: 18,
    compositeScore: 94,
    decisionMaker: 'CISO / Head of Cyber Defence Operations',
    useCase: 'Automated vulnerability scanning across BRImo and BRILink API gateways',
    nextAction: 'Demonstrate live Kali agent multi-vector orchestration to SecOps team',
    nextMeetingDate: 'Day 38 · Live Technical Demo',
    listingStatus: 'IDX: BBRI'
  },
  {
    id: 'bni',
    name: 'PT Bank Negara Indonesia (Persero) Tbk',
    shortName: 'BNI',
    sector: 'Banking',
    city: 'Jakarta',
    mapCoords: { x: 305, y: 295 },
    dealValueIdrMillions: 500,
    stage: 'demo',
    potential: 19,
    fit: 18,
    urgency: 19,
    access: 18,
    probability: 18,
    compositeScore: 92,
    decisionMaker: 'CISO / Division Head IT Security Architecture',
    useCase: 'wondr by BNI banking application continuous automated penetration testing',
    nextAction: 'Scope 5-day non-production test assets with security architects',
    nextMeetingDate: 'Day 41 · Technical Scoping Workshop',
    listingStatus: 'IDX: BBNI'
  },
  {
    id: 'indosat',
    name: 'PT Indosat Tbk (IOH)',
    shortName: 'Indosat',
    sector: 'Telecommunication',
    city: 'Jakarta',
    mapCoords: { x: 292, y: 294 },
    dealValueIdrMillions: 520,
    stage: 'discovery',
    potential: 19,
    fit: 19,
    urgency: 18,
    access: 19,
    probability: 18,
    compositeScore: 93,
    decisionMaker: 'CISO / VP Network Security',
    useCase: 'AI Cloud infrastructure perimeter validation and enterprise B2B partner testing',
    nextAction: 'Conduct threat briefing with CISO office reviewing OJK and UU PDP obligations',
    nextMeetingDate: 'Day 32 · Discovery Briefing',
    listingStatus: 'IDX: ISAT'
  },
  {
    id: 'pln',
    name: 'PT PLN (Persero)',
    shortName: 'PLN',
    sector: 'Energy',
    city: 'Jakarta',
    mapCoords: { x: 298, y: 288 },
    dealValueIdrMillions: 550,
    stage: 'discovery',
    potential: 19,
    fit: 18,
    urgency: 19,
    access: 17,
    probability: 19,
    compositeScore: 92,
    decisionMaker: 'Executive VP IT / Head of CSIRT PLN',
    useCase: 'PLN Mobile ecosystem + SCADA boundary non-destructive penetration testing',
    nextAction: 'Present zero blast radius architecture whitepaper to CSIRT leadership',
    nextMeetingDate: 'Day 35 · Executive Threat Session',
    listingStatus: 'State-Owned (BUMN)'
  },
  {
    id: 'tokopedia',
    name: 'PT Tokopedia (ShopTokopedia)',
    shortName: 'Tokopedia',
    sector: 'E-Commerce',
    city: 'Jakarta',
    mapCoords: { x: 294, y: 301 },
    dealValueIdrMillions: 480,
    stage: 'qualified',
    potential: 19,
    fit: 19,
    urgency: 19,
    access: 19,
    probability: 19,
    compositeScore: 95,
    decisionMaker: 'Head of Information Security / VP Infrastructure',
    useCase: 'Automated testing of merchant APIs, payment integrations, and microservices',
    nextAction: 'Qualify BANT budget allocation for automated DAST replacement',
    nextMeetingDate: 'Day 24 · Qualification Call',
    listingStatus: 'IDX: GOTO'
  },
  {
    id: 'siloam',
    name: 'PT Siloam International Hospitals Tbk',
    shortName: 'Siloam',
    sector: 'Healthcare',
    city: 'Jakarta',
    mapCoords: { x: 297, y: 303 },
    dealValueIdrMillions: 380,
    stage: 'qualified',
    potential: 18,
    fit: 18,
    urgency: 19,
    access: 18,
    probability: 18,
    compositeScore: 91,
    decisionMaker: 'CIO / Head of Hospital Information Systems',
    useCase: 'MySiloam patient app & electronic medical record API safeguarding under UU PDP',
    nextAction: 'Deliver UU PDP healthcare compliance package and schedule discovery',
    nextMeetingDate: 'Day 26 · Compliance Briefing',
    listingStatus: 'IDX: SILO'
  },
  {
    id: 'bank_jatim',
    name: 'PT Bank Jatim Tbk',
    shortName: 'Bank Jatim',
    sector: 'Banking',
    city: 'Surabaya',
    mapCoords: { x: 440, y: 315 },
    dealValueIdrMillions: 350,
    stage: 'prospect',
    potential: 17,
    fit: 18,
    urgency: 19,
    access: 17,
    probability: 16,
    compositeScore: 87,
    decisionMaker: 'Head of IT & Security / Risk Head',
    useCase: 'JConnect mobile banking penetration testing and regional treasury portal',
    nextAction: 'Warm introduction through ITSEC Surabaya regional enterprise team',
    nextMeetingDate: 'Day 18 · Initial Outbound Intro',
    listingStatus: 'IDX: BJTM'
  },
  {
    id: 'pertamina_balikpapan',
    name: 'PT Kilang Pertamina Balikpapan (RU V)',
    shortName: 'Pertamina',
    sector: 'Energy',
    city: 'Balikpapan',
    mapCoords: { x: 520, y: 215 },
    dealValueIdrMillions: 420,
    stage: 'prospect',
    potential: 17,
    fit: 17,
    urgency: 18,
    access: 17,
    probability: 17,
    compositeScore: 86,
    decisionMaker: 'IT Manager RU V / Cyber Lead',
    useCase: 'Refinery operations enterprise web interface penetration testing',
    nextAction: 'Identify key security stakeholders in Balikpapan operational hub',
    nextMeetingDate: 'Day 20 · Contact Mapping',
    listingStatus: 'State-Owned (BUMN)'
  },
  {
    id: 'dci_indonesia',
    name: 'PT DCI Indonesia Tbk',
    shortName: 'DCI',
    sector: 'Technology',
    city: 'Bandung',
    mapCoords: { x: 325, y: 310 },
    dealValueIdrMillions: 380,
    stage: 'prospect',
    potential: 18,
    fit: 18,
    urgency: 18,
    access: 18,
    probability: 18,
    compositeScore: 90,
    decisionMaker: 'VP Infrastructure / Security Lead',
    useCase: 'Customer cloud management plane and cross-connect portal security',
    nextAction: 'Initiate exploratory dialogue on co-location tenant security bundling',
    nextMeetingDate: 'Day 22 · Partner Exploration',
    listingStatus: 'IDX: DCII'
  },
  {
    id: 'vale_makassar',
    name: 'PT Vale Indonesia Tbk',
    shortName: 'Vale',
    sector: 'Mining',
    city: 'Makassar',
    mapCoords: { x: 590, y: 265 },
    dealValueIdrMillions: 400,
    stage: 'prospect',
    potential: 17,
    fit: 17,
    urgency: 17,
    access: 17,
    probability: 16,
    compositeScore: 84,
    decisionMaker: 'Head of Corporate IT / Risk Manager',
    useCase: 'Supply chain supplier portal and enterprise ERP boundary security testing',
    nextAction: 'Engage corporate risk directorate with supply chain vulnerability brief',
    nextMeetingDate: 'Day 25 · Risk Discussion',
    listingStatus: 'IDX: INCO'
  }
];

// 5. SHORT-TERM & ONE-YEAR PIPELINE MANAGEMENT TARGETS
export interface ShortTermExecutionPlan {
  statusLabel: string; // "TARGET / PROPOSED EXECUTION PLAN"
  territory: string; // "Jabodetabek Focused"
  targetAccountsCount: number; // 50 Potential Accounts
  initialWonDealsTarget: string; // "5–8 Commercial Deals"
  flowStages: {
    step: number;
    name: string;
    description: string;
  }[];
  rationale: string;
}

export interface OneYearTargetFramework {
  statusLabel: string;
  minConversionRate: string; // "≥ 30% from mature/qualified to close"
  healthyPipelineBuffer: string; // "3.5x – 4.0x quota coverage"
  revenueMetrics: {
    label: string;
    target: string;
    description: string;
  }[];
  activityMetrics: {
    label: string;
    target: string;
    description: string;
  }[];
}

export const SHORT_TERM_TARGET_PLAN: ShortTermExecutionPlan = {
  statusLabel: 'TARGET / PROPOSED EXECUTION PLAN (Rencana Eksekusi Diusulkan · Target Sales Lead: Harry Gultom)',
  territory: 'Jabodetabek Enterprise & Regulated Hubs',
  targetAccountsCount: 50,
  initialWonDealsTarget: '1 Deal Won / Bulan (Rp 1 Miliar/Bulan) · Achieve Perdana di Bulan 2–3 (Q4–Q1)',
  flowStages: [
    { step: 1, name: 'Proactive Prospecting', description: 'Memetakan 50 akun target potensial di Jabodetabek (Perbankan, BUMN, Manufaktur) dengan kebutuhan deteksi celah kebocoran data.' },
    { step: 2, name: 'Strict Qualification', description: 'Kualifikasi urgensi UU PDP No. 27/2022 & OJK SEOJK 29/2022 serta kapasitas aset digital hingga 500 device.' },
    { step: 3, name: 'Health Check / 5-Day PoC', description: 'Menawarkan Free Initial Security Health Check (3–5 hari) mendeteksi celah kebocoran data pada staging tanpa risiko blast radius.' },
    { step: 4, name: 'Commercial Closing (Rp 1M–2M/Bulan)', description: 'Mengonversi temuan celah keamanan empiris menjadi deal komersial (@ Rp 1 Miliar per 500 device): B2 (1 Deal = Rp 1M), B3 (2 Deals = Rp 2M), mengunci total 90 hari Rp 3,0 Miliar (3 Deals Won).' }
  ],
  rationale: 'Fokus intensif pada 50 akun Jabodetabek memaksimalkan pertemuan CISO/CIO tatap muka dan memastikan tercapainya target pendapatan baseline Rp 1 Miliar per bulan bagi Sales Lead Harry Gultom.'
};

export const ONE_YEAR_TARGET_FRAMEWORK: OneYearTargetFramework = {
  statusLabel: 'ONE-YEAR STRATEGIC SALES FRAMEWORK (Target Horizon 1 Tahun · Skalabilitas Optimis)',
  minConversionRate: 'Minimal 30% Tingkat Konversi dari Peluang Terkualifikasi/Mature ke Closing Won',
  healthyPipelineBuffer: '3.5x – 4.0x Rasio Cakupan Pipeline Berkelanjutan (Rp 10,0 M – Rp 20,0 M / Bulan)',
  revenueMetrics: [
    { label: 'Monthly Quota (Harry Gultom)', target: 'B1 Rp 0 → B2 Rp 1,0M → B3 Rp 2,0M (Total 90D: Rp 3,0M / 3 Deals Won)', description: 'Target bulanan Sales Lead yang bertumbuh secara terukur: First Win di B2 (Rp 1,0M), akselerasi growth di B3 (Rp 2,0M), mengunci total 90 hari Rp 3,0 Miliar.' },
    { label: 'Flagship Deal Value', target: 'Rp 1,0 Miliar / Bulan (Maks. 500 Device)', description: 'Harga lisensi bulanan standar enterprise (atau Rp 12 Miliar per tahun per logo).' },
    { label: 'Cumulative ARR Target (Y1)', target: 'Rp 24,0 M – Rp 25,0 Miliar ARR', description: 'Total nilai pendapatan kontrak berulang tahunan dari portofolio klien enterprise aktif sepanjang siklus 4 kuartal.' },
    { label: 'Net Retention Rate (NRR)', target: '120% – 130% LTV Expansion', description: 'Peningkatan nilai kontrak dari ekspansi holding, anak usaha (subsidiaries), dan upgrade kapasitas device (>500).' }
  ],
  activityMetrics: [
    { label: 'Target Accounts Focus', target: '50 Akun Terpilih Jabodetabek', description: 'Radar akun perbankan, fintech terlisensi OJK, manufaktur, dan BUMN misi-kritis.' },
    { label: 'Executive Discovery Meetings', target: '16+ Pertemuan C-Level / Bulan', description: 'Diskusi tatap muka bersama CISO, CIO, dan Direktur Manajemen Risiko.' },
    { label: 'Scoped 5-Day PoCs', target: '8–14 PoC Deteksi Kebocoran Data / Bulan', description: 'Uji aman 5-hari membuktikan celah kebocoran data nyata dengan zero blast radius.' },
    { label: 'Mature Opportunities to Close', target: '≥ 30% Rasio Menang (Min 1 Won / Bulan)', description: '3 peluang matang di tahap negosiasi menghasilkan 1 kesepakatan komersial (@ Rp 1 M/bulan).' },
    { label: 'Rolling Pipeline Value', target: 'Rp 10,0 M – Rp 20,0 M Berkelanjutan', description: 'Nilai pipeline aktif bergulir untuk menjamin 4,0x cakupan buffer terhadap target bulanan.' }
  ]
};

