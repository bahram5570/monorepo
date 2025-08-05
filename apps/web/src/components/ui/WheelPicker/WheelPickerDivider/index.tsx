import { COLORS_LIST } from '@theme/colors';

import { WHEEL_PICKER_CELL_HEIGHT } from '../constants';
import { WheelPickerDividerProps } from './types';

const WheelPickerDivider = ({ isTop }: WheelPickerDividerProps) => {
  const position = isTop ? { top: WHEEL_PICKER_CELL_HEIGHT * 2 } : { bottom: WHEEL_PICKER_CELL_HEIGHT * 2 };
  const lineColor = COLORS_LIST.Neutral_OnBackground;

  return (
    <span
      className="absolute left-0 right-0 h-[1px] opacity-15  pointer-events-none"
      style={{ background: lineColor, ...position }}
    />
  );
};

export default WheelPickerDivider;
