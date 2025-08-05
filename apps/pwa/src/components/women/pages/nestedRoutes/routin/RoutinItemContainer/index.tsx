'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';

import RoutinItemHeading from './RoutinItemHeading';
import RoutinItemSkeleton from './RoutinItemSkeleton';
import useGetData from './__hooks__/useGetData';

const RoutinItemContainer = () => {
  const { isLoading, data } = useGetData();

  return (
    <WomenPageLayout rightElement="BackButton" paddingTop={0} headerBackgroundColor="">
      <div className="relative w-full min-h-[100dvh] px-4 pb-6" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
        <div className="w-full h-[360px] absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FEE8E6] to-[#FEE8E600] -z-10" />

        {isLoading && <RoutinItemSkeleton />}

        {!isLoading && data && (
          <>
            <RoutinItemHeading title={data.title} description={data.description} icon={data.icon} />

            <div dangerouslySetInnerHTML={{ __html: JSON.parse(data.data) }} />
          </>
        )}
      </div>
    </WomenPageLayout>
  );
};

export default RoutinItemContainer;
