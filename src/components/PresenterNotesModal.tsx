import React from 'react';
import { Mic, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GlobalModal } from './GlobalModal';

interface PresenterNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSlideId: number;
}

interface SlidePresenterNoteBilingual {
  title: { id: string; en: string };
  executiveNarrative: { id: string[]; en: string[] };
  keyDeliverable: { id: string; en: string };
}

const SLIDE_PRESENTER_NOTES_BILINGUAL: Record<number, SlidePresenterNoteBilingual> = {
  1: {
    title: {
      id: "Pembukaan Eksekutif: Indonesia's Cybersecurity Market Leader",
      en: "Executive Opening: Indonesia's Cybersecurity Market Leader"
    },
    executiveNarrative: {
      id: [
        'Selamat pagi, Dewan Direksi dan Komite Eksekutif PT ITSEC Asia Tbk. Saya mempresentasikan mesin komersial 90 hari pertama untuk platform Bronyx.',
        'Misi komersial kita sangat tegas: mentransformasikan fondasi pendapatan cyber enterprise ITSEC Asia sebesar Rp 325 Miliar dan 300+ hubungan klien menjadi benteng ARR software berkecepatan tinggi.',
        'Presentasi ini memperagakan eksekusi konkret: bagaimana saya memetakan ICP, membangun pipeline enterprise Rp 24 Miliar+, mengonversi 3–4 logo perbankan seed dalam 90 hari, dan membakukan mesin penjualan berulang.'
      ],
      en: [
        'Good morning, Board of Directors and Executive Committee. I present the 90-day commercial engine for Bronyx at PT ITSEC Asia Tbk.',
        'Our commercial mission is unambiguous: turn ITSEC Asia\'s IDR 325B enterprise cybersecurity foundation and 300+ enterprise relationships into a high-velocity, high-margin ARR fortress with Bronyx.',
        'This presentation demonstrates exact execution: how I will understand our ICP, construct an IDR 24B+ enterprise pipeline, convert 3 to 4 seed banking logos in 90 days, and build a repeatable sales engine.'
      ]
    },
    keyDeliverable: {
      id: 'Membangun command center komersial Bronyx dan menyelaraskan gerak go-to-market dengan tim enterprise ITSEC.',
      en: 'Establish Bronyx commercial command center and align go-to-market with ITSEC enterprise teams.'
    }
  },
  2: {
    title: {
      id: 'Intelijen Pasar & Peluang Terjangkau (TAM · SAM · SOM)',
      en: 'Market Intelligence & Addressable Opportunity (TAM · SAM · SOM)'
    },
    executiveNarrative: {
      id: [
        'Pasar keamanan enterprise Indonesia diproyeksikan mencapai $2,71 Miliar pada tahun 2025 dengan pertumbuhan dua digit (IDC mencatat pertumbuhan software keamanan +16,1% YoY).',
        'Saya menguantifikasi peluang ini dalam piramida terukur: TAM $2,71 Miliar, SAM $165 Juta untuk continuous exposure management & security testing, dan SOM langsung Rp 48,0 Miliar di 120 akun prioritas.',
        'Dengan pendapatan ITSEC Asia sebesar Rp 325 Miliar (+55,5% YoY), kita memiliki kredibilitas enterprise untuk mengonversi SOM ini: eksekusi Q4 (Okt) fokus fondasi & PoC (Rp 0), First Win Rp 1,0 Miliar di November, dan akselerasi growth Rp 2,0 Miliar di Desember (Total 90 Hari Q4 Rp 3,0 Miliar / 3 Deals Won) sebelum eskalasi bertahap.'
      ],
      en: [
        'The Indonesian enterprise security market is projected to reach $2.71 Billion in 2025 (Statista) and grow at double digits (IDC reported +16.1% YoY growth for security software).',
        'I have quantified this opportunity into an actionable pyramid: TAM of $2.71 Billion, SAM of $165 Million in enterprise security testing and exposure management, and an immediate SOM of IDR 48.0 Billion across our 120 prioritized accounts.',
        'With PT ITSEC Asia Tbk delivering IDR 325B in FY2024 revenue (+55.5% YoY), we possess the enterprise credibility to convert this SOM: Q4 launch with foundation in Month 1 (October, IDR 0), First Win IDR 1.0B in Month 2 (November), and IDR 2.0B growth in Month 3 (December) (Total 90D Q4 IDR 3.0B / 3 Deals Won) before scaling.'
      ]
    },
    keyDeliverable: {
      id: 'Menetapkan peta jalan penangkapan TAM-SAM-SOM yang bertumpu pada pengujian keamanan enterprise berkecepatan tinggi.',
      en: 'Establish TAM-SAM-SOM capture roadmap anchored on high-velocity enterprise security testing.'
    }
  },
  3: {
    title: {
      id: 'Pemetaan Akun Target & Prioritas',
      en: 'Target Market & Account Prioritization'
    },
    executiveNarrative: {
      id: [
        'Indonesia bukan pasar yang seragam. Saya telah memodelkan 120 akun target enterprise di 6 sektor dengan eksposur regulasi tertinggi.',
        'Model Opportunity Scoring kami menilai akun secara objektif berdasarkan Kompleksitas Digital, Eksposur Keamanan, Tekanan Regulasi, Skala Usaha, dan Kesesuaian Strategis.',
        'Perbankan Tier-1 (BCA, Mandiri, BRI, BNI) dan Fintech teregulasi (Bank Jago, DANA) memiliki skor urgensi tertinggi (>92/100). Di situlah fokus hari pertama kami.'
      ],
      en: [
        'Indonesia is not a monolithic market. I have modeled 120 target accounts across 6 high-exposure sectors.',
        'Our Opportunity Scoring model objectively ranks accounts by Digital Complexity, Security Exposure, Regulatory Pressure, Scale, and Strategic Fit.',
        'Tier-1 Banking (BCA, Mandiri, BRI, BNI) and hyper-growth Fintech (Bank Jago, DANA) have the highest urgency score (>92/100). That is where our day 1 focus begins.'
      ]
    },
    keyDeliverable: {
      id: 'Mengunci 120 akun target dengan prioritas pada Perbankan Tier-1 dan Fintech berizin OJK.',
      en: 'Lock 120-account target universe with priority on Tier-1 Banking and regulated Fintech.'
    }
  },
  4: {
    title: {
      id: 'Strategi Go-To-Market: Segmentasi & Parit Posisi 3 Arah',
      en: 'Go-To-Market Strategy: Target Segmentation & 3-Way Positioning Moat'
    },
    executiveNarrative: {
      id: [
        'Strategi Go-To-Market kami bertumpu pada 4 pilar: WHO (Perbankan Tier-1 & Fintech), WHY (kepatuhan OJK SEOJK 29 & UU PDP serta percepatan waktu 80%), WHEN (siklus audit & sprint rilis CI/CD), dan HOW (kombinasi cross-sell ITSEC, outreach langsung ke CISO, dan co-sell SI).',
        'Melalui Matriks Segmentasi 2D, kami memusatkan outbound hari 1–30 secara eksklusif pada kuadran kanan atas: organisasi dengan maturitas tinggi dan permukaan digital kompleks.',
        'Menghadapi pentest manual tradisional dan scanner DAST generik, Bronyx menciptakan parit persaingan 3 arah: kecepatan otonom dalam hitungan jam, keamanan zero blast radius, dan validasi sertifikasi ITSEC Asia.'
      ],
      en: [
        'Our Go-To-Market strategy is anchored on four pillars: WHO (Tier-1 Banking, Regulated Fintech & Telcos), WHY (OJK SEOJK 29 & UU PDP compliance plus 80% lead-time reduction), WHEN (audit season & CI/CD release sprints), and HOW (multi-engine motion combining ITSEC cross-sell, direct CISO outreach, and SI co-selling).',
        'Through our 2D Segmentation Matrix, we focus Day 1-30 outbound exclusively on the Top-Right quadrant—organizations with high security maturity and complex digital surfaces.',
        'Against traditional manual pentests and generic DAST scanners, Bronyx creates an unbeatable 3-way moat: autonomous speed in hours, zero blast radius safety, and certified ITSEC Asia validation.'
      ]
    },
    keyDeliverable: {
      id: 'Menjalankan buku taktis GTM lintas kanal dengan target pembeli enterprise berevolusi tinggi.',
      en: 'Execute multi-channel GTM playbook targeting high-complexity enterprise buyers.'
    }
  },
  5: {
    title: {
      id: 'Akun Target Enterprise & Arsitektur Pipeline',
      en: 'Enterprise Target Accounts & Pipeline Architecture'
    },
    executiveNarrative: {
      id: [
        'Ini adalah model operasional pipeline penjualan kami. Dari 50 akun target potensial di Jabodetabek, saya mengualifikasikan kebutuhan deteksi kebocoran data, menggelar 16 discovery C-Level, dan menginisiasi 8–14 PoC 5-hari berjadwal.',
        'Penggerak kecepatan kami adalah PoC otonom 5 hari zero blast radius membuktikan celah kebocoran data aktual.',
        'Corong ini terukur menghasilkan 1 kesepakatan komersial per bulan (@ Rp 1 Miliar/bulan untuk 500 device) yang dicapai di Bulan 2–3, mencapai target baseline Sales Lead Harry Gultom sebesar Rp 1,0 Miliar/bulan.'
      ],
      en: [
        'Here is our pipeline operating model. From 50 prioritized Jabodetabek enterprise accounts, I qualify data leakage detection needs, run 16 C-level discovery sessions, and initiate 8–14 scheduled 5-day PoCs.',
        'Our velocity driver is the 5-day zero-blast-radius automated PoC empirically proving data exposure and exploitability in days.',
        'This funnel converts into 1 closed commercial deal per month (@ IDR 1.0B/mo up to 500 devices) achieved in Months 2–3, locking Sales Lead Harry Gultom\'s baseline quota of IDR 1.0 Billion/month.'
      ]
    },
    keyDeliverable: {
      id: 'Menjaga cakupan pipeline 3,5x hingga 4,0x dengan konversi minimal 30% dari mature opportunities ke tahap closing.',
      en: 'Maintain 3.5x to 4.0x pipeline coverage with minimum 30% conversion from mature opportunities to closed deals.'
    }
  },
  6: {
    title: {
      id: 'Gerak Penjualan Berpusat pada Pembeli & Perjalanan Pemangku Kepentingan',
      en: 'Buyer-Centric Sales Motion & Stakeholder Journey'
    },
    executiveNarrative: {
      id: [
        'Keputusan cybersecurity enterprise membutuhkan konsensus multi-pemangku kepentingan. Saya memetakan proposisi nilai spesifik bagi masing-masing pihak.',
        'Bagi CISO: ketahanan berkelanjutan siap dewan direksi dan kepatuhan OJK. Bagi CIO: penghematan TCO operasional 60%. Bagi SecOps: validasi eksploitasi bebas false positive. Bagi DevSecOps: integrasi CI/CD dengan re-test 1 klik.',
        'Setiap interaksi penjualan mengikuti gerak 6 langkah: Pemicu -> Temukan -> Demo -> PoC -> Penutupan -> Ekspansi.'
      ],
      en: [
        'Enterprise cybersecurity decisions require multi-stakeholder consensus. I have mapped the exact value proposition for each stakeholder.',
        'For the CISO: Board-ready continuous resilience and OJK compliance. For the CIO: 60% operational TCO savings. For SecOps: Zero false-positive exploit validation. For DevSecOps: CI/CD integration with 1-click retest.',
        'Every sales conversation follows our 6-step motion: Trigger -> Discovery -> Demo -> PoC -> Close -> Expand.'
      ]
    },
    keyDeliverable: {
      id: 'Menjalankan keterlibatan eksekutif multi-jalur dengan menggalang dukungan CISO dan champion teknis DevSecOps.',
      en: 'Execute multi-threaded executive engagement engaging both CISO and DevSecOps champions.'
    }
  },
  7: {
    title: {
      id: 'Model Komersial, Harga Flagship Rp 1M & Mesin Revenue Rp 1M/Bulan Progresif',
      en: 'Commercial Models, IDR 1B Flagship Pricing & IDR 1B/Mo Progressive Engine'
    },
    executiveNarrative: {
      id: [
        'Yang kami tawarkan adalah solusi Cyber Security otonom Bronyx AI untuk mendeteksi celah kebocoran data (Data Leakage & Sensitive Exposure) pada infrastruktur enterprise.',
        'Model harga flagship adalah Rp 1.000.000.000 (1 Miliar) per deal (hitungan sekali jasa) dengan kapasitas cakupan hingga 500 device (server, database, API, cluster Kubernetes, perimeter).',
        'Kenapa Harry Gultom dipilih: Harry menetapkan target kuota baseline yang solid & terukur senilai Rp 1 Miliar per bulan (1 deal @ Rp 1M per 500 device). Di awal (Bulan 1 / Oktober) tidak dipaksakan closing langsung melainkan fokus membangun fondasi, PoC 5-hari, dan pipeline 50 akun; achieve deal perdana diraih pada Bulan 2 (November), akselerasi di Bulan 3 (Desember via Budget Flush) menutup Q4 Rp 3,0 Miliar, kemudian bertumbuh progresif ke kuartal-kuartal berikutnya.',
        'Pertumbuhan bertumbuh secara terukur: Q4 (Okt–Des Rp 3,0M / 3 deals won), Q1 (Jan–Mar Rp 5,5M), Q2 (Apr–Jun Rp 6,5M), Q3 (Jul–Sep Rp 10,0M) — Total Tahunan mencapai ~Rp 25,0 Miliar ARR.'
      ],
      en: [
        'Our primary offering is Bronyx AI autonomous cybersecurity platform detecting data leakage vulnerabilities and sensitive data exposures across enterprise infrastructure.',
        'Our flagship pricing is IDR 1,000,000,000 (1 Billion) per deal (single service engagement) covering up to 500 dedicated devices (servers, databases, APIs, Kubernetes clusters, perimeter assets).',
        'Why Harry Gultom was selected: Harry sets a realistic, solid baseline target of IDR 1.0 Billion per month (1 deal @ IDR 1B / 500 devices). In Month 1 (October), execution focuses on account warming, PoC validation, and pipeline building without forcing immediate closing; initial win is achieved in Month 2 (November), accelerating in Month 3 (December via Budget Flush) closing Q4 at IDR 3.0B, followed by progressive quarterly growth.',
        'Growth scales measurably: Q4 (Oct–Dec IDR 3.0B / 3 deals won), Q1 (Jan–Mar IDR 5.5B), Q2 (Apr–Jun IDR 6.5B), Q3 (Jul–Sep IDR 10.0B) — Full-year cumulative ARR reaches ~IDR 25.0 Billion.'
      ]
    },
    keyDeliverable: {
      id: 'Membakukan model penjualan 1 deal @ Rp 1 Miliar/bulan (achieve perdana di B2–B3) dan lintasan pertumbuhan optimis menuju Rp 3,0 Miliar/bulan di penutupan kuartal 4.',
      en: 'Standardize 1 deal @ IDR 1B/month model (initial win in M2–M3) and progressive growth trajectory reaching IDR 3.0B/month by Q4 close.'
    }
  },
  8: {
    title: {
      id: 'Daya Ungkit Ekosistem Saluran Kemitraan',
      en: 'Channel & Partnership Ecosystem Leverage'
    },
    executiveNarrative: {
      id: [
        'Penjualan langsung saja tidak cukup untuk merebut pasar enterprise Indonesia secara cepat. Saya akan mengaktifkan saluran kemitraan berdaya ungkit tinggi.',
        'Kandidat mitra mencakup System Integrator Tier-1 non-kompetitor (Multipolar, Mastersystem, Reycom Data Solusi, Kirana Sakti), Distributor Nasional (CTI Group, ACA Pacific), serta Cloud Marketplace (AWS / GCP Indonesia).',
        'Dengan margin reseller 15–20%, mitra dapat menggabungkan Bronyx ke dalam proyek transformasi core banking bernilai jutaan dolar.'
      ],
      en: [
        'Direct sales alone is not enough to capture Indonesia\'s enterprise market. I will activate high-leverage channel partnerships.',
        'We have identified candidates across verified non-competitor Tier-1 System Integrators (Multipolar, Mastersystem, Reycom Data Solusi, Kirana Sakti), Regional Distributors (CTI Group, ACA Pacific), and Cloud Marketplaces (AWS/GCP Indonesia).',
        'By offering 15-20% reseller margins, partners can bundle Bronyx into their multi-million dollar digital core banking and cloud transformation projects.'
      ]
    },
    keyDeliverable: {
      id: 'Menandatangani 3 MOU co-sell dengan mitra SI Tier-1 dalam 60 hari pertama.',
      en: 'Sign 3 Tier-1 SI co-sell partnership MOUs within the first 60 days.'
    }
  },
  9: {
    title: {
      id: 'Rencana Eksekusi Taktis: Target Per Bulan Harry Gultom (Baseline Rp 1M, Achieve B2–B3 & Siklus Kuartal Q4)',
      en: 'Tactical Execution Plan: Harry Gultom Monthly Quota (Baseline IDR 1B, M2-M3 Win & Q4 Cycle)'
    },
    executiveNarrative: {
      id: [
        'Klarifikasi mendasar dewan direksi: Eksekusi dimulai di bulan Oktober (Kuartal 4). Bulan 1 (Oktober) difokuskan pada fondasi, mapping 50 akun, dan inisiasi PoC 5-hari tanpa memaksakan closing prematur.',
        'Bulan 1 / Okt (Hari 1–30): Target closing Rp 0 (Pengumpulan Data & PoC). Membangun pipeline berkualifikasi Rp 9,0 Miliar dan memulai 6 PoC paralel di akun perbankan/fintech.',
        'Bulan 2 / Nov (Hari 31–60): FIRST WIN — Target closing Rp 1,0 Miliar (1 Deal Won @ Rp 1M / 500 device). Pipeline naik ke Rp 15,0 Miliar dengan 10 PoC aktif.',
        'Bulan 3 / Des (Hari 61–90): AKSELERASI GROWTH — Target closing Rp 2,0 Miliar (2 Deals Won @ Rp 1M via Year-End Budget Flush). Akumulasi 90 hari (Q4) mencapai Rp 3,0 Miliar (3 Deals Won) dengan rolling pipeline buffer Rp 20,0 Miliar.',
        'Ekspansi Berkelanjutan Siklus Kuartal: Melanjutkan Q1 tahun depan (Jan–Mar Rp 5,5M–6,0M), Q2 (Apr–Jun), Q3, dan Q4 dengan target kumulatif ~Rp 25 Miliar di tahun pertama.'
      ],
      en: [
        'Fundamental executive clarification: Execution launches in October (Quarter 4). Month 1 focuses on foundation, 50-account mapping, and 5-day PoC initiation without premature closing (IDR 0).',
        'Month 1 / Oct (Days 1–30): Closing target IDR 0 (Data Gathering & PoC). Building IDR 9.0B qualified pipeline and running 6 parallel PoCs in banking/fintech.',
        'Month 2 / Nov (Days 31–60): FIRST WIN — Target IDR 1.0B (1 Deal Won @ IDR 1B / 500 devices). Pipeline expands to IDR 15.0B with 10 active PoCs.',
        'Month 3 / Dec (Days 61–90): GROWTH ACCELERATION — Target IDR 2.0B (2 Deals Won @ IDR 1B via Year-End Budget Flush). Initial 90-day cumulative reaches IDR 3.0B (3 Deals Won) closing Q4 with IDR 20.0B rolling buffer.',
        'Quarterly Cycle Scale: Advancing Q1 next year, Q2, Q3, and Q4 reaching ~IDR 25B cumulative in year one.'
      ]
    },
    keyDeliverable: {
      id: 'Mewujudkan komitmen terukur Harry Gultom: B1 (Okt) Rp 0 (Pengumpulan Data), B2 (Nov) Rp 1,0M (First Win), B3 (Des) Rp 2,0M (Akselerasi Growth) = Total 90 Hari Q4 Rp 3,0 Miliar (3 Deals Won), siap bertumbuh di Q1 tahun berikutnya.',
      en: 'Deliver Harry Gultom\'s realistic commitment: M1 (Oct) IDR 0 (Data Gathering), M2 (Nov) IDR 1.0B (First Win), M3 (Dec) IDR 2.0B (Growth Acceleration) = Total 90D Q4 IDR 3.0B (3 Deals Won), ready for Q1 scaling next year.'
    }
  },
  10: {
    title: {
      id: 'Pusat Kendali KPI & Pemantauan Target 90 Hari Rp 3,0 Miliar Harry Gultom',
      en: 'KPI Control Center & Monitoring of Harry Gultom\'s IDR 3.0B 90-Day Plan'
    },
    executiveNarrative: {
      id: [
        'Dashboard ini memantau pencapaian kuota bulanan Sales Lead Harry Gultom: Pengumpulan Data di Bulan 1 (Oktober, Rp 0), First Win Rp 1,0 Miliar di Bulan 2 (November), dan akselerasi growth Rp 2,0 Miliar di Bulan 3 (Desember via Year-End Budget Flush) dengan total 90 hari Q4 Rp 3,0 Miliar (3 Deals Won).',
        'Kami melacak keseimbangan antara leading activities harian (16 discovery, 8–14 PoC 5-hari, 6–8 proposal matang) dengan lagging financial outcomes (Rp 3,0M 90-hari, pipeline buffer Rp 20,0 Miliar).',
        'Tingkat konversi dari mature opportunities ke closing dijaga realistis pada 37%–50% (3 deal menang dari 6–8 proposal matang).'
      ],
      en: [
        'This dashboard monitors the monthly quota delivery of Sales Lead Harry Gultom: Month 1 data gathering & PoC (Oct, IDR 0), Month 2 First Win IDR 1.0B (Nov), and Month 3 growth acceleration IDR 2.0B (Dec via Budget Flush) totaling IDR 3.0B (3 Deals Won) in 90 days.',
        'We track balanced equilibrium between daily leading activities (16 discovery, 8–14 5-day PoCs, 6–8 mature proposals) and lagging revenue (IDR 3.0B in 90 days, IDR 20.0B pipeline buffer).',
        'Conversion rate from mature opportunities to closing is maintained at 37%–50% (3 won deals out of 6–8 mature proposals).'
      ]
    },
    keyDeliverable: {
      id: 'Memastikan ketercapaian target First Win Rp 1,0 Miliar di Bulan 2 (November) dan total Rp 3,0 Miliar (3 Deals Won) dalam 90 hari Q4 dengan rasio cakupan pipeline ≥4,0x setiap minggu.',
      en: 'Ensure delivery of First Win IDR 1.0B in Month 2 (November) and IDR 3.0B (3 Deals Won) in 90 days (Q4) with ≥4.0x pipeline coverage weekly.'
    }
  },
  11: {
    title: {
      id: 'Penutup Eksekutif & Lintasan Skala Hari ke-91+',
      en: 'Executive Synthesis & Day-91+ Scale Trajectory'
    },
    executiveNarrative: {
      id: [
        'Sebagai kesimpulan, rencana 90 hari ini bukan sekadar presentasi strategi, melainkan cetak biru operasional yang siap saya jalankan sejak hari pertama.',
        'Dengan memadukan urgensi regulasi OJK & UU PDP, pembuktian empiris PoC 5 hari, serta warisan kepercayaan enterprise ITSEC Asia Tbk (Rp 325 Miliar), kita akan memenangkan pasar perbankan dan fintech.',
        'Mulai Hari ke-91, kita siap mengekspansi mesin ini ke jaringan kantor regional ITSEC Asia di Singapura, Thailand, Australia, dan Timur Tengah.'
      ],
      en: [
        'In conclusion, this 90-day plan is not mere strategy slides, but an operational blueprint ready for Day-1 execution.',
        'By combining regulatory urgency (OJK & UU PDP), empirical 5-day PoC proof, and ITSEC Asia Tbk\'s trusted enterprise heritage (IDR 325B), we will capture the financial sector.',
        'From Day 91 onwards, we are prepared to scale this repeatable engine across ITSEC Asia\'s regional offices in Singapore, Thailand, Australia, and the Middle East.'
      ]
    },
    keyDeliverable: {
      id: 'Membangun mesin komersial software berkecepatan tinggi yang menghasilkan ARR berkelanjutan bagi PT ITSEC Asia Tbk.',
      en: 'Build high-velocity software ARR engine delivering sustainable shareholder value for PT ITSEC Asia Tbk.'
    }
  }
};

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  isOpen,
  onClose,
  activeSlideId
}) => {
  const { language } = useLanguage();
  const isId = language === 'id';

  if (!isOpen) return null;

  const currentNotes = SLIDE_PRESENTER_NOTES_BILINGUAL[activeSlideId] || SLIDE_PRESENTER_NOTES_BILINGUAL[1];

  return (
    <GlobalModal
      isOpen={isOpen}
      onClose={onClose}
      icon={<Mic className="w-5 h-5" />}
      title={
        <>
          {isId ? 'Catatan Pembicara Eksekutif (Executive Speaking Notes)' : 'Executive Presenter Speaking Notes'}
          <span className="text-xs font-mono text-rose-400">· {isId ? 'Slide Aktif' : 'Active Slide'} {String(activeSlideId).padStart(2, '0')}</span>
        </>
      }
      subtitle={
        isId 
          ? 'Panduan narasi vokal profesional untuk sesi wawancara & tinjauan dewan direksi PT ITSEC Asia Tbk.' 
          : 'Professional boardroom vocal script & strategic talking points for executive assessment.'
      }
      maxWidthClass="max-w-3xl"
      footerContent={
        <span>{isId ? 'Nada Komunikasi: Tegas, Percaya Diri, Berbasis Data' : 'Executive Tone: Confident, Crisp, Data-Anchored'}</span>
      }
    >
      {/* Slide Title Context */}
      <div className="p-3.5 bg-neutral-900/80 border border-neutral-800 rounded">
        <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
          {isId ? 'FOKUS SLIDE INI' : 'CURRENT SLIDE FOCUS'}
        </span>
        <h3 className="text-sm font-bold text-white">
          {currentNotes.title[language]}
        </h3>
      </div>

      {/* Narrative Paragraphs */}
      <div className="space-y-3">
        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          {isId ? 'Poin Bicara Utama (Talking Points)' : 'Executive Talking Points'}
        </h4>
        {currentNotes.executiveNarrative[language].map((paragraph, idx) => (
          <div 
            key={idx}
            className="p-3.5 bg-neutral-950/60 border border-neutral-800 rounded text-xs text-neutral-200 leading-relaxed font-sans"
          >
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-rose-950 border border-rose-800 text-[10px] font-mono font-bold text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <span>{paragraph}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Key Deliverable */}
      <div className="p-3.5 bg-rose-950/30 border border-rose-900/50 rounded flex items-start gap-3">
        <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
        <div className="text-xs">
          <strong className="text-white block mb-0.5 font-mono uppercase tracking-wider text-[11px]">
            {isId ? 'HASIL KUNCI YANG DIHARAPKAN' : 'CORE EXECUTIVE DELIVERABLE'}
          </strong>
          <p className="text-rose-100/90 leading-relaxed">
            {currentNotes.keyDeliverable[language]}
          </p>
        </div>
      </div>
    </GlobalModal>
  );
};
