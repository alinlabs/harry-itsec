import React, { useState, useMemo } from 'react';
import { GlobalModal } from './GlobalModal';
import { QRCodeSVG } from 'qrcode.react';
import { Share2, Copy, Check, FileDown, Presentation, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { exportPresentationToPDF, exportPresentationToPPTX, ExportProgress } from '../utils/exportPresentation';

interface SharePresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SharePresentationModal: React.FC<SharePresentationModalProps> = ({
  isOpen,
  onClose
}) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isId = language === 'id';
  const isLight = theme === 'light';

  const [copiedMain, setCopiedMain] = useState(false);
  const [exportProgress, setExportProgress] = useState<ExportProgress>({
    currentSlide: 0,
    totalSlides: 11,
    status: 'idle',
    format: null
  });

  const isExporting = exportProgress.status === 'capturing' || exportProgress.status === 'generating';

  const shareUrl = useMemo(() => {
    const baseUrl = typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}`
      : 'https://harry-itsec.vercel.app';
    const params = new URLSearchParams();
    params.set('theme', theme);
    params.set('lang', language);
    return `${baseUrl}?${params.toString()}`;
  }, [theme, language]);

  const handleCopyMain = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopiedMain(true);
    setTimeout(() => setCopiedMain(false), 2000);
  };

  const handleDownloadPDF = async () => {
    if (isExporting) return;
    try {
      await exportPresentationToPDF(setExportProgress, theme, language);
      setTimeout(() => {
        setExportProgress({ currentSlide: 0, totalSlides: 11, status: 'idle', format: null });
      }, 3500);
    } catch {
      // Handled via setExportProgress error state
    }
  };

  const handleDownloadPPTX = async () => {
    if (isExporting) return;
    try {
      await exportPresentationToPPTX(setExportProgress, theme, language);
      setTimeout(() => {
        setExportProgress({ currentSlide: 0, totalSlides: 11, status: 'idle', format: null });
      }, 3500);
    } catch {
      // Handled via setExportProgress error state
    }
  };

  // Mode gelap -> QR warna putih (#FFFFFF) di atas latar gelap (#0c0d14)
  // Mode terang -> QR warna hitam (#000000) di atas latar terang (#FFFFFF)
  const qrFgColor = isLight ? '#000000' : '#FFFFFF';
  const qrBgColor = isLight ? '#FFFFFF' : '#0c0d14';

  return (
    <GlobalModal
      isOpen={isOpen}
      onClose={isExporting ? () => {} : onClose}
      maxWidthClass="max-w-md"
      icon={<Share2 className="w-4 h-4 text-rose-500" />}
      title={
        <span className="font-extrabold tracking-tight">
          {isId ? 'Bagikan Presentasi Eksekutif' : 'Share Executive Presentation'}
        </span>
      }
      subtitle={
        <span>
          {isId
            ? 'Pindai kode QR, salin tautan, atau unduh deck lengkap (PDF / PPTX).'
            : 'Scan QR code, copy link, or download the full deck (PDF / PPTX).'}
        </span>
      }
      footerContent={
        <div className="flex items-center justify-between text-xs text-neutral-400 font-mono w-full">
          <span>PT ITSEC Asia Tbk (IDX: CYBR)</span>
          <span className="text-rose-400 font-medium">Bronyx 90-Day Strategy</span>
        </div>
      }
    >
      <div className="p-5 sm:p-6 flex flex-col items-center gap-4">
        {/* QR Code Section with Native Excavated Center Logo */}
        <div className="flex flex-col items-center gap-2.5 w-full">
          <div
            className={`p-4 rounded-2xl border transition-all flex items-center justify-center shadow-lg ${
              isLight
                ? 'bg-white border-slate-200 shadow-slate-200/60'
                : 'bg-[#0c0d14] border-neutral-800 shadow-black/60'
            }`}
          >
            <QRCodeSVG
              value={shareUrl}
              size={195}
              bgColor={qrBgColor}
              fgColor={qrFgColor}
              level="H"
              includeMargin={false}
              imageSettings={{
                src: '/logo.ico',
                height: 40,
                width: 40,
                excavate: true
              }}
            />
          </div>

          <p className="text-[11px] text-neutral-400 text-center max-w-xs">
            {isId
              ? 'Arahkan kamera ponsel untuk membuka presentasi interaktif secara instan.'
              : 'Point your smartphone camera to open the interactive presentation instantly.'}
          </p>
        </div>

        {/* Copy Link Bar */}
        <div className="w-full flex items-center gap-2">
          <div
            className={`flex-1 px-3 py-2 rounded-lg border font-mono text-xs truncate select-all ${
              isLight
                ? 'bg-slate-50 border-slate-200 text-slate-800'
                : 'bg-[#08090d] border-neutral-800 text-neutral-200'
            }`}
          >
            {shareUrl}
          </div>
          <button
            type="button"
            onClick={handleCopyMain}
            className={`px-3.5 py-2 rounded-lg font-semibold text-xs flex items-center gap-1.5 shrink-0 transition-all cursor-pointer border ${
              copiedMain
                ? 'bg-emerald-950/80 border-emerald-700 text-emerald-300'
                : 'bg-neutral-800 hover:bg-neutral-700 border-neutral-700 text-white'
            }`}
          >
            {copiedMain ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{isId ? 'Tersalin' : 'Copied'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{isId ? 'Salin Link' : 'Copy Link'}</span>
              </>
            )}
          </button>
        </div>

        {/* Export Deck Buttons (PDF & PPTX) */}
        <div className="w-full pt-2 border-t border-neutral-800/80 flex flex-col gap-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span>{isId ? 'UNDUH SELURUH SLIDE (11 HALAMAN)' : 'DOWNLOAD FULL SLIDE DECK (11 PAGES)'}</span>
            <span className="text-rose-400 font-semibold">{theme.toUpperCase()} • {language.toUpperCase()}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Download PDF Button */}
            <button
              type="button"
              onClick={handleDownloadPDF}
              disabled={isExporting}
              className={`px-3 py-2.5 rounded-lg border font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                exportProgress.format === 'pdf' && isExporting
                  ? 'bg-rose-950/80 border-rose-700 text-rose-300 cursor-wait'
                  : isLight
                    ? 'bg-rose-50 hover:bg-rose-100 border-rose-200 text-rose-700 shadow-xs'
                    : 'bg-rose-950/60 hover:bg-rose-900/60 border-rose-800/80 text-rose-200 shadow-xs'
              } disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {exportProgress.format === 'pdf' && isExporting ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <FileDown className="w-3.5 h-3.5 text-rose-500" />
              )}
              <span>{isId ? 'Unduh PDF' : 'Download PDF'}</span>
            </button>

            {/* Download PPTX Button */}
            <button
              type="button"
              onClick={handleDownloadPPTX}
              disabled={isExporting}
              className={`px-3 py-2.5 rounded-lg border font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                exportProgress.format === 'pptx' && isExporting
                  ? 'bg-indigo-950/80 border-indigo-700 text-indigo-300 cursor-wait'
                  : isLight
                    ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800 shadow-xs'
                    : 'bg-neutral-900 hover:bg-neutral-800 border-neutral-700 text-white shadow-xs'
              } disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {exportProgress.format === 'pptx' && isExporting ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-400" />
              ) : (
                <Presentation className="w-3.5 h-3.5 text-indigo-400" />
              )}
              <span>{isId ? 'Unduh PPTX' : 'Download PPTX'}</span>
            </button>
          </div>

          {/* Real-time Export Status Banner */}
          {exportProgress.status !== 'idle' && (
            <div
              className={`p-2 rounded-lg text-xs font-mono flex items-center justify-between border ${
                exportProgress.status === 'done'
                  ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                  : exportProgress.status === 'error'
                    ? 'bg-rose-950/40 border-rose-800 text-rose-300'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-300'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                {exportProgress.status === 'capturing' && (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-rose-400 shrink-0" />
                )}
                {exportProgress.status === 'generating' && (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-400 shrink-0" />
                )}
                {exportProgress.status === 'done' && (
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                )}
                {exportProgress.status === 'error' && (
                  <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                )}

                <span className="truncate">
                  {exportProgress.status === 'capturing' && (
                    isId
                      ? `Menangkap Slide ${exportProgress.currentSlide} dari ${exportProgress.totalSlides}...`
                      : `Capturing Slide ${exportProgress.currentSlide} of ${exportProgress.totalSlides}...`
                  )}
                  {exportProgress.status === 'generating' && (
                    isId
                      ? `Mengompilasi file ${exportProgress.format?.toUpperCase()}...`
                      : `Compiling ${exportProgress.format?.toUpperCase()} file...`
                  )}
                  {exportProgress.status === 'done' && (
                    isId ? 'File berhasil diunduh!' : 'File downloaded successfully!'
                  )}
                  {exportProgress.status === 'error' && (
                    exportProgress.errorMessage || (isId ? 'Gagal mengunduh file.' : 'Failed to download file.')
                  )}
                </span>
              </div>

              {exportProgress.status === 'capturing' && (
                <span className="font-bold text-rose-400 shrink-0">
                  {Math.round((exportProgress.currentSlide / exportProgress.totalSlides) * 100)}%
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </GlobalModal>
  );
};

