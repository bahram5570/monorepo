'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import CheckListCheckupQuestion from './CheckListCheckupQuestion';
import CheckupQuestionContainerSkeleton from './CheckupQuestionContainerSkeleton';
import DateCheckupQuestion from './DateCheckupQuestion';
import InformationCheckupQestion from './InformationCheckupQestion';
import QuestionCheckup from './QuestionCheckup';
import useGetData from './__hooks__/useGetData';

const CheckupQuestionContainer = () => {
  const { colors } = useTheme();
  const { getQueryParams } = useQueryParamsHandler();

  const pregnancyWeek = getQueryParams('week');
  const pregnancyTitle = getQueryParams('title');
  const pregnancyCheckupType = getQueryParams('checkupType');

  const { data, isLoading } = useGetData({ type: Number(pregnancyCheckupType), week: Number(pregnancyWeek) });

  const hasData = data && data.data;

  return (
    <WomenPageLayout
      paddingTop={0}
      className="px-4"
      rightElement="BackButton"
      rightElementScript={pregnancyTitle || ''}
      backgroundColor={colors.Surface_SurfaceVariant}
    >
      {isLoading && <CheckupQuestionContainerSkeleton />}

      {!isLoading && hasData && (
        <div className="flex flex-col gap-3 min-h-[100dvh] pb-6" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
          <InformationCheckupQestion information={data.data.information} />
          <DateCheckupQuestion from={data.data.from} to={data.data.to} />
          <CheckListCheckupQuestion checkList={data.data.checkList} />
          <QuestionCheckup question={data.data.question} />
        </div>
      )}
    </WomenPageLayout>
  );
};

export default CheckupQuestionContainer;
