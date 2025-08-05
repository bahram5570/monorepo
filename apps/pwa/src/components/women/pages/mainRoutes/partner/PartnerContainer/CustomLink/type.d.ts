import { COLORS_LIGHT } from '@theme/colors';
import { FONTS_ANDROID } from '@theme/fonts';

type SizeTypes<N, K extends keyof N> = N[K];
type TyographyTypes = typeof FONTS_ANDROID;
type ScaleNames<N extends keyof TyographyTypes> = N;

export type CustomLinkPropType = {
  lable: string;
  backgroundColor?: string;
  color?: string;
  labelColor?: keyof typeof COLORS_LIGHT;
  style?: React.CSSProperties;
  labelSize?: keyof SizeTypes<TyographyTypes, ScaleNames<'Lable'>>;
  link: string;
  id: string;
};
