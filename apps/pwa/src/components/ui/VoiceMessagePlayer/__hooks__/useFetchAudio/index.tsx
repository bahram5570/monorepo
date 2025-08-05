import { useEffect, useState } from 'react';

import { baseUrl } from '@services/http';

import { UseFetchAudioPropsType } from './type';

const useFetchAudio = ({ voiceUrl }: UseFetchAudioPropsType) => {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const res = await fetch(`${baseUrl}/file/${voiceUrl}`);
        if (!res.ok) throw new Error('Failed to fetch audio');

        const blob = await res.blob();
        const objectUrl = URL.createObjectURL(blob);
        setAudioSrc(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
      } catch (err) {
        console.error('Error fetching audio:', err);
      }
    };

    fetchAudio();
  }, [voiceUrl]);

  return { audioSrc };
};

export default useFetchAudio;
