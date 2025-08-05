import { COLORS_LIST } from '@theme/colors';
import { FONTS_ANDROID } from '@theme/fonts';

type NumberMode = 'persian' | 'english';

export interface CustomInputTypes {
  value: string;
  className?: string;
  placeholder?: string;
  hasOutline?: boolean;
  numbersMode?: NumberMode;
  style?: React.CSSProperties;
  onValue: (value: string) => void;
  fontSize?: keyof typeof FONTS_ANDROID;
  color?: keyof typeof COLORS_LIST | { freeColor: string };
  maxLength?: number;
}

export type CustomInputResultMakerTypes = (input: string | number, numberMode?: NumberMode) => string;
