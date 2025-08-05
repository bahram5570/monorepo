import { useEffect, useRef, useState } from 'react';

import { toJpeg } from 'html-to-image';

import { jsPDF } from 'jspdf';

import { DownloadStatusTypes } from './types';

const usePdfDownload = () => {
  const timer = useRef<NodeJS.Timeout>();
  const ref = useRef<HTMLDivElement>(null);
  const [downloadStatus, setDownloadStatus] = useState<DownloadStatusTypes>(null);

  const downloadStatusHandler = (v: DownloadStatusTypes) => {
    setDownloadStatus(v);
  };

  useEffect(() => {
    if (downloadStatus === 'preparing') {
      timer.current = setTimeout(() => {
        setDownloadStatus('downloading');
      }, 3000);
    }

    return () => clearTimeout(timer.current);
  }, [timer.current, downloadStatus]);

  useEffect(() => {
    const element = ref.current;

    if (downloadStatus === 'downloading' && element !== null) {
      const handleExportPDF = async () => {
        if (!element) {
          return;
        }

        try {
          const image = await toJpeg(element, { quality: 1 });
          const img = new Image();
          img.src = image;

          img.onload = () => {
            const pdf = new jsPDF();
            const pixelToMilimeter = (px: number) => (px * 25.4) / 96;

            const pdfWidth = pixelToMilimeter(img.width);
            const pdfHeight = pixelToMilimeter(img.height);
            pdf.internal.pageSize.width = pdfWidth;
            pdf.internal.pageSize.height = pdfHeight;

            pdf.addImage(image, 'JPEG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('report.pdf');
          };
        } catch (error) {
          setDownloadStatus(null);
        } finally {
          setDownloadStatus(null);
        }
      };

      handleExportPDF();
    }
  }, [ref.current, downloadStatus]);

  return { downloadStatus, ref, downloadStatusHandler };
};

export default usePdfDownload;
