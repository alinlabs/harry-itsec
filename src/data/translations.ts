import { Language } from '../context/LanguageContext';

export interface BilingualText {
  id: string;
  en: string;
}

export interface SlideMetaBilingual {
  id: number;
  chapter: BilingualText;
  title: BilingualText;
  subtitle: BilingualText;
  keyQuestion: BilingualText;
}

export const SLIDE_INDEX_LIST_BILINGUAL: SlideMetaBilingual[] = [
  {
    id: 1,
    chapter: {
      id: 'RINGKASAN EKSEKUTIF',
      en: 'EXECUTIVE OVERVIEW'
    },
    title: {
      id: "Strategi Komersial & Penetrasi Pasar",
      en: "Commercial Strategy & Market Penetration"
    },
    subtitle: {
      id: 'Penguasaan pasar keamanan siber enterprise melalui penetrasi lintas sektor.',
      en: 'Enterprise cybersecurity market penetration across key commercial sectors.'
    },
    keyQuestion: {
      id: 'Bagaimana Sales Lead memimpin akuisisi pasar siber lintas sektor di Indonesia?',
      en: 'How does the Sales Lead drive multi-sector cybersecurity market leadership in Indonesia?'
    }
  },
  {
    id: 2,
    chapter: {
      id: 'RISET PASAR & POTENSI',
      en: 'MARKET INTELLIGENCE'
    },
    title: {
      id: 'Potensi Pasar & Kuantifikasi Peluang',
      en: 'Addressable Market & Opportunity Breakdown'
    },
    subtitle: {
      id: 'Kuantifikasi pasar keamanan siber Indonesia dalam segmen TAM, SAM, dan SOM.',
      en: 'Quantifying Indonesia cybersecurity expenditure into TAM, SAM, and SOM.'
    },
    keyQuestion: {
      id: 'Seberapa besar peluang pasar enterprise yang dapat diraih Bronyx?',
      en: 'How large is the addressable enterprise opportunity for Bronyx?'
    }
  },
  {
    id: 3,
    chapter: {
      id: 'TARGET AKUN ENTERPRISE',
      en: 'TARGET ACCOUNTS'
    },
    title: {
      id: 'Pemetaan Akun Target & Prioritisasi',
      en: 'Target Account Mapping & Prioritization'
    },
    subtitle: {
      id: 'Daftar Akun Target di 7 Sektor Kritis',
      en: 'Target Accounts across 7 Critical Sectors'
    },
    keyQuestion: {
      id: 'Akun mana yang layak menjadi prioritas tertinggi sejak Hari Pertama?',
      en: 'Which accounts deserve sales priority on Day One?'
    }
  },
  {
    id: 4,
    chapter: {
      id: 'STRATEGI GO-TO-MARKET',
      en: 'GO-TO-MARKET STRATEGY'
    },
    title: {
      id: 'Strategi GTM & Segmentasi Pasar',
      en: 'Go-To-Market Strategy & Segmentation'
    },
    subtitle: {
      id: 'Segmentasi target, matriks use case, dan posisi komersial.',
      en: 'Target segmentation, use case matrix, and commercial positioning.'
    },
    keyQuestion: {
      id: 'Siapa, mengapa, kapan, dan bagaimana Bronyx memenangkan pasar enterprise?',
      en: 'Who, why, when and how will Bronyx capture the enterprise market?'
    }
  },
  {
    id: 5,
    chapter: {
      id: 'PIPELINE PENJUALAN',
      en: 'SALES PIPELINE'
    },
    title: {
      id: 'Model & Arsitektur Pipeline Penjualan',
      en: 'Sales Pipeline Model & Architecture'
    },
    subtitle: {
      id: 'Pipa penjualan 8 tahap dengan konversi terukur per fase.',
      en: 'An 8-stage operating sales pipeline with measurable conversion benchmarks.'
    },
    keyQuestion: {
      id: 'Bagaimana akun bergerak dari Prospek menjadi Kesepakatan Dimenangkan?',
      en: 'How does an account advance from Prospect to Closed Won?'
    }
  },
  {
    id: 6,
    chapter: {
      id: 'SIKLUS PENJUALAN',
      en: 'SALES MOTION'
    },
    title: {
      id: 'Siklus Penjualan & Pemangku Kepentingan',
      en: 'Sales Motion & Stakeholders'
    },
    subtitle: {
      id: 'Pendekatan komite pembeli lintas peran dan kerangka PoC 5 hari.',
      en: 'Multi-stakeholder alignment framework and 5-day PoC methodology.'
    },
    keyQuestion: {
      id: 'Bagaimana cara membangun kepercayaan eksekutif dan memvalidasi PoC?',
      en: 'How do I win executive trust and overcome technical objections?'
    }
  },
  {
    id: 7,
    chapter: {
      id: 'KOMERSIALISASI & REVENUE',
      en: 'COMMERCIALIZATION & REVENUE'
    },
    title: {
      id: 'Arsitektur Revenue Rp 1M – 2M/Bulan & Eskalasi',
      en: 'IDR 1B – 2B/Month Revenue Architecture & Escalation'
    },
    subtitle: {
      id: 'Deteksi celah kebocoran data Bronyx AI @ Rp 1M – 2M/bulan, achieve 90 Hari Rp 3,0 M (3 Deals Won), dan eskalasi tahunan terukur.',
      en: 'Bronyx AI data leakage detection @ IDR 1B – 2B/month, 90-Day IDR 3.0B quota attainment (3 Deals Won), and scalable escalation.'
    },
    keyQuestion: {
      id: 'Bagaimana Harry Gultom mewujudkan target 90 hari Rp 3,0 Miliar (B2: 1M + B3: 2M) dan eskalasi progresif secara terukur?',
      en: 'How does Harry Gultom deliver the 90-day IDR 3.0B target (M2: 1B + M3: 2B) and progressive growth in an auditable manner?'
    }
  },
  {
    id: 8,
    chapter: {
      id: 'EKOSISTEM KEMITRAAN',
      en: 'PARTNERSHIPS & CHANNELS'
    },
    title: {
      id: 'Kemitraan Saluran & Co-Selling',
      en: 'Channel Partnerships & Co-Selling'
    },
    subtitle: {
      id: 'Kolaborasi dengan System Integrator, Distributor, dan Marketplace.',
      en: 'Collaboration with System Integrators, Distributors, and Marketplaces.'
    },
    keyQuestion: {
      id: 'Bagaimana memanfaatkan mitra tidak langsung untuk melipatgandakan jangkauan pasar?',
      en: 'How do we leverage indirect channels to multiply market reach?'
    }
  },
  {
    id: 9,
    chapter: {
      id: 'RENCANA EKSEKUSI 90 HARI',
      en: '90-DAY EXECUTION PLAN'
    },
    title: {
      id: 'Eksekusi 90 Hari & Target Bulanan',
      en: '90-Day Execution & Monthly Targets'
    },
    subtitle: {
      id: 'Tahapan eksekusi 90 hari dan target kuota bulanan.',
      en: '90-day execution roadmap with monthly quota targets.'
    },
    keyQuestion: {
      id: 'Bagaimana target dicapai setiap bulan dan bagaimana strategi berkembang dalam 90 hari?',
      en: 'How are targets achieved each month and how does strategy evolve across 90 days?'
    }
  },
  {
    id: 10,
    chapter: {
      id: 'KONTROL KPI & OPERASIONAL',
      en: 'KPI & OPERATIONAL CONTROL'
    },
    title: {
      id: 'Pusat Kendali KPI & Operasional',
      en: 'KPI Control Center & Operations'
    },
    subtitle: {
      id: 'Pemantauan kinerja bulanan, deret waktu 12 minggu, dan mitigasi risiko.',
      en: 'Monthly performance tracking, 12-week time series, and risk mitigation.'
    },
    keyQuestion: {
      id: 'Bagaimana saya memantau pencapaian kuota bulanan dan akselerasi pipeline kuartal?',
      en: 'How do I track monthly quota attainment and quarterly pipeline acceleration?'
    }
  },
  {
    id: 11,
    chapter: {
      id: 'PENUTUP & SKALABILITAS',
      en: 'CLOSING & SCALABILITY'
    },
    title: {
      id: 'Ringkasan Eksekutif & Skalabilitas',
      en: 'Executive Summary & Scalability'
    },
    subtitle: {
      id: 'Rencana pertumbuhan jangka panjang dan pengembangan ARR.',
      en: 'Long-term growth roadmap and recurring ARR scaling.'
    },
    keyQuestion: {
      id: 'Seperti apa wujud keberhasilan komersial pada Hari ke-91 dan seterusnya?',
      en: 'What does commercial success look like on Day 91 and beyond?'
    }
  }
];

export const UI_TRANSLATIONS = {
  header: {
    role: { id: 'PERAN: SALES LEAD', en: 'ROLE: SALES LEAD' },
    platform: { id: 'PLATFORM: BRONYX AI', en: 'PLATFORM: BRONYX AI' },
    subTitleTicker: { id: 'Mesin Komersial 90 Hari', en: '90-Day Commercial Engine' },
    dataSources: { id: 'Sumber', en: 'Sources' },
    speakingNotes: { id: 'Catatan Presenter', en: 'Speaking Notes' },
    slides: { id: 'Daftar Isi', en: 'Contents' },
    exitPresenter: { id: 'Keluar Mode Presenter [Esc]', en: 'Exit Presenter Mode [Esc]' },
    switchLanguage: { id: 'Ganti Bahasa', en: 'Switch Language' }
  },
  nav: {
    navigate: { id: 'Navigasi', en: 'Navigate' },
    next: { id: 'Lanjut', en: 'Next' },
    resetView: { id: 'Reset Tampilan', en: 'Reset View' },
    prevSlide: { id: 'Slide Sebelumnya', en: 'Previous Slide' },
    nextSlide: { id: 'Slide Berikutnya', en: 'Next Slide' }
  },
  modals: {
    dataTitle: { id: 'Transparansi Data & Metodologi Riset', en: 'Data Transparency & Research Sources' },
    notesTitle: { id: 'Catatan Pembicara Eksekutif (Executive Speaking Notes)', en: 'Executive Presenter Speaking Notes' },
    close: { id: 'Tutup', en: 'Close' }
  }
};
