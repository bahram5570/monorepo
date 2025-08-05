'use client';

import useCalculatePregnancyDate from '@components/pages/articleId/ArticleIdPageContainer/ArticleLandingComponents/PregnancyAgeCalculator/__hooks__/useCalculatePregnancyDate';
import WavesContainer from '@components/pages/articleId/ArticleIdPageContainer/ArticleLandingComponents/WavesContainer';

import DateModule from './DateModule';
import ResultModule from './ResultModule';

const PregnancyAgeCalculator = () => {
  const { submitHandler, isLoading, weeksResult, pregnancyDateResult, resetHandler } = useCalculatePregnancyDate();
  return (
    <>
      <WavesContainer height={380} waveColor="#FD7670" backgroundColor="transparent" title="">
        <>
          <DateModule submitHandler={submitHandler} isLoading={isLoading} />
        </>
      </WavesContainer>
      {weeksResult && pregnancyDateResult && (
        <ResultModule pregnancyDateResult={pregnancyDateResult} weeksResult={weeksResult} onReset={resetHandler} />
      )}
    </>
  );
};

export default PregnancyAgeCalculator;
