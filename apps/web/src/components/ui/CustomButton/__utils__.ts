import { COLORS_LIST } from '@theme/colors';

import { CustomButtonTypes } from './types';

export const buttonColorsMaker = (props: CustomButtonTypes) => {
  let buttonColors = { backgroundColor: '', borderColor: '', color: '' };

  switch (props.varient) {
    case 'fill':
      buttonColors = {
        backgroundColor: COLORS_LIST[props.backgroundColor || 'Primary_Primary'],
        borderColor: COLORS_LIST[props.backgroundColor || 'Primary_Primary'],
        color: COLORS_LIST[props.textColor || 'Primary_OnPrimary'],
      };
      break;
    case 'outline':
      buttonColors = {
        backgroundColor: COLORS_LIST.Transparent,
        borderColor: COLORS_LIST[props.borderColor || 'Primary_Primary'],
        color: COLORS_LIST[props.textColor || 'Primary_Primary'],
      };
      break;
    case 'text':
      buttonColors = {
        backgroundColor: COLORS_LIST.Transparent,
        borderColor: COLORS_LIST.Transparent,
        color: COLORS_LIST[props.textColor || 'Primary_Primary'],
      };
      break;
    case 'FREE_COLORS':
      buttonColors = {
        backgroundColor: props.backgroundColor,
        borderColor: props.borderColor,
        color: props.textColor,
      };
      break;
  }

  return buttonColors;
};

export const fontSizeMaker = (fontSize: Pick<CustomButtonTypes, 'fontSize'>['fontSize']) => {
  return fontSize || 'Lable_Large';
};
