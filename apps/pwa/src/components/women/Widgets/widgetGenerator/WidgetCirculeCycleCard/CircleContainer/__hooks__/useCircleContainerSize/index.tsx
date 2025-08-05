import { useEffect, useRef, useState } from 'react';

const useCircleContainerSize = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState(0);

  useEffect(() => {
    const el = containerRef.current;

    if (el) {
      const width = el.clientWidth;
      setContainerSize(width);
    }
  }, [containerRef.current]);

  return { containerRef, containerSize };
};

export default useCircleContainerSize;
