import { useState } from 'react';

import { baseUrl } from '@services/http';

import { BlobInfoTypes } from './types';

const useFileDownload = () => {
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [blobInfo, setBlobInfo] = useState<BlobInfoTypes>(null);

  const linkMaker = (blob: Blob, fileName: string) => {
    const el = document.createElement('a');
    el.href = URL.createObjectURL(blob);
    el.download = fileName;
    el.click();
    el.remove();
  };

  const downloadHandler = async (fileName: string) => {
    if (!downloadLoading) {
      if (blobInfo) {
        linkMaker(blobInfo.blob, blobInfo.fileName);
      } else {
        setDownloadLoading(true);

        try {
          const request = await fetch(`${baseUrl}/file/${fileName}`);
          const fileBlob = await request.blob();
          linkMaker(fileBlob, fileName);

          setBlobInfo({ blob: fileBlob, fileName });
        } catch (_) {
          setDownloadLoading(false);
        }

        setDownloadLoading(false);
      }
    }
  };

  const isDownloaded = blobInfo === null ? false : true;

  return { downloadHandler, downloadLoading, isDownloaded };
};

export default useFileDownload;
