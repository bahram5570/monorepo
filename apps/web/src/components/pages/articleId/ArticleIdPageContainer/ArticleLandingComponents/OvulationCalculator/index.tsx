'use client';

import CustomTypography from '@components/ui/CustomTypography';

import WavesContainer from '../WavesContainer';
import DateModule from './DateModule';
import ResultModule from './ResultModule';
import useCalculateOvulation from './__hooks__/useCalculateOvulation';

const OvulationCalculator = () => {
  const { submitHandler, isLoading, resetHandler, result } = useCalculateOvulation();

  return (
    <>
      <WavesContainer height={500} waveColor="#2DD4BF" backgroundColor="#D8F6F4" title="محاسبه روز تخمک گذاری">
        <div className="w-full sm:max-w-[460px] h-full flex flex-col items-center">
          <CustomTypography fontSize="Body_Large" className="text-center">
            تاریخ آخرین پریودت رو بهمون بگو تا بهت روز تخمک‌گذاریت رو بگیم!
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

export default OvulationCalculator;
