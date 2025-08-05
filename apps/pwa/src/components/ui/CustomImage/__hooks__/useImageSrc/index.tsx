import { useEffect, useState } from 'react';

import { baseUrl } from '@services/http';

import { UseImageSrcProps } from './types';

const useImageSrc = ({ src, imageApi = '/file', onError }: UseImageSrcProps) => {
  const [updatedSrc, setUpdatedSrc] = useState('');

  const convertHeic = async (imageUrl: string, isHeic: boolean) => {
    if (!isHeic) {
      setUpdatedSrc(imageUrl);
      return;
    }

    try {
      const req = await fetch(imageUrl);
      const blob = await req.blob();

      // # Dynamically import heic2any to load it client-side only, avoiding 'window is not defined' errors.
      const heic2any = (await import('heic2any')).default;
      const convertedBlob = (await heic2any({
        blob,
        toType: 'image/jpeg',
      })) as Blob;
      const result = URL.createObjectURL(convertedBlob);
      setUpdatedSrc(result);
    } catch (error) {
      onError();
    }
  };

  const urlMaker = (fileSrc: string) => {
    if (fileSrc.toLowerCase().includes('http')) {
      return fileSrc;
    }

    if (fileSrc.slice(0, 1) === '/') {
      return fileSrc;
    }

    return `${baseUrl}${imageApi}/${src}`;
  };

  useEffect(() => {
    const convertSrc = async () => {
      if (typeof src === 'string') {
        const result = urlMaker(src.trim());
        const is_heic_file = result.toLowerCase().includes('.heic');
        await convertHeic(result, is_heic_file);
        return;
      }

      const result = urlMaker((src?.image || '').trim());
      const is_heic_file = src?.imageType === 'heic';
      await convertHeic(result, is_heic_file);
    };

    convertSrc();
  }, [src]);

  return { updatedSrc };
};

export default useImageSrc;
