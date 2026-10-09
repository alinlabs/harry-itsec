import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import pptxgen from 'pptxgenjs';
import { SLIDE_INDEX_LIST_BILINGUAL } from '../data/translations';
import { Language } from '../context/LanguageContext';
import { Theme } from '../context/ThemeContext';

export interface ExportProgress {
  currentSlide: number;
  totalSlides: number;
  status: 'idle' | 'capturing' | 'generating' | 'done' | 'error';
  format: 'pdf' | 'pptx' | null;
  errorMessage?: string;
}

/**
 * Capture all 11 presentation slides sequentially and compile into a high-fidelity PDF
 */
export async function exportPresentationToPDF(
  onProgress: (p: ExportProgress) => void,
  theme: Theme,
  language: Language
): Promise<void> {
  const container = document.getElementById('slide-export-hidden-container');
  if (!container) {
    throw new Error('Export container not found');
  }

  const totalSlides = 11;
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [1920, 1080],
    compress: true
  });

  try {
    for (let slideNum = 1; slideNum <= totalSlides; slideNum++) {
      onProgress({
        currentSlide: slideNum,
        totalSlides,
        status: 'capturing',
        format: 'pdf'
      });

      const slideEl = container.querySelector(`[data-export-slide="${slideNum}"]`) as HTMLElement;
      if (!slideEl) continue;

      // Ensure fonts and rendering are fully painted
      await new Promise((resolve) => setTimeout(resolve, 150));

      const canvas = await html2canvas(slideEl, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: theme === 'light' ? '#f8fafc' : '#050608',
        logging: false,
        windowWidth: 1920,
        windowHeight: 1080
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.92);

      if (slideNum > 1) {
        pdf.addPage([1920, 1080], 'landscape');
      }

      pdf.addImage(imgData, 'JPEG', 0, 0, 1920, 1080);
    }

    onProgress({
      currentSlide: totalSlides,
      totalSlides,
      status: 'generating',
      format: 'pdf'
    });

    const dateStr = new Date().toISOString().slice(0, 10);
    const fileName = `Harry_Gultom_ITSEC_Asia_Strategy_${theme.toUpperCase()}_${language.toUpperCase()}_${dateStr}.pdf`;
    pdf.save(fileName);

    onProgress({
      currentSlide: totalSlides,
      totalSlides,
      status: 'done',
      format: 'pdf'
    });
  } catch (err: any) {
    onProgress({
      currentSlide: 0,
      totalSlides,
      status: 'error',
      format: 'pdf',
      errorMessage: err?.message || 'Failed to generate PDF'
    });
    throw err;
  }
}

/**
 * Capture all 11 presentation slides and compile into an editable/presentable PowerPoint (.pptx)
 * Also includes native slides metadata, layout titles, text, and captured visuals.
 */
export async function exportPresentationToPPTX(
  onProgress: (p: ExportProgress) => void,
  theme: Theme,
  language: Language
): Promise<void> {
  const container = document.getElementById('slide-export-hidden-container');
  if (!container) {
    throw new Error('Export container not found');
  }

  const totalSlides = 11;
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  pres.title = 'Harry Gultom - 90-Day Enterprise Commercial Strategy | PT ITSEC Asia Tbk';
  pres.author = 'Harry Gultom';
  pres.company = 'PT ITSEC Asia Tbk (IDX: CYBR)';
  pres.subject = 'Enterprise Cybersecurity Go-To-Market & Revenue Acceleration Blueprint';

  const isLight = theme === 'light';
  const bgColor = isLight ? 'F8FAFC' : '050608';
  const textColor = isLight ? '0F172A' : 'FFFFFF';
  const accentColor = 'E11D48'; // ITSEC Rose Accent

  try {
    for (let slideNum = 1; slideNum <= totalSlides; slideNum++) {
      onProgress({
        currentSlide: slideNum,
        totalSlides,
        status: 'capturing',
        format: 'pptx'
      });

      const slideEl = container.querySelector(`[data-export-slide="${slideNum}"]`) as HTMLElement;
      if (!slideEl) continue;

      // Allow paint
      await new Promise((resolve) => setTimeout(resolve, 150));

      const canvas = await html2canvas(slideEl, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: isLight ? '#f8fafc' : '#050608',
        logging: false,
        windowWidth: 1920,
        windowHeight: 1080
      });

      const imgData = canvas.toDataURL('image/png');
      const pptxSlide = pres.addSlide();
      pptxSlide.background = { color: bgColor };

      // Set captured slide as high-fidelity background image (16:9 full fit)
      pptxSlide.addImage({
        data: imgData,
        x: 0,
        y: 0,
        w: 10,
        h: 5.625
      });

      // Also attach structured presenter notes & chapter meta to make it like Google Slides / PowerPoint
      const meta = SLIDE_INDEX_LIST_BILINGUAL.find((s) => s.id === slideNum);
      if (meta) {
        const chapter = meta.chapter[language];
        const title = meta.title[language];
        const subtitle = meta.subtitle[language];
        const question = meta.keyQuestion[language];

        pptxSlide.addNotes(
          `SLIDE ${slideNum}: ${chapter.toUpperCase()}\n` +
          `Title: ${title}\n` +
          `Objective: ${subtitle}\n` +
          `Key Strategic Question: ${question}\n\n` +
          `Presented by Harry Gultom | PT ITSEC Asia Tbk (IDX: CYBR) × Bronyx AI`
        );
      }
    }

    onProgress({
      currentSlide: totalSlides,
      totalSlides,
      status: 'generating',
      format: 'pptx'
    });

    const dateStr = new Date().toISOString().slice(0, 10);
    const fileName = `Harry_Gultom_ITSEC_Asia_Strategy_${theme.toUpperCase()}_${language.toUpperCase()}_${dateStr}.pptx`;
    await pres.writeFile({ fileName });

    onProgress({
      currentSlide: totalSlides,
      totalSlides,
      status: 'done',
      format: 'pptx'
    });
  } catch (err: any) {
    onProgress({
      currentSlide: 0,
      totalSlides,
      status: 'error',
      format: 'pptx',
      errorMessage: err?.message || 'Failed to generate PPTX'
    });
    throw err;
  }
}
