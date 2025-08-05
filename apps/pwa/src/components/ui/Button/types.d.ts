import { ButtonColorsSystemTypes, ColorsTypes, VariantTypes } from '@components/ui/__utils__/types';

type SizeTypes = 'small' | 'medium' | 'large';

export type ButtonProps = ButtonColorsSystemTypes & {
  navigationLoadingId?: string | number;
  style?: React.CSSProperties;
  children: React.ReactNode;
  variant: VariantTypes;
  onClick: () => void;
  isDisable?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
  hasArrow?: boolean;
  testId?: string;
  size: SizeTypes;
};

export interface UseButtonSizeProps {
  size: SizeTypes;
}
