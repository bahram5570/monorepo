import { COLORS_LIST } from '@theme/colors';
import { FONTS_ANDROID } from '@theme/fonts';

import { CustomTypographyTypes } from '../CustomTypography/types';

type ColorTypes = keyof typeof COLORS_LIST;
type FillType = {
  varient: 'fill';
  textColor?: ColorTypes;
  backgroundColor?: ColorTypes;
};
type OutlineType = {
  varient: 'outline';
  textColor?: ColorTypes;
  borderColor?: ColorTypes;
};
type TextType = {
  varient: 'text';
  textColor?: ColorTypes;
};
type FreeType = {
  varient: 'FREE_COLORS';
  textColor: string;
  borderColor: string;
  backgroundColor: string;
};
type VarientTypes = FillType | OutlineType | TextType | FreeType;

type FontSizeType = Pick<CustomTypographyTypes, 'fontSize'>;

export type CustomButtonTypes = VarientTypes &
  FontSizeType & {
    id?: string;
    className?: string;
    isDisable?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
    style?: React.CSSProperties;
    fontSize?: keyof typeof FONTS_ANDROID;
    children: string | number | React.ReactElement;
  };
