import { COLORS_LIST } from '@theme/colors';
import { FONTS_ANDROID } from '@theme/fonts';

import { memo } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import { WheelPickerCellGeneratorProps } from './types';

const WheelPickerCellGenerator = ({
  isBeforeOrAfterSelectedItem,
  isSelectedItem,
  title,
}: WheelPickerCellGeneratorProps) => {
  const colorFinder = () => {
    if (isSelectedItem) {
      return COLORS_LIST.Neutral_OnBackground;
    }

    if (isBeforeOrAfterSelectedItem) {
      return COLORS_LIST.Surface_Outline;
    }

    return COLORS_LIST.Transparent;
  };

  const scale = isSelectedItem ? '1' : '0.6';

  return (
    <p
      className="duration-200 pointer-events-none"
      style={{ ...FONTS_ANDROID.Title_Medium, scale, color: colorFinder() }}
    >
      {toPersianNumbers(title)}
    </p>
  );
};

export default memo(WheelPickerCellGenerator, (prevProps, nextProps) => {
  return (
    prevProps.isSelectedItem === nextProps.isSelectedItem &&
    prevProps.isBeforeOrAfterSelectedItem === nextProps.isBeforeOrAfterSelectedItem
  );
});
