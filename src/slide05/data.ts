import { FunnelStepCard } from './types';

export const FUNNEL_STEP_CARDS: FunnelStepCard[] = [
  {
    step: '01',
    title: 'Proactive Prospecting',
    metric: '50 Akun',
    descId: 'Pemetaan 50 radar akun Bank, BUMN, & FinTech di Jabodetabek.',
    descEn: 'Mapping 50 top Tier-1 Banks, SOEs, and FinTechs in Jabodetabek.',
    footerLeft: 'Metode: Riset & C-Level Intro',
    footerRight: '100% Pool',
    stepColorClass: 'bg-rose-950/90 border-rose-800/80 text-rose-300',
    stepBorderClass: 'hover:border-neutral-700'
  },
  {
    step: '02',
    title: 'Strict Qualification',
    metric: '20-30 Akun',
    descId: 'Kualifikasi mandat UU PDP No. 27/2022 & SEOJK 29/2022 (kapasitas 500 device).',
    descEn: 'Qualify compliance urgency (UU PDP, SEOJK 29/2022) for 500-device assets.',
    footerLeft: 'Kriteria: Mandat Regulasi',
    footerRight: '50–60% Pool',
    stepColorClass: 'bg-sky-950/90 border-sky-800/80 text-sky-300',
    stepBorderClass: 'hover:border-neutral-700'
  },
  {
    step: '03',
    title: '5-Day Free PoC',
    metric: '8-14 Poc',
    descId: 'Uji aman 5 hari mendeteksi celah kebocoran data staging tanpa blast radius.',
    descEn: '5-day non-destructive security health check showing zero blast radius.',
    footerLeft: 'Bukti: Laporan Celah Nyata',
    footerRight: '25–30% Pool',
    stepColorClass: 'bg-amber-950/90 border-amber-800/80 text-amber-300',
    stepBorderClass: 'hover:border-neutral-700'
  },
  {
    step: '04',
    title: 'Commercial Closing',
    metric: '1 Won / Bln',
    descId: '1 Deal @ Rp 1 Miliar/bln = Rp 1 Miliar/bln (Achieve B2–B3 & bertumbuh progresif).',
    descEn: '1 Deal @ IDR 1B/mo = IDR 1B/mo closed quota (Month 2–3 win & progressive scale).',
    footerLeft: 'Hasil: Target Baseline',
    footerRight: '≥30% Konversi',
    stepColorClass: 'bg-emerald-950/90 border-emerald-800/80 text-emerald-300',
    stepBorderClass: 'hover:border-emerald-600'
  }
];

export const SLIDE_05_COPY = {
  header: {
    id: 'Model Pipeline: Rencana Jangka Pendek & Horizon 1 Tahun',
    en: 'Sales Pipeline: Short-Term Execution Plan & 1-Year Horizon'
  },
  tabs: {
    kanban: { id: 'Tahap Pipeline', en: 'Pipeline Stages' },
    shortAndOneYear: { id: 'Rencana Akun', en: 'Account Plan' },
    mapPipeline: { id: 'Peta Wilayah', en: 'Territory Map' }
  },
  bottomStatement: {
    id: '"Target jangka pendek saya adalah 50 akun potensial di Jabodetabek dengan target awal 5–8 commercial deals. Dalam satu tahun, saya mempertahankan konversi minimal 30% dari mature opportunities ke closing dengan metrik pendapatan dan aktivitas yang seimbang."',
    en: '"My short-term target is 50 potential Jabodetabek accounts yielding 5–8 initial commercial deals. Over one year, I mandate ≥30% conversion from mature opportunities to closing with balanced revenue and activity KPIs."'
  }
};
