import { 
  TAM_SAM_SOM_DATA, 
  INDONESIA_MARKET_TREND, 
  KEY_MARKET_SIGNALS,
  AddressableMarketLayer,
  MarketTrendPoint,
  MarketMetric
} from '../data/marketData';

export {
  TAM_SAM_SOM_DATA,
  INDONESIA_MARKET_TREND,
  KEY_MARKET_SIGNALS
};
export type { AddressableMarketLayer, MarketTrendPoint, MarketMetric };

export const SLIDE_02_COPY = {
  header: {
    id: 'Potensi Pasar & Kuantifikasi Peluang',
    en: 'Addressable Market & Opportunity Breakdown'
  },
  pyramidTitle: {
    id: 'Piramida Potensi Pasar (TAM · SAM · SOM)',
    en: 'Addressable Market Pyramid (TAM · SAM · SOM)'
  },
  pyramidStrategyLeft: {
    id: 'Konversi SAM ke SOM via 120 akun prioritas',
    en: 'Convert SAM to SOM via 120 scored targets'
  },
  pyramidStrategyRight: {
    id: 'Rp 3 M & Growth · First Win B2 (Nov) · Tumbuh Progresif',
    en: 'IDR 3 B & Growth · M2 First Win (Nov) · Progressive Scale'
  },
  chartTitle: {
    id: 'Kurva Pertumbuhan Pasar Keamanan Siber Indonesia (2022–2027)',
    en: 'Indonesian Cybersecurity Spending Growth Curve (2022–2027)'
  },
  chartSubtitle: {
    id: 'Total Pasar ($ M) vs Segmen Testing ($ Jt)',
    en: 'Total Market ($ Billion) vs Proactive Security Testing Subset ($ Million)'
  },
  chartReference: {
    id: 'Referensi Data: Menu Header / Klik Kanan',
    en: 'Data Reference: Header / Right-Click'
  },
  bottomDirective: {
    id: '"Saya akan mengonversi SOM langsung dengan menargetkan 120 akun teregulasi di mana OJK dan UU PDP mewajibkan pengujian berulang."',
    en: '"I will capture immediate SOM by targeting the 120 regulated enterprise accounts where OJK and UU PDP turn security testing into mandatory budget."'
  },
  somDetails: {
    badge: 'SOM',
    valId: '$12 Jt · Rp 192 Miliar',
    valEn: '$12M · IDR 192 Billion',
    descId: 'Target 90 Hari (120 Akun Teregulasi Prioritas)',
    descEn: '90-Day Target (120 High-Priority Regulated Accounts)'
  },
  samDetails: {
    badge: 'SAM',
    valId: '$430 Jt · Rp 6,88 Triliun',
    valEn: '$430M · IDR 6.88 Trillion',
    descId: 'Pengujian Keamanan Siber Enterprise, Pentesting & ASM',
    descEn: 'Enterprise Cybersecurity Testing, Pentesting & ASM'
  },
  tamDetails: {
    badge: 'TAM',
    valId: '$2,71 Miliar · Rp 43,4 Triliun',
    valEn: '$2.71B · IDR 43.4 Trillion',
    descId: 'Total Belanja Keamanan Siber Indonesia (Software, Hardware, Jasa)',
    descEn: 'Total Indonesian Enterprise Cybersecurity Expenditure'
  }
} as const;
