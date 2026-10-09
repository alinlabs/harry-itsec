import { 
  StakeholderRoleItem, 
  LifecyclePhaseItem, 
  PocStepItem, 
  DealVelocityMetricItem 
} from './types';

export const STAKEHOLDER_ROLES: StakeholderRoleItem[] = [
  {
    id: 'ciso',
    badge: 'CISO',
    meddpiccRole: 'CHAMPION',
    title: 'Chief Information Security',
    focusId: 'Audit blind spot, sanksi SEOJK 29 & UU PDP.',
    focusEn: 'Audit blind spots, SEOJK 29 & UU PDP fines.',
    valueId: 'Eksploitasi otonom berbasis bukti dengan zero blast radius tergaransi.',
    valueEn: 'Evidence-based autonomous exploit with zero blast radius.',
    badgeColorClass: 'bg-rose-950/80 text-rose-300 border-rose-800',
    hoverBorderClass: 'hover:border-rose-900/60'
  },
  {
    id: 'cio_cto',
    badge: 'CIO / CTO',
    meddpiccRole: 'ECONOMIC',
    title: 'Chief Information / Tech',
    focusId: 'Biaya pentest membengkak, rilis tertunda 4 minggu.',
    focusEn: 'Pentest cost bloat, 4-week release delay.',
    valueId: 'Pangkas TCO pengujian 60% dan percepat siklus rilis 5x.',
    valueEn: 'Cut testing TCO by 60% and accelerate releases 5x.',
    badgeColorClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-800',
    hoverBorderClass: 'hover:border-emerald-900/60'
  },
  {
    id: 'secops',
    badge: 'SecOps / SOC',
    meddpiccRole: 'TECHNICAL',
    title: 'Head of SecOps & Defense',
    focusId: 'Alert fatigue false positives & risiko merusak core.',
    focusEn: 'Alert fatigue false positives & system downtime.',
    valueId: 'Validasi exploit chaining nyata tanpa downtime database transaksi.',
    valueEn: 'Real exploit proof with zero downtime on live banking subnets.',
    badgeColorClass: 'bg-sky-950/80 text-sky-300 border-sky-800',
    hoverBorderClass: 'hover:border-sky-900/60'
  },
  {
    id: 'cfo_legal',
    badge: 'CFO / LEGAL',
    meddpiccRole: 'GATEKEEPER',
    title: 'Procurement & Controller',
    focusId: 'Kredibilitas emiten & onboarding vendor 90 hari.',
    focusEn: 'Vendor viability & 90-day onboarding delay.',
    valueId: 'Aktivasi langsung lewat vendor code PT ITSEC Asia Tbk (IDX: CYBR).',
    valueEn: 'Instant procurement via ITSEC Asia Tbk vendor code.',
    badgeColorClass: 'bg-purple-950/80 text-purple-300 border-purple-800',
    hoverBorderClass: 'hover:border-purple-900/60'
  }
];

export const LIFECYCLE_PHASES: LifecyclePhaseItem[] = [
  {
    phase: 'FASE 1',
    dayRange: 'H1–15',
    phaseColorClass: 'text-rose-400',
    title: 'Mapping & Discovery',
    descId: '50 ICP audit blind spot OJK',
    descEn: '50 ICP OJK gap audit'
  },
  {
    phase: 'FASE 2',
    dayRange: 'H16–30',
    phaseColorClass: 'text-amber-400',
    title: 'Pitch & 5-Day PoC',
    descId: 'Simulasi exploit aman 5 hari',
    descEn: '5-day safe exploit proof'
  },
  {
    phase: 'FASE 3',
    dayRange: 'H31–45',
    phaseColorClass: 'text-emerald-400',
    title: 'Closing & Kontrak ARR',
    descId: 'Vendor code ITSEC Asia',
    descEn: 'Fast-track ITSEC code'
  },
  {
    phase: 'FASE 4',
    dayRange: 'H46–60+',
    phaseColorClass: 'text-sky-400',
    title: 'DevSecOps & QBR',
    descId: 'CI/CD & ekspansi grup 2.5x',
    descEn: 'CI/CD webhook & 2.5x LTV'
  }
];

export const POC_STEPS: PocStepItem[] = [
  {
    step: 'HARI 1',
    label: 'SETUP',
    title: 'Sensor Deployment',
    descId: 'Discovery 500 node asset & alignment kriteria sukses.',
    descEn: '500 node discovery & success criteria alignment.',
    checkmarkText: '✓ Rules of Engagement',
    colorScheme: 'rose'
  },
  {
    step: 'HARI 2–3',
    label: 'SIMULASI',
    title: 'Safe Exploit Sim',
    descId: 'Orkestrasi multi-agent Kali bukti rantai eksploit nyata tanpa downtime.',
    descEn: 'Autonomous exploit chaining proves blast path with zero downtime.',
    checkmarkText: '✓ Confirmed Attack Path',
    colorScheme: 'emerald'
  },
  {
    step: 'HARI 4',
    label: 'VERIFIKASI',
    title: 'Remediation & Retest',
    descId: 'Dev team menerapkan patch; 1-click autonomous retest pastikan celah tertutup.',
    descEn: 'Dev team applies fix; 1-click retest verifies gap closed.',
    checkmarkText: '✓ 3-Min Retest Verified',
    colorScheme: 'sky'
  },
  {
    step: 'HARI 5',
    label: 'CLOSING',
    title: 'Executive Briefing',
    descId: 'Presentasi laporan dewan ke CISO/CIO & penandatanganan kontrak ARR.',
    descEn: 'Joint CISO/CIO briefing & annual ARR proposal signed.',
    checkmarkText: '✓ Signed ARR License',
    colorScheme: 'emerald',
    isBoldCheckmark: true
  }
];

export const VELOCITY_METRICS: DealVelocityMetricItem[] = [
  {
    id: 'cycle',
    labelId: 'Siklus Penjualan',
    labelEn: 'Sales Cycle',
    value: '45–60 Hari',
    valueColorClass: 'text-white',
    badgeTextId: 'Hemat 50% vs Manual',
    badgeTextEn: '50% Faster vs Manual',
    badgeClass: 'bg-rose-950/80 text-rose-300 border-rose-800'
  },
  {
    id: 'win_rate',
    labelId: 'Win Rate PoC 5-Hari',
    labelEn: '5-Day PoC Win Rate',
    value: '65%',
    suffix: ' Closing',
    valueColorClass: 'text-emerald-400',
    badgeTextId: 'Ke Kontrak ARR',
    badgeTextEn: 'To ARR Contract',
    badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
  },
  {
    id: 'deal_size',
    labelId: 'Nilai Kontrak Deal',
    labelEn: 'Deal Contract Value',
    value: 'Rp 1,0 M – Rp 1,5 M',
    valueColorClass: 'text-amber-400',
    badgeTextId: 'Per Akun Tahunan',
    badgeTextEn: 'Per Account ARR',
    badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-800'
  }
];

export const SLIDE_06_COPY = {
  headerTitleId: 'Gerak Penjualan Enterprise',
  headerTitleEn: 'Enterprise Sales Motion',
  badgeCycleId: '45–60 Hari Siklus',
  badgeCycleEn: '45–60 Days Cycle',
  badgeWinRateId: '65% Win Rate PoC',
  badgeWinRateEn: '65% PoC Win Rate',
  matrixTitleId: 'MATRIKS PENGARUH 4 PEMBELI C-LEVEL',
  matrixTitleEn: '4 C-LEVEL BUYERS INFLUENCE MATRIX',
  meddpiccTag: 'MEDDPICC ALIGNED',
  focusLabelId: 'Fokus Utama',
  focusLabelEn: 'Key Focus',
  valueLabelId: 'Nilai Bisnis Kunci',
  valueLabelEn: 'Key Business Value',
  elevationLabelId: 'Standar Elevasi Dialog:',
  elevationLabelEn: 'Dialogue Elevation Standard:',
  elevationTargetId: 'Dari Fitur Teknis → Risiko Finansial & OJK',
  elevationTargetEn: 'From Technical Features → Financial Risk & OJK',
  lifecycleTitleId: 'LINTASAN SIKLUS PENJUALAN ENTERPRISE (14 TAHAP TERPADU)',
  lifecycleTitleEn: 'ENTERPRISE SALES LIFECYCLE (14 STAGES)',
  lifecycleDuration: 'DURASI: 45–60 HARI',
  pocPlaybookTitleId: 'PLAYBOOK PEMBUKTIAN CEPAT: POC 5-HARI (ZERO-CLICK)',
  pocPlaybookTitleEn: '5-DAY GUIDED POC PLAYBOOK (ZERO-CLICK)',
  zeroBlastRadiusTag: 'ZERO BLAST RADIUS',
  mandateQuoteId: '"Kita memenangkan kesepakatan enterprise dengan menaikkan percakapan ke level dewan: dari fitur teknis ke risiko bisnis, kepatuhan SEOJK 29 & UU PDP, serta jaminan zero blast radius."',
  mandateQuoteEn: '"We win enterprise deals by elevating dialogue to board level: from technical features to business risk, SEOJK 29 & UU PDP compliance, and zero blast radius assurance."'
};
