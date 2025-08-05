import { COLORS_LIST } from '@theme/colors';
import { FONTS_ANDROID, FONTS_IOS } from '@theme/fonts';

import { cloneElement } from 'react';

import { toEnglishNumbers, toPersianNumbers } from '@utils/numbers';

import { ColorMakerTypes, ResultMakerTypes, TypographyMakerTypes } from './types';

export const colorMaker = (color: ColorMakerTypes) => {
  let selectedColor = '';

  if (color) {
    if (typeof color === 'object') {
      selectedColor = color.freeColor;
    } else {
      selectedColor = COLORS_LIST[color];
    }
  } else {
    selectedColor = COLORS_LIST.Black;
  }

  return selectedColor;
};

export const typographyMaker = ({ fontSize, operatingSystem, isWeb }: TypographyMakerTypes) => {
  const typographySystem = operatingSystem === 'ios' ? FONTS_IOS : FONTS_ANDROID;
  let typographyDetails = typographySystem[fontSize || 'Body_Medium'];
  typographyDetails = isWeb
    ? {
        ...typographyDetails,
        fontSize: typographyDetails.fontSize * 1.12,
      }
    : typographyDetails;

  return typographyDetails;
};

export const resultMaker = ({ children, numbersMode }: ResultMakerTypes) => {
  const isEnglish = numbersMode === 'english';

  if (typeof children === 'string' || typeof children === 'number') {
    return numberHandler(children, isEnglish);
  }

  if (Array.isArray(children)) {
    return children.map((item, index) => {
      if (typeof item === 'string' || typeof item === 'number') {
        return numberHandler(item, isEnglish);
      } else {
        return cloneElement(item, {
          ...item.props,
          key: index,
          children: numberHandler(item.props.children, isEnglish),
        });
      }
    });
  }

  return children;
};

const numberHandler = (children: string | number, isEnglish: boolean) => {
  const result = isEnglish ? toEnglishNumbers(children || '') : toPersianNumbers(children || '');
  return `${' '}${result}${' '}`;
};
