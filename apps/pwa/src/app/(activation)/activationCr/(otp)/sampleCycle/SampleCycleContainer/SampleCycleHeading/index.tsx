import { currentDate, jalaaliMonthNames } from '@utils/dates';

import Typography from '@components/ui/Typography';

import useSampleCycleHeadingInfo from './__hooks__/useSampleCycleHeadingInfo';
import { SAMPLE_CYCLE_HEADING_HEIGHT } from './constants';
import { SampleCycleHeadingProps } from './types';

const { jDay, jYear, jMonth } = currentDate();

const SampleCycleHeading = ({ textColor, payload }: SampleCycleHeadingProps) => {
  const { headingInfo } = useSampleCycleHeadingInfo({ payload });

  const todayScript = `${jDay} ${jalaaliMonthNames(jMonth - 1)} ${jYear}`;

  return (
    <>
      <div
        className="absolute top-0 left-0 right-0 h-fit flex flex-col items-center justify-end gap-1 p-3 z-10"
        style={{ minHeight: SAMPLE_CYCLE_HEADING_HEIGHT, backgroundColor: headingInfo.backgroundColor }}
      >
        <Typography scale="Body" size="Large" textAlign="center" color="White">
          طبق اطلاعاتی که وارد کردی، ایمپو برات این پیش بینی رو کرده
        </Typography>

        <Typography scale="Body" size="Small" textAlign="center" color="FREE-STYLE" freeColor={headingInfo.textColor}>
          {headingInfo.text}
        </Typography>
      </div>

      <div className="h-3" />

      <div className="absolute left-0 right-0 flex justify-center" style={{ top: SAMPLE_CYCLE_HEADING_HEIGHT + 30 }}>
        <Typography scale="Lable" size="Medium" color="FREE-STYLE" freeColor={textColor}>
          {`پیش‌بینی برای امروز ${todayScript} :`}
        </Typography>
      </div>
    </>
  );
};

export default SampleCycleHeading;
