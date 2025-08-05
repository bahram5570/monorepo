import { useEffect, useState } from 'react';

import { percentFinder } from '../__utils__';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { WidgetPeriodReportCardLinesProps } from './types';

const WidgetPeriodReportCardLines = ({
  rangeExtraSpace,
  numbersWidth,
  rangesHeigth,
  periodLength,
  cycleLength,
  min,
  max,
}: WidgetPeriodReportCardLinesProps) => {
  const { colors } = useTheme();
  const [rangeList, setRangeList] = useState<number[]>([]);

  useEffect(() => {
    const step = 10;
    const list: number[] = [];

    for (let i = min; i < max; i = i + step) {
      list.push(i);
    }

    list.push(max);
    setRangeList(list);
  }, []);

  return (
    <>
      {/* // # Range numbers */}
      <div
        className="relative pointer-events-none"
        style={{ height: rangesHeigth, width: numbersWidth, marginTop: rangeExtraSpace }}
      >
        {rangeList.map((range) => {
          const plus = range === max ? '+' : '';
          const result = `${range.toString()}${plus}`;

          return (
            <Typography
              key={range}
              scale="Body"
              size="Small"
              textAlign="center"
              color="Surface_Outline"
              style={{ bottom: percentFinder({ min, max, value: range }) }}
              className="absolute right-0 w-full translate-y-1/2"
            >
              {result}
            </Typography>
          );
        })}
      </div>

      {/* // # 'cycleLength' dashed line */}
      <div
        className="absolute right-0 flex items-end overflow-hidden pointer-events-none z-10"
        style={{ height: rangesHeigth, left: numbersWidth, top: rangeExtraSpace }}
      >
        <div
          className="w-full h-1 border-t-2 border-dashed scale-x-[3]"
          style={{ borderColor: colors.Pink_200, height: percentFinder({ min, max, value: cycleLength }) }}
        />
      </div>

      {/* // # 'periodLength' dashed line */}
      <div
        className="absolute right-0 flex items-end overflow-hidden pointer-events-none z-10"
        style={{ height: rangesHeigth, left: numbersWidth, top: rangeExtraSpace }}
      >
        <div
          className="w-full h-1 border-t-2 border-dashed scale-x-[3]"
          style={{ borderColor: colors.Pink_400, height: percentFinder({ min, max, value: periodLength }) }}
        />
      </div>

      {/* // # X axis */}
      <div
        style={{ backgroundColor: colors.Neutral_Surface, top: rangesHeigth + rangeExtraSpace, left: numbersWidth }}
        className="absolute right-0 h-[1px] pointer-events-none"
      />

      {/* // # Y axis */}
      <div
        style={{
          backgroundColor: colors.Neutral_Surface,
          height: rangesHeigth + rangeExtraSpace,
          top: `-${rangeExtraSpace - rangeExtraSpace}px`,
          left: numbersWidth,
        }}
        className="absolute w-[1px] pointer-events-none"
      />

      {/* // # X axis script */}
      <div
        className="absolute left-0 flex flex-col items-center pt-2 pointer-events-none z-20"
        style={{ backgroundColor: colors.White, top: rangesHeigth + rangeExtraSpace + 1 }}
      >
        <Typography size="Small" scale="Lable" color="Neutral_OnSurface">
          تاریخ
        </Typography>

        <Typography size="Small" scale="Lable" color="Neutral_OnSurface">
          شروع دوره
        </Typography>
      </div>
    </>
  );
};

export default WidgetPeriodReportCardLines;
