'use client';

import Typography from '@components/ui/Typography';
import WidgetBabyCheckHistoryCardItems from '@components/women/Widgets/widgetGenerator/WidgetBabyCheckHistoryCard/WidgetBabyCheckHistoryCardItems';
import WomenPageLayout from '@components/women/WomenPageLayout';

import useGetData from './__hooks__/useGetData';
import useSelectedTest from './__hooks__/useSelectedTest';

const BabyCheckHistoryCardViewAllContainer = () => {
  const { data } = useGetData();
  const { linkToHandler } = useSelectedTest();

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript={data?.title}>
      <div className="px-4">
        <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
          با انتخاب هر کدوم از چرخه‌های زیر، می‌تونی جزئیات مربوط به تست‌های انجام شده در اون چرخه رو ببینی
        </Typography>

        {data && <WidgetBabyCheckHistoryCardItems items={data.items} onSelect={linkToHandler} />}
      </div>
    </WomenPageLayout>
  );
};

export default BabyCheckHistoryCardViewAllContainer;
