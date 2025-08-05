import { COLORS_LIGHT } from '@theme/colors';
import { FONTS_ANDROID } from '@theme/fonts';

type SizeTypes<N, K extends keyof N> = N[K];
type TyographyTypes = typeof FONTS_ANDROID;
type ScaleNames<N extends keyof TyographyTypes> = N;

type HeadlineTypes = {
  scale: ScaleNames<'Headline'>;
  size: keyof SizeTypes<TyographyTypes, ScaleNames<'Headline'>>;
};

type TitleTypes = {
  scale: ScaleNames<'Title'>;
  size: keyof SizeTypes<TyographyTypes, ScaleNames<'Title'>>;
};

type BodyTypes = {
  scale: ScaleNames<'Body'>;
  size: keyof SizeTypes<TyographyTypes, ScaleNames<'Body'>>;
};

type LableTypes = {
  scale: ScaleNames<'Lable'>;
  size: keyof SizeTypes<TyographyTypes, ScaleNames<'Lable'>>;
};

type ScaleTypes = HeadlineTypes | TitleTypes | BodyTypes | LableTypes;

type SystemColorTypes = {
  color?: keyof typeof COLORS_LIGHT;
};

type FreeStyleTypes = {
  color?: 'FREE-STYLE';
  freeColor: string;
};

type TypographyColorTypes = SystemColorTypes | FreeStyleTypes;

export type TypographyProps = ScaleTypes &
  TypographyColorTypes & {
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    style?: React.CSSProperties;
    toEnglishNumber?: boolean;
    className?: string;
    children?: string;
  };

export type SelectedTypographyTypes = TyographyTypes['Body']['Medium'] | {};
