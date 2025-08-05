'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import HasDataMemory from './HasDataMemory';
import MemoryContainerSkeleton from './MemoryContainerSkeleton';
import NotData from './NotData';
import useGetData from './__hooks__/useGetData';

const MemoryContainer = () => {
  const { isLoading, lastExperienceRef, memoriesData } = useGetData();

  const hasData = memoriesData && memoriesData.memories.length > 0;

  return (
    <>
      {isLoading && <MemoryContainerSkeleton />}
      {!isLoading && (
        <WomenPageLayout
          rightElement="BackButton"
          rightElementScript="خاطره بازی"
          paddingTop={!hasData ? 0 : HEADER_HEIGHT + 16}
        >
          {!hasData ? (
            <NotData />
          ) : (
            <HasDataMemory memories={memoriesData?.memories} isFetchingNextPage={lastExperienceRef} />
          )}
        </WomenPageLayout>
      )}
    </>
  );
};

export default MemoryContainer;
