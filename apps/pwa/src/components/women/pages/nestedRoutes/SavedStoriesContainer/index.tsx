'use client';

import Typography from '@components/ui/Typography';
import StoryItemGenerator from '@components/women/Widgets/widgetGenerator/WidgetStoryCard/StoryItemGenerator';
import StoryPreview from '@components/women/Widgets/widgetGenerator/WidgetStoryCard/StoryPreview';
import WomenPageLayout from '@components/women/WomenPageLayout';
import useTheme from '@hooks/useTheme';

import SavedStoriesSkeleton from './SavedStoriesSkeleton';
import useGetData from './__hooks__/useGetData';

const SavedStoriesContainer = () => {
  const { colors } = useTheme();
  const { isLoading, data, saveHandler } = useGetData();

  const hasData = !isLoading && typeof data !== 'undefined';

  return (
    <WomenPageLayout
      className="px-4"
      rightElement="BackButton"
      rightElementScript="استوری‌های ذخیره شده"
      backgroundColor={colors.Surface_SurfaceVariant}
    >
      <div className="w-full p-4 rounded-xl" style={{ backgroundColor: colors.White }}>
        <Typography scale="Body" size="Medium">
          اینجا میتونی توصیه های تخصصی که ذخیره کردی رو به صورت کلی داشته باشی
        </Typography>

        <div className="w-full h-[1px] mt-2 mb-4" style={{ backgroundColor: colors.Neutral_Surface }} />

        <div className="w-full grid grid-cols-3 gap-x-1 gap-y-6" dir="rtl">
          {isLoading && <SavedStoriesSkeleton />}

          {hasData && (
            <>
              {data.items.map((item, index) => (
                <StoryItemGenerator
                  coverImage={item.coverImage}
                  isViewed={item.isViewed}
                  text={item.text}
                  id={item.id}
                  key={index}
                />
              ))}

              <StoryPreview list={data.items} saveHandler={saveHandler} />
            </>
          )}
        </div>
      </div>
    </WomenPageLayout>
  );
};

export default SavedStoriesContainer;
