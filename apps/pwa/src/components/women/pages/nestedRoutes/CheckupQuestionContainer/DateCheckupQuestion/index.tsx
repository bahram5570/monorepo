import DateFromIcon from '@assets/icons/dateFrom.svg';
import DateToIcon from '@assets/icons/dateTo.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useDatesScript from './__hooks__/useDatesScript';
import { DateCheckupQestionPropsType } from './type';

const DateCheckupQuestion = ({ from, to }: DateCheckupQestionPropsType) => {
  const { colors } = useTheme();
  const { fromScript, toScript } = useDatesScript({ from, to });

  return (
    <div style={{ background: colors.White }} className="rounded-xl flex flex-row">
      <div className="px-3 py-1  w-full">
        <div className="flex flex-col   divide-y-[1px]">
          <div className="flex flex-row-reverse justify-between w-full p-3">
            <div className="flex items-center gap-1">
              <Typography scale="Lable" size="Large">
                تاریخ انجام
              </Typography>

              <DateFromIcon className="w-6 h-6" style={{ stroke: colors.Surface_OnSurfaceVariant }} />
            </div>

            <Typography scale="Body" size="Large">
              {fromScript}
            </Typography>
          </div>

          <div className="flex flex-row-reverse justify-between w-full p-3">
            <div className="flex items-center gap-1">
              <Typography scale="Lable" size="Large">
                تاریخ انقضا
              </Typography>

              <DateToIcon className="w-6 h-6" style={{ stroke: colors.Surface_OnSurfaceVariant }} />
            </div>

            <Typography scale="Body" size="Large">
              {toScript}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateCheckupQuestion;
