'use client';

import { COLORS_LIST } from '@theme/colors';

import CustomTypography from '@components/ui/CustomTypography';

import WavesContainer from '../WavesContainer';
import DateModule from './DateModule';
import ResultModule from './ResultModule';
import useCalculatePeriod from './__hooks__/useCalculatePeriod';

const PeriodCalculator = () => {
  const { submitHandler, isLoading, resetHandler, result } = useCalculatePeriod();

  return (
    <>
      <WavesContainer height={500} waveColor={COLORS_LIST.Pink_500} backgroundColor="#FCE7F4" title="محاسبه دوره پریود">
        <div className="w-full sm:max-w-[460px] h-full flex flex-col items-center">
          <CustomTypography fontSize="Body_Large" className="text-center">
            تاریخ آخرین پریودت رو بهمون بگو تا پریود بعدیت رو بهت بگیم!
          </CustomTypography>

          {result ? (
            <ResultModule result={result} onReset={resetHandler} />
          ) : (
            <DateModule submitHandler={submitHandler} isLoading={isLoading} />
          )}
        </div>
      </WavesContainer>
    </>
  );
};

export default PeriodCalculator;
