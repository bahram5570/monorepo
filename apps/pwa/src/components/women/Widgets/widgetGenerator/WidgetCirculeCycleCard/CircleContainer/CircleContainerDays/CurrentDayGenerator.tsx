import { circleItemRotateMaker } from '../__utils__';
import { toPersianNumbers } from '@utils/numbers';

import useTheme from '@hooks/useTheme';

import { CurrentDayGeneratorProps } from './types';

const CurrentDayGenerator = ({ color, currentDay, cycleLength }: CurrentDayGeneratorProps) => {
  const { typography, colors } = useTheme();

  const updatedCurrentDay = currentDay > cycleLength ? cycleLength : currentDay;

  const rotate = circleItemRotateMaker(updatedCurrentDay, cycleLength);

  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center -translate-y-[calc(50%_-_8px)]"
      style={{ rotate: `${rotate}deg` }}
    >
      <div
        className="w-8 h-8 rounded-full flex flex-col items-center justify-center"
        style={{ ...typography.Body.Small, color: colors.White, rotate: `${-rotate}deg`, backgroundColor: color }}
      >
        <div className="h-4 scale-75">امروز</div>

        <div className="h-4">{toPersianNumbers(currentDay)}</div>
      </div>
    </div>
  );
};

export default CurrentDayGenerator;
