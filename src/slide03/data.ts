import { 
  TARGET_ACCOUNT_UNIVERSE, 
  SECTOR_FILTER_OPTIONS 
} from '../data/targetAccounts';

export {
  TARGET_ACCOUNT_UNIVERSE,
  SECTOR_FILTER_OPTIONS
};

export const FILTER_DISPLAY_MAP: Record<string, { id: string; en: string }> = {
  'Banking': { id: 'Perbankan', en: 'Banking' },
  'Fintech': { id: 'Fintech', en: 'Fintech' },
  'Government & Public': { id: 'Pemerintah', en: 'Government' },
  'Telecommunication': { id: 'Telekomunikasi', en: 'Telecommunication' },
  'E-Commerce & Tech': { id: 'E-Commerce', en: 'E-Commerce' },
  'Manufacturing & Logistics': { id: 'Manufaktur', en: 'Manufacturing' },
  'Healthcare': { id: 'Kesehatan', en: 'Healthcare' }
};

export const CENTER_LABEL_MAP: Record<string, { id: string; en: string }> = {
  'Banking': { id: 'Perbankan', en: 'Banking' },
  'Fintech': { id: 'Fintech', en: 'Fintech' },
  'Government & Public': { id: 'Pemerintah', en: 'Government' },
  'Telecommunication': { id: 'Telco', en: 'Telco' },
  'E-Commerce & Tech': { id: 'E-Commerce', en: 'E-Commerce' },
  'Manufacturing & Logistics': { id: 'Manufaktur', en: 'Manufacturing' },
  'Healthcare': { id: 'Kesehatan', en: 'Healthcare' }
};

export const SLIDE_03_COPY = {
  title: {
    id: 'Pemetaan Akun Target Per Sektor',
    en: 'Target Account Mapping by Sector'
  },
  salesLeadConclusion: {
    id: '"Fokus penetrasi saya arahkan secara agresif pada akun-akun enterprise prioritas dengan eksposur risiko data tertinggi dan kepatuhan regulasi mendesak, memastikan validasi nilai Bronyx AI secara cepat, siklus konversi penjualan terukur, serta pencapaian target pendapatan sejak bulan pertama."',
    en: '"I aggressively prioritize sales penetration on enterprise accounts facing acute data leakage risks and urgent regulatory mandates, accelerating Bronyx AI value validation, deal cycle closure, and month-one revenue achievement."'
  },
  listTitle: {
    id: 'Daftar Perusahaan Target',
    en: 'Target Enterprise List'
  },
  emptyList: {
    id: 'Tidak ada akun target pada level ini',
    en: 'No target accounts found for this level'
  },
  modalFooter: {
    id: 'Daftar Akun Target 2026 · Model Pembobotan Komposit 5-Dimensi',
    en: 'Target Accounts 2026 · 5-Dimensional Composite Model'
  }
};
