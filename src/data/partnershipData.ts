export interface PartnerCandidate {
  id: string;
  name: string;
  shortName: string;
  ticker?: string;
  roleInEcosystem: 'Distributor' | 'Tier-1 Reseller / SI' | 'Technology Partner' | 'Regional Partner' | 'Audit & Advisory';
  category: string;
  primarySectorFocus: string;
  marketReach: number; // 0-20
  strategicFit: number; // 0-20
  technicalFit: number; // 0-20
  salesCapability: number; // 0-20
  geographicReach: number; // 0-20
  ecosystemScore: number; // 0-100 modelled
  commercialRationale: string;
  coSellMotion: string;
  tierStatus: 'TIER-1 STRATEGIC SI' | 'TIER-2 GROWTH SI' | 'NATIONAL DISTRIBUTOR' | 'CLOUD HYPERSCALER' | 'GOVERNANCE ADVISORY';
  verifiedNonCompetitor: boolean;
  auditNotes: string;
}

export const PARTNER_ECOSYSTEM_TIERS = [
  { tier: '1. PT ITSEC Asia Tbk', role: 'IP Owner & Core Vendor', desc: 'Pemilik mesin otonom Bronyx AI, kredibilitas brand BEI (IDX: CYBR), dan layanan Red Team tersertifikasi.' },
  { tier: '2. National Distributors', role: 'Channel Aggregators', desc: 'Menyediakan fasilitas pembiayaan/kredit kanal nasional, agregasi billing, dan akses ke ratusan VAR di seluruh Indonesia.' },
  { tier: '3. Tier-1 Resellers & SIs', role: 'Prime Contractors', desc: 'Mengintegrasikan Bronyx AI ke dalam pengadaan core banking, migrasi multi-cloud, dan modernisasi TI bernilai miliaran rupiah.' },
  { tier: '4. Technology Partners', role: 'Cloud Hyperscalers', desc: 'Membuka anggaran komitmen belanja komputasi awan enterprise (EDP drawdowns) melalui AWS dan Google Cloud Marketplace.' },
  { tier: '5. Regional & Specialized SIs', role: 'Regional & OT Specialists', desc: 'Memberikan jangkauan penetrasi regional di kota besar serta integrasi spesifik infrastruktur IT & operasional manufaktur.' },
  { tier: '6. Enterprise Clients', role: 'End Beneficiaries', desc: 'Bank, telekomunikasi, fintech, dan infrastruktur kritis nasional yang terlindungi validasi keamanan berkelanjutan 24/7.' }
];

export const PARTNER_ECOSYSTEM_CANDIDATES: PartnerCandidate[] = [
  {
    id: 'multipolar',
    name: 'PT Multipolar Technology Tbk',
    shortName: 'Multipolar Technology',
    ticker: 'IDX: MLPT',
    roleInEcosystem: 'Tier-1 Reseller / SI',
    category: 'Tier-1 Banking & Financial Systems Integrator',
    primarySectorFocus: 'Perbankan BUKU 4, Finansial, Asuransi, BUMN',
    marketReach: 19,
    strategicFit: 20,
    technicalFit: 18,
    salesCapability: 19,
    geographicReach: 18,
    ecosystemScore: 94,
    commercialRationale: 'Dominasi terkuat pada platform digital core banking dan lembaga jasa keuangan Indonesia dengan relasi tingkat direksi puluhan tahun.',
    coSellMotion: 'Memposisikan Bronyx AI sebagai modul pengujian keamanan berkala wajib kepatuhan OJK SEOJK 29/2022 yang dibundel dalam pembaruan core banking.',
    tierStatus: 'TIER-1 STRATEGIC SI',
    verifiedNonCompetitor: true,
    auditNotes: 'Terverifikasi independen (Lippo Group tech division). Fokus integrasi sistem perbankan & hardware infrastruktur, bukan pembuat software automated penetration testing.'
  },
  {
    id: 'mastersystem',
    name: 'PT Mastersystem Infotama Tbk',
    shortName: 'Mastersystem Infotama',
    ticker: 'IDX: MSTI',
    roleInEcosystem: 'Tier-1 Reseller / SI',
    category: 'Tier-1 Enterprise ICT Systems & Infrastructure Integrator',
    primarySectorFocus: 'Konglomerasi Korporat, Telekomunikasi, Perbankan, Migas',
    marketReach: 18,
    strategicFit: 19,
    technicalFit: 19,
    salesCapability: 18,
    geographicReach: 18,
    ecosystemScore: 92,
    commercialRationale: 'Portofolio kokoh di infrastruktur jaringan enterprise, arsitektur data center, komputasi awan, dan managed network services korporat papan atas.',
    coSellMotion: 'Cross-sell Bronyx AI automated exposure validation kepada ratusan klien enterprise pemeliharaan infrastruktur dan jaringan korporasi.',
    tierStatus: 'TIER-1 STRATEGIC SI',
    verifiedNonCompetitor: true,
    auditNotes: 'Terverifikasi emiten publik di BEI (IDX: MSTI). Bukan entitas grup kompetitor yang diblacklist.'
  },
  {
    id: 'reycom_rds',
    name: 'PT Reycom Data Solusi (RDS Group / PT Reycom Integrated Solusi)',
    shortName: 'Reycom Data Solusi (RDS)',
    roleInEcosystem: 'Tier-1 Reseller / SI',
    category: 'Enterprise Data, Document Security & Systems Integrator',
    primarySectorFocus: 'Perbankan (BCA, Mandiri), Asuransi (AXA, Allianz), BPO Enterprise',
    marketReach: 18,
    strategicFit: 20,
    technicalFit: 18,
    salesCapability: 18,
    geographicReach: 18,
    ecosystemScore: 92,
    commercialRationale: 'Grup korporasi integrasi sistem & data terpercaya (sejak 2003, 1.100+ karyawan) yang menangani dokumen & alur data nasabah bank raksasa seperti BCA dan Bank Mandiri.',
    coSellMotion: 'Sinergi alami mendeteksi kebocoran data terstruktur/tidak terstruktur dengan Bronyx AI untuk mematuhi mandat UU PDP bagi perbankan dan asuransi.',
    tierStatus: 'TIER-1 STRATEGIC SI',
    verifiedNonCompetitor: true,
    auditNotes: 'Terverifikasi independen dari RDS Group. Portofolio berpusat pada integrasi sistem dokumen, BPO, dan data capture; sangat komplementer dengan solusi cybersecurity ITSEC Asia.'
  },
  {
    id: 'anabatic',
    name: 'PT Anabatic Technologies Tbk',
    shortName: 'Anabatic Technologies',
    ticker: 'IDX: ATIC',
    roleInEcosystem: 'Tier-1 Reseller / SI',
    category: 'Tier-1 Core Banking & Mission-Critical IT Solutions Integrator',
    primarySectorFocus: 'Bank BUMN, Bank Swasta Devisa, Multifinance',
    marketReach: 18,
    strategicFit: 19,
    technicalFit: 18,
    salesCapability: 18,
    geographicReach: 18,
    ecosystemScore: 91,
    commercialRationale: 'Spesialis implementasi solusi mission-critical dan perbankan digital di kawasan Asia Tenggara dengan jaringan CISO industri keuangan yang sangat solid.',
    coSellMotion: 'Bundling Bronyx AI continuous security validation ke dalam implementasi modernisasi API open banking dan sistem pembayaran digital.',
    tierStatus: 'TIER-1 STRATEGIC SI',
    verifiedNonCompetitor: true,
    auditNotes: 'Terverifikasi independen publik (IDX: ATIC). Tidak terafiliasi dengan grup kompetitor.'
  },
  {
    id: 'kirana_sakti',
    name: 'PT Kirana Sakti Komputindo',
    shortName: 'Kirana Sakti Komputindo',
    roleInEcosystem: 'Tier-1 Reseller / SI',
    category: 'Enterprise IT System Integrator & Managed Services Provider',
    primarySectorFocus: 'Perbankan Menengah, Jasa Keuangan, Hukum, Manufaktur, Edukasi',
    marketReach: 17,
    strategicFit: 18,
    technicalFit: 18,
    salesCapability: 17,
    geographicReach: 17,
    ecosystemScore: 87,
    commercialRationale: 'System integrator & MSP mapan (sejak 2010) dengan spesialisasi Network & Security, DaaS, dan kemitraan resmi dengan Fortinet, Sophos, VMware, Dell, dan Lenovo.',
    coSellMotion: 'Melengkapi penawaran perimeter & endpoint security klien dengan Bronyx AI untuk validasi keamanan otomatis berkala berbasis AI.',
    tierStatus: 'TIER-2 GROWTH SI',
    verifiedNonCompetitor: true,
    auditNotes: 'Terverifikasi profil & izin usaha. Penyedia managed IT & networking independen tanpa afiliasi kompetitor.'
  },
  {
    id: 'sentral_mitra',
    name: 'PT Sentral Mitra Informatika Tbk',
    shortName: 'Sentral Mitra Informatika',
    ticker: 'IDX: LUCK',
    roleInEcosystem: 'Tier-1 Reseller / SI',
    category: 'Public Listed Enterprise IT Solutions & Managed Services Provider',
    primarySectorFocus: 'Korporasi Swasta, Pengadaan BUMN, Instansi Pemerintah',
    marketReach: 17,
    strategicFit: 17,
    technicalFit: 17,
    salesCapability: 17,
    geographicReach: 18,
    ecosystemScore: 86,
    commercialRationale: 'Emiten teknologi publik di BEI (IDX: LUCK, berdiri 2008) dengan kapabilitas IT consulting, hardware/software enterprise, serta portofolio managed services korporasi.',
    coSellMotion: 'Melampirkan lisensi tahunan Bronyx AI ke dalam kontrak multi-tahun IT Managed Services korporat dan paket pembaruan infrastruktur kerja enterprise.',
    tierStatus: 'TIER-2 GROWTH SI',
    verifiedNonCompetitor: true,
    auditNotes: 'Terverifikasi publik (IDX: LUCK). Fokus bisnis pada solusi teknologi informasi korporasi & managed print, bebas dari benturan kompetisi produk red team otonom.'
  },
  {
    id: 'brothersindo',
    name: 'PT Brothersindo Saudara Emas / Brothersindo Group',
    shortName: 'Brothersindo Group IT',
    roleInEcosystem: 'Regional Partner',
    category: 'Industrial IT Infrastructure & Virtualization Solutions',
    primarySectorFocus: 'Manufaktur Industri, Tekstil & Garmen, Rantai Pasok (Supply Chain)',
    marketReach: 14,
    strategicFit: 15,
    technicalFit: 16,
    salesCapability: 15,
    geographicReach: 15,
    ecosystemScore: 75,
    commercialRationale: 'Memiliki ekosistem industri manufaktur yang kuat dari grup Brothersindo (est. 1988) dengan entitas IT Brothersindo Saudara Emas (est. 2020) berfokus pada IT infrastructure, virtualization, datacenter, dan networking.',
    coSellMotion: 'Pintu masuk strategis untuk mengamankan jaringan OT/Industrial IoT dan infrastruktur server manufaktur dengan simulasi eksploitasi Bronyx AI.',
    tierStatus: 'TIER-2 GROWTH SI',
    verifiedNonCompetitor: true,
    auditNotes: 'Catatan Verifikasi: PT Brothersindo Saudara Sejati adalah distributor mesin garmen/tekstil industri; entitas IT integrasinya adalah PT Brothersindo Saudara Emas. Dikelompokkan sebagai mitra spesialis segmen Manufaktur/OT.'
  },
  {
    id: 'computrade',
    name: 'PT Computrade Technology International (CTI Group)',
    shortName: 'CTI Group',
    roleInEcosystem: 'Distributor',
    category: 'National Cybersecurity & Enterprise Infrastructure Distributor',
    primarySectorFocus: 'Jaringan Reseller Nasional, Ribuan Enterprise & Mid-Market Accounts',
    marketReach: 20,
    strategicFit: 19,
    technicalFit: 19,
    salesCapability: 19,
    geographicReach: 20,
    ecosystemScore: 97,
    commercialRationale: 'Distributor IT enterprise nomor satu di Indonesia dengan unit bisnis keamanan siber mapan dan jaringan ratusan Value-Added Resellers (VAR) di kota-kota utama.',
    coSellMotion: 'Perjanjian master distributor nasional yang memungkinkan downstream VAR mengutip dan mendistribusikan lisensi Bronyx AI dengan fasilitas kredit kanal.',
    tierStatus: 'NATIONAL DISTRIBUTOR',
    verifiedNonCompetitor: true,
    auditNotes: 'Terverifikasi distributor murni tanpa benturan kepentingan kompetitor.'
  },
  {
    id: 'aca_pacific',
    name: 'PT ACA Pacific Indonesia',
    shortName: 'ACA Pacific Indonesia',
    roleInEcosystem: 'Distributor',
    category: 'Value-Added Enterprise Security & Software Distributor',
    primarySectorFocus: 'Perangkat Lunak Enterprise, Keamanan Siber, Kanal VAR Spesialis',
    marketReach: 19,
    strategicFit: 18,
    technicalFit: 18,
    salesCapability: 18,
    geographicReach: 19,
    ecosystemScore: 92,
    commercialRationale: 'Distributor nilai tambah terkemuka di Indonesia sejak 1986 yang mengkhususkan diri pada solusi software enterprise, cybersecurity, dan endpoint protection.',
    coSellMotion: 'Menyalurkan paket bundling Bronyx AI bersama solusi perlindungan data dan kepatuhan sistem operasi korporasi melalui jaringan mitra software.',
    tierStatus: 'NATIONAL DISTRIBUTOR',
    verifiedNonCompetitor: true,
    auditNotes: 'Terverifikasi distributor nilai tambah independen. Pengganti resmi entitas distributor kompetitor yang telah dieliminasi.'
  },
  {
    id: 'cloud_hyperscalers',
    name: 'AWS & Google Cloud Indonesia Marketplace',
    shortName: 'Cloud Hyperscalers',
    roleInEcosystem: 'Technology Partner',
    category: 'Cloud Hyperscalers & Sovereign Cloud Marketplace',
    primarySectorFocus: 'Enterprise Cloud Accounts, Digital Native, Fintech, Unicorns',
    marketReach: 19,
    strategicFit: 19,
    technicalFit: 20,
    salesCapability: 18,
    geographicReach: 20,
    ecosystemScore: 96,
    commercialRationale: 'Perusahaan enterprise memiliki kontrak belanja komputasi awan bernilai jutaan dolar (EDP Commitments) yang dapat digunakan langsung untuk lisensi Bronyx.',
    coSellMotion: 'Mendaftarkan Bronyx AI di AWS/GCP Marketplace lokal sehingga enterprise dapat membeli lisensi menggunakan sisa saldo komitmen cloud eksisting tanpa anggaran baru.',
    tierStatus: 'CLOUD HYPERSCALER',
    verifiedNonCompetitor: true,
    auditNotes: 'Penyedia infrastruktur komputasi awan global. Murni kanal percepatan transaksi enterprise.'
  },
  {
    id: 'compliance_advisors',
    name: 'Big-4 & Boutique Security Governance Advisory',
    shortName: 'Governance & Audit Advisory',
    roleInEcosystem: 'Audit & Advisory',
    category: 'Regulatory Compliance & ISO 27001 / UU PDP Advisory',
    primarySectorFocus: 'Perbankan, BUMN Terbuka, Asuransi, Konglomerasi Swasta',
    marketReach: 18,
    strategicFit: 19,
    technicalFit: 17,
    salesCapability: 18,
    geographicReach: 18,
    ecosystemScore: 90,
    commercialRationale: 'Konsultan tata kelola dan akuntan publik melakukan audit kesiapan UU PDP dan SEOJK 29/2022 serta membutuhkan alat pengujian teknis independen.',
    coSellMotion: 'Konsultan merekomendasikan Bronyx AI sebagai instrumen teknis audit berkala untuk memvalidasi kepatuhan tata kelola klien enterprise mereka.',
    tierStatus: 'GOVERNANCE ADVISORY',
    verifiedNonCompetitor: true,
    auditNotes: 'Lembaga audit & konsultan manajemen independen non-kompetitif.'
  }
];

export const PARTNERSHIP_COMMERCIAL_TIERS = [
  {
    tier: 'Referral & Lead Sharing Partner',
    tierId: 'Mitra Referensi Langsung (Warm Lead)',
    margin: '15% – 20% Referral Margin',
    commitment: 'Mendaftarkan akun teridentifikasi, pendampingan pertemuan CISO perdana bersama Sales Lead ITSEC Asia',
    targetCadence: 'Aktivasi cepat pada Hari 15–45'
  },
  {
    tier: 'Solution Integration Partner (Value-Added Reseller)',
    tierId: 'Mitra Integrasi Sistem & Reseller (SI / VAR)',
    margin: '25% – 30% Reseller & Co-Sell Margin',
    commitment: 'Minimal 2 Pre-Sales Engineer tersertifikasi Bronyx AI, komitmen 3 PoC enterprise gabungan per kuartal',
    targetCadence: 'Pengikatan perjanjian pada Hari 45–75'
  },
  {
    tier: 'Strategic Volume Distribution & Cloud Co-Sell',
    tierId: 'Distributor Nasional & Cloud Marketplace',
    margin: '30% – 35% Distribution Margin',
    commitment: 'Komitmen kuota ARR tahunan minimal Rp 3,0 Miliar, billing aggregation, dan drawdown komitmen cloud korporasi',
    targetCadence: 'Penyelesaian perjanjian induk Hari 60–90'
  }
];

export const PARTNERSHIP_AUDIT_METRICS = {
  totalPartnersEvaluated: 11,
  enterpriseSystemIntegrators: 7,
  nationalDistributors: 2,
  hyperscalersAndAdvisory: 2,
  competitorExclusionRate: '100% (Seluruh Grup Kompetitor & Afiliasi Total Dieliminasi & Diblokir)',
  targetPipelineContribution: '25% – 30% dari Rolling Pipeline 90 Hari (Rp 5,0M – Rp 6,0M)',
  dealRegistrationProtectionDays: 60,
  minimumCertifiedEngineersPerSI: 2
};
