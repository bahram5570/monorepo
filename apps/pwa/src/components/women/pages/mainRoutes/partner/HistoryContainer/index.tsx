'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import HistoryContainerSkeleton from './HistoryContainerSkeleton';
import HistoryItemList from './HistoryItemList';
import NotData from './NotData';
import useGetData from './__hooks__/useGetData';

const HisttoryContainer = () => {
  const { isLoading, challengeData, lastExperienceRef } = useGetData();

  const hasData = challengeData && challengeData.items.length > 0;

  return (
    <>
      {isLoading && <HistoryContainerSkeleton />}
      {!isLoading && (
        <WomenPageLayout
          rightElement="BackButton"
          rightElementScript="تاریخچه سوالاتمون"
          paddingTop={!hasData ? 0 : HEADER_HEIGHT + 16}
        >
          {!hasData ? (
            <NotData />
          ) : (
            <HistoryItemList lastExperienceRef={lastExperienceRef} challengeData={challengeData} />
          )}
        </WomenPageLayout>
      )}
    </>
  );
};

export default HisttoryContainer;
