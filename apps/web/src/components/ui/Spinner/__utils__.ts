import { COLORS_LIST } from '@theme/colors';

import { SpinnerTypes } from './types';

export const sizesMaker = (size: Pick<SpinnerTypes, 'size'>['size']) => {
  const selectedSize = size || 24;
  return { width: selectedSize, minWidth: selectedSize, height: selectedSize, minHeight: selectedSize };
};

export const colorMaker = (color: Pick<SpinnerTypes, 'color'>['color']) => {
  const colors = { borderColor: '' };

  if (typeof color === 'object') {
    colors.borderColor = color.freeColor;
  } else {
    colors.borderColor = COLORS_LIST[color || 'Primary_Primary'];
  }

  return colors;
};
