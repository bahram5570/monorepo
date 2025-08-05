'use client';

import WavesContainer from '../WavesContainer';
import DateModule from './DateModule';
import ResultModule from './ResultModule';
import useCalculatePregnancyDate from './__hooks__/useCalculatePregnancyDate';

const PregnancyAgeCalculator = () => {
  const { submitHandler, isLoading, weeksResult, pregnancyDateResult, resetHandler } = useCalculatePregnancyDate();

  return (
    <>
      <WavesContainer height={380} waveColor="#FD7670" backgroundColor="#FFEAE4" title="محاسبه سن بارداری">
        <>
          {weeksResult && pregnancyDateResult ? (
            <ResultModule pregnancyDateResult={pregnancyDateResult} weeksResult={weeksResult} onReset={resetHandler} />
          ) : (
            <DateModule submitHandler={submitHandler} isLoading={isLoading} />
          )}
        </>
      </WavesContainer>
    </>
  );
};

export default PregnancyAgeCalculator;
