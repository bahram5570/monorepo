import { KitTestsContainerProps } from '../types';

export interface KitTestOvulationProps extends Pick<KitTestsContainerProps, 'gregorianDate' | 'moduleType'> {
  onComplete?: () => void;
}
