import React from 'react';
import { 
  Network, 
  CheckCircle2, 
  Check, 
  Percent, 
  ShieldCheck 
} from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedCounter } from '../components/AnimatedCounter';

interface PillarsAndMarginsViewProps {
  isId: boolean;
}

export const PillarsAndMarginsView: React.FC<PillarsAndMarginsViewProps> = ({ isId }) => {
  return (
    <motion.div
      key="tab0"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-start"
    >
      {/* SISI KIRI (7 COLS): EKOSISTEM 3 PILAR KANAL PENJUALAN UTAMA */}
      <div className="lg:col-span-7 bg-[#0b0c12]/95 border border-neutral-800 p-3 rounded-lg flex flex-col justify-start space-y-2 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1.5">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-rose-500" />
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                {isId ? '3 Pilar Kanal Penjualan (Non-Kompetitor Terverifikasi)' : '3 Verified Key Channel Pillars (Non-Competitor)'}
              </h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              AUDIT BEBAS KOMPETITOR
            </span>
          </div>

          {/* 3 Pillars Cards */}
          <div className="space-y-2">
            {/* Pilar 1: Tier-1 System Integrators */}
            <div className="p-2.5 bg-neutral-950/90 border border-neutral-900 rounded-lg space-y-1.5 hover:border-neutral-800 transition-colors">
              <div className="flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-rose-950 text-rose-400 border border-rose-800 text-[10px] flex items-center justify-center font-bold">
                    1
                  </span>
                  <span className="font-bold text-white">Tier-1 & Specialized System Integrators (SI)</span>
                </div>
                <span className="text-[10px] text-rose-400 font-bold bg-rose-950/60 px-2 py-0.5 rounded border border-rose-900">
                  BANKING & ENTERPRISE
                </span>
              </div>
              <p className="text-[11px] text-neutral-300 leading-snug">
                {isId 
                  ? 'Akses langsung ke pengadaan perbankan tier-1 dan konglomerasi swasta dengan relasi dewan direksi terpercaya.' 
                  : 'Direct access to Tier-1 banking and private conglomerates with established C-suite trust.'}
              </p>
              {/* Named Key Partners Chips */}
              <div className="pt-1 flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                <span className="text-neutral-500 uppercase text-[9px] font-bold">Mitra Terverifikasi:</span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-emerald-300 border border-emerald-900/60 font-semibold" title="Tier-1 Banking SI (IDX: MLPT)">
                  Multipolar Technology
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-emerald-300 border border-emerald-900/60 font-semibold" title="Tier-1 Enterprise Infrastructure SI (IDX: MSTI)">
                  Mastersystem Infotama
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-emerald-300 border border-emerald-900/60 font-semibold" title="Enterprise Data & Document Security SI (RDS Group)">
                  Reycom Data Solusi (RDS)
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-emerald-300 border border-emerald-900/60 font-semibold" title="Network & Security SI / MSP">
                  Kirana Sakti Komputindo
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-emerald-300 border border-emerald-900/60 font-semibold" title="Public Enterprise IT SI (IDX: LUCK)">
                  Sentral Mitra Informatika
                </span>
              </div>
            </div>

            {/* Pilar 2: Distributor Nasional & BUMN Telko */}
            <div className="p-2.5 bg-neutral-950/90 border border-neutral-900 rounded-lg space-y-1.5 hover:border-neutral-800 transition-colors">
              <div className="flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-amber-950 text-amber-400 border border-amber-800 text-[10px] flex items-center justify-center font-bold">
                    2
                  </span>
                  <span className="font-bold text-white">Distributor Nasional & BUMN Telko</span>
                </div>
                <span className="text-[10px] text-amber-400 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-900">
                  BUMN & GOV TENDER
                </span>
              </div>
              <p className="text-[11px] text-neutral-300 leading-snug">
                {isId 
                  ? 'Memanfaatkan payung kontrak induk BUMN dan jaringan distribusi nasional untuk penetrasi instansi publik.' 
                  : 'Leveraging SOE master agreements and national distribution networks for public sector penetration.'}
              </p>
              {/* Named Key Partners Chips */}
              <div className="pt-1 flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                <span className="text-neutral-500 uppercase text-[9px] font-bold">Mitra Terverifikasi:</span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-white border border-neutral-800 font-semibold">
                  Telkom Indonesia / Telkomsigma
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-white border border-neutral-800 font-semibold">
                  Indosat Ooredoo Hutchison
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-emerald-300 border border-emerald-900/60 font-semibold" title="Distributor IT Enterprise Utama">
                  Computrade Technology (CTI)
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-emerald-300 border border-emerald-900/60 font-semibold" title="Distributor Keamanan Siber & Software Enterprise">
                  ACA Pacific Indonesia
                </span>
              </div>
            </div>

            {/* Pilar 3: Cloud Hyperscaler Marketplaces */}
            <div className="p-2.5 bg-neutral-950/90 border border-neutral-900 rounded-lg space-y-1.5 hover:border-neutral-800 transition-colors">
              <div className="flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-sky-950 text-sky-400 border border-sky-800 text-[10px] flex items-center justify-center font-bold">
                    3
                  </span>
                  <span className="font-bold text-white">Cloud Marketplaces (Co-Sell)</span>
                </div>
                <span className="text-[10px] text-sky-400 font-bold bg-sky-950/60 px-2 py-0.5 rounded border border-sky-900">
                  BUDGET DRAWDOWN
                </span>
              </div>
              <p className="text-[11px] text-neutral-300 leading-snug">
                {isId 
                  ? 'Pengadaan kilat memanfaatkan drawdown alokasi komitmen cloud enterprise tanpa anggaran tambahan.' 
                  : 'Accelerate deal closing by drawing down enterprise pre-committed cloud spend commitments.'}
              </p>
              {/* Named Key Partners Chips */}
              <div className="pt-1 flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                <span className="text-neutral-500 uppercase text-[9px] font-bold">Mitra Terverifikasi:</span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-white border border-neutral-800 font-semibold">
                  AWS Marketplace Indonesia
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-white border border-neutral-800 font-semibold">
                  Google Cloud Partner
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 text-white border border-neutral-800 font-semibold">
                  Microsoft Azure Co-Sell
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            Alur Co-Selling: ITSEC Asia Memimpin PoC Teknis, Mitra Menutup Pengadaan
          </span>
          <span className="text-rose-400 font-bold">WIN-WIN CO-SELL</span>
        </div>
      </div>

      {/* SISI KANAN (5 COLS): STRUKTUR MARGIN & KRITERIA KUALIFIKASI MITRA */}
      <div className="lg:col-span-5 bg-[#0e0f17] border border-neutral-800 p-3 rounded-lg flex flex-col justify-start space-y-2 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-1">
            <div className="flex items-center gap-2">
              <Percent className="w-4 h-4 text-emerald-400" />
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                {isId ? 'Struktur Margin Komersial Kanal' : 'Commercial Margin Structure'}
              </h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-semibold">TERLINDUNGI ARR</span>
          </div>

          {/* 3 Margin Tiers Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
            <div className="p-2.5 bg-neutral-950 border border-neutral-800 rounded text-center flex flex-col justify-start space-y-1">
              <div>
                <span className="text-[10px] text-neutral-400 block uppercase">Referensi Langsung</span>
                <span className="text-lg font-black text-white block my-0.5">
                  <AnimatedCounter value="15% – 20%" />
                </span>
                <span className="text-[9px] text-neutral-400 block font-sans">Warm Lead Referral</span>
              </div>
              <div className="w-full h-1 bg-neutral-900 rounded overflow-hidden mt-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '20%' }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-slate-400 rounded"
                />
              </div>
            </div>

            <div className="p-2.5 bg-neutral-950 border border-rose-900/60 rounded text-center flex flex-col justify-start space-y-1">
              <div>
                <span className="text-[10px] text-rose-400 block uppercase">Co-Sell SI & VAR</span>
                <span className="text-lg font-black text-rose-400 block my-0.5">
                  <AnimatedCounter value="25% – 30%" />
                </span>
                <span className="text-[9px] text-neutral-300 block font-sans">Joint PoC & Delivery</span>
              </div>
              <div className="w-full h-1 bg-neutral-900 rounded overflow-hidden mt-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '30%' }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-rose-500 rounded"
                />
              </div>
            </div>

            <div className="p-2.5 bg-neutral-950 border border-emerald-900/60 rounded text-center flex flex-col justify-start space-y-1">
              <div>
                <span className="text-[10px] text-emerald-400 block uppercase">Distribusi Agresif</span>
                <span className="text-lg font-black text-emerald-400 block my-0.5">
                  <AnimatedCounter value="30% – 35%" />
                </span>
                <span className="text-[9px] text-neutral-300 block font-sans">Volume Komitmen ARR</span>
              </div>
              <div className="w-full h-1 bg-neutral-900 rounded overflow-hidden mt-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '35%' }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-emerald-500 rounded"
                />
              </div>
            </div>
          </div>

          {/* Kriteria Kesiapan Mitra (Partner Readiness Criteria) */}
          <div className="p-2.5 bg-neutral-950/80 border border-neutral-900 rounded-lg space-y-1.5">
            <div className="flex items-center justify-between border-b border-neutral-900 pb-1 text-xs font-mono">
              <span className="text-white font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-500" />
                {isId ? 'KRITERIA KUALIFIKASI KESIAPAN MITRA' : 'PARTNER READINESS QUALIFICATION'}
              </span>
              <span className="text-rose-400 font-semibold text-[10px]">3 STANDAR KETAT</span>
            </div>

            <div className="space-y-1.5 text-xs text-neutral-200">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Sertifikasi Teknis Mandatori: </strong>
                  <span className="text-neutral-300">Min. 2 Pre-Sales/Cyber Engineers tersertifikasi Bronyx AI untuk pengawalan PoC lokal.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Hubungan Dewan Direksi / C-Level: </strong>
                  <span className="text-neutral-300">Akses langsung ke CISO/CIO di 10 akun sasaran BUMN atau Perbankan BUKU IV.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Komitmen Proteksi ARR: </strong>
                  <span className="text-neutral-300">Target kuota minimal Rp 3,0 Miliar ARR tahunan untuk mengunci status platinum margin.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-1.5 border-t border-neutral-800 text-[10px] font-mono text-neutral-400 flex items-center justify-between">
          <span>Perlindungan Teritori & Registrasi Deal: 60 Hari</span>
          <span className="text-emerald-400 font-bold">ANTI-CONFLICT REGISTRATION</span>
        </div>
      </div>
    </motion.div>
  );
};
