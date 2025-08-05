import useTheme from '@hooks/useTheme';

import { CalendarWidgetEnums } from '../../../__hooks__/useCalendarGetData/CalendarEnums';
import { HasSignDotProps } from './types';

const HasSignDot = ({ day }: HasSignDotProps) => {
  const { colors } = useTheme();

  const hasSign = (day.items.find((i) => i.type === CalendarWidgetEnums.Sign)?.data.signs.length || 0) > 0;

  return (
    <>
      {hasSign && (
        <div className="absolute left-0 right-0 bottom-1 flex justify-center pointer-events-none">
          <span
            style={{ backgroundColor: colors.PrimaryWoman_Primary }}
            className="absolute w-[6px] h-[6px] rounded-full"
          />
        </div>
      )}
    </>
  );
};

export default HasSignDot;
