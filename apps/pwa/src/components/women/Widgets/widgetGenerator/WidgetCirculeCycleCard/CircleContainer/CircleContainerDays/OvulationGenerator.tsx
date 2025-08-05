import { circleItemRotateMaker } from '../__utils__';
import { toPersianNumbers } from '@utils/numbers';

import useTheme from '@hooks/useTheme';

import { CIRCLE_EXTRA_SIZE } from '../constants';
import { OvulationGeneratorProps } from './types';

const OvulationGenerator = ({ color, currentDay, ovulationDay, cycleLength }: OvulationGeneratorProps) => {
  const rotate = circleItemRotateMaker(ovulationDay, cycleLength);

  const { colors, typography } = useTheme();

  if (currentDay === ovulationDay) {
    return <></>;
  }

  return (
    <>
      <div
        className="absolute top-3 left-3 right-3 bottom-3 flex items-center justify-center -translate-y-[calc(50%_+_5px)]"
        style={{ rotate: `${rotate}deg` }}
      >
        <div
          className="w-5 h-5 rounded-full border-[5px]"
          style={{ backgroundColor: colors.White, borderColor: color }}
        />
      </div>

      <div
        className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center -translate-y-[calc(50%_+_12px)]"
        style={{ rotate: `${rotate}deg` }}
      >
        <div style={{ ...typography.Body.Large, color, rotate: `${-rotate}deg` }}>{toPersianNumbers(ovulationDay)}</div>
      </div>
    </>
  );
};

export default OvulationGenerator;
