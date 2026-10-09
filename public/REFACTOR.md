# Standar Arsitektur & Pedoman Refactoring Modular Slide
> **AI Studio Presentation Engine · Standard Operating Procedure (SOP)**  
> Lokasi File: `public/REFACTOR.md`  
> Status Dokumen: **Pedoman Resmi & Baku (Canonical Standard)**

---

## 1. Pendahuluan & Latar Belakang

Aplikasi presentasi interaktif enterprise ini saat ini memiliki 11 bab slide yang sebagian besar ditulis dalam satu file monolitik besar (*single-file monolithic components*), dengan ukuran mencapai lebih dari **1.100 baris kode per file** (misalnya `Slide03TargetMarketMap.tsx` 1.174 baris, `Slide04GoToMarket.tsx` 856 baris, `Slide08Partnerships.tsx` 821 baris, dan `Slide05AccountPipeline.tsx` 815 baris).

Meskipun performa aplikasi stabil, arsitektur monolitik ini menimbulkan tantangan:
1. **Beban Kognitif Tinggi**: Sulit memisahkan antara logika kalkulasi data, state animasi, konfigurasi teks bilingual, dan struktur tampilan JSX.
2. **Keterbatasan Skalabilitas Fitur**: Menambah fitur interaktif baru (seperti filter multi-dimensi, sub-tampilan grafik, atau modal drill-down) membuat file semakin membengkak dan rentan regresi (*regression risk*).
3. **Resiko Redundansi & Duplikasi Data**: Data statis dan fungsi pembantu (*helper functions*) yang ditulis berulang kali tanpa standarisasi.

### Tujuan Utama Refactoring
1. **Modularitas Bersih**: Memecah setiap bab ke dalam direktori independen dengan pola tanggung jawab tunggal (*Single Responsibility Principle*).
2. **Kemudahan Pemeliharaan (*Maintainability*)**: Setiap modul UI, logika, dan dataset terisolasi sehingga pengembang dapat memperbarui komponen tanpa khawatir merusak bagian lain.
3. **Mendukung Kompleksitas Lebih Lanjut**: Memungkinkan setiap halaman diperluas menjadi lebih kaya fitur tanpa membebani satu file.
4. **Zero UI & Functional Regression**: Tampilan, tata letak, micro-interaction, animasi morfing, respon tema gelap/terang, dan fungsionalitas tombol/keyboard **100% identik** dengan tampilan aslinya.
5. **Cross-Checking & Eliminasi Bug**: Memastikan tidak ada data redundan/duplikat, membersihkan unused variables, dan mencegah potensi bug rendering.

---

## 2. Prinsip Inti Refactoring (Zero-Regression & Integrity Rules)

Setiap proses refactor bab yang diinstruksikan **WAJIB** mematuhi 7 aturan dasar baku berikut tanpa kompromi:

| No | Prinsip | Deskripsi Aturan Baku |
|---|---|---|
| **1** | **Zero UI Regression** | Desain visual (pixel-perfect), spasi Tailwind, warna background, border, bayangan, tipografi, dan responsivitas layar tidak boleh berubah sedikit pun. |
| **2** | **Zero Functional Regression** | Seluruh mekanisme perpindahan tab, keyboard shortcut (panah kiri/kanan, spasi), klik modal, sinkronisasi navigasi footer/drawer/header, toggle bilingual (ID/EN), dan tema (Dark/Light) harus tetap berjalan sempurna. |
| **3** | **Tab Standardization Contract** | **Aturan Baku Tab**: Tab tidak boleh memiliki nomor urut maupun ikon. Pada mode gelap maupun terang, tab yang aktif **wajib** memiliki card berwarna merah (`bg-rose-600 border-rose-600 tab-btn-active`) dan teks putih solid (`text-white !text-white font-bold`). |
| **4** | **Zero Data Redundancy** | Data domain yang telah didefinisikan secara global (misal pada `src/data/targetAccounts.ts` atau `src/data/translations.ts`) tidak boleh diduplikasi ulang secara manual. Data lokal slide harus dipusatkan di `data.ts`. |
| **5** | **Pure Logic Isolation** | Logika pemformatan angka, mata uang, kalkulasi koordinat visual SVG, dan pemrosesan array harus berada di `utils.ts` sebagai *pure functions* yang tidak bergantung pada JSX. |
| **6** | **State Orchestration Centralization** | State lokal, callback handler, effect lifecycle, dan sinkronisasi event harus dipusatkan di `container.tsx`, sedangkan `index.tsx` berfungsi murni sebagai fasad/entry point. |
| **7** | **Legacy File Elimination (No `/slide/` Lingering)** | Begitu sebuah bab direfaktor ke `src/slideXX/`, berkas monolitik warisan di `src/slide/[nama file].tsx` **WAJIB LANGSUNG DIHAPUS BERSIH (Permanently Deleted)**. Dilarang mempertahankan adapter re-export di `src/slide/`. Seluruh consumer (`src/App.tsx`, `src/components/SlideExportRenderer.tsx`) wajib mengimpor langsung dari `src/slideXX`. Target arsitektur: direktori `src/slide/` akan dihapus total setelah seluruh 11 bab selesai direfaktor ke foldernya masing-masing langsung di bawah `src/`. |

---

## 3. Standarisasi Struktur Direktori Modular Per Bab

Setiap bab slide direfaktor ke dalam foldernya masing-masing langsung di bawah `src/` dengan penamaan terstandar: `src/slide01/`, `src/slide02/`, `src/slide03/`, ..., `src/slide11/`. Tidak ada lagi pembagian campuran antara folder `src/slide/` dengan folder mandiri; direktori `src/slide/` dieliminasi secara bertahap seiring selesainya refactoring tiap bab.

### Pola File Resmi Per Bab:

```
src/slide03/
├── index.tsx          # Entry point publik (Barrel & Public Interface)
├── container.tsx      # State orchestration, hooks, event handlers & layout scaffold
├── data.ts            # Konstanta statis, data kamus bilingual lokal, konfigurasi filter
├── utils.ts           # Pure helper functions, formatters, kalkulator koordinat SVG
├── types.ts           # Interface TypeScript spesifik bab, status union, prop types
├── [custom].tsx       # Sub-komponen modular UI (misal MindMapCanvas.tsx, AccountDetailCard.tsx)
└── [custom].ts        # (Opsional) Algoritma khusus non-JSX (misal orbitalPhysics.ts)
```

### Rincian Peran dan Tanggung Jawab Setiap File:

#### A. `index.tsx` (Entry Point / Fasad)
- **Tanggung Jawab**: Titik kontak publik yang diimpor oleh `App.tsx` atau komponen luar.
- **Isi**: Menerima props antarmuka slide (misalnya `currentSlide`, `onTabPositionChange`, `onViewIndexChange`), meneruskannya ke `Container`, dan mengekspor nama komponen slide yang konsisten.
- **Prinsip**: File ini ringkas (biasanya < 30 baris), tanpa logika state yang rumit.

#### B. `container.tsx` (Logika & Orkestrasi State)
- **Tanggung Jawab**: Mengelola seluruh state internal slide (`useState`, `useEffect`, `useMemo`, `useCallback`), interaksi pengguna, pemfilteran data, dan menyusun kerangka layout utama (Flex/Grid).
- **Isi**:
  - Hook tema (`useTheme`) dan bahasa (`useLanguage`).
  - Handler klik tab, pencarian, pemilihan akun/elemen, modal state.
  - Komputasi turunan (*derived state*) menggunakan `useMemo`.
  - Merender sub-komponen modular (`<MindMapCanvas />`, `<SectorTabNav />`, `<AccountDetailCard />`, dll) dan meneruskan data serta handler yang relevan.

#### C. `data.ts` (Dataset Statis & Konfigurasi)
- **Tanggung Jawab**: Menyimpan seluruh konfigurasi statis, opsi filter, teks bilingual lokal, preset metrik, dan konstanta visual.
- **Prinsip**:
  - File ini adalah **pure TypeScript tanpa JSX/React**.
  - Mengimpor data global dari `src/data/` dan memperkayanya jika diperlukan tanpa menduplikasi objek yang sama.
  - Membantu pemeliharaan teks bilingual secara terpusat.

#### D. `utils.ts` (Pure Helper Functions & Algoritma)
- **Tanggung Jawab**: Kumpulan fungsi murni (*pure functions*) yang menerima input dan mengembalikan output tanpa efek samping (*no side-effects*).
- **Contoh Fungsi**:
  - `formatRupiah(value: number): string`
  - `formatUSD(value: number): string`
  - `calculateRadialCoordinates(index: number, total: number, radius: number): { x: number, y: number }`
  - `getTierBadgeColor(tier: string, isDark: boolean): string`
  - `filterAccountsByKeyword(accounts: Account[], keyword: string): Account[]`

#### E. `types.ts` (Definisi Tipe Data TypeScript)
- **Tanggung Jawab**: Mendefinisikan kontrak tipe data lokal yang ketat (*strict typing*) untuk props komponen, filter state, enum level prioritas, dan struktur data yang diproses.
- **Prinsip**: Hindari tipe `any`. Semua relasi props antar sub-komponen terdokumentasi rapi.

#### F. `[custom].tsx` (Sub-Komponen Presentasional Modular)
- **Tanggung Jawab**: Komponen visual spesifik yang dipecah agar tidak menumpuk dalam satu berkas render raksasa.
- **Karakteristik**:
  - Menerima data dan callback secara eksplisit via `props`.
  - Mengelola animasi lokal (`motion.div`, `motion.g`, transisi layout).
  - Fokus pada satu area visual (misalnya area canvas SVG terpisah dari area kartu rincian sidebar).

---

## 4. Standar UI Baku: Kontrak Tampilan Tab (Tab Contract)

Berdasarkan kesepakatan desain resmi, seluruh komponen tab di semua bab wajib mengikuti spesifikasi berikut:

```tsx
// ✅ IMPLEMENTASI STANDAR TAB RESMI
<button
  key={tab.id}
  onClick={() => handleTabChange(tab.id)}
  data-active-tab={isActive ? "true" : "false"}
  className={`relative px-3.5 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
    isActive
      ? "tab-btn-active bg-rose-600 text-white !text-white font-bold border-rose-600 shadow-xs"
      : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
  }`}
>
  {/* Indikator Animasi Pill (Jika Menggunakan Morphing Pill) */}
  {isActive && (
    <motion.span
      layoutId="activeTabPill"
      className="absolute inset-0 bg-rose-600 rounded-md shadow-xs pointer-events-none"
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
    />
  )}
  {/* Teks Label Tab: Murni teks, tanpa ikon, tanpa nomor urut */}
  <span className={`relative z-10 ${isActive ? "text-white !text-white font-bold" : ""}`}>
    {isId ? tab.labelId : tab.labelEn}
  </span>
</button>
```

### Checklist Aturan Tab:
1. ❌ **Tidak ada ikon** (tidak ada Lucide icon seperti `Check`, `Folder`, `Tag` di dalam tombol tab).
2. ❌ **Tidak ada nomor urut** (tidak ada angka `01.`, `02.`, badge counter `(24)` di dalam label tab).
3. ✅ **Atribut `data-active-tab="true"`** disematkan pada tombol aktif untuk konsistensi selector CSS global.
4. ✅ **Class `tab-btn-active bg-rose-600 !text-white font-bold`** aktif di mode gelap maupun mode terang.
5. ✅ Warna teks aktif dijamin putih pekat (`#ffffff`) tanpa tertimpa aturan override CSS light-mode.

---

## 5. Pemetaan Seluruh 11 Bab (Current State vs Target Modular)

Berikut adalah daftar inventarisasi seluruh 11 bab slide yang akan direfaktor secara bertahap:

| Bab | File Saat Ini / Status | Jalur Modular Target | Ukuran Kode | Sub-Komponen Utama Terpecah | Status Refactoring |
|---|---|---|---|---|---|
| **Bab 01** | `src/slide01/index.tsx` | `src/slide01/` | Terpecah Modular (~234 baris) | `BackgroundSignalCanvas.tsx`, `HeroBanner.tsx`, `QuotaTargetCard.tsx`, `FactMetricsGrid.tsx`, `StrategicPillarsCard.tsx`, `StartActionButton.tsx` | ✅ **Selesai & File Legacy Dihapus** |
| **Bab 02** | `src/slide02/index.tsx` | `src/slide02/` | Terpecah Modular (~500 baris) | `KeyMarketSignalsStrip.tsx`, `TamSamSomPyramid.tsx`, `MarketGrowthCurve.tsx`, `MarketIntelligenceModal.tsx` | ✅ **Selesai & File Legacy Dihapus** |
| **Bab 03** | `src/slide03/index.tsx` | `src/slide03/` | Terpecah Modular (~600 baris) | `SectorTabNav.tsx`, `MindMapCanvas.tsx`, `CompanyListPanel.tsx`, `CompanyDossierModal.tsx` | ✅ **Selesai & File Legacy Dihapus** |
| **Bab 04** | `src/slide04/index.tsx` | `src/slide04/` | Terpecah Modular (~480 baris) | `GtmHeaderTabs.tsx`, `ExecutivePillarsStrip.tsx`, `QuadrantMatrixView.tsx`, `AcquisitionFunnelView.tsx` | ✅ **Selesai & File Legacy Dihapus** |
| **Bab 05** | `src/slide05/index.tsx` | `src/slide05/` | Terpecah Modular (~815 baris) | `PipelineViewTabs.tsx`, `KeyPipelineMetricsStrip.tsx`, `PipelineKanbanBoard.tsx`, `AccountDossierSidebar.tsx`, `FunnelAndHorizonView.tsx`, `MapPipelineView.tsx` | ✅ **Selesai & File Legacy Dihapus** |
| **Bab 06** | `src/slide06/index.tsx` | `src/slide06/` | Terpecah Modular (~365 baris) | `SalesMotionHeader.tsx`, `StakeholderDecisionMatrix.tsx`, `LifecyclePhasesTrack.tsx`, `PocPlaybookStepper.tsx`, `DealVelocityKpiCards.tsx`, `ExecutiveMandateQuote.tsx` | ✅ **Selesai & File Legacy Dihapus** |
| **Bab 07** | `src/slide07/index.tsx` | `src/slide07/` | Terpecah Modular (~372 baris) | `CommercializationHeader.tsx`, `PricingPackagesGrid.tsx`, `QuotaAllocationPillars.tsx`, `QuarterlyTrajectoryCard.tsx`, `RetentionFlywheelCard.tsx`, `ExecutiveObjectionsCard.tsx`, `CommercializationQuote.tsx` | ✅ **Selesai & File Legacy Dihapus** |
| **Bab 08** | `src/slide08/index.tsx` | `src/slide08/` | Terpecah Modular (~822 baris) | `PartnershipHeaderTabs.tsx`, `PillarsAndMarginsView.tsx`, `PartnerAuditMetricsStrip.tsx`, `PartnerFilterToolbar.tsx`, `PartnerCardGrid.tsx`, `VerifiedPartnerMatrixView.tsx`, `NinetyDayRoadmapView.tsx`, `PartnerDetailModal.tsx`, `PartnershipSpeakingQuote.tsx` | ✅ **Selesai & File Legacy Dihapus** |
| **Bab 09** | `src/slide09/index.tsx` | `src/slide09/` | Terpecah Modular (~261 baris) | `ExecutionHeader.tsx`, `MonthMilestoneCard.tsx`, `ExecutionTriptychView.tsx`, `ExecutionScorecardStrip.tsx`, `ExecutionQuoteFooter.tsx` | ✅ **Selesai & File Legacy Dihapus** |
| **Bab 10** | `src/slide10/index.tsx` | `src/slide10/` | Terpecah Modular (~383 baris) | `ControlTowerHeader.tsx`, `PipelineTrajectoryChart.tsx`, `SalesConversionFunnel.tsx`, `SectorPipelineBreakdown.tsx`, `PipelineRiskMatrix.tsx`, `ControlTowerQuoteFooter.tsx` | ✅ **Selesai & File Legacy Dihapus** |
| **Bab 11** | `src/slide11/index.tsx` | `src/slide11/` | Terpecah Modular (~251 baris) | `ClosingHeader.tsx`, `QuotaTrajectoryArc.tsx`, `RegionalExpansionBridge.tsx`, `ClosingExecutiveMandate.tsx`, `ClosingQuoteFooter.tsx` | ✅ **Selesai & File Legacy Dihapus** |

---

## 6. Prosedur Standar Eksekusi Refactoring (Step-by-Step SOP)

Ketika menerima instruksi untuk merefaktor bab tertentu (misalnya: *"Refactor Bab 05"*), ikuti alur kerja baku berikut tanpa melewatkan satu tahap pun:

```
[Tahap 1: Audit Kode Asal & Pencarian Dependensi]
       │
       ▼
[Tahap 2: Ekstraksi types.ts & data.ts]
       │
       ▼
[Tahap 3: Ekstraksi utils.ts (Pure Functions)]
       │
       ▼
[Tahap 4: Dekomposisi Sub-Komponen UI ([custom].tsx)]
       │
       ▼
[Tahap 5: Perancangan container.tsx (State Orchestration)]
       │
       ▼
[Tahap 6: Pembuatan Entry Point index.tsx (Public Façade)]
       │
       ▼
[Tahap 7: Update Import Seluruh Consumer (App.tsx & SlideExportRenderer.tsx)]
       │
       ▼
[Tahap 8: Pemusnahan File Monolitik Warisan di src/slide/ (DELETE FILE)]
       │
       ▼
[Tahap 9: Verifikasi Kompilasi & Zero Regression Check]
       │
       ▼
[Tahap 10: Penyusunan Laporan Verifikasi Komprehensif pada Respons]
```

### Rincian Langkah Kerja:

### Langkah 1: Audit Kode Asal (*Inspection & Inventory*)
- Baca file monolitik yang bersangkutan secara menyeluruh.
- Catat:
  1. Props yang diterima dari `App.tsx` (misal: `currentSlide`, `onTabPositionChange`, `onViewIndexChange`).
  2. State lokal (`useState`, `useEffect`, `useRef`).
  3. Dataset statis yang didefinisikan secara lokal di dalam file.
  4. Fungsi pembantu (formatting, kalkulator matematika SVG, helper filter).
  5. Bagian-bagian JSX yang memiliki batasan fungsional visual yang jelas.
  6. File-file consumer lain di luar `App.tsx` yang mengimpor komponen slide ini (misalnya `src/components/SlideExportRenderer.tsx`).

### Langkah 2: Buat `types.ts`
- Definisikan tipe antarmuka publik (`SlideProps`).
- Definisikan tipe untuk state aktif (misal `type TabId = ...`).
- Definisikan antarmuka item data lokal.

### Langkah 3: Ekstraksi `data.ts`
- Pindahkan seluruh konstanta statis, array konfigurasi, label bilingual, dan opsi filter ke `data.ts`.
- **Cross-Checking Redundansi**: Jika data tersebut sudah ada di `src/data/`, lakukan re-export atau impor langsung dari sana, **bukan** membuat salinan data baru.

### Langkah 4: Ekstraksi `utils.ts`
- Pindahkan logika manipulasi string, kalkulasi koordinat geometris/orbit, formatting angka mata uang (IDR/USD), dan fungsi filter murni ke `utils.ts`.
- Pastikan seluruh fungsi di `utils.ts` memiliki tipe input dan output yang jelas.

### Langkah 5: Dekomposisi Sub-Komponen Presentasional (`[custom].tsx`)
- Buat sub-komponen terpisah untuk setiap segmen visual penting.
- Setiap sub-komponen menerima data dan event callback melalui interface props yang jelas.
- Pertahankan struktur class Tailwind, layouting motion/react, dan animasi morphing secara presisi.

### Langkah 6: Bangun `container.tsx`
- Gabungkan state orchestration, context consumption (`useLanguage`, `useTheme`), dan efek interaksi.
- Hubungkan sub-komponen modular ke dalam layout container utama.
- Pastikan sinkronisasi tab posisi ke parent (`onTabPositionChange` / `onViewIndexChange`) tetap terpanggil saat tab berganti.

### Langkah 7: Buat `index.tsx`
- Buat fasad ringkas yang mengekspor komponen slide utama dengan nama yang sesuai.
- Dukung named export dan default export agar fleksibel.

### Langkah 8: Integrasi ke Seluruh Consumer (`App.tsx` & `SlideExportRenderer.tsx`)
- Perbarui path import di `src/App.tsx` langsung mengarah ke direktori baru (misal: `import { Slide04GoToMarket } from './slide04';`).
- Perbarui path import di `src/components/SlideExportRenderer.tsx` langsung ke direktori baru (misal: `import { Slide04GoToMarket } from '../slide04';`).
- Pastikan tidak ada berkas dalam repositori yang masih mengimpor dari jalur lama `src/slide/`.

### Langkah 9: Pemusnahan File Monolitik Warisan (*Legacy File Elimination*)
- **Wajib Dihapus**: Gunakan perintah penghapusan berkas untuk memusnahkan berkas monolitik lama di `src/slide/SlideXX....tsx`.
- **Dilarang Menggunakan Adapter**: Jangan meninggalkan adapter re-export di dalam `src/slide/`.
- Periksa dan hapus juga file yatim/dead-code terkait (misalnya berkas konsep lama atau file cadangan).
- *Catatan Akhir*: Ketika slide terakhir (seluruh 11 slide) telah direfaktor, direktori `src/slide/` akan kosong dan dihapus sepenuhnya (`delete_dir`).

### Langkah 10: Verifikasi Mutlak Kompilasi & Quality Gate
- Jalankan `compile_applet` dan `lint_applet` (`tsc --noEmit`) untuk memastikan nol kesalahan sintaks dan kompilasi.
- Uji kepatuhan kontrak tab: tombol aktif berwarna merah (`bg-rose-600`), teks putih tebal (`text-white !text-white font-bold`), tanpa ikon, tanpa nomor urut, baik di mode gelap maupun terang.
- Uji zero visual & functional regression (bilingual switch, keyboard, tema).

### Langkah 11: Penyajian Laporan Verifikasi Komprehensif pada Respons
- Buatkan rangkuman hasil audit dan checklist verifikasi formal dalam respons kepada pengguna mengacu pada format standar di Bab 10.

---

## 7. Cetak Biru Implementasi Nyata: Studi Kasus Bab 03 (`src/slide03/`)

Sebagai acuan teknis konkret, berikut adalah cetak biru pembagian file untuk Bab 03 (**Target Account Universe & Market Map**):

### 1. `src/slide03/types.ts`
```typescript
import { TargetAccount } from '../data/targetAccounts';

export interface Slide03Props {
  currentSlide?: number;
  onTabPositionChange?: (position: number, total: number) => void;
  onViewIndexChange?: (index: number) => void;
}

export type LevelFilterType = 'ALL' | 'FOCUS_PRIMARY' | 'MEDIUM_PRIORITY' | 'LEVEL_3_PROSPECT';

export interface RadialNodePosition {
  nodeX: number;
  nodeY: number;
  radius: number;
  angle: number;
}
```

### 2. `src/slide03/data.ts`
```typescript
import { SECTOR_FILTER_OPTIONS } from '../data/targetAccounts';

export { SECTOR_FILTER_OPTIONS };

export const SECTOR_DISPLAY_MAP: Record<string, { id: string; en: string }> = {
  ALL: { id: 'Semua Sektor', en: 'All Sectors' },
  BANKING: { id: 'Perbankan', en: 'Banking' },
  FINTECH: { id: 'Fintech & Pembayaran', en: 'Fintech & Payments' },
  TELCO: { id: 'Telekomunikasi', en: 'Telecommunications' },
  GOVERNMENT: { id: 'Pemerintah & BUMN', en: 'Government & SOE' },
  HEALTHCARE: { id: 'Kesehatan & Farmasi', en: 'Healthcare & Pharma' },
  ENERGY: { id: 'Energi & Utilitas', en: 'Energy & Utilities' }
};

export const LEVEL_FILTER_CONFIG = [
  { id: 'FOCUS_PRIMARY', labelId: 'Fokus Utama', labelEn: 'Primary Focus', color: 'rose' },
  { id: 'MEDIUM_PRIORITY', labelId: 'Strategis', labelEn: 'Strategic', color: 'amber' },
  { id: 'LEVEL_3_PROSPECT', labelId: 'Prospek', labelEn: 'Prospect', color: 'blue' }
] as const;
```

### 3. `src/slide03/utils.ts`
```typescript
import { TargetAccount } from '../data/targetAccounts';
import { RadialNodePosition } from './types';

export function calculateOrbitPosition(index: number, total: number, orbitRadius: number): RadialNodePosition {
  const angle = (index / Math.max(total, 1)) * 2 * Math.PI - Math.PI / 2;
  const nodeX = Math.round(orbitRadius * Math.cos(angle) * 10) / 10;
  const nodeY = Math.round(orbitRadius * Math.sin(angle) * 10) / 10;
  return { nodeX, nodeY, radius: orbitRadius, angle };
}

export function filterAccounts(
  accounts: TargetAccount[],
  sector: string,
  levelFilter: string,
  searchQuery: string
): TargetAccount[] {
  return accounts.filter((acc) => {
    const matchSector = sector === 'ALL' || acc.sector === sector;
    const matchLevel = levelFilter === 'ALL' || acc.priorityLevel === levelFilter;
    const matchSearch = !searchQuery || acc.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSector && matchLevel && matchSearch;
  });
}
```

### 4. `src/slide03/SectorTabNav.tsx`
```tsx
import React from 'react';
import { motion } from 'motion/react';
import { SECTOR_FILTER_OPTIONS, SECTOR_DISPLAY_MAP } from './data';

interface SectorTabNavProps {
  activeSectorIndex: number;
  onSelectSector: (index: number, sectorKey: string) => void;
  isId: boolean;
}

export const SectorTabNav: React.FC<SectorTabNavProps> = ({
  activeSectorIndex,
  onSelectSector,
  isId
}) => {
  return (
    <div className="flex items-center gap-1 overflow-x-auto scrollbar-none p-1 bg-slate-200/70 dark:bg-neutral-900 border border-slate-300 dark:border-neutral-800 rounded-md">
      {SECTOR_FILTER_OPTIONS.map((sectorKey, idx) => {
        const isSelected = activeSectorIndex === idx;
        const displayLabel = isId
          ? SECTOR_DISPLAY_MAP[sectorKey]?.id ?? sectorKey
          : SECTOR_DISPLAY_MAP[sectorKey]?.en ?? sectorKey;

        return (
          <button
            key={sectorKey}
            onClick={() => onSelectSector(idx, sectorKey)}
            data-active-tab={isSelected ? 'true' : 'false'}
            className={`relative px-3 py-1 text-xs font-mono rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              isSelected
                ? 'tab-btn-active bg-rose-600 text-white !text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {isSelected && (
              <motion.span
                layoutId="slide03ActiveSectorPill"
                className="absolute inset-0 bg-rose-600 rounded-md shadow-xs pointer-events-none"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className={`relative z-10 ${isSelected ? 'text-white !text-white font-bold' : ''}`}>
              {displayLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
};
```

### 5. `src/slide03/container.tsx`
```tsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Slide03Props, LevelFilterType } from './types';
import { SECTOR_FILTER_OPTIONS } from './data';
import { filterAccounts } from './utils';
import { SectorTabNav } from './SectorTabNav';
import { MindMapCanvas } from './MindMapCanvas';
import { AccountDetailSidebar } from './AccountDetailSidebar';
import { useLanguage } from '../context/LanguageContext';
import { TARGET_ACCOUNTS, TargetAccount } from '../data/targetAccounts';

export const Slide03Container: React.FC<Slide03Props> = ({
  onTabPositionChange,
  onViewIndexChange
}) => {
  const { language } = useLanguage();
  const isId = language === 'id';

  const [activeSectorIndex, setActiveSectorIndex] = useState<number>(0);
  const [levelFilter, setLevelFilter] = useState<LevelFilterType>('ALL');
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentSectorKey = SECTOR_FILTER_OPTIONS[activeSectorIndex] || 'ALL';

  const filteredAccounts = useMemo(() => {
    return filterAccounts(TARGET_ACCOUNTS, currentSectorKey, levelFilter, searchQuery);
  }, [currentSectorKey, levelFilter, searchQuery]);

  const handleSelectSector = useCallback((idx: number, sectorKey: string) => {
    setActiveSectorIndex(idx);
    if (onTabPositionChange) {
      onTabPositionChange(idx, SECTOR_FILTER_OPTIONS.length);
    }
  }, [onTabPositionChange]);

  return (
    <div className="h-full w-full flex flex-col p-4 bg-slate-50 dark:bg-[#07080c]">
      <header className="flex items-center justify-between pb-3 shrink-0">
        <SectorTabNav
          activeSectorIndex={activeSectorIndex}
          onSelectSector={handleSelectSector}
          isId={isId}
        />
      </header>

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3 min-h-0">
        <div className="lg:col-span-8 h-full">
          <MindMapCanvas
            accounts={filteredAccounts}
            selectedAccountId={selectedAccountId}
            onSelectAccount={setSelectedAccountId}
            isId={isId}
          />
        </div>
        <aside className="lg:col-span-4 h-full">
          <AccountDetailSidebar
            selectedAccountId={selectedAccountId}
            accounts={filteredAccounts}
            isId={isId}
          />
        </aside>
      </main>
    </div>
  );
};
```

### 6. `src/slide03/index.tsx`
```tsx
import React from 'react';
import { Slide03Props } from './types';
import { Slide03Container } from './container';

export const Slide03TargetMarketMap: React.FC<Slide03Props> = (props) => {
  return <Slide03Container {...props} />;
};

export default Slide03TargetMarketMap;
export * from './types';
```

---

## 8. Protokol Cross-Checking & Pembersihan Bug (*Bug Hunting Protocol*)

Selama proses refactor per bab, wajib dilakukan pemeriksaan kualitas menyeluruh terhadap:

### A. Deteksi Data Redundan & Duplikasi
1. **Pemeriksaan Array Global**: Pastikan akun, metrik finansial, daftar partner, dan glosarium tidak dibuat salinan lokal (*copy-paste*). Jika data tersebut bersifat global, selalu impor dari `src/data/`.
2. **Harmonisasi String Terjemahan**: Hindari mendefinisikan kamus bilingual yang tumpang tindih dengan `src/data/translations.ts`.
3. **Penyatuan Opsi Filter**: Opsi filter yang digunakan bersama antar slide harus disatukan.

### B. Pembersihan Bug & Dead Code
1. **Unused Imports & Variables**: Hapus semua impor ikon yang tidak lagi digunakan dan variabel sisa debugging.
2. **Memory Leaks pada Event Listener & Timers**: Pastikan setiap `window.addEventListener` atau `setInterval` memiliki cleanup function di dalam `return () => { ... }` pada `useEffect`.
3. **Penyebab Teks Berubah Warna pada Light Mode**: Hindari penulisan inline style atau selector Tailwind bertabrakan seperti `text-white hover:text-white` yang ter-override oleh aturan global `.light`. Selalu sertakan `!text-white` dan `data-active-tab="true"` pada tombol aktif.
4. **SVG Coordinate Bugs**: Pastikan kalkulasi trigonometri koordinat radial SVG memiliki penanganan nilai bagi nol (*division by zero safe check*).

---

## 9. Checklist Kelulusan Refactor (*Definition of Done*)

Sebelum sebuah bab dinyatakan selesai direfaktor, checklist berikut harus terpenuhi secara ketat:

- [ ] Folder modul bab terbuat dengan struktur terstandar: `index.tsx`, `container.tsx`, `data.ts`, `utils.ts`, `types.ts`, dan sub-komponen `[custom].tsx`.
- [ ] Komponen utama diekspor melalui `index.tsx` dan seluruh consumer (`src/App.tsx`, `src/components/SlideExportRenderer.tsx`) terhubung langsung ke `src/slideXX/` tanpa melalui folder `src/slide/`.
- [ ] File monolitik lama di `src/slide/[nama file].tsx` telah **DIHAPUS SECARA PERMANEN** (dilarang menggunakan adapter re-export).
- [ ] Tidak ada berkas yatim (*orphan files*) atau kode mati yang tertinggal di dalam repositori.
- [ ] Tab pada bab tersebut **tidak memiliki ikon dan tidak memiliki nomor urut**.
- [ ] Tab aktif memiliki card merah (`bg-rose-600`) dan teks putih solid (`!text-white font-bold`) di mode gelap dan mode terang.
- [ ] Seluruh animasi morphing (`motion/react`, `layoutId`) berjalan mulus tanpa flicker/blink.
- [ ] Tidak ada data duplikat atau konstanta ganda yang tidak perlu; data global diimpor dari `src/data/`.
- [ ] `compile_applet` dan `lint_applet` (`tsc --noEmit`) berhasil dijalankan dengan status **Build succeeded (0 errors, 0 warnings)**.
- [ ] Fitur bilingual (Indonesia & English) tetap berfungsi 100% pada seluruh teks bab.

---

## 10. Protokol Verifikasi Baku & Format Laporan Respons (*Verification Protocol & Mandatory Response Format*)

Guna memastikan setiap refactoring dijalankan dengan integritas tinggi dan transparan, setiap eksekusi refactor bab **WAJIB** melalui 6 titik verifikasi dan menyajikan **Laporan Verifikasi Komprehensif** pada respons akhir:

### A. 6 Titik Pemeriksaan Verifikasi (*The 6 Verification Checkpoints*):
1. **Verifikasi Pembersihan File Warisan (`[VERIFY-LEGACY-CLEANUP]`)**:
   - Memastikan file lama di `src/slide/[nama file].tsx` telah dihapus menggunakan tool penghapusan file (`delete_file`).
   - Tidak boleh ada file adapter dummy atau re-export stub di `src/slide/`.
2. **Verifikasi Sinkronisasi Seluruh Consumer (`[VERIFY-CONSUMER-IMPORTS]`)**:
   - Memeriksa `src/App.tsx` telah mengimpor langsung dari `./slideXX`.
   - Memeriksa `src/components/SlideExportRenderer.tsx` telah mengimpor langsung dari `../slideXX`.
   - Menjalankan pencarian teks (`grep`) untuk memastikan tidak ada lagi sisa impor ke file slide lama di seluruh codebase.
3. **Verifikasi Audit Berkas Yatim & Redundansi (`[VERIFY-ORPHAN-FILES]`)**:
   - Memastikan tidak ada file sisa/konsep usang (seperti `Slide04ProductPositioning.tsx`) yang terbengkalai.
   - Memeriksa konsistensi data dengan `src/data/targetAccounts.ts`, `src/data/translations.ts`, dll.
4. **Verifikasi Kompilasi & Tipe Data (`[VERIFY-BUILD-LINT]`)**:
   - Menjalankan validasi TypeScript `tsc --noEmit` dan `compile_applet`.
   - Menjamin 0 syntax error, 0 missing types, dan 0 lint warnings.
5. **Verifikasi Kontrak UI Tab & Tema (`[VERIFY-TAB-CONTRACT]`)**:
   - Tombol tab aktif menggunakan `tab-btn-active bg-rose-600 text-white !text-white font-bold shadow-xs`.
   - Teks tab putih solid (`#ffffff`) di kedua mode: Dark Mode (`.dark`) dan Light Mode (`.light`).
   - Bersih dari angka urut (`01.`, `02.`) dan ikon visual (`Icon`).
6. **Verifikasi Zero Regression Fungsional (`[VERIFY-ZERO-REGRESSION]`)**:
   - State navigasi, transisi keyboard, drawer slide, context bahasa ID/EN, dan ekspor tetap sinkron 100%.

### B. Format Wajib Laporan Verifikasi pada Respons:
Setiap kali asisten menyelesaikan tugas refactoring atau pembersihan bab, asisten **wajib** menyertakan blok laporan verifikasi terstruktur dengan format berikut:

```markdown
### 📋 Laporan Verifikasi Refactoring [Nama Bab]
| Checkpoint | Parameter Uji | Status | Keterangan Hasil |
|---|---|---|---|
| **1. Eliminasi File Warisan** | Pembersihan `src/slide/[file_lama].tsx` | ✅ Lulus | Berkas monolitik lama telah dihapus permanen (bukan re-export adapter). |
| **2. Sinkronisasi Consumer** | Impor di `App.tsx` & `SlideExportRenderer.tsx` | ✅ Lulus | Seluruh consumer terhubung langsung ke `src/slideXX/`. |
| **3. Audit Berkas Yatim** | Deteksi dead code / orphan files | ✅ Lulus | Zero orphan files; tidak ada sisa file usang. |
| **4. Kompilasi & Linting** | `tsc --noEmit` & `compile_applet` | ✅ Lulus | 0 compilation errors, 0 linter warnings. |
| **5. Kontrak Tampilan Tab** | Active card merah, teks putih, zero-icon | ✅ Lulus | `bg-rose-600 !text-white font-bold` konsisten Dark/Light mode. |
| **6. Zero Regression** | Bilingual ID/EN, tema, animasi morphing | ✅ Lulus | Tata letak dan fungsionalitas 100% identik. |
```

---

## 11. Panduan Pemberian Instruksi Selanjutnya oleh Pengguna

Untuk melanjutkan proses refactoring bab berikutnya, pengguna cukup memberikan instruksi singkat mengacu pada dokumen ini, misalnya:

- *"Lakukan refactor file pada bab 5 dengan mengacu pada standarisasi dan panduan di public/REFACTOR.md"*
- *"Lakukan refactor file pada bab 6 dengan mengacu pada standarisasi dan panduan di public/REFACTOR.md"*
- *"Lanjutkan bab berikutnya sesuai REFACTOR.md"*

Setiap bab berikutnya akan dieksekusi secara berurutan mengikuti seluruh 11 tahap SOP, memusnahkan berkas monolitik lama di `src/slide/`, menghubungkan consumer langsung ke direktori baru, dan menyajikan laporan verifikasi baku pada akhir respons. Setelah Bab 11 dan Bab 01 selesai direfaktor, direktori `src/slide/` akan kosong dan dihapus secara total.
