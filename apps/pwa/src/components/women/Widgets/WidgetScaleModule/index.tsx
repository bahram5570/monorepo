import { useEffect, useRef, useState } from 'react';

import styles from './WidgetScaleModule.module.css';

import useDelayCallback from '@hooks/useDelayCallback';

import { WidgetScaleModuleProps } from './types';

const WidgetScaleModule = ({ children }: WidgetScaleModuleProps) => {
  const [showElement, setShowElement] = useState(Boolean);
  const ref = useRef<HTMLDivElement>(null);

  const heightFinder = () => {
    const el = ref.current;

    if (el) {
      el.style.setProperty('--maxHight', el.clientHeight + 'px');
      setShowElement(true);
    }
  };

  const { startDelay } = useDelayCallback(heightFinder);

  useEffect(() => {
    startDelay(100);
  }, [ref.current]);

  return (
    <div ref={ref} className={`${styles.main} ${showElement && styles.scalingAnimation}`}>
      {children}
    </div>
  );
};

export default WidgetScaleModule;
