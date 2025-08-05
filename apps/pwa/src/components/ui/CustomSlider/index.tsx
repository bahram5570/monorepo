import styles from './scroll.module.css';

import useOperatingSystem from '@hooks/useOperatingSystem';

import { SliderProps } from './types';

const CustomSlider = ({ children, gap = 16, sidePadding = 0, className, id }: SliderProps) => {
  const { operatingSystem } = useOperatingSystem();

  const isWindows = operatingSystem === 'windows';

  return (
    <div
      className={`max-w-full overflow-x-auto overflow-y-hidden flex flex-row-reverse ${styles.scrollbar} ${!isWindows && styles.hide} ${className}`}
      style={{ gap, paddingLeft: sidePadding, paddingRight: sidePadding }}
      id={id}
    >
      {children}
    </div>
  );
};

export default CustomSlider;
