import { ButtonColorsSystemTypes, ColorsTypes, VariantTypes } from '@components/ui/__utils__/types';

export type BackButtonProps = ButtonColorsSystemTypes & {
  testId?: string;
  className?: string;
  isDisable?: boolean;
  isLoading?: boolean;
  variant: VariantTypes;
  style?: React.CSSProperties;
};
