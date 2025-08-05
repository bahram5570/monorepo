'use client';

import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import BannerSection from './BannerSection';
import PregnancyCheckupContainerSkeleton from './PregnancyCheckupContainerSkeleton';
import PregnancyCheckupTost from './PregnancyCheckupTost';
import SegmentGenerator from './SegmentGenerator';
import useGetData from './__hooks__/useGetData';

const PregnancyCheckupContainer = () => {
  const { colors } = useTheme();
  const { data, isLoading } = useGetData();
  const hasData = data && data.segments.length > 0;

  return (
    <WomenPageLayout
      rightElement="PregnancyCheckupBackButton"
      rightElementScript="آزمایش و مراقبت‌های بارداری"
      paddingTop={0}
    >
      <PregnancyCheckupTost />
      {isLoading && <PregnancyCheckupContainerSkeleton />}
      {!isLoading && hasData && (
        <div
          style={{
            paddingTop: HEADER_HEIGHT,
            background: colors.Surface_SurfaceVariant,
            paddingBottom: HEADER_HEIGHT + 16,
          }}
          className="min-h-[100dvh] relative flex flex-col gap-3"
        >
          <div
            className="flex fixed z-40 flex-row-reverse items-center justify-between px-4 gap-4 pb-3 w-full"
            style={{ maxWidth: MAX_SCREEN_WIDTH, height: '80px', background: colors.White }}
          >
            <div className="flex flex-col gap-1 items-end px-2 py-1">
              <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
                توی هفته‌های مختلف بارداریت، اطلاعات مربوط به مراقبت ها و آزمایشاتی که باید داشته باشی رو برات گذاشتیم
              </Typography>
            </div>
          </div>

          <div
            style={{ background: colors.Surface_SurfaceVariant, paddingTop: HEADER_HEIGHT }}
            className="px-3 flex flex-col gap-2"
          >
            {data.banner && <BannerSection banner={data.banner} />}

            {data.segments.map((segment, index) => {
              return <SegmentGenerator key={index} {...segment} />;
            })}
          </div>
        </div>
      )}
    </WomenPageLayout>
  );
};

export default PregnancyCheckupContainer;
