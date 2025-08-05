'use client';

import CustomTypography from '@components/ui/CustomTypography';

import AppFeaturesContents from './AppFeaturesContents';
import AppFeaturesTabs from './AppFeaturesTabs';
import useAppFeaturesTabs from './__hooks__/useAppFeaturesTabs';

const AppFeatures = () => {
  const { currentTab, currentTabHandler } = useAppFeaturesTabs();

  return (
    <section className="w-full flex flex-col items-center px-4">
      <CustomTypography fontSize="Title_Medium" className="pb-6">
        ایمپو چطور میتونه کمکت کنه؟
      </CustomTypography>

      <AppFeaturesTabs currentTab={currentTab} currentTabHandler={currentTabHandler} />
      <AppFeaturesContents currentTab={currentTab} />
    </section>
  );
};

export default AppFeatures;
