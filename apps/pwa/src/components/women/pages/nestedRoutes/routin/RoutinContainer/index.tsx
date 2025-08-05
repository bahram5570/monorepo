'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import RoutinDiets from './RoutinDiets';
import RoutinHeading from './RoutinHeading';
import RoutinSkeleton from './RoutinSkeleton';
import RoutinWriter from './RoutinWriter';
import useGetData from './__hooks__/useGetData';

const RoutinContainer = () => {
  const { colors } = useTheme();
  const { isLoading, data } = useGetData();

  return (
    <WomenPageLayout rightElement="BackButton" paddingTop={0} headerBackgroundColor="">
      <div className="relative w-full min-h-[100dvh] px-4 pb-6 z-0" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
        <div className="w-full h-[360px] absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FEE8E6] to-[#FEE8E600] -z-10" />

        {isLoading && <RoutinSkeleton />}

        {!isLoading && data && (
          <div className="relative z-10">
            <RoutinHeading image={data.image} description={data.description} title={data.title} />

            <div className="w-full rounded-xl p-3" style={{ backgroundColor: colors.White }}>
              <RoutinWriter
                writerName={data.writerName}
                writerIcon={data.writerIcon}
                writerSpeciality={data.writerSpeciality}
              />

              <div className="w-full h-[1px] my-3" style={{ backgroundColor: colors.Surface_SurfaceVariant }} />

              <RoutinDiets name={data.name} items={data.items} />
            </div>
          </div>
        )}
      </div>
    </WomenPageLayout>
  );
};

export default RoutinContainer;
