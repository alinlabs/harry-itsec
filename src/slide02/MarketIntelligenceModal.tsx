import React from 'react';
import { AddressableMarketLayer } from './types';
import { GlobalModal } from '../components/GlobalModal';
import { Database, Info, FileText } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

interface MarketIntelligenceModalProps {
  modalLayer: AddressableMarketLayer | null;
  isOpen: boolean;
  onClose: () => void;
  isId: boolean;
}

export const MarketIntelligenceModal: React.FC<MarketIntelligenceModalProps> = ({
  modalLayer,
  isOpen,
  onClose,
  isId
}) => {
  if (!modalLayer) return null;

  return (
    <GlobalModal
      isOpen={isOpen}
      onClose={onClose}
      maxWidthClass="max-w-2xl"
      icon={
        <span className="font-mono font-black text-xs">
          {modalLayer.tier}
        </span>
      }
      title={
        isId && modalLayer.tier === 'TAM' 
          ? 'Total Addressable Market (Pasar Keseluruhan)' 
          : isId && modalLayer.tier === 'SAM' 
          ? 'Serviceable Addressable Market (Pasar Tersedia)' 
          : isId 
          ? 'Serviceable Obtainable Market (Target 90 Hari)' 
          : modalLayer.name
      }
      subtitle={
        <>
          {isId ? 'Klasifikasi Data' : 'Classification'}: <span className="text-rose-400 font-semibold">{modalLayer.dataType}</span>
        </>
      }
    >
      {/* Values Banner */}
      <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded flex items-center justify-between font-mono">
        <div>
          <span className="text-[10px] text-neutral-400 uppercase block mb-0.5">{isId ? 'NILAI PASAR ($)' : 'MARKET VALUE ($)'}</span>
          <span className="text-xl font-black text-white">{formatCurrency(modalLayer.valueUsd, isId)}</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-neutral-400 uppercase block mb-0.5">{isId ? 'SETARA RUPIAH (IDR)' : 'IDR EQUIVALENT'}</span>
          <span className="text-lg font-bold text-rose-400">{formatCurrency(modalLayer.valueIdr, isId)}</span>
        </div>
      </div>

      {/* Scope Description */}
      <div className="p-3.5 bg-neutral-950/80 border border-neutral-900 rounded space-y-1">
        <span className="text-[11px] font-mono text-neutral-400 uppercase font-semibold flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-rose-500" />
          {isId ? 'Deskripsi Lingkup Pasar' : 'Scope Description'}
        </span>
        <p className="text-xs text-neutral-200 leading-relaxed">
          {modalLayer.description}
        </p>
      </div>

      {/* Calculation Methodology */}
      <div className="p-4 bg-rose-950/20 border border-rose-900/40 rounded space-y-1.5">
        <span className="text-[11px] font-mono text-rose-400 uppercase font-semibold flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-rose-400" />
          {isId ? 'Metodologi Perhitungan Terverifikasi' : 'Auditable Calculation Methodology'}
        </span>
        <p className="text-xs text-neutral-200 leading-relaxed font-sans">
          {modalLayer.methodology}
        </p>
      </div>

      {/* Primary Data Source */}
      <div className="p-3.5 bg-neutral-950/80 border border-neutral-900 rounded space-y-1">
        <span className="text-[10px] font-mono text-neutral-400 uppercase flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-rose-500" />
          {isId ? 'Sumber Data Utama' : 'Primary Data Source'}
        </span>
        <p className="text-xs text-white font-mono">{modalLayer.source}</p>
      </div>
    </GlobalModal>
  );
};
