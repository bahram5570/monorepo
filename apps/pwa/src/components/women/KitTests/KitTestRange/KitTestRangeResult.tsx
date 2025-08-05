import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import {
  KIT_TEST_RANGE_HIGH_LIMIT,
  KIT_TEST_RANGE_LOW_LIMIT,
  KIT_TEST_RANGE_RESULT_HEIGHT,
  kitTestScripts,
} from './constants';
import { KitTestRangeResultProps } from './types';

const KitTestRangeResult = ({ moduleType, rangeValue, isValueSelected }: KitTestRangeResultProps) => {
  const { colors } = useTheme();

  let result = '';

  if (isValueSelected) {
    if (rangeValue <= KIT_TEST_RANGE_LOW_LIMIT) {
      result = kitTestScripts[moduleType].resultLow;
    } else if (rangeValue >= KIT_TEST_RANGE_HIGH_LIMIT) {
      result = kitTestScripts[moduleType].resultHigh;
    } else {
      result = kitTestScripts[moduleType].resultAverage;
    }
  }

  return (
    <div
      className="w-full pt-[10px] flex flex-col items-center rounded-lg mb-6"
      style={{ backgroundColor: colors.Neutral_Surface, height: KIT_TEST_RANGE_RESULT_HEIGHT }}
    >
      <Typography scale="Title" size="Small">
        نتیجه تست
      </Typography>

      <Typography scale="Body" size="Medium">
        {result}
      </Typography>
    </div>
  );
};

export default KitTestRangeResult;
