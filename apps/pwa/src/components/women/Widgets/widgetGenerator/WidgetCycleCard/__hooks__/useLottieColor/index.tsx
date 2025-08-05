import { useEffect } from 'react';

import { UseLottieColorProps } from './types';

const useLottieColor = ({ ref, color }: UseLottieColorProps) => {
  useEffect(() => {
    const el = ref.current;

    if (el) {
      const pathElements = el.getElementsByTagName('path');

      if (pathElements[0]) {
        pathElements[0].style.fill = color;
      }

      if (pathElements[1]) {
        pathElements[1].style.fill = color;
      }
    }
  }, [color, ref.current]);
};

export default useLottieColor;
