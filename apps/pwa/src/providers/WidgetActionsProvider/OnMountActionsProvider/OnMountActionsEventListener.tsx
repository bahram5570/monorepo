import { useEffect, useRef } from 'react';

import styles from './styles.module.css';

import { OnMountActionsEventListenerProps } from './types';

const OnMountActionsEventListener = ({ triggeredHandler }: OnMountActionsEventListenerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;

    if (el) {
      el.addEventListener('scroll', triggeredHandler);
      el.addEventListener('mousedown', triggeredHandler);
      el.addEventListener('touchstart', triggeredHandler);

      return () => {
        el.removeEventListener('scroll', triggeredHandler);
        el.removeEventListener('mousedown', triggeredHandler);
        el.removeEventListener('touchstart', triggeredHandler);
      };
    }
  }, []);

  return (
    <div ref={ref} className={`fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll z-[100] ${styles.container}`}>
      <div className="w-full h-[110%]"></div>
    </div>
  );
};

export default OnMountActionsEventListener;
