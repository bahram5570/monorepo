import { COLORS_LIST } from '@theme/colors';

export interface SpinnerTypes {
  size?: string | number;
  color?: keyof typeof COLORS_LIST | { freeColor: string };
}
