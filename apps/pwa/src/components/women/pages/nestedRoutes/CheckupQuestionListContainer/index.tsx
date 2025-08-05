'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import QuestionCheckupItem from './QuestionCheckupItem';
import { ItemType } from './QuestionCheckupItem/type';

const CheckupQuestionListContainer = () => {
  const { colors } = useTheme();
  const { getQueryParams } = useQueryParamsHandler();
  const questionItems = getQueryParams('items');
  const questionTitle = getQueryParams('title');
  const questionCheckupItemList: ItemType[] = (questionItems && JSON.parse(questionItems)) || [];

  return (
    <WomenPageLayout
      rightElement="BackButton"
      rightElementScript={questionTitle || ''}
      backgroundColor={colors.Surface_SurfaceVariant}
      className="px-3"
    >
      <div style={{ background: colors.Neutral_Background }} className="rounded-lg divide-y-[1px] px-3">
        {questionCheckupItemList.map((item, index) => {
          return <QuestionCheckupItem key={index} {...item} />;
        })}
      </div>
    </WomenPageLayout>
  );
};

export default CheckupQuestionListContainer;
