# Panduan Arsitektur & Implementasi Animasi Morphing Universal
> Terinspirasi dari Teknik Animasi Radial Mind Map (Bab 02 / Bab 03 - Target Account Universe)

Dokumen ini membedah secara mendalam rahasia di balik animasi perpindahan tab pada komponen Mind Map, di mana elemen **seolah-olah bergerak anggun, tetap mempertahankan posisinya, dan bertransformasi (morph) secara mulus**, bukan sekadar menghilang lalu muncul kembali (*flicker/blink*).

Panduan ini disusun secara umum (*general purpose*) sehingga konsep, arsitektur, dan pola kodenya dapat langsung Anda adopsi untuk animasi apa pun: kartu dashboard, grafik data, navigasi tab, tombol aksi, modal ekspansi, hingga daftar elemen interaktif.

---

## 1. Bedah Forensik Animasi Mind Map: Mengapa Terasa Seperti "Morphing"?

Ketika Anda berpindah antar tab (misalnya dari *Perbankan* ke *Fintech*, *Pemerintah*, atau *Telko*), lingkaran-lingkaran target akun dan garis penghubungnya tidak sekadar di-reset. Sebaliknya, mata Anda melihat:
1. **Lingkaran (node)** bergeser meluncur secara organik ke koordinat orbit barunya.
2. **Garis spoke (penghubung)** tetap menempel di satu ujung pusat dan ujung lainnya meregang/menyesuaikan diri mengikuti lingkaran.
3. **Ukuran dan warna lingkaran** menyesuaikan prioritas kategori baru tanpa kehilangan wujudnya.
4. **Teks nama perusahaan di dalam lingkaran** bertukar secara anggun lewat *soft crossfade* tepat di tengah lingkaran yang sedang bergerak.

### 1.1 Masalah Tradisional vs Solusi Morphing
Pada kebanyakan aplikasi React konvensional, perpindahan tab diimplementasikan seperti ini:

```tsx
// ❌ PENDEKATAN KONVENSIONAL (MENYEBABKAN BLINK / HILANG TIMBUL)
{accounts.map((account) => (
  // React menghancurkan (unmount) DOM lama dan membuat (mount) DOM baru
  // karena ID akun perbankan berbeda dengan ID akun fintech!
  <motion.div key={account.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    {account.name}
  </motion.div>
))}
```
Akibatnya: Seluruh elemen lama lenyap seketika, elemen baru meledak atau muncul dari nol. Pengguna kehilangan fokus visual (*cognitive disruption*).

### 1.2 Rahasia Inti: *Dual-Layer Keying Architecture*
Di dalam komponen Mind Map (`Slide03TargetMarketMap.tsx`), rahasia terbesarnya terletak pada **Pemisahan Identitas Wadah (Container Slot) vs Identitas Konten (Content)**:

```tsx
// 🎯 KUNCI UTAMA TEKNIK MIND MAP: DUAL-LAYER KEYING
{displayedAccounts.map((account, index) => {
  const { nodeX, nodeY } = getNodePos(account, index);

  return (
    // LAYER 1 (WADAH / SLOT): Key berbasis index atau ID slot yang STABIL!
    // DOM Node TIDAK DIHANCURKAN saat tab berganti.
    <motion.g
      key={`satellite-slot-${index}`}
      animate={{
        x: nodeX,
        y: nodeY,
        opacity: groupOpacity,
        scale: 1
      }}
      transition={{
        x: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
        y: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
      }}
    >
      {/* Bentuk geometris (lingkaran) ikut morphing ukuran dan warnanya */}
      <motion.circle
        r={radius}
        fill={circleFill}
        stroke={circleStroke}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      />

      {/* LAYER 2 (KONTEN DI DALAM): Key berbasis ID data unik! */}
      {/* Hanya teksnya yang berganti lewat fade-in/fade-out halus */}
      <motion.g
        key={account.id}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <text>{account.shortName}</text>
      </motion.g>
    </motion.g>
  );
})}
```

### 1.3 Empat Pilar Penopang Ilusi Visual
1. **Slot Persistence (Persistensi Slot)**: Karena wadah menggunakan `key="satellite-slot-${index}"`, *reconciler* React dan Framer Motion menganggap elemen tersebut adalah **entitas yang sama** yang posisinya hanya berubah dari `(xOld, yOld)` menjadi `(xNew, yNew)`. Motion secara otomatis menghitung *tween* interpolasi koordinatnya.
2. **Dynamic Vector Tethering**: Garis spoke `<motion.line key="spoke-slot-${index}" animate={{ x2: nodeX, y2: nodeY }} />` menginterpolasi koordinat ujungnya dalam kecepatan yang sama (`750ms`), sehingga tampak selalu meregang dan mengikuti posisi bola.
3. **Staggered Multi-Speed Properties**:
   - Pergerakan fisik (posisi `x, y`): **750ms** dengan kurva eksponensial anggun.
   - Transformasi visual (warna, stroke, radius): **280ms - 300ms** responsif.
   - Pertukaran teks (*crossfade*): **350ms** cepat dan bersih.
   Perbedaan ritme ini membuat animasi terasa seperti fisika nyata: "benda bergerak perlahan, tetapi reaksi materialnya cepat".
4. **Kurva Easing Eksponensial (`ease: [0.16, 1, 0.3, 1]`)**:
   Alih-alih memakai `linear` atau `easeInOut` standar, kurva kustom ini melesat cepat di 10% awal lalu mengerem sangat halus dan presisi di 90% sisa perjalanannya.

---

## 2. Prinsip Universal Morphing Animation (Arsitektur Umum)

Konsep ini **tidak terbatas pada mind map atau grafis SVG**. Anda dapat menggunakannya pada:
- **Card Metrik / Dashboard**: Kartu metrik berganti kategori, nilainya bergeser dan formatnya menyesuaikan tanpa kartu itu sendiri lenyap.
- **Data Charts / Visualizer**: Bar chart yang bertransformasi menjadi scatter plot atau donut chart.
- **Tabbed Interface & Filter**: Filter list yang menata ulang posisinya dan mengganti isinya.
- **Interactive Forms & Wizards**: Langkah 1 mengecil dan bertransformasi menjadi ringkasan mini di samping.
- **Button to Modal / Expansion**: Tombol kecil yang membesar dan bertransformasi menjadi modal formulir lengkap.

### 4 Hukum Emas Morphing Universal
| No | Prinsip | Deskripsi |
| :--- | :--- | :--- |
| **1** | **Identity Decoupling** | Pisahkan *key* wadah luar (harus stabil) dari *key* konten dalam (spesifik data). |
| **2** | **Continuous Attribute Interpolation** | Animasikan atribut posisi (`x/y`, `layout`, atau koordinat) ketimbang memakai `mount/unmount`. |
| **3** | **Coordinated Easing Hierarchy** | Translasi spasial butuh waktu lebih panjang (~600–800ms) daripada transisi warna/teks (~250–350ms). |
| **4** | **Spatial Continuity Anchoring** | Berikan jangkar visual (misal: pusat lingkaran, sumbu x, atau titik tengah grid) agar mata pengguna memiliki acuan tetap. |

---

## 3. Tiga Pola Implementasi (Teknik & Kode)

Ada 3 metode utama untuk menerapkan morphing pada ekosistem web modern (React + Framer Motion / CSS):

---

### METODE 1: Slot-Based Morphing Pattern (Pola Mind Map)
> **Paling ideal untuk**: Layout yang posisinya dapat dihitung secara matematis (Radial, Grid, Canvas, Circular, Chart, Slot List).

#### Konsep:
Kita menyediakan sejumlah wadah (*slots*). Data baru dialokasikan ke slot-slot yang sudah ada. Setiap slot menginterpolasi nilai propertinya ke nilai data baru.

#### Contoh Kode Lengkap: Kartu Metrik Dashboard yang Morphing
Bayangkan Anda memiliki 3 kartu metrik. Ketika pengguna mengganti filter (misal: "Harian" ke "Bulanan" atau "Finansial" ke "Operasional"), kartu-kartunya tidak lenyap, melainkan bertransformasi di tempatnya:

```tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface MetricItem {
  id: string;
  label: string;
  value: string;
  change: string;
  accentColor: string;
  widthPercent: number; // Variasi lebar untuk mendemonstrasikan morphing bentuk
}

const METRIC_DATASETS: Record<string, MetricItem[]> = {
  sales: [
    { id: 'revenue', label: 'Total Pendapatan', value: 'Rp 4,8 M', change: '+24%', accentColor: '#e11d48', widthPercent: 100 },
    { id: 'deals', label: 'Deals Dimenangkan', value: '18 Akun', change: '+12%', accentColor: '#f59e0b', widthPercent: 85 },
    { id: 'arpu', label: 'Rata-rata Nilai Kontrak', value: 'Rp 267 Jt', change: '+8%', accentColor: '#10b981', widthPercent: 95 }
  ],
  security: [
    { id: 'vuln', label: 'Celah Kritis Ditutup', value: '142 Aset', change: '-45%', accentColor: '#3b82f6', widthPercent: 90 },
    { id: 'uptime', label: 'Ketersediaan SOC 24/7', value: '99.98%', change: '+0.02%', accentColor: '#8b5cf6', widthPercent: 100 },
    { id: 'sla', label: 'Respon Insiden Rata-rata', value: '4.2 Menit', change: '-18%', accentColor: '#ec4899', widthPercent: 80 }
  ]
};

export const MorphingMetricDashboard = () => {
  const [activeCategory, setActiveCategory] = useState<'sales' | 'security'>('sales');
  const items = METRIC_DATASETS[activeCategory];

  return (
    <div className="p-6 bg-neutral-950 text-white rounded-xl border border-neutral-800">
      {/* Pengalih Kategori */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('sales')}
          className={`px-4 py-1.5 rounded text-sm transition-all ${
            activeCategory === 'sales' ? 'bg-rose-600 text-white font-bold' : 'bg-neutral-900 text-neutral-400'
          }`}
        >
          Kategori Penjualan
        </button>
        <button
          onClick={() => setActiveCategory('security')}
          className={`px-4 py-1.5 rounded text-sm transition-all ${
            activeCategory === 'security' ? 'bg-blue-600 text-white font-bold' : 'bg-neutral-900 text-neutral-400'
          }`}
        >
          Kategori Keamanan Siber
        </button>
      </div>

      {/* Grid Kartu Metrik dengan Slot Morphing */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, index) => {
          return (
            // SLOT KONTEN STABIL: Key adalah `slot-${index}`!
            // Tidak pernah di-unmount saat ganti kategori!
            <motion.div
              key={`metric-slot-${index}`}
              animate={{
                borderColor: item.accentColor,
                backgroundColor: '#111218',
                boxShadow: `0 0 20px -5px ${item.accentColor}33`
              }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="p-5 rounded-lg border relative overflow-hidden flex flex-col justify-between"
            >
              {/* Indikator Baris yang Morphing Panjang & Warnanya */}
              <motion.div
                className="h-1 rounded-full mb-4"
                animate={{
                  width: `${item.widthPercent}%`,
                  backgroundColor: item.accentColor
                }}
                transition={{
                  width: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  backgroundColor: { duration: 0.35 }
                }}
              />

              {/* KONTEN DINAMIS: Key berbasis item.id unik untuk swap halus */}
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  {item.label}
                </div>
                <div className="text-2xl font-black mt-1 text-white tracking-tight">
                  {item.value}
                </div>
                <div
                  className="text-xs font-semibold mt-2 inline-block px-2 py-0.5 rounded"
                  style={{ color: item.accentColor, backgroundColor: `${item.accentColor}18` }}
                >
                  {item.change} dibanding periode lalu
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
```

---

### METODE 2: Shared Layout Morphing (`layoutId` & `layout`)
> **Paling ideal untuk**: Perpindahan elemen antara posisi yang berbeda sama sekali di pohon DOM, misalnya:
> - Penunjuk pill aktif pada tab navigasi.
> - Kartu thumbnail galeri yang membesar menjadi modal tampilan penuh (*shared element transition*).
> - List item yang berpindah kolom (misal Kanban board).

#### Konsep:
Framer Motion menggunakan algoritma **FLIP** (*First, Last, Invert, Play*). Ketika dua elemen (atau satu elemen yang berpindah tempat) memiliki atribut `layoutId` yang sama, Framer Motion menghitung selisih koordinat dan ukuran geometrisnya di layar, lalu menghasilkan ilusi bahwa elemen tersebut meleleh/mengalir dari posisi awal ke posisi akhir.

#### Contoh 1: Tab Indicator Morphing (Pill yang Mengalir)
```tsx
import React, { useState } from 'react';
import { motion } from 'motion/react';

const TABS = ['Ringkasan', 'Arsitektur', 'Jadwal 90 Hari', 'Evaluasi KPI'];

export const MorphingTabNav = () => {
  const [selectedTab, setSelectedTab] = useState(TABS[0]);

  return (
    <div className="flex bg-neutral-900 p-1.5 rounded-xl border border-neutral-800 gap-1">
      {TABS.map((tab) => {
        const isActive = selectedTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`relative px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            {/* INI KUNCI MORPHING: Latar belakang aktif menggunakan layoutId */}
            {isActive && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-rose-600 rounded-lg shadow-lg shadow-rose-900/40"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 32
                }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </div>
  );
};
```

#### Contoh 2: Card Morphing ke Modal Eksekutif
```tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const CardToModalMorph = () => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const CARDS = [
    { id: 'c1', title: 'Perbankan Tier-1', tag: 'High ARR', desc: 'Penetrasi ke 4 Bank KBMI 4 dengan pendekatan zero blast radius PoC.' },
    { id: 'c2', title: 'Holding BUMN', tag: 'Strategic', desc: 'Akselerasi kepatuhan UU PDP pada holding pertambangan dan telekomunikasi.' }
  ];

  const activeCard = CARDS.find(c => c.id === selectedCardId);

  return (
    <div className="p-6">
      {/* Daftar Kartu Biasa */}
      <div className="grid grid-cols-2 gap-4">
        {CARDS.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-container-${card.id}`}
            onClick={() => setSelectedCardId(card.id)}
            className="p-5 bg-neutral-900 border border-neutral-800 rounded-xl cursor-pointer hover:border-rose-500"
          >
            <motion.span layoutId={`tag-${card.id}`} className="text-xs text-rose-400 font-mono font-bold">
              {card.tag}
            </motion.span>
            <motion.h3 layoutId={`title-${card.id}`} className="text-lg font-bold text-white mt-1">
              {card.title}
            </motion.h3>
          </motion.div>
        ))}
      </div>

      {/* Modal Terbuka (Elemen yang SAMA bermutasi menjadi modal di tengah layar) */}
      <AnimatePresence>
        {activeCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              layoutId={`card-container-${activeCard.id}`}
              className="w-full max-w-lg bg-neutral-900 border border-neutral-700 p-8 rounded-2xl shadow-2xl relative"
            >
              <motion.span layoutId={`tag-${activeCard.id}`} className="text-xs text-rose-400 font-mono font-bold">
                {activeCard.tag}
              </motion.span>
              <motion.h3 layoutId={`title-${activeCard.id}`} className="text-2xl font-black text-white mt-2">
                {activeCard.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-neutral-300 mt-4 leading-relaxed"
              >
                {activeCard.desc}
              </motion.p>
              <button
                onClick={() => setSelectedCardId(null)}
                className="mt-6 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded text-sm font-semibold cursor-pointer"
              >
                Tutup Ringkasan
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
```

---

### METODE 3: SVG Shape & Vector Path Morphing
> **Paling ideal untuk**: Garis grafik, ikon yang berubah wujud (misal Play ke Pause, Menu Burger ke Silang X), atau bentuk kurva blob.

#### Konsep:
SVG memiliki atribut `d` (pada `<path>`), `points` (pada `<polygon>`), atau `cx, cy, r` (pada `<circle>`). Selama jumlah titik kendali (*control points*) sepadan, atau jika menggunakan interpolator kurva seperti Framer Motion, bentuk geometris dapat meleleh dari satu wujud ke wujud lain.

#### Contoh: Morfisme Garis Tren Grafik Antar Skenario
```tsx
import React, { useState } from 'react';
import { motion } from 'motion/react';

export const MorphingPathChart = () => {
  const [scenario, setScenario] = useState<'normal' | 'aggressive'>('normal');

  // Jalur SVG koordinat skenario konservatif vs agresif
  const paths = {
    normal: "M 0 120 C 60 110, 120 90, 180 85 C 240 80, 300 50, 360 40",
    aggressive: "M 0 130 C 60 90, 120 40, 180 30 C 240 20, 300 10, 360 5"
  };

  return (
    <div className="p-6 bg-neutral-900 rounded-xl">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setScenario('normal')}
          className={`px-3 py-1 rounded text-xs ${scenario === 'normal' ? 'bg-rose-600 text-white' : 'bg-neutral-800 text-neutral-400'}`}
        >
          Skenario Moderat
        </button>
        <button
          onClick={() => setScenario('aggressive')}
          className={`px-3 py-1 rounded text-xs ${scenario === 'aggressive' ? 'bg-rose-600 text-white' : 'bg-neutral-800 text-neutral-400'}`}
        >
          Skenario Agresif
        </button>
      </div>

      <svg viewBox="0 0 360 150" className="w-full h-36 overflow-visible">
        {/* Garis kurva yang meleleh morphing */}
        <motion.path
          d={paths[scenario]}
          fill="none"
          stroke={scenario === 'aggressive' ? '#f43f5e' : '#38bdf8'}
          strokeWidth="3.5"
          strokeLinecap="round"
          animate={{
            d: paths[scenario],
            stroke: scenario === 'aggressive' ? '#f43f5e' : '#38bdf8'
          }}
          transition={{
            d: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
            stroke: { duration: 0.3 }
          }}
        />
      </svg>
    </div>
  );
};
```

---

## 4. Formula Matematika & Geometri Morphing (Untuk Grid & Orbit Kustom)

Jika Anda ingin membangun visualisasi data Anda sendiri (seperti radial mind map, susunan sarang lebah / *hexagonal*, atau spiral galaksi):

### 4.1 Rumus Perhitungan Posisi Orbit Radial (Seperti Bab 3)
```ts
// 1. Tentukan Titik Pusat
const centerX = 400;
const centerY = 300;

// 2. Tentukan Jari-Jari (Radius Orbit) berdasarkan tingkatan prioritas
const getRadius = (tier: 'P1' | 'P2' | 'P3') => {
  if (tier === 'P1') return 120; // Dekat pusat
  if (tier === 'P2') return 200; // Menengah
  return 280;                    // Luar
};

// 3. Tentukan Sudut (Angle) dalam Radian dengan Offset Rotasi
// offsetPerTab membuat seluruh sistem seolah berputar anggun saat tab berganti
const tabRotationOffset = activeTabIndex * (Math.PI / 4); // Putar 45 derajat per tab

const angle = (2 * Math.PI * itemIndex) / totalItemsInTier - Math.PI / 2 + tabRotationOffset;

// 4. Konversi Polar ke Kartesius (X, Y)
const targetX = centerX + radius * Math.cos(angle);
const targetY = centerY + radius * Math.sin(angle);
```
Ketika `activeTabIndex` berubah:
- `tabRotationOffset` berubah.
- Seluruh `(targetX, targetY)` terhitung ulang.
- Karena wadah mempertahankan `key="slot-${index}"`, Motion menginterpolasi `targetX` dan `targetY` secara serentak, menghasilkan **efek putaran swirl yang sangat halus dan sinematis**.

---

## 5. Parameter Timing & Easing Terbaik (Cheat Sheet)

Kunci agar animasi tidak terasa kaku atau lambat:

| Jenis Transformasi | Durasi Ideal | Easing Rekomendasi | Catatan |
| :--- | :--- | :--- | :--- |
| **Perpindahan Spasial (X, Y, Posisi)** | `0.65s - 0.85s` | `[0.16, 1, 0.3, 1]` | *Brisk start, silky smooth deceleration*. Terasa organik dan mahal. |
| **Perubahan Dimensi (Width, Height, Radius)** | `0.45s - 0.60s` | `[0.16, 1, 0.3, 1]` | Mengikuti pergerakan spasial tapi berhenti sedikit lebih cepat. |
| **Perubahan Warna & Border (`fill`, `stroke`)** | `0.25s - 0.35s` | `easeOut` | Perubahan warna yang terlalu lambat akan terlihat keruh/kotor di tengah jalan. |
| **Crossfade Teks / Ikon di Dalam Slot** | `0.30s - 0.35s` | `easeOut` atau `easeInOut` | Berikan `scale: 0.85 -> 1` tipis agar terasa muncul mekar di tempatnya. |
| **Shared Layout Springs (`layoutId`)** | N/A (Spring) | `stiffness: 350, damping: 30` | Paling ideal untuk tab switch dan card expansion. |

---

## 6. Daftar Kesalahan Fatal (Anti-Pattern) yang Harus Dihindari

1. **Menggunakan `key={item.id}` pada elemen terluar saat berganti mode/tab**:
   Ini adalah kesalahan #1. Jika key luar berubah, elemen langsung dihancurkan dan dibuat ulang. **Gunakan key slot yang stabil di wadah terluar**, dan taruh `key={item.id}` hanya pada teks/ikon di lapisan dalam.
2. **Menganimasikan `top`, `left`, `width`, `height` pada elemen CSS biasa tanpa layout**:
   Menganimasikan properti geometri CSS biasa memicu *browser reflow/layout recalculation* 60 kali per detik. Selalu gunakan `transform` (`x`, `y`, `scale`) atau fitur `layout` dari Framer Motion yang otomatis dioptimalkan lewat GPU.
3. **Semua properti memiliki durasi yang sama**:
   Jika perpindahan posisi (700ms) disamakan dengan durasi perubahan warna (700ms), warnanya akan tampak mengambang tidak tegas. Pisahkan properti transisinya:
   ```tsx
   transition={{
     x: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
     y: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
     fill: { duration: 0.25 }
   }}
   ```
4. **Lupa memberi `transformOrigin: 'center center'`**:
   Pada elemen SVG atau lingkaran yang mengecil/membesar saat morphing, jika `transformOrigin` tidak diatur ke titik tengahnya, elemen akan membesar ke arah samping bawah secara aneh.

---

## 7. Rangkuman Langkah Cepat (Checklist 5 Menit)

Ingin menerapkan morphing pada komponen Anda sekarang? Ikuti 4 langkah ini:

1. **Siapkan Slot**: Tentukan jumlah maksimal elemen yang tampil di layar (misal: 6 kartu, 12 titik, atau 4 tab).
2. **Beri Key Stabil**: Bungkus elemen dengan `<motion.div key={`slot-${index}`}>` (jangan pakai ID item data pada layer ini).
3. **Hitung Target State**: Berikan properti target pada `animate={{ ... }}` sesuai dataset atau mode yang sedang aktif.
4. **Isolasi Konten Dalam**: Masukkan teks/isi data di dalam `<motion.div key={dataItem.id}>` dengan transisi fade ringan agar teks berganti mulus tanpa merusak wadah yang sedang bertransformasi.

---

*Dokumen ini dibuat sebagai dokumentasi arsitektur resmi untuk sistem animasi antarmuka di proyek Bronyx 90-Day Commercial Strategy | PT ITSEC Asia Tbk.*
