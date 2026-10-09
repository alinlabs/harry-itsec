export type GlossaryCategory = 'ALL' | 'CYBER_TECH' | 'COMMERCIAL_SALES' | 'REGULATION_GOV' | 'FINANCIAL_MARKET';

export interface GlossaryTerm {
  id: string;
  term: string;
  acronym?: string;
  fullNameId: string;
  fullNameEn: string;
  category: GlossaryCategory;
  definitionId: string;
  definitionEn: string;
  contextUsageId: string;
  contextUsageEn: string;
  tag: string;
}

export const GLOSSARY_CATEGORIES: { id: GlossaryCategory; labelId: string; labelEn: string; colorClass: string }[] = [
  { id: 'ALL', labelId: 'Semua Istilah', labelEn: 'All Terms', colorClass: 'border-neutral-700 text-neutral-300' },
  { id: 'CYBER_TECH', labelId: 'Keamanan Siber & Teknis', labelEn: 'Cybersecurity & Tech', colorClass: 'border-rose-700/60 text-rose-300' },
  { id: 'COMMERCIAL_SALES', labelId: 'Komersial & Sales GTM', labelEn: 'Commercial & Sales GTM', colorClass: 'border-emerald-700/60 text-emerald-300' },
  { id: 'REGULATION_GOV', labelId: 'Regulasi & Kepatuhan', labelEn: 'Regulation & Compliance', colorClass: 'border-amber-700/60 text-amber-300' },
  { id: 'FINANCIAL_MARKET', labelId: 'Pasar & Finansial', labelEn: 'Market & Financial', colorClass: 'border-sky-700/60 text-sky-300' },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  // REGULATION & COMPLIANCE
  {
    id: 'uu-pdp',
    term: 'UU PDP',
    acronym: 'UU No. 27/2022',
    fullNameId: 'Undang-Undang Pelindungan Data Pribadi',
    fullNameEn: 'Personal Data Protection Act (Law No. 27 of 2022)',
    category: 'REGULATION_GOV',
    definitionId: 'Payung hukum privasi dan pelindungan data pribadi nasional Indonesia yang mewajibkan seluruh entitas pengendali dan pemroses data korporasi untuk melindungi kerahasiaan data pribadi, menunjuk Pejabat Pelindungan Data (DPO), serta menerapkan pengamanan teknis memadai dengan sanksi denda administratif hingga 2% dari total pendapatan tahunan korporasi.',
    definitionEn: 'Indonesia\'s comprehensive personal data protection law mandating technical safeguards, Data Protection Officer (DPO) appointment, and carrying corporate administrative fines up to 2% of annual gross revenue for data breaches.',
    contextUsageId: 'Pendorong utama urgensi anggaran enterprise di Q1-Q4 karena masa transisi penuh telah berakhir dan audit kepatuhan menjadi keharusan dewan direksi.',
    contextUsageEn: 'Primary driver of enterprise cybersecurity urgency in Q1-Q4 following full enforcement transition, requiring mandatory board-level compliance.',
    tag: 'Regulasi RI'
  },
  {
    id: 'pojk-11',
    term: 'POJK 11/2022',
    acronym: 'POJK No. 11/POJK.03/2022',
    fullNameId: 'Penyelenggaraan Teknologi Informasi oleh Bank Umum',
    fullNameEn: 'OJK Regulation on IT Implementation by Commercial Banks',
    category: 'REGULATION_GOV',
    definitionId: 'Regulasi ketat dari Otoritas Jasa Keuangan (OJK) yang mewajibkan bank umum di Indonesia melakukan pengujian ketahanan siber (*cyber resilience*), simulasi serangan berkala, serta audit integritas infrastruktur sistem perbankan secara berkelanjutan.',
    definitionEn: 'Strict OJK mandate requiring commercial banks in Indonesia to execute continuous cyber resilience testing, vulnerability assessments, and periodic offensive security audits.',
    contextUsageId: 'Menjadikan uji siber perbankan sebagai alokasi anggaran belanja rutin (budget pasti) yang tidak dapat dipotong.',
    contextUsageEn: 'Guarantees cybersecurity audits and pentesting as mandatory, non-discretionary budget items across Tier-1 banking.',
    tag: 'Perbankan OJK'
  },
  {
    id: 'pojk-29',
    term: 'POJK 29/2023',
    acronym: 'POJK No. 29/POJK.04/2023',
    fullNameId: 'Ketahanan Siber Lembaga Jasa Keuangan Non-Bank',
    fullNameEn: 'Cyber Resilience for Non-Bank Financial Institutions',
    category: 'REGULATION_GOV',
    definitionId: 'Ketentuan mitigasi risiko keamanan siber bagi sektor industri keuangan non-bank di Indonesia, mencakup perusahaan efek, manajer investasi, fintech peer-to-peer lending, dan multifinance.',
    definitionEn: 'Regulatory guidelines enforcing cybersecurity risk mitigation and mandatory posture validation across fintech, capital markets, and NBFI lenders.',
    contextUsageId: 'Membuka pasar SOM bagi 40+ entitas fintech dan multifinance yang membutuhkan validasi keamanan cepat namun terstandar.',
    contextUsageEn: 'Expands SOM across 40+ fintech and non-bank financial players seeking standardized rapid posture auditing.',
    tag: 'Fintech OJK'
  },
  {
    id: 'bssn',
    term: 'BSSN',
    acronym: 'BSSN',
    fullNameId: 'Badan Siber dan Sandi Negara Republik Indonesia',
    fullNameEn: 'National Cyber and Crypto Agency of Indonesia',
    category: 'REGULATION_GOV',
    definitionId: 'Lembaga pemerintah non-kementerian yang memegang komando dan otoritas keamanan siber nasional di Indonesia, bertanggung jawab atas pembentukan CSIRT (Computer Security Incident Response Team) serta standardisasi ketahanan siber sektor strategis.',
    definitionEn: 'The Indonesian central government agency holding supreme authority over national cybersecurity policies, critical information infrastructure protection, and CSIRT accreditation.',
    contextUsageId: 'Rujukan standar kepatuhan nasional bagi BUMN dan infrastruktur informasi vital yang ditargetkan dalam ekosistem Bronyx.',
    contextUsageEn: 'National compliance benchmark for state-owned enterprises and critical infrastructure accounts in Bronyx\'s pipeline.',
    tag: 'Otoritas Nasional'
  },
  {
    id: 'nist-csf',
    term: 'NIST CSF 2.0',
    acronym: 'NIST CSF',
    fullNameId: 'National Institute of Standards and Technology Cybersecurity Framework',
    fullNameEn: 'NIST Cybersecurity Framework 2.0',
    category: 'REGULATION_GOV',
    definitionId: 'Kerangka kerja keamanan siber standar internasional yang diakui secara global, terdiri dari 6 pilar inti: Govern (Tata Kelola), Identify (Identifikasi), Protect (Proteksi), Detect (Deteksi), Respond (Respons), dan Recover (Pemulihan).',
    definitionEn: 'Globally recognized cybersecurity blueprint structured around six core pillars: Govern, Identify, Protect, Detect, Respond, and Recover.',
    contextUsageId: 'Dipakai sebagai model pemetaan kapabilitas Bronyx AI untuk mempermudah evaluasi komite teknis CISO.',
    contextUsageEn: 'Utilized as the capability alignment blueprint for enterprise CISO evaluation committees.',
    tag: 'Standar Global'
  },
  {
    id: 'iso-27001',
    term: 'ISO/IEC 27001:2022',
    acronym: 'ISO 27001',
    fullNameId: 'Sistem Manajemen Keamanan Informasi (SMKI)',
    fullNameEn: 'Information Security Management System (ISMS)',
    category: 'REGULATION_GOV',
    definitionId: 'Standar sertifikasi internasional terdepan untuk manajemen keamanan informasi korporasi, memverifikasi kepatuhan kebijakan, kontrol akses, dan mitigasi risiko siber menyeluruh.',
    definitionEn: 'Leading international standard specifying requirements for establishing, implementing, maintaining, and continually improving an ISMS.',
    contextUsageId: 'Sertifikasi wajib bagi klien enterprise; temuan uji Bronyx AI menjadi input bukti pemenuhan klausul kontrol ISO.',
    contextUsageEn: 'Prerequisite enterprise certification; Bronyx discovery logs serve as audit evidence for ISO control compliance.',
    tag: 'Sertifikasi ISO'
  },
  {
    id: 'pci-dss',
    term: 'PCI-DSS v4.0',
    acronym: 'PCI-DSS',
    fullNameId: 'Payment Card Industry Data Security Standard',
    fullNameEn: 'Payment Card Industry Data Security Standard v4.0',
    category: 'REGULATION_GOV',
    definitionId: 'Standar keamanan wajib global bagi organisasi yang memproses, menyimpan, atau mentransmisikan data kartu pembayaran, mewajibkan pengujian penetrasi berkala dan pemindaian kerentanan eksternal.',
    definitionEn: 'Information security standard for organizations that handle branded credit cards from major card schemes, mandating regular penetration tests.',
    contextUsageId: 'Wajib dipenuhi oleh bank penerbit kartu, payment gateway, dan platform e-commerce target di Indonesia.',
    contextUsageEn: 'Mandatory standard for payment gateways, acquiring banks, and top Indonesian e-commerce platforms.',
    tag: 'Standar Pembayaran'
  },

  // CYBERSECURITY & TECH
  {
    id: 'bronyx-ai',
    term: 'Bronyx AI',
    fullNameId: 'Platform Keamanan Siber Multi-Agen Otonom',
    fullNameEn: 'Autonomous Multi-Agent Cybersecurity Platform',
    category: 'CYBER_TECH',
    definitionId: 'Solusi perangkat lunak keamanan siber mutakhir berbasis kecerdasan buatan multi-agen yang dirancang khusus untuk mendeteksi celah kebocoran data (*data leakage discovery*), paparan endpoint API tak terlindungi, dan menjalankan pengujian siber mandiri tanpa mengganggu operasional sistem klien.',
    definitionEn: 'Advanced multi-agent AI cybersecurity software engineered for automated data leakage discovery, API exposure auditing, and non-disruptive security validation.',
    contextUsageId: 'Produk inti inovatif yang dikomersialisasikan oleh Sales Lead bersama PT ITSEC Asia Tbk untuk penetrasi pasar enterprise.',
    contextUsageEn: 'Core proprietary technology commercialized by the Sales Lead in partnership with PT ITSEC Asia Tbk.',
    tag: 'Solusi Unggulan'
  },
  {
    id: 'data-leakage',
    term: 'Data Leakage Discovery',
    fullNameId: 'Deteksi Dini Kebocoran Data Enterprise',
    fullNameEn: 'Enterprise Data Leakage Discovery',
    category: 'CYBER_TECH',
    definitionId: 'Kapabilitas pemindaian cerdas berkelanjutan untuk melacak, mengidentifikasi, dan memverifikasi keberadaan data sensitif perusahaan (kredensial staf, basis data pelanggan, rahasia dagang, kunci API) yang terekspos di deep web, dark web, repositori kode publik (GitHub), atau cloud storage terbuka.',
    definitionEn: 'Intelligent continuous discovery capability uncovering leaked enterprise credentials, databases, API keys, and sensitive documents across the deep/dark web and public code repos.',
    contextUsageId: 'Modul bernilai tertinggi bagi CISO dan Legal untuk mencegah denda pelanggaran UU PDP sebelum insiden mencuat ke publik.',
    contextUsageEn: 'Highest-value module for CISOs and Legal counsels to avert regulatory sanctions under the Data Protection Act.',
    tag: 'Fitur Utama'
  },
  {
    id: 'api-exposure',
    term: 'API Exposure Auditing',
    fullNameId: 'Audit Paparan Antarmuka Pemrograman Aplikasi (API)',
    fullNameEn: 'API Exposure & Vulnerability Auditing',
    category: 'CYBER_TECH',
    definitionId: 'Proses otomatis memetakan seluruh endpoint API milik organisasi—termasuk *shadow APIs* dan *deprecated endpoints*—serta menguji kerentanan otentikasi, otorisasi objek (BOLA), dan transfer data tidak terenkripsi.',
    definitionEn: 'Automated auditing of an enterprise\'s complete API surface, pinpointing unauthenticated endpoints, broken authorization logic, shadow APIs, and data exposure.',
    contextUsageId: 'Sangat diminati oleh sektor perbankan terbuka (open banking), fintech, dan telekomunikasi yang memiliki jutaan transaksi via API setiap hari.',
    contextUsageEn: 'Critical requirement for open banking, fintech apps, and telecom ecosystems handling millions of API calls daily.',
    tag: 'Fitur Utama'
  },
  {
    id: 'zero-blast-radius',
    term: 'Zero Blast Radius',
    fullNameId: 'Arsitektur Pengujian Nir-Dampak Kerusakan',
    fullNameEn: 'Zero Blast Radius Architecture',
    category: 'CYBER_TECH',
    definitionId: 'Standar rekayasa pengujian siber Bronyx di mana seluruh simulasi serangan dirancang secara non-destruktif (*read-only proof of vulnerability*), memastikan 0% risiko terhadap stabilitas server produksi, 0 downtime, dan tidak ada alterasi integritas data korporat.',
    definitionEn: 'Engineering benchmark ensuring simulated penetration operations are strictly non-destructive, yielding zero operational downtime and zero data alteration on production hosts.',
    contextUsageId: 'Peredam keberatan utama bagi CIO, CTO, dan Kepala Operasional IT yang khawatir pengujian siber akan mengganggu uptime bisnis.',
    contextUsageEn: 'Primary objection breaker for CIOs and CTOs concerned about production downtime during security validation.',
    tag: 'Keunggulan Desain'
  },
  {
    id: 'multi-agent-kali',
    term: 'Multi-Agent Kali Toolchain',
    fullNameId: 'Rantai Perkakas Pengujian Terdistribusi Multi-Agen',
    fullNameEn: 'Multi-Agent Kali Toolchain Orchestration',
    category: 'CYBER_TECH',
    definitionId: 'Arsitektur perangkat lunak cerdas di mana agen-agen AI bekerja secara kolaboratif mengorkestrasi berbagai utilitas uji siber terkemuka (seperti Nmap, Burp Suite, Metasploit, SQLMap, Nuclei) secara terkendali dalam kontainer terisolasi.',
    definitionEn: 'Intelligent multi-agent framework coordinating enterprise security tools (Nmap, Burp Suite, SQLMap, Nuclei) within isolated sandboxed containers.',
    contextUsageId: 'Menggantikan pekerjaan manual pentester hingga 80% kecepatan lebih tinggi dengan konsistensi pengujian yang terstandardisasi.',
    contextUsageEn: 'Replaces manual testing bottlenecks, executing assessments at 80% higher velocity with standardized reproducibility.',
    tag: 'Arsitektur Mesin'
  },
  {
    id: 'asm',
    term: 'Attack Surface Management (ASM)',
    acronym: 'ASM',
    fullNameId: 'Manajemen Permukaan Serangan Digital Eksternal',
    fullNameEn: 'External Attack Surface Management',
    category: 'CYBER_TECH',
    definitionId: 'Proses penemuan (*discovery*), inventarisasi, dan analisis risiko terus-menerus terhadap semua aset digital milik perusahaan yang terhubung langsung ke internet publik dan berpotensi menjadi celah masuk peretas.',
    definitionEn: 'Continuous discovery, cataloging, and risk evaluation of all internet-facing corporate digital assets accessible to external adversaries.',
    contextUsageId: 'Dasar penilaian visual pada slide Target Account Universe untuk memprioritaskan akun dengan aset terbuka paling rentan.',
    contextUsageEn: 'Core assessment criteria used across the Target Account Universe to prioritize high-exposure accounts.',
    tag: 'Disiplin Siber'
  },
  {
    id: 'soc',
    term: 'SOC (Security Operations Center)',
    acronym: 'SOC',
    fullNameId: 'Pusat Operasi Keamanan Siber',
    fullNameEn: 'Security Operations Center',
    category: 'CYBER_TECH',
    definitionId: 'Pusat komando terpusat yang diisi oleh analis siber profesional dan teknologi pemantauan untuk mendeteksi, menganalisis, serta merespons insiden keamanan siber selama 24 jam sehari, 7 hari seminggu.',
    definitionEn: 'Centralized 24/7 command center staffed with security analysts monitoring, analyzing, and mitigating cybersecurity incidents across enterprise networks.',
    contextUsageId: 'ITSEC Asia mengoperasikan SOC kelas dunia; Bronyx AI melengkapi SOC dengan intelijen celah kebocoran proaktif.',
    contextUsageEn: 'ITSEC Asia operates enterprise SOCs; Bronyx AI complements SOC teams with proactive leakage intelligence.',
    tag: 'Operasional Siber'
  },
  {
    id: 'siem-soar',
    term: 'SIEM & SOAR',
    acronym: 'SIEM / SOAR',
    fullNameId: 'Manajemen Log & Orkestrasi Respons Otomatis',
    fullNameEn: 'Security Information & Event Management / Orchestration & Response',
    category: 'CYBER_TECH',
    definitionId: 'SIEM mengumpulkan dan mengkorelasikan miliaran log kejadian dari seluruh jaringan, sementara SOAR mengotomatisasi alur kerja respons penanganan ancaman siber secara seketika.',
    definitionEn: 'SIEM aggregates and correlates enterprise-wide security telemetry; SOAR automates incident triage workflows and rapid containment.',
    contextUsageId: 'Bronyx AI dapat diintegrasikan dengan SIEM/SOAR enterprise milik klien melalui webhook dan API ekspor.',
    contextUsageEn: 'Bronyx AI integrates seamlessly into client SIEM/SOAR fabrics via secure automated webhooks.',
    tag: 'Infrastruktur Siber'
  },
  {
    id: 'edr-xdr',
    term: 'EDR & XDR',
    acronym: 'EDR / XDR',
    fullNameId: 'Deteksi Titik Akhir & Respons Lintas Perimeter',
    fullNameEn: 'Endpoint Detection & Response / Extended Detection & Response',
    category: 'CYBER_TECH',
    definitionId: 'Solusi perangkat lunak agen yang dipasang pada laptop, server, dan workstation enterprise guna memantau perilaku berbahaya dan mengisolasi perangkat terinfeksi secara otomatis.',
    definitionEn: 'Agent-based security technologies installed on workstations, servers, and cloud workloads for behavioral threat containment.',
    contextUsageId: 'Paket penawaran 500 perangkat Bronyx dirancang selaras dengan jangkauan footprint EDR/XDR pelanggan.',
    contextUsageEn: 'Bronyx\'s 500-device packaged offering aligns directly with enterprise EDR/XDR footprint topologies.',
    tag: 'Perlindungan Titik Akhir'
  },
  {
    id: 'pentest-redteam',
    term: 'Pentest vs Red Teaming',
    fullNameId: 'Uji Penetrasi vs Simulasi Serangan Adversial Menyeluruh',
    fullNameEn: 'Penetration Testing vs Full Adversary Simulation',
    category: 'CYBER_TECH',
    definitionId: 'Pentesting berfokus pada menemukan sebanyak mungkin kerentanan dalam lingkup dan durasi tertentu; Red Teaming menyimulasikan taktik musuh nyata (APT) untuk menguji respons manusia, proses, dan teknologi secara realistis.',
    definitionEn: 'Pentesting scopes and uncovers maximum vulnerabilities; Red Teaming simulates real-world adversary campaigns (APTs) to challenge defense postures.',
    contextUsageId: 'Bronyx AI mempercepat fase pengintaian (reconnaissance) dan audit celah untuk pentesting dan tim penguji internal.',
    contextUsageEn: 'Bronyx AI supercharges reconnaissance and vulnerability verification phases for offensive security teams.',
    tag: 'Pengujian Serangan'
  },
  {
    id: 'devsecops',
    term: 'DevSecOps (Shift-Left)',
    fullNameId: 'Integrasi Keamanan Siklus Pengembangan Perangkat Lunak',
    fullNameEn: 'Development, Security, and Operations Integration',
    category: 'CYBER_TECH',
    definitionId: 'Filsafat dan metodologi rekayasa di mana kontrol keamanan siber diintegrasikan langsung ke dalam pipeline otomatisasi kode (CI/CD) sejak tahap awal (*Shift-Left*) sebelum kode masuk ke lingkungan produksi.',
    definitionEn: 'Engineering methodology embedding automated security checks directly into CI/CD build pipelines from initial code inception.',
    contextUsageId: 'Pintu masuk penjualan komersial ekspansi ke tim pengembang (VP of Engineering & Head of DevOps).',
    contextUsageEn: 'Commercial expansion entry point into engineering leadership (VP Engineering & DevOps Leads).',
    tag: 'Rekayasa Perangkat Lunak'
  },

  // COMMERCIAL & ENTERPRISE SALES GTM
  {
    id: 'five-hundred-device',
    term: 'Paket 500 Perangkat (Rp 1 M)',
    fullNameId: 'Penawaran Flagship Terstandarisasi 500 Perangkat',
    fullNameEn: 'Standardized 500-Device Flagship Commercial Offering',
    category: 'COMMERCIAL_SALES',
    definitionId: 'Model penetapan harga dan kemasan komersial terstandarisasi senilai Rp 1,0 Miliar per perikatan (sekali jasa atau hingga cakupan 500 perangkat enterprise) yang dirancang untuk memotong birokrasi persetujuan anggaran dewan direksi.',
    definitionEn: 'Standardized commercial packaging of IDR 1.0 Billion per engagement (per service / up to 500 enterprise endpoints) engineered to bypass protracted board-level procurement thresholds.',
    contextUsageId: 'Instrumen kunci untuk mencapai target pendapatan baseline Rp 1,0 Miliar per deal (cukup menutup 1 deal terstandarisasi untuk mengunci target kuota bulanan).',
    contextUsageEn: 'Key vehicle to achieve IDR 1.0 Billion baseline per deal (closing 1 standardized engagement to attain the monthly quota).',
    tag: 'Model Harga'
  },
  {
    id: 'poc-framework',
    term: 'POC 5 Hari (Proof of Concept)',
    acronym: 'POC',
    fullNameId: 'Kerangka Kerja Pembuktian Nilai Teknis 5 Hari Kerja',
    fullNameEn: '5-Day Proof of Concept Acceleration Framework',
    category: 'COMMERCIAL_SALES',
    definitionId: 'Metodologi evaluasi penjualan terstruktur selama 5 hari (Kickoff, Scope Scanning, Vulnerability Verification, Executive Briefing, Commercial Proposal) yang mendemokan celah kebocoran nyata pada aset klien dengan jaminan Zero Blast Radius.',
    definitionEn: 'Structured 5-day technical sales evaluation demonstrating undeniable vulnerability findings on client assets with zero operational disruption.',
    contextUsageId: 'Mempercepat siklus penjualan enterprise dari rata-rata 6–9 bulan menjadi hanya 3–4 minggu.',
    contextUsageEn: 'Compresses conventional enterprise sales cycles from 6–9 months down to 3–4 weeks.',
    tag: 'Gerak Penjualan'
  },
  {
    id: 'icp',
    term: 'ICP (Ideal Customer Profile)',
    acronym: 'ICP',
    fullNameId: 'Profil Pelanggan Enterprise Ideal',
    fullNameEn: 'Ideal Customer Profile',
    category: 'COMMERCIAL_SALES',
    definitionId: 'Karakteristik akun target yang memiliki probabilitas konversi tertinggi, anggaran memadai, kepatuhan regulasi mendesak, serta kesiapan infrastruktur untuk mengadopsi solusi Bronyx AI.',
    definitionEn: 'Precise definition of target accounts demonstrating the highest conversion propensity, budget viability, and regulatory urgency.',
    contextUsageId: 'Dikelompokkan menjadi 3 Prioritas ICP: Finansial & Perbankan (ICP-1), Telekomunikasi & Cloud (ICP-2), dan Konglomerasi/BUMN (ICP-3).',
    contextUsageEn: 'Categorized into 3 ICP tiers: Financial Services (ICP-1), Telco & Cloud (ICP-2), and Conglomerates/SOEs (ICP-3).',
    tag: 'Strategi Target'
  },
  {
    id: 'buyer-committee',
    term: 'Komite Pengambil Keputusan (Buyer Committee)',
    fullNameId: 'Struktur Pembuat Keputusan Enterprise Multi-Stakeholder',
    fullNameEn: 'Enterprise Multi-Stakeholder Decision Committee',
    category: 'COMMERCIAL_SALES',
    definitionId: 'Kelompok pemangku kepentingan korporasi yang bersama-sama menyetujui pengadaan: Economic Buyer (CFO/Direktur Keuangan), Technical Evaluator (CISO/Kepala Keamanan), User Buyer (Tim Operasi Siber/DevOps), dan Legal/Kepatuhan.',
    definitionEn: 'The coalition of enterprise stakeholders required to endorse procurement: Economic Buyer, Technical Evaluator, User Buyer, and Compliance.',
    contextUsageId: 'Sales Lead menavigasi setiap peran dengan proposisi nilai spesifik (CISO = visibilitas risiko, CFO = efisiensi anggaran & mitigasi denda).',
    contextUsageEn: 'Sales Lead maps tailored value drivers to each persona (CISO = risk visibility, CFO = capital efficiency and fine avoidance).',
    tag: 'Dinamika Pembeli'
  },
  {
    id: 'meddpicc',
    term: 'MEDDPICC',
    acronym: 'MEDDPICC',
    fullNameId: 'Metodologi Kualifikasi Peluang Penjualan Enterprise Elit',
    fullNameEn: 'Enterprise Sales Qualification Methodology',
    category: 'COMMERCIAL_SALES',
    definitionId: 'Metodologi kualifikasi deal enterprise ketat yang mencakup: Metrics (metrik ROI), Economic Buyer (pemilik dana), Decision Criteria (kriteria evaluasi teknis), Decision Process (proses alur persetujuan), Paper Process (tahapan legal/kontrak/BAST), Identify Pain (akar masalah bisnis), Champion (pendukung internal), dan Competition (kompetitor).',
    definitionEn: 'Gold-standard qualification framework: Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, and Competition.',
    contextUsageId: 'Mencegah terjadinya deal fiktif dan memastikan akurasi perkiraan pipeline (*pipeline forecasting*) yang terpercaya.',
    contextUsageEn: 'Eliminates pipeline blind spots and validates authentic revenue predictability for executive reporting.',
    tag: 'Metodologi Sales'
  },
  {
    id: 'land-and-expand',
    term: 'Land and Expand',
    fullNameId: 'Strategi Penetrasi Awal dan Ekspansi Berkelanjutan',
    fullNameEn: 'Land and Expand Commercial Motion',
    category: 'COMMERCIAL_SALES',
    definitionId: 'Strategi komersial di mana vendor masuk pertama kali dengan nilai kontrak awal yang dapat disetujui cepat (misal Rp 1 Miliar / 500 endpoint), membuktikan nilai nyata, lalu melakukan ekspansi penjualan modul tambahan dan cakupan seluruh armada perangkat.',
    definitionEn: 'Commercial strategy entering via a swift, friction-free initial transaction, demonstrating rapid value, then expanding into enterprise-wide footprints.',
    contextUsageId: 'Memaksimalkan Nilai Umur Pelanggan (LTV) dan menaikkan ACV dari Rp 1 Miliar ke Rp 3–5 Miliar pada tahun kedua.',
    contextUsageEn: 'Maximizes Customer Lifetime Value (LTV), uplifting ACV from IDR 1B to IDR 3–5B by Year 2.',
    tag: 'Model Ekspansi'
  },
  {
    id: 'qbr',
    term: 'QBR (Quarterly Business Review)',
    acronym: 'QBR',
    fullNameId: 'Tinjauan Bisnis Kuartalan Bersama Eksekutif',
    fullNameEn: 'Quarterly Business Review',
    category: 'COMMERCIAL_SALES',
    definitionId: 'Pertemuan tinjauan formal setiap 90 hari bersama CISO, CIO, dan komite pengarah klien untuk memaparkan metrik ketahanan siber, nilai penghematan biaya, serta rencana peta jalan keamanan berikutnya.',
    definitionEn: 'Quarterly governance cadence presenting threat reduction metrics, verified ROI, and collaborative next-phase roadmaps to C-level stakeholders.',
    contextUsageId: 'Kunci mempertahankan tingkat retensi pendapatan bersih (Net Retention Rate > 120%) dan mengamankan kontrak tahunan.',
    contextUsageEn: 'Critical milestone securing net revenue retention (>120%) and seamless multi-year renewal commitments.',
    tag: 'Retensi Pelanggan'
  },
  {
    id: 'bast-clause',
    term: 'Klausul BAST',
    acronym: 'BAST',
    fullNameId: 'Berita Acara Serah Terima Pekerjaan',
    fullNameEn: 'Official Project Handover & Acceptance Certificate',
    category: 'COMMERCIAL_SALES',
    definitionId: 'Dokumen legal administratif formal di Indonesia yang ditandatangani oleh pejabat berwenang klien sebagai bukti penyelesaian pekerjaan jasa, yang secara hukum menjadi prasyarat penerbitan faktur pajak dan pencairan dana pembayaran.',
    definitionEn: 'Indonesian legal statutory certificate signed by client authorized signatories confirming service delivery completion, triggering formal billing and cash disbursement.',
    contextUsageId: 'Dikelola secara ketat dalam tahapan Paper Process untuk memastikan pengakuan pendapatan (*revenue recognition*) terjadi tepat waktu.',
    contextUsageEn: 'Strictly managed within the Paper Process stage to guarantee timely revenue recognition and invoice clearing.',
    tag: 'Administrasi Legal'
  },
  {
    id: 'co-selling',
    term: 'Co-Selling & Channel Partners',
    fullNameId: 'Penjualan Kolaboratif Melalui Ekosistem Saluran Kemitraan',
    fullNameEn: 'Collaborative Channel & Hyperscaler Co-Selling',
    category: 'COMMERCIAL_SALES',
    definitionId: 'Pola go-to-market bersama mitra System Integrator non-kompetitor (Mastersystem, Multipolar, Reycom Data Solusi, Sentral Mitra Informatika, Kirana Sakti), MSSP, dan penyedia komputasi awan (AWS, Google Cloud, Microsoft Azure) di mana transaksi dapat dibukukan melalui kontrak payung atau saldo komitmen belanja yang sudah ada.',
    definitionEn: 'Strategic joint go-to-market leverage with premier System Integrators, MSSPs, and Cloud Hyperscalers utilizing existing client procurement drawdowns.',
    contextUsageId: 'Menghilangkan hambatan pendaftaran vendor baru dan memperluas jangkauan ke 200+ akun enterprise di Indonesia.',
    contextUsageEn: 'Bypasses new vendor onboarding friction and accesses 200+ enterprise accounts in Indonesia.',
    tag: 'Ekosistem Saluran'
  },

  // FINANCIAL & MARKET METRICS
  {
    id: 'tam',
    term: 'TAM',
    acronym: 'TAM',
    fullNameId: 'Total Addressable Market (Pasar Keseluruhan)',
    fullNameEn: 'Total Addressable Market',
    category: 'FINANCIAL_MARKET',
    definitionId: 'Total potensi pendapatan teoritis maksimal yang dapat diraih jika seluruh pasar belanja keamanan siber enterprise di Indonesia dikuasai secara 100%, diestimasi mencapai $2,71 Miliar (~Rp 43,4 Triliun) pada tahun 2025 dan tumbuh ke $3,92 Miliar pada 2029.',
    definitionEn: 'The total theoretical revenue opportunity available if a solution achieved 100% market share across Indonesia\'s cybersecurity sector ($2.71B in 2025).',
    contextUsageId: 'Fondasi dasar makroekonomi untuk memvalidasi besarnya potensi industri kepada dewan komisaris dan investor.',
    contextUsageEn: 'Macroeconomic baseline validating total industry potential for board members and institutional investors.',
    tag: 'Metrik Pasar'
  },
  {
    id: 'sam',
    term: 'SAM',
    acronym: 'SAM',
    fullNameId: 'Serviceable Addressable Market (Pasar Tersedia)',
    fullNameEn: 'Serviceable Addressable Market',
    category: 'FINANCIAL_MARKET',
    definitionId: 'Porsi pasar dari TAM yang sesuai dengan segmen produk spesifik Bronyx dan ITSEC Asia, yakni pasar pengujian keamanan siber, analisis celah data, dan manajemen permukaan serangan di Indonesia, bernilai ~$430 Juta (~Rp 6,88 Triliun).',
    definitionEn: 'The segment of the TAM targeted by products and services within Bronyx and ITSEC Asia\'s immediate operational domain ($430M / ~IDR 6.88T).',
    contextUsageId: 'Menjadi kolam perburuan utama bagi tim penjualan enterprise lintas 7 sektor ekonomi prioritas.',
    contextUsageEn: 'Primary addressable hunting ground across the 7 designated enterprise economic sectors.',
    tag: 'Metrik Pasar'
  },
  {
    id: 'som',
    term: 'SOM',
    acronym: 'SOM',
    fullNameId: 'Serviceable Obtainable Market (Target Pasar Realistis)',
    fullNameEn: 'Serviceable Obtainable Market',
    category: 'FINANCIAL_MARKET',
    definitionId: 'Target porsi pasar realistis yang dapat dimenangkan oleh Sales Lead dalam periode operasional 90 hari hingga 1 tahun, berfokus pada 120 akun target enterprise dengan skor peluang tertinggi, diproyeksikan senilai $12 Juta (~Rp 192 Miliar).',
    definitionEn: 'The realistic portion of the SAM achievable by the Sales Lead within the 90-day to 1-year horizon across 120 high-priority scored accounts ($12M / ~IDR 192B).',
    contextUsageId: 'Target konversi rencana kerja 90 hari: fondasi di Bulan 1 (November), First Win Rp 1,0 Miliar di Bulan 2 (Desember), dan konsolidasi di Bulan 3 (Januari) dengan eskalasi kuartal.',
    contextUsageEn: 'Operational 90-day plan conversion: foundation in Month 1 (Nov), First Win IDR 1.0B in Month 2 (Dec), and consolidation in Month 3 (Jan) with progressive quarterly scaling.',
    tag: 'Metrik Pasar'
  },
  {
    id: 'idx-cybr',
    term: 'IDX: CYBR',
    acronym: 'CYBR',
    fullNameId: 'PT ITSEC Asia Tbk (Bursa Efek Indonesia)',
    fullNameEn: 'PT ITSEC Asia Tbk (Indonesia Stock Exchange)',
    category: 'FINANCIAL_MARKET',
    definitionId: 'Kode emiten saham PT ITSEC Asia Tbk di Bursa Efek Indonesia, merupakan perusahaan publik spesialis keamanan siber murni (*pure-play*) dengan rekam jejak lebih dari satu dekade melayani industri keuangan dan telekomunikasi di Asia Pasifik.',
    definitionEn: 'Stock ticker of PT ITSEC Asia Tbk on the Indonesia Stock Exchange, a leading pure-play publicly traded enterprise cybersecurity company in APAC.',
    contextUsageId: 'Memberikan kredibilitas korporat publik, transparansi finansial, dan auditabilitas yang sangat dipercaya oleh direksi enterprise.',
    contextUsageEn: 'Provides public listing credibility, regulatory transparency, and governance assurance required by enterprise procurement.',
    tag: 'Emiten Terbuka'
  },
  {
    id: 'arr',
    term: 'ARR',
    acronym: 'ARR',
    fullNameId: 'Annual Recurring Revenue (Pendapatan Berulang Tahunan)',
    fullNameEn: 'Annual Recurring Revenue',
    category: 'FINANCIAL_MARKET',
    definitionId: 'Metrik keuangan yang menunjukkan komponen pendapatan rutin dan terprediksi yang dinormalisasi ke dalam periode satu tahun dari kontrak berlangganan software atau retainer layanan pengujian siber berkala.',
    definitionEn: 'Normalized annual recurring software license and subscription retainer revenue generated predictably on a 12-month cadence.',
    contextUsageId: 'Target akumulasi ARR mencapai ~Rp 25 Miliar pada tahun pertama eksekusi komersial dengan eskalasi progresif per kuartal.',
    contextUsageEn: 'Key metric pacing towards ~IDR 25 Billion cumulative ARR across the 1-year cycle with progressive scaling.',
    tag: 'Metrik Keuangan'
  },
  {
    id: 'acv',
    term: 'ACV',
    acronym: 'ACV',
    fullNameId: 'Annual Contract Value (Nilai Kontrak Tahunan Rata-Rata)',
    fullNameEn: 'Annual Contract Value',
    category: 'FINANCIAL_MARKET',
    definitionId: 'Rata-rata nilai total pendapatan yang dihasilkan dari satu akun pelanggan enterprise dalam kurun waktu satu tahun fiskal.',
    definitionEn: 'The average annualized contract revenue recognized per enterprise client relationship over a 12-month period.',
    contextUsageId: 'Ditetapkan pada baseline Rp 1,0 Miliar untuk penawaran 500 endpoint awal dan ditingkatkan ke Rp 2–3 Miliar pasca ekspansi.',
    contextUsageEn: 'Anchored at IDR 1.0 Billion baseline per standardized engagement, expanding to IDR 2–3 Billion upon enterprise tier rollouts.',
    tag: 'Metrik Keuangan'
  },
  {
    id: 'deal-velocity',
    term: 'Deal Velocity',
    fullNameId: 'Kecepatan Konversi Siklus Penjualan',
    fullNameEn: 'Sales Cycle Deal Velocity',
    category: 'FINANCIAL_MARKET',
    definitionId: 'Ukuran kecepatan gerak sebuah peluang dari tahap kontak awal prospek, kualifikasi teknis POC, hingga penandatanganan kontrak legal dan penerbitan PO.',
    definitionEn: 'Measurement of the speed at which an enterprise opportunity progresses from initial qualification to contract signing.',
    contextUsageId: 'Dioptimalkan melalui POC 5 hari dan harga baku Rp 1 Miliar untuk memangkas rata-rata waktu deal menjadi di bawah 45 hari.',
    contextUsageEn: 'Optimized via 5-Day POCs and fixed-price IDR 1B offerings to maintain deal cycles below 45 days.',
    tag: 'Efisiensi Sales'
  },
  {
    id: 'win-rate',
    term: 'Win Rate',
    fullNameId: 'Persentase Kemenangan Peluang Pipeline',
    fullNameEn: 'Competitive Win Rate Ratio',
    category: 'FINANCIAL_MARKET',
    definitionId: 'Rasio persentase antara jumlah peluang penjualan yang berhasil dimenangkan (*closed-won*) dibandingkan dengan total peluang yang dievaluasi dalam tahap pipeline aktif.',
    definitionEn: 'The percentage of qualified sales pipeline opportunities that convert successfully into executed closed-won revenue.',
    contextUsageId: 'Ditargetkan pada rasio sehat 25%–35% untuk akun prioritas Tier-1 berkat dukungan reputasi PT ITSEC Asia Tbk.',
    contextUsageEn: 'Targeted at 25%–35% across priority Tier-1 accounts backed by ITSEC Asia\'s established enterprise footprint.',
    tag: 'Efisiensi Sales'
  },
  {
    id: 'composite-score',
    term: 'Skor Komposit (0–100)',
    fullNameId: 'Model Pembobotan Peluang 5-Dimensi Akun Target',
    fullNameEn: '5-Dimensional Composite Opportunity Scoring Model',
    category: 'FINANCIAL_MARKET',
    definitionId: 'Formula kuantitatif berbobot (Kompleksitas Digital 20%, Paparan Risiko 20%, Tekanan Regulasi 20%, Skala Bisnis 20%, Kesesuaian Produk 20%) untuk menentukan tingkat urgensi dan prioritas alokasi waktu Sales Lead.',
    definitionEn: 'Rigorous 5-dimension scoring algorithm (Digital Complexity, Exposure, Regulation, Scale, Product Fit) ranking accounts from 0 to 100.',
    contextUsageId: 'Mengelompokkan 120 akun ke dalam Level 1 Fokus (Skor ≥85), Level 2 Strategis (Skor 75–84), dan Level 3 Prospek (Skor <75).',
    contextUsageEn: 'Segregates 120 accounts into Level 1 Focus (Score ≥85), Level 2 Strategic (75–84), and Level 3 Prospect (<75).',
    tag: 'Model Skoring'
  }
];
