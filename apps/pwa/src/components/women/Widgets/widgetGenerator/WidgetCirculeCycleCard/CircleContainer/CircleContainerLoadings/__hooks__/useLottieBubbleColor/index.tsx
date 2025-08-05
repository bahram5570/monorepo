import { useEffect, useRef } from 'react';

import { colorFormatConverter } from '@utils/scripts';

import useTheme from '@hooks/useTheme';

import { UseLottieBubbleColorProps } from './types';

const useLottieBubbleColor = ({ forgroundColor }: UseLottieBubbleColorProps) => {
  const { colors } = useTheme();
  const bubbleRef = useRef<HTMLDivElement>(null);

  const cycleColor = forgroundColor ? colorFormatConverter(forgroundColor) : colors.Pink_500;

  useEffect(() => {
    const el = bubbleRef.current;

    if (el) {
      const pathElements = el.querySelectorAll('path');

      pathElements.forEach((item) => {
        item.style.fill = cycleColor;
      });
    }
  }, [cycleColor, bubbleRef.current]);

  return { bubbleRef };
};

export default useLottieBubbleColor;
