'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import EditActivationQuestions from './EditActivationQuestions';
import EditActivationSkeleton from './EditActivationSkeleton';
import useGetData from './__hooks__/useGetData';

const EditActivationPageContainer = () => {
  const { colors } = useTheme();
  const { isLoading, data } = useGetData();

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="ویرایش اطلاعات هدف نصب" paddingTop={0}>
      <div
        style={{ backgroundColor: colors.Surface_SurfaceVariant, paddingTop: HEADER_HEIGHT + 24 }}
        className="w-full min-h-[100dvh] flex flex-col gap-4 px-4 pb-6"
      >
        {isLoading && <EditActivationSkeleton />}
        {!isLoading && data && <EditActivationQuestions questions={data.questions} />}
      </div>
    </WomenPageLayout>
  );
};

export default EditActivationPageContainer;
