'use client';

import WidgetHintCardGenerator from '@components/women/Widgets/widgetGenerator/WidgetHintCard/WidgetHintCardGenerator';
import WomenPageLayout from '@components/women/WomenPageLayout';
import useTheme from '@hooks/useTheme';

import SavedHintsContainerSkeleton from './SavedHintsContainerSkeleton';
import useGetData from './__hooks__/useGetData';

const SavedHintsContainer = () => {
  const { colors } = useTheme();
  const { isLoading, data } = useGetData();

  const hasData = !isLoading && typeof data !== 'undefined';

  return (
    <WomenPageLayout
      className="px-4"
      rightElement="BackButton"
      rightElementScript="توصیه‌های ذخیره شده"
      backgroundColor={colors.Surface_SurfaceVariant}
    >
      {isLoading && <SavedHintsContainerSkeleton />}

      {hasData && (
        <div className="w-full flex flex-col gap-4">
          {data.items.map((item, index) => (
            <div className="w-full rounded-2xl p-4" style={{ backgroundColor: colors.White }} key={index}>
              <WidgetHintCardGenerator {...item} isLastChild={true} minReadingDuration={1000} />
            </div>
          ))}
        </div>
      )}
    </WomenPageLayout>
  );
};

export default SavedHintsContainer;
