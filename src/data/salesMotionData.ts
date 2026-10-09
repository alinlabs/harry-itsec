export interface BuyerCommitteeNode {
  id: string;
  role: string;
  title: string;
  influenceType: 'DECISION MAKER' | 'ECONOMIC BUYER' | 'TECHNICAL BUYER' | 'CHAMPION' | 'GATEKEEPER' | 'SPONSOR';
  stakeholderCategory: 'CISO' | 'CIO' | 'IT Leadership' | 'Cybersecurity Leadership' | 'Directors / Management';
  reportingTo?: string;
  coords: { x: number; y: number };
  primaryConcern: string;
  businessQuestion: string;
  valueElevation: {
    businessProblem: string;
    cyberRisk: string;
    impact: string;
    regulatoryImpact: string;
    solution: string;
    businessValue: string;
  };
  proofRequired: string;
  nextSalesAction: string;
}

export interface PoCStep {
  step: string;
  label: string;
  objective: string;
  output: string;
  salesMilestone: string;
}

export interface StageVelocityMetric {
  stage: string;
  conversionRatePercent: number;
  averageCycleDays: number;
  velocityIndex: number; // 0-100
  bottleneckMitigation: string;
}

// 6. END-TO-END ENTERPRISE SALES CYCLE
export interface EndToEndSalesStage {
  step: number;
  name: string;
  phase: 'PROSPECTING & DISCOVERY' | 'ENGAGEMENT & PROOF' | 'CLOSING & ADOPTION' | 'EXPANSION & RECURRING';
  description: string;
  salesLeadDeliverable: string;
}

export const END_TO_END_ENTERPRISE_SALES_CYCLE: EndToEndSalesStage[] = [
  { step: 1, name: 'Market Mapping', phase: 'PROSPECTING & DISCOVERY', description: 'Memetakan total addressable market dan lanskap perbankan, manufaktur, serta BUMN teregulasi di Indonesia.', salesLeadDeliverable: 'Universe 120 akun target terverifikasi' },
  { step: 2, name: 'Target Account (ICP)', phase: 'PROSPECTING & DISCOVERY', description: 'Memilih 50 akun prioritas Jabodetabek berdasarkan eksposur risiko dan kepatuhan regulasi.', salesLeadDeliverable: 'Scored account prioritization matrix' },
  { step: 3, name: 'Enterprise Prospecting', phase: 'PROSPECTING & DISCOVERY', description: 'Outreach proaktif menawarkan Free Initial Security Health Check dan riset ancaman terarah.', salesLeadDeliverable: 'Initial Threat Briefing Dossier' },
  { step: 4, name: 'Executive Discovery', phase: 'PROSPECTING & DISCOVERY', description: 'Menggali pemicu kepatuhan audit OJK/UU PDP dan bottleneck rilis sprint mingguan tim dev.', salesLeadDeliverable: 'BANT/MEDDIC Discovery Scorecard' },
  { step: 5, name: 'C-Level Engagement', phase: 'ENGAGEMENT & PROOF', description: 'Menaikkan percakapan dari feature ke business problem, cyber risk, financial & regulatory impact.', salesLeadDeliverable: 'CISO & Board Risk Strategy Deck' },
  { step: 6, name: 'Strategic Pitching', phase: 'ENGAGEMENT & PROOF', description: 'Mempresentasikan solusi komersial terintegrasi: Cloud VPC atau On-Premise Air-Gapped dengan Human-in-the-Loop.', salesLeadDeliverable: 'Tailored Solution Architecture Pitch' },
  { step: 7, name: 'Product Demo', phase: 'ENGAGEMENT & PROOF', description: 'Live showcase orkestrasi multi-agent Kali Linux mengeksekusi exploit verification secara aman.', salesLeadDeliverable: 'Technical Capability Verification' },
  { step: 8, name: '5-Day Guided PoC', phase: 'ENGAGEMENT & PROOF', description: 'Pengujian terarah 5 hari pada lingkungan staging pembuktian celah nyata tanpa downtime (zero blast radius).', salesLeadDeliverable: 'Signed Success Criteria & Audit Scorecard' },
  { step: 9, name: 'Commercial Negotiation', phase: 'CLOSING & ADOPTION', description: 'Penyelarasan klausul SLA, data residency PP 71, dan integrasi panel vendor ITSEC Asia.', salesLeadDeliverable: 'Enterprise Master Contract Agreement' },
  { step: 10, name: 'Contract Closing (Won)', phase: 'CLOSING & ADOPTION', description: 'Penandatanganan kontrak tahunan ARR, komitmen implementasi, dan penguncian kuota penjualan.', salesLeadDeliverable: 'Executed ARR Subscription Order' },
  { step: 11, name: 'Customer Adoption', phase: 'CLOSING & ADOPTION', description: 'Serah terima terstruktur ke Customer Success, aktivasi tenant, dan pelatihan tim SecOps.', salesLeadDeliverable: 'Tenant Activation & DevSecOps Webhook' },
  { step: 12, name: 'Quarterly Business Review (QBR)', phase: 'EXPANSION & RECURRING', description: 'Review berkala bersama C-Level membahas metrik pemindaian, remediated risks, dan kebutuhan baru.', salesLeadDeliverable: 'Executive QBR Attestation Report' },
  { step: 13, name: 'Upselling & Cross-Selling', phase: 'EXPANSION & RECURRING', description: 'Menambah kuota endpoint API, modul network internal, dan advisory Red Team ITSEC Asia.', salesLeadDeliverable: 'Subscription Expansion Addendum' },
  { step: 14, name: 'Account Expansion', phase: 'EXPANSION & RECURRING', description: 'Memperluas lisensi ke anak perusahaan konglomerasi dan cabang regional (Land-and-Expand 2.5x).', salesLeadDeliverable: 'Enterprise Group Enterprise License' }
];

// 7. C-LEVEL ENGAGEMENT COMMUNICATION ELEVATION LADDER
export interface ValueElevationLadderStep {
  level: number;
  title: string;
  enterpriseContext: string;
  salesLeadDialogue: string;
}

export const C_LEVEL_ELEVATION_LADDER: ValueElevationLadderStep[] = [
  {
    level: 1,
    title: '1. Business Problem',
    enterpriseContext: 'Rilis fitur mobile banking dan API mingguan outpace jadwal pentest tahunan, menciptakan 360 hari blind spot.',
    salesLeadDialogue: '"Aplikasi perbankan Bapak merilis update setiap Kamis, namun pengujian keamanan pihak ketiga hanya dilakukan 1-2 kali setahun."'
  },
  {
    level: 2,
    title: '2. Cyber Risk',
    enterpriseContext: 'Celah eksploitasi zero-day dan miskonfigurasi API terbuka di internet tanpa terdeteksi antara siklus audit.',
    salesLeadDialogue: '"Di antara dua audit tersebut, penyerang hanya membutuhkan waktu 4 jam untuk menemukan dan mengeksploitasi endpoint yang tidak terlindungi."'
  },
  {
    level: 3,
    title: '3. Operational & Financial Impact',
    enterpriseContext: 'Potensi kebocoran data nasabah, gangguan layanan transaksi perbankan, dan biaya darurat investigasi insiden.',
    salesLeadDialogue: '"Insiden kebocoran tidak hanya memicu kerugian finansial langsung, tetapi juga melumpuhkan transaksi dan merusak reputasi perbankan."'
  },
  {
    level: 4,
    title: '4. Regulatory Impact',
    enterpriseContext: 'Sanksi OJK SEOJK 29/2022, denda UU PDP hingga 2% pendapatan tahunan, dan tanggung jawab hukum personal direksi.',
    salesLeadDialogue: '"UU PDP dan SEOJK 29 meminta pembuktian ketahanan berkelanjutan. Dewan direksi dapat dimintai pertanggungjawaban personal jika audit gagal."'
  },
  {
    level: 5,
    title: '5. Solution Architecture',
    enterpriseContext: 'Bronyx AI: Pengujian penetrasi otonom berkelanjutan dengan safe-exploitation, zero blast radius, dan validasi pakar ITSEC Asia.',
    salesLeadDialogue: '"Bronyx menghadirkan continuous autonomous exploit testing: memverifikasi celah nyata dalam hitungan jam dengan zero blast radius."'
  },
  {
    level: 6,
    title: '6. Tangible Business Value',
    enterpriseContext: 'Jaminan kepatuhan audit 24/7 siap pakai, penghematan TCO operasional 60%, dan kecepatan rilis software tanpa hambatan.',
    salesLeadDialogue: '"Hasilnya: Dewan Komisaris dan OJK menerima laporan audit terverifikasi setiap saat, biaya TCO terpangkas 60%, dan tim dev merilis tanpa penundaan."'
  }
];

export const BUYER_COMMITTEE_NODES: BuyerCommitteeNode[] = [
  {
    id: 'ciso',
    role: 'CISO',
    title: 'Chief Information Security Officer',
    influenceType: 'DECISION MAKER',
    stakeholderCategory: 'CISO',
    coords: { x: 300, y: 70 },
    primaryConcern: 'Continuous cyber resilience & regulatory personal liability (SEOJK 29/2022, UU PDP).',
    businessQuestion: '"Bagaimana saya menjamin ke Dewan Direksi dan OJK bahwa tidak ada celah eksploitasi aktif di antara audit tahunan?"',
    valueElevation: {
      businessProblem: 'Rilis digital mingguan meninggalkan 360 hari blind spot kepatuhan.',
      cyberRisk: 'Kerentanan zero-day dan API staging terbuka dieksploitasi penyerang.',
      impact: 'Potensi insiden kebocoran data transaksi nasabah.',
      regulatoryImpact: 'Sanksi operasional OJK SEOJK 29 & sanksi denda UU PDP No. 27/2022.',
      solution: 'Pengujian eksploitasi otonom berkelanjutan 24/7 dengan verifikasi tanpa downtime.',
      businessValue: 'Audit-ready reporting instan, perlindungan reputasi, dan kepatuhan penuh.'
    },
    proofRequired: 'Peta permukaan serangan berkelanjutan & bukti kepatuhan yang dipetakan langsung ke SEOJK 29.',
    nextSalesAction: 'Deliver Executive Threat Briefing demonstrating continuous assurance vs annual snapshot limits.'
  },
  {
    id: 'cio',
    role: 'CIO / CTO',
    title: 'Chief Information / Technology Officer',
    influenceType: 'ECONOMIC BUYER',
    stakeholderCategory: 'CIO',
    coords: { x: 120, y: 70 },
    reportingTo: 'ciso',
    primaryConcern: 'Biaya konsultasi pengujian melonjak dan penundaan tanggal rilis produk karena menunggu laporan pentest manual 4 minggu.',
    businessQuestion: '"Dapatkah solusi ini memangkas TCO pengujian pihak ketiga sekaligus menjaga sprint rilis produk sesuai jadwal?"',
    valueElevation: {
      businessProblem: 'Biaya konsultan pentest tahunan mahal dan siklus pengujian manual memakan waktu 4 minggu.',
      cyberRisk: 'Rilis fitur tertunda atau dirilis tanpa pengujian memadai demi mengejar tenggat pasar.',
      impact: 'Overhead pengeluaran capex tidak terduga dan kehilangan momentum pasar komersial.',
      regulatoryImpact: 'Pelanggaran target roadmap transformasi digital yang dilaporkan ke dewan.',
      solution: 'Platform langganan software ARR terprediksi dengan eksekusi pengujian dalam hitungan jam.',
      businessValue: 'Hemat biaya TCO hingga 60% dan kecepatan peluncuran fitur digital 5x lebih cepat.'
    },
    proofRequired: 'Model perbandingan TCO 3 tahun: biaya konsultan berulang vs lisensi tahunan Bronyx.',
    nextSalesAction: 'Provide 3-year TCO comparison contrasting recurring spot-test consulting vs Bronyx annual license.'
  },
  {
    id: 'it_director',
    role: 'IT Leadership',
    title: 'VP of Engineering / IT Infrastructure Lead',
    influenceType: 'GATEKEEPER',
    stakeholderCategory: 'IT Leadership',
    coords: { x: 480, y: 70 },
    primaryConcern: 'Stabilitas infrastruktur produksi, keamanan perimeter hybrid cloud, dan kedaulatan data (data residency PP 71).',
    businessQuestion: '"Di mana platform ini berjalan dan bagaimana ia mengakses subnet perbankan tanpa risiko downtime?"',
    valueElevation: {
      businessProblem: 'Pengujian keamanan legacy membebani server atau memicu gangguan jaringan transaksi.',
      cyberRisk: 'Kegagalan isolasi jaringan atau pelanggaran batas kedaulatan data.',
      impact: 'Downtime operasional yang mengganggu operasional perbankan harian.',
      regulatoryImpact: 'Pelanggaran regulasi PP 71 tentang penyelenggaraan sistem elektronik.',
      solution: 'Pilihan On-Premise Air-Gapped Appliance atau Dedicated Private Cloud VPC di Indonesia.',
      businessValue: '100% kedaulatan data lokal terjamin dengan garansi zero blast radius tertulis.'
    },
    proofRequired: 'Blueprint arsitektur On-Premise / Sovereign Cloud VPC dan sertifikasi ISO 27001 ITSEC Asia.',
    nextSalesAction: 'Present technical deployment architecture blueprint to infrastructure security committee.'
  },
  {
    id: 'sec_leader',
    role: 'Cybersecurity Leadership',
    title: 'Head of Cyber Defense / Lead SecOps',
    influenceType: 'TECHNICAL BUYER',
    stakeholderCategory: 'Cybersecurity Leadership',
    coords: { x: 300, y: 175 },
    reportingTo: 'ciso',
    primaryConcern: 'Kelelahan ribuan alert CVE palsu (false positives) dan ketakutan alat otomatis merusak database core.',
    businessQuestion: '"Apakah Bronyx mampu membuktikan jalur eksploitasi nyata tanpa menumbangkan database transaksi core?"',
    valueElevation: {
      businessProblem: 'Scanner DAST menghasilkan ribuan alert teoritis yang tidak dapat dieksploitasi.',
      cyberRisk: 'Tim SecOps membuang waktu memvalidasi alarm palsu sementara celah nyata terlewat.',
      impact: 'Kelelahan analis keamanan dan respons penanganan insiden yang lambat.',
      regulatoryImpact: 'Kegagalan mendeteksi celah yang terdaftar dalam audit keamanan internal.',
      solution: 'Multi-agent exploit chaining yang membuktikan eksploitasi nyata dengan zero false positives.',
      businessValue: 'Efisiensi waktu SecOps 80% dan pembuktian empiris tanpa risiko kerusakan data.'
    },
    proofRequired: 'Log pengujian non-destruktif dan pembuktian safe-exploitation mode pada staging environment.',
    nextSalesAction: 'Stage a 5-day scoped PoC on non-production environment demonstrating exploit verification with zero disruption.'
  },
  {
    id: 'sec_engineer',
    role: 'DevSecOps Lead',
    title: 'Application Security & CI/CD Lead',
    influenceType: 'CHAMPION',
    stakeholderCategory: 'IT Leadership',
    coords: { x: 480, y: 175 },
    reportingTo: 'sec_leader',
    primaryConcern: 'Security menjadi penghambat rilis; developer membenci laporan PDF statis 100 halaman tanpa kode perbaikan.',
    businessQuestion: '"Dapatkah tim kami memicu pengujian via API di GitLab/GitHub dan memberi developer snippet curl perbaikan instan?"',
    valueElevation: {
      businessProblem: 'Laporan pentest PDF 100 halaman sulit diterjemahkan menjadi tiket perbaikan developer.',
      cyberRisk: 'Developer mengabaikan rekomendasi PDF dan merilis kode rentan ke produksi.',
      impact: 'Siklus perbaikan bug keamanan memakan waktu berminggu-minggu.',
      regulatoryImpact: 'Penumpukan backlog kerentanan yang melanggar SLA perbaikan audit.',
      solution: 'Webhook integrasi CI/CD otomatis dengan snippet perbaikan kode dan 1-click retest.',
      businessValue: 'Verifikasi perbaikan dalam hitungan menit; developer menyukai alur kerja terintegrasi.'
    },
    proofRequired: 'Live demo integrasi webhook CI/CD pipeline dengan verifikasi 1-click retest sukses.',
    nextSalesAction: 'Hands-on technical session running Bronyx CLI/API webhook in client staging pipeline.'
  },
  {
    id: 'management_director',
    role: 'Directors & Management',
    title: 'Managing Director / Board Risk Committee',
    influenceType: 'SPONSOR',
    stakeholderCategory: 'Directors / Management',
    coords: { x: 120, y: 175 },
    reportingTo: 'cio',
    primaryConcern: 'Risiko reputasi korporat, tanggung jawab fidusia direksi, dan mitigasi risiko siber skala enterprise.',
    businessQuestion: '"Bagaimana teknologi ini melindungi reputasi perusahaan dan memastikan tata kelola keamanan kami sesuai standar terbaik?"',
    valueElevation: {
      businessProblem: 'Serangan siber berskala besar mengancam kepercayaan publik dan valuasi pemegang saham.',
      cyberRisk: 'Kegagalan pengawasan risiko siber di tingkat dewan direksi dan komisaris.',
      impact: 'Kehilangan kepercayaan nasabah institusi, penalti regulator, dan penurunan valuasi saham.',
      regulatoryImpact: 'Pelanggaran prinsip tata kelola perusahaan yang baik (GCG) dan pengawasan BSSN/OJK.',
      solution: 'Dasbor telemetri eksekutif Bronyx dengan validasi formal pakar ITSEC Asia (IDX: CYBR).',
      businessValue: 'Ketenangan dewan direksi dengan laporan ketahanan siber terverifikasi secara berkala.'
    },
    proofRequired: 'Laporan Executive Summary untuk Dewan Direksi dan rekam jejak emiten publik PT ITSEC Asia Tbk.',
    nextSalesAction: 'Deliver Board-Ready Cyber Resilience Governance Briefing to Risk Committee members.'
  },
  {
    id: 'procurement',
    role: 'Procurement Head',
    title: 'Head of Vendor Sourcing & Procurement',
    influenceType: 'GATEKEEPER',
    stakeholderCategory: 'Directors / Management',
    coords: { x: 120, y: 280 },
    primaryConcern: 'Kredibilitas finansial vendor, kelengkapan legalitas Indonesia, dan kepatuhan terhadap tender formal.',
    businessQuestion: '"Apakah vendor ini berizin resmi di Indonesia dan memiliki rekam jejak terverifikasi di perbankan nasional?"',
    valueElevation: {
      businessProblem: 'Proses evaluasi vendor baru sering memakan waktu 90 hari karena verifikasi legalitas.',
      cyberRisk: 'Risiko ketergantungan pada vendor asing tanpa entitas hukum lokal.',
      impact: 'Tender terhambat atau dibatalkan oleh komite pengadaan.',
      regulatoryImpact: 'Pelanggaran ketentuan pengadaan barang/jasa perusahaan teregulasi.',
      solution: 'Memanfaatkan panel vendor terdaftar PT ITSEC Asia Tbk (perusahaan terbuka IDX: CYBR).',
      businessValue: 'Proses pengadaan cepat tanpa birokrasi pendaftaran vendor baru.'
    },
    proofRequired: 'Dokumen legalitas emiten publik PT ITSEC Asia Tbk, laporan keuangan auditan, dan kontrak master SLA.',
    nextSalesAction: 'Provide pre-approved enterprise contract terms leveraging existing ITSEC vendor registration.'
  },
  {
    id: 'finance',
    role: 'CFO / Finance Controller',
    title: 'Corporate Finance & Budget Director',
    influenceType: 'ECONOMIC BUYER',
    stakeholderCategory: 'Directors / Management',
    coords: { x: 300, y: 280 },
    reportingTo: 'cio',
    primaryConcern: 'Kepastian anggaran operasional dan peralihan dari pengeluaran capex tidak terduga menjadi opex ARR terprediksi.',
    businessQuestion: '"Apakah struktur harga ini memberikan kepastian biaya tahunan seiring ekspansi aset digital kami?"',
    valueElevation: {
      businessProblem: 'Biaya pengujian ad-hoc konsultan tidak terprediksi setiap kali ada aplikasi baru.',
      cyberRisk: 'Anggaran membengkak di tengah tahun anggaran berjalan.',
      impact: 'Deviasi anggaran IT dan ketidakpastian arus kas operasional.',
      regulatoryImpact: 'Penundaan audit kepatuhan karena keterbatasan anggaran ad-hoc.',
      solution: 'Langganan lisensi tahunan (ARR) bertingkat dengan proteksi harga ekspansi multi-tahun.',
      businessValue: 'Pengeluaran anggaran IT dapat diprediksi secara akurat dengan ROI 60% terbukti.'
    },
    proofRequired: 'Kalkulator ROI komparatif 3 tahun dan struktur harga langganan tetap berbasis tier aset.',
    nextSalesAction: 'Structure flexible multi-year payment schedule with quarterly expansion tranches.'
  }
];

export const BUYER_RELATIONSHIP_EDGES = [
  { from: 'ciso', to: 'sec_leader', type: 'directs' },
  { from: 'cio', to: 'ciso', type: 'collaborates' },
  { from: 'cio', to: 'it_director', type: 'directs' },
  { from: 'sec_leader', to: 'sec_engineer', type: 'directs' },
  { from: 'management_director', to: 'cio', type: 'influences' },
  { from: 'management_director', to: 'ciso', type: 'influences' },
  { from: 'ciso', to: 'procurement', type: 'requests' },
  { from: 'cio', to: 'finance', type: 'aligns' },
  { from: 'procurement', to: 'finance', type: 'approves' }
];

export const EIGHT_STAGE_SALES_JOURNEY = [
  { step: '01. DISCOVER', name: 'Trigger Discovery', description: 'Uncover regulatory audit deadline (SEOJK 29), new mobile banking app, or testing frequency bottleneck.' },
  { step: '02. DIAGNOSE', name: 'Gap Diagnosis', description: 'Quantify the 360-day blind spot gap between annual manual pentests and weekly developer release sprints.' },
  { step: '03. DEMONSTRATE', name: 'Technical Showcase', description: 'Live showcase of multi-agent Kali Linux orchestration executing safe exploitation in real-time.' },
  { step: '04. PROVE (PoC)', name: '5-Day Scoped PoC', description: 'Execute zero blast radius verification on client staging environment; prove real exploitable pathways without downtime.' },
  { step: '05. PROPOSE', name: 'Enterprise Proposal', description: 'Deliver customized annual subscription package (Core, Continuous, or Hybrid) aligned with asset scope.' },
  { step: '06. NEGOTIATE', name: 'Procurement Clear', description: 'Resolve safe-harbor clauses, data residency terms, and SLA guarantees leveraging ITSEC vendor panel status.' },
  { step: '07. CLOSE', name: 'Contract Execution', description: 'Sign enterprise agreement, initiate tenant onboarding, and kick off Customer Success deployment.' },
  { step: '08. EXPAND', name: 'Land & Expand', description: 'Land with flagship mobile API (up to 10 targets), expand by 2.5x to cover entire corporate IP and subsidiary perimeter.' }
];

export const POC_EXECUTION_FRAMEWORK: PoCStep[] = [
  {
    step: 'STEP 1: WHY',
    label: 'Compelling Objective',
    objective: 'Agree on the empirical test objective: verify whether weekly code releases contain exploitable flaws before OJK audit.',
    output: 'Mutual Engagement Agreement signed with CISO',
    salesMilestone: 'Locks C-level sponsorship & budget reservation'
  },
  {
    step: 'STEP 2: SCOPE',
    label: 'Safe Boundary Definition',
    objective: 'Define exact staging domain/API endpoints (typically 3–5 flagship APIs or mobile app backend).',
    output: 'Defined Scope Document with Safe Harbor SLA',
    salesMilestone: 'Eliminates legal & infrastructure hesitation'
  },
  {
    step: 'STEP 3: SUCCESS CRITERIA',
    label: 'Empirical Win Conditions',
    objective: 'Agree beforehand: if Bronyx uncovers validated exploitable paths in hours with zero false positives, deal advances to proposal.',
    output: 'Signed Success Criteria Matrix',
    salesMilestone: 'Binds technical outcome directly to commercial purchase'
  },
  {
    step: 'STEP 4: EXECUTION',
    label: '5-Day Controlled Run',
    objective: 'Autonomous multi-agent execution: Recon (Day 1), Safe Exploitation (Day 2-3), Fix Validation (Day 4-5).',
    output: 'Live Autonomous Telemetry & Verified Exploit Chains',
    salesMilestone: 'Demonstrates speed (hours vs 4 weeks manual)'
  },
  {
    step: 'STEP 5: RESULT',
    label: 'Executive Readout',
    objective: 'Joint presentation with CISO & DevSecOps: executive risk scorecard, developer curl fixes, and retest verification.',
    output: 'Audit-Grade Compliance Scorecard',
    salesMilestone: 'Creates unanimous buying consensus in room'
  },
  {
    step: 'STEP 6: COMMERCIAL',
    label: 'Contract Conversion',
    objective: 'Transition completed PoC directly into Enterprise Annual Subscription contract negotiation.',
    output: 'Commercial Contract Submission',
    salesMilestone: 'Converts PoC to Closed Won in under 15 days'
  }
];

export const STAGE_VELOCITY_DATA: StageVelocityMetric[] = [
  { stage: 'Discover → Diagnose', conversionRatePercent: 65, averageCycleDays: 7, velocityIndex: 90, bottleneckMitigation: 'Anchor directly on OJK SEOJK 29/2022 compliance deadlines.' },
  { stage: 'Diagnose → Demonstrate', conversionRatePercent: 75, averageCycleDays: 5, velocityIndex: 88, bottleneckMitigation: 'Schedule tailored demo within 5 days of discovery call.' },
  { stage: 'Demonstrate → PoC', conversionRatePercent: 60, averageCycleDays: 8, velocityIndex: 78, bottleneckMitigation: 'Provide pre-approved 5-Day PoC Scoping Template.' },
  { stage: 'PoC Execution', conversionRatePercent: 85, averageCycleDays: 5, velocityIndex: 95, bottleneckMitigation: 'Dedicated Sales Engineer support to guarantee zero downtime.' },
  { stage: 'PoC → Proposal', conversionRatePercent: 70, averageCycleDays: 10, velocityIndex: 75, bottleneckMitigation: 'Leverage pre-agreed Success Criteria signed prior to PoC.' },
  { stage: 'Proposal → Negotiate', conversionRatePercent: 75, averageCycleDays: 12, velocityIndex: 70, bottleneckMitigation: 'Utilize ITSEC Asia existing vendor master panel contracts.' },
  { stage: 'Negotiate → Won', conversionRatePercent: 80, averageCycleDays: 8, velocityIndex: 82, bottleneckMitigation: 'Standardized liability terms and Indonesian data residency SLAs.' }
];
