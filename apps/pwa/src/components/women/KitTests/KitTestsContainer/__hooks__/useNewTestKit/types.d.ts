import { KitTestsContainerProps } from '../../types';

export interface UseNewTestKitProps extends Pick<KitTestsContainerProps, 'moduleType' | 'gregorianDate'> {
  onSuccess?: () => void;
}

export type NewTestResponseTypes = { valid: boolean };
