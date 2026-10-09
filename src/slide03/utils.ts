import { TargetAccount, TargetFocusLevel, LevelBadgeInfo, NodePosition, LevelCounts } from './types';

/**
 * Normalizes company full name to compact label for radial mind map nodes
 */
export const getShortName = (fullName: string): string => {
  // Government / Ministries / BUMN
  if (fullName.includes('Perhubungan')) return 'Kemenhub';
  if (fullName.includes('Pendidikan Dasar')) return 'Kemendikdas';
  if (fullName.includes('Pendidikan Tinggi')) return 'Kemendikti';
  if (fullName.includes('Sosial')) return 'Kemensos';
  if (fullName.includes('Imigrasi')) return 'Kemenimipas';
  if (fullName.includes('Agraria') || fullName.includes('BPN')) return 'ATR/BPN';
  if (fullName.includes('Garuda')) return 'Garuda';
  if (fullName.includes('Jasa Marga')) return 'Jasa Marga';
  if (fullName.includes('Kereta Api') || fullName.includes('KAI')) return 'KAI';
  if (fullName.includes('Bio Farma')) return 'Bio Farma';
  if (fullName.includes('Pos Indonesia')) return 'Pos Indo';
  if (fullName.includes('Semen Indonesia') || fullName.includes('SIG')) return 'SIG';
  if (fullName.includes('Wijaya Karya') || fullName.includes('WIKA')) return 'WIKA';
  if (fullName.includes('Adhi Karya')) return 'Adhi Karya';
  if (fullName.includes('Hutama Karya')) return 'Hutama';
  if (fullName.includes('Peruri')) return 'Peruri';

  // Fintech
  if (fullName.includes('GoPay')) return 'GoPay';
  if (fullName.includes('DANA')) return 'DANA';
  if (fullName.includes('OVO')) return 'OVO';
  if (fullName.includes('Xendit')) return 'Xendit';
  if (fullName.includes('Midtrans')) return 'Midtrans';
  if (fullName.includes('Akulaku')) return 'Akulaku';
  if (fullName.includes('Kredivo')) return 'Kredivo';
  if (fullName.includes('JULO')) return 'JULO';
  if (fullName.includes('Modalku')) return 'Modalku';
  if (fullName.includes('Ajaib')) return 'Ajaib';
  if (fullName.includes('Bibit')) return 'Bibit';
  if (fullName.includes('Stockbit')) return 'Stockbit';
  if (fullName.includes('Flip')) return 'Flip';
  if (fullName.includes('DOKU')) return 'DOKU';
  if (fullName.includes('LinkAja')) return 'LinkAja';
  if (fullName.includes('Pluang')) return 'Pluang';
  if (fullName.includes('KoinWorks')) return 'KoinWorks';
  if (fullName.includes('Investree')) return 'Investree';

  // Banking
  if (fullName.includes('Central Asia')) return 'BCA';
  if (fullName.includes('Mandiri')) return 'Mandiri';
  if (fullName.includes('Rakyat Indonesia')) return 'BRI';
  if (fullName.includes('State Bank') || fullName.includes('Bank Negara')) return 'BNI';
  if (fullName.includes('Tabungan Negara')) return 'BTN';
  if (fullName.includes('CIMB')) return 'CIMB Niaga';
  if (fullName.includes('Danamon')) return 'Danamon';
  if (fullName.includes('Permata')) return 'Permata';
  if (fullName.includes('Jawa Barat') || fullName.includes('BJB')) return 'BJB';
  if (fullName.includes('Jawa Timur') || fullName.includes('Jatim')) return 'Jatim';
  if (fullName.includes('Seabank') || fullName.includes('SeaBank')) return 'SeaBank';
  if (fullName.includes('Neo')) return 'Neo';
  if (fullName.includes('blu') || fullName.includes('Digital BCA')) return 'blu';
  if (fullName.includes('Muamalat')) return 'Muamalat';
  if (fullName.includes('Jawa Tengah') || fullName.includes('Jateng')) return 'Jateng';
  if (fullName.includes('DKI')) return 'DKI';
  if (fullName.includes('Syariah Indonesia') || fullName.includes('BSI')) return 'BSI';
  if (fullName.includes('Jago')) return 'Jago';

  // Telco & ISP
  if (fullName.includes('Telkomsel')) return 'Telkomsel';
  if (fullName.includes('Telkom')) return 'Telkom';
  if (fullName.includes('Indosat')) return 'Indosat';
  if (fullName.includes('XL Axiata')) return 'XL Axiata';
  if (fullName.includes('Smartfren')) return 'Smartfren';
  if (fullName.includes('Biznet')) return 'Biznet';
  if (fullName.includes('Lintasarta')) return 'Lintasarta';
  if (fullName.includes('Moratelindo')) return 'Moratel';
  if (fullName.includes('CBN') || fullName.includes('Cyberindo')) return 'CBN';
  if (fullName.includes('MyRepublic')) return 'MyRepublic';
  if (fullName.includes('Iconnet')) return 'Iconnet';
  if (fullName.includes('Oxygen')) return 'Oxygen';
  if (fullName.includes('MNC Play')) return 'MNC Play';
  if (fullName.includes('First Media')) return 'First Media';
  if (fullName.includes('Transvision')) return 'Transvision';
  if (fullName.includes('FiberStar') || fullName.includes('Mega Akses')) return 'FiberStar';
  if (fullName.includes('ICON+')) return 'ICON+';

  // E-Commerce
  if (fullName.includes('Shopee')) return 'Shopee';
  if (fullName.includes('Tokopedia')) return 'Tokopedia';
  if (fullName.includes('Lazada')) return 'Lazada';
  if (fullName.includes('Blibli')) return 'Blibli';
  if (fullName.includes('TikTok')) return 'TikTok';
  if (fullName.includes('Bukalapak')) return 'Bukalapak';
  if (fullName.includes('Zalora')) return 'Zalora';
  if (fullName.includes('Orami') || fullName.includes('Sirclo')) return 'Orami';
  if (fullName.includes('Ralali')) return 'Ralali';
  if (fullName.includes('Bhinneka')) return 'Bhinneka';
  if (fullName.includes('Sociolla')) return 'Sociolla';
  if (fullName.includes('JD.ID') || fullName.includes('Jingdong')) return 'JD.ID';
  if (fullName.includes('Akulaku')) return 'Akulaku';
  if (fullName.includes('iStyle')) return 'iStyle';
  if (fullName.includes('KlikIndomaret')) return 'Indomaret';
  if (fullName.includes('Alfagift')) return 'Alfagift';
  if (fullName.includes('MAPCLUB')) return 'MAPCLUB';
  if (fullName.includes('Dekoruma')) return 'Dekoruma';

  // Manufacturing
  if (fullName.includes('Astra')) return 'Astra';
  if (fullName.includes('Indofood')) return 'Indofood';
  if (fullName.includes('Unilever')) return 'Unilever';
  if (fullName.includes('Chandra Asri')) return 'Chandra Asri';
  if (fullName.includes('Toyota')) return 'Toyota';
  if (fullName.includes('Mayora')) return 'Mayora';
  if (fullName.includes('Kalbe')) return 'Kalbe';
  if (fullName.includes('Sampoerna')) return 'Sampoerna';
  if (fullName.includes('Gudang Garam')) return 'Gudang Garam';
  if (fullName.includes('Charoen')) return 'Charoen';
  if (fullName.includes('Japfa')) return 'Japfa';
  if (fullName.includes('Wilmar')) return 'Wilmar';
  if (fullName.includes('Wings')) return 'Wings';
  if (fullName.includes('Garudafood')) return 'Garudafood';
  if (fullName.includes('Ultrajaya')) return 'Ultrajaya';
  if (fullName.includes('Sido Muncul')) return 'Sido Muncul';
  if (fullName.includes('Indocement')) return 'Indocement';
  if (fullName.includes('Gajah Tunggal')) return 'Gajah Tunggal';

  // Healthcare
  if (fullName.includes('Siloam')) return 'Siloam';
  if (fullName.includes('Hermina Regional')) return 'Hermina Reg';
  if (fullName.includes('Hermina')) return 'Hermina';
  if (fullName.includes('Mayapada')) return 'Mayapada';
  if (fullName.includes('Mitra Keluarga')) return 'Mitra Keluarga';
  if (fullName.includes('Primaya')) return 'Primaya';
  if (fullName.includes('Eka Hospital')) return 'Eka Hospital';
  if (fullName.includes('Pondok Indah') || fullName.includes('RSPI')) return 'RSPI';
  if (fullName.includes('RS Premier')) return 'RS Premier';
  if (fullName.includes('EMC')) return 'EMC';
  if (fullName.includes('Awal Bros')) return 'Awal Bros';
  if (fullName.includes('RSPON')) return 'RSPON';
  if (fullName.includes('RSUD')) return 'RSUD';
  if (fullName.includes('RSUP')) return 'RSUP';
  if (fullName.includes('RS Islam')) return 'RS Islam';
  if (fullName.includes('Muhammadiyah')) return 'Muhammadiyah';
  if (fullName.includes('Bhayangkara')) return 'RS Bhayangkara';
  if (fullName.includes('RSIA')) return 'RSIA';

  const cleaned = fullName
    .replace(/^PT\s+/i, '')
    .replace(/\s+\(Persero\)/i, '')
    .replace(/\s+Tbk/i, '')
    .replace(/^Bank\s+/i, '')
    .replace(/^Kementerian\s+/i, '')
    .trim();
  return cleaned.split(' ').slice(0, 2).join(' ');
};

/**
 * Radial orbit radii by target level
 */
export const getRadiusForLevel = (level: TargetFocusLevel): number => {
  if (level === 'FOCUS_PRIMARY') return 118;
  if (level === 'MEDIUM_PRIORITY') return 198;
  return 270;
};

/**
 * Styling, badges, and colors corresponding to each focus priority level
 */
export const getLevelBadge = (level: TargetFocusLevel): LevelBadgeInfo => {
  if (level === 'FOCUS_PRIMARY') {
    return {
      labelId: 'Fokus',
      labelEn: 'Focus',
      badgeClass: 'badge-level-fokus bg-rose-50 text-rose-600 border-rose-300 font-bold dark:bg-rose-950/90 dark:text-rose-300 dark:border-rose-600/80',
      dotClass: 'bg-rose-500 shadow-[0_0_8px_rgba(225,29,72,0.6)]',
      colorHex: '#e11d48'
    };
  }
  if (level === 'MEDIUM_PRIORITY') {
    return {
      labelId: 'Strategis',
      labelEn: 'Strategic',
      badgeClass: 'badge-level-strategis bg-amber-50 text-amber-700 border-amber-300 font-bold dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-600/80',
      dotClass: 'bg-amber-400',
      colorHex: '#f59e0b'
    };
  }
  return {
    labelId: 'Prospek',
    labelEn: 'Prospect',
    badgeClass: 'badge-level-prospek bg-slate-100 text-slate-700 border-slate-300 font-semibold dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700',
    dotClass: 'bg-neutral-400',
    colorHex: '#a1a1aa'
  };
};

/**
 * Filter account universe by selected sector category
 */
export const filterAccountsBySector = (accounts: TargetAccount[], selectedFilter: string): TargetAccount[] => {
  if (selectedFilter === 'Banking') return accounts.filter(a => a.sector === 'Banking');
  if (selectedFilter === 'Fintech') return accounts.filter(a => a.sector === 'Fintech');
  if (selectedFilter === 'Government & Public') return accounts.filter(a => a.sector === 'Government / Public Sector');
  if (selectedFilter === 'Telecommunication') return accounts.filter(a => a.sector === 'Telecommunication');
  if (selectedFilter === 'E-Commerce & Tech') return accounts.filter(a => a.sector === 'E-Commerce' || a.sector === 'Technology');
  if (selectedFilter === 'Manufacturing & Logistics') return accounts.filter(a => a.sector === 'Manufacturing' || a.sector === 'Logistics');
  if (selectedFilter === 'Healthcare') return accounts.filter(a => a.sector === 'Healthcare');
  return accounts.filter(a => a.sector === 'Banking');
};

/**
 * Calculate quantity counts per target priority level
 */
export const calculateLevelCounts = (accounts: TargetAccount[]): LevelCounts => {
  const focusPrimary = accounts.filter(a => a.targetLevel === 'FOCUS_PRIMARY').length;
  const mediumPriority = accounts.filter(a => a.targetLevel === 'MEDIUM_PRIORITY').length;
  const level3Prospect = accounts.filter(a => a.targetLevel === 'LEVEL_3_PROSPECT').length;
  return {
    all: accounts.length,
    FOCUS_PRIMARY: focusPrimary,
    MEDIUM_PRIORITY: mediumPriority,
    LEVEL_3_PROSPECT: level3Prospect
  };
};

/**
 * Calculates radial 2D SVG canvas coordinates for an account node with orbital spacing
 */
export const calculateNodePos = (
  account: TargetAccount,
  globalIdx: number,
  centerCX: number,
  centerCY: number,
  nodeCount: number,
  sectorAngleOffset: number,
  focusAccounts: TargetAccount[],
  strategicAccounts: TargetAccount[],
  prospectAccounts: TargetAccount[]
): NodePosition => {
  const radiusR = getRadiusForLevel(account.targetLevel);
  let angle = (2 * Math.PI * globalIdx) / (nodeCount || 1) - Math.PI / 2 + sectorAngleOffset;

  if (account.targetLevel === 'FOCUS_PRIMARY') {
    const idx = focusAccounts.findIndex(a => a.id === account.id);
    const count = focusAccounts.length || 1;
    angle = (2 * Math.PI * (idx >= 0 ? idx : 0)) / count - Math.PI / 2 + sectorAngleOffset;
  } else if (account.targetLevel === 'MEDIUM_PRIORITY') {
    const idx = strategicAccounts.findIndex(a => a.id === account.id);
    const count = strategicAccounts.length || 1;
    angle = (2 * Math.PI * (idx >= 0 ? idx : 0)) / count - Math.PI / 2 + (Math.PI / count) + sectorAngleOffset;
  } else if (account.targetLevel === 'LEVEL_3_PROSPECT') {
    const idx = prospectAccounts.findIndex(a => a.id === account.id);
    const count = prospectAccounts.length || 1;
    angle = (2 * Math.PI * (idx >= 0 ? idx : 0)) / count - Math.PI / 2 + (Math.PI / (2 * count)) + sectorAngleOffset;
  }

  const nodeX = centerCX + radiusR * Math.cos(angle);
  const nodeY = centerCY + radiusR * Math.sin(angle);
  return { nodeX, nodeY };
};
