import { useEffect, useRef } from 'react';

const useWavesColor = (color: string) => {
  const ref = useRef<HTMLDivElement>(null);

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

  return { ref };
};

export default useWavesColor;
