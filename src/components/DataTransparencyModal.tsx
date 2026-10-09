import React from 'react';
import { RESEARCH_SOURCES } from '../data/researchSources';
import { ShieldCheck, Database, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GlobalModal } from './GlobalModal';

interface DataTransparencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSlideId: number;
}

export const DataTransparencyModal: React.FC<DataTransparencyModalProps> = ({
  isOpen,
  onClose,
  activeSlideId
}) => {
  const { language } = useLanguage();
  const isId = language === 'id';

  if (!isOpen) return null;

  return (
    <GlobalModal
      isOpen={isOpen}
      onClose={onClose}
      icon={<ShieldCheck className="w-5 h-5" />}
      title={
        <>
          {isId ? 'Transparansi Data & Verifikasi Sumber Riset' : 'Data Transparency & Source Verification'}
          <span className="text-xs font-mono text-rose-400">· {isId ? 'Slide Aktif' : 'Active Slide'} {String(activeSlideId).padStart(2, '0')}</span>
        </>
      }
      subtitle={
        isId 
          ? 'Metodologi audit yang membedakan Data Terverifikasi Aktual dari Data Pasar Publik, Model Analitis, dan Target yang Diusulkan.' 
          : 'Auditable methodology distinguishing Actual Verified Data from Market Data, Analytical Models, and Proposed Targets.'
      }
      maxWidthClass="max-w-4xl"
      footerContent={
        <span>{isId ? 'Kepatuhan Kode Etik: Bebas dari Klaim Fiktif' : 'Auditable Standard: Zero Fabricated Claims'}</span>
      }
    >
      {/* Data Taxonomy Guide */}
      <div>
        <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
          <Database className="w-3.5 h-3.5 text-rose-500" />
          {isId ? 'Taksonomi Klasifikasi Data' : 'Data Classification Taxonomy'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-semibold text-emerald-400">
                {isId ? 'DATA AKTUAL (ACTUAL)' : 'ACTUAL DATA'}
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              {isId 
                ? 'Laporan resmi keterbukaan PT ITSEC Asia Tbk (IDX: CYBR), dokumentasi platform Bronyx, dan laporan keuangan auditan.' 
                : 'Verified filings from PT ITSEC Asia Tbk (IDX: CYBR), official Bronyx platform documentation, and legal disclosures.'}
            </p>
          </div>

          <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              <span className="text-xs font-semibold text-sky-400">
                {isId ? 'DATA PASAR PUBLIK' : 'PUBLIC MARKET DATA'}
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              {isId 
                ? 'Regulasi pemerintah Indonesia (SEOJK 29/2022, UU PDP 27/2022), telemetri ancaman BSSN, serta riset industri IDC/Statista.' 
                : 'Statutory Indonesian laws (OJK SEOJK 29/2022, UU PDP 27/2022), BSSN national threat telemetry, and IDC/Frost research.'}
            </p>
          </div>

          <div className="p-3 bg-neutral-900/80 border border-neutral-800 rounded">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span className="text-xs font-semibold text-rose-400">
                {isId ? 'TERMODELKAN & USULAN' : 'MODELLED & PROPOSED'}
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              {isId 
                ? 'Framework skor prioritas akun, simulasi funnel 90 hari, dan target komersial Sales Lead yang belum menjadi komitmen publik.' 
                : 'Analytical opportunity scoring, 90-day pipeline operating mechanics, and candidate proposed targets (not historical fact).'}
            </p>
          </div>
        </div>
      </div>

      {/* Research Sources Table */}
      <div>
        <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
          <FileText className="w-3.5 h-3.5 text-rose-500" />
          {isId ? 'Daftar Sumber Riset Terverifikasi' : 'Verified Primary Research Sources'}
        </h3>
        <div className="border border-neutral-800 rounded overflow-hidden">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-900/90 text-neutral-300 font-mono text-[11px] border-b border-neutral-800">
              <tr>
                <th className="py-2.5 px-3">{isId ? 'Klasifikasi' : 'Classification'}</th>
                <th className="py-2.5 px-3">{isId ? 'Sumber & Dokumen' : 'Source & Reference'}</th>
                <th className="py-2.5 px-3">{isId ? 'Cakupan & Tahun' : 'Scope & Year'}</th>
                <th className="py-2.5 px-3">{isId ? 'Fakta / Titik Temuan Utama' : 'Key Extracted Fact / Finding'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-sans">
              {Object.values(RESEARCH_SOURCES).map((item, idx) => (
                <tr key={idx} className="hover:bg-neutral-900/40 transition-colors">
                  <td className="py-2 px-3 align-top">
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                      item.dataType === 'ACTUAL'
                        ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800'
                        : item.dataType === 'PUBLIC MARKET DATA'
                        ? 'bg-sky-950/60 text-sky-400 border border-sky-800'
                        : 'bg-rose-950/60 text-rose-400 border border-rose-800'
                    }`}>
                      {item.dataType}
                    </span>
                  </td>
                  <td className="py-2 px-3 align-top font-semibold text-white">
                    {item.source}
                    {item.sourceUrl && (
                      <div className="text-[10px] font-mono text-neutral-500 truncate max-w-[200px]">{item.sourceUrl}</div>
                    )}
                  </td>
                  <td className="py-2 px-3 align-top text-neutral-400 font-mono text-[11px]">
                    {item.year} · {item.scope}
                  </td>
                  <td className="py-2 px-3 align-top text-neutral-300 text-[11px] leading-relaxed">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </GlobalModal>
  );
};
