import { useEffect, useRef } from 'react';

import { colorFormatConverter } from '@utils/scripts';

import useTheme from '@hooks/useTheme';

import { UseLottieWavesColorProps } from './types';

const useLottieWavesColor = ({ forgroundColor }: UseLottieWavesColorProps) => {
  const { colors } = useTheme();
  const wavesRef = useRef<HTMLDivElement>(null);

  const waveColor = colorFormatConverter(forgroundColor || colors.Pink_500);

  useEffect(() => {
    const el = wavesRef.current;

    if (el) {
      const pathElements = el.querySelectorAll('path');

      pathElements.forEach((item) => {
        item.style.fill = waveColor;
      });
    }
  }, [waveColor, wavesRef.current]);

  return { wavesRef };
};

export default useLottieWavesColor;
