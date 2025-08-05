import { useState } from 'react';

import DateModule from '@components/activation/DateModule';
import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useActivationPregnancyTabs from '@hooks/__activation__/useActivationPregnancyTabs';
import useTheme from '@hooks/useTheme';

import Tabs from './Tabs';
import useUpdateCycle from './__hooks__/useUpdateCycle';

const PopUpEditPregnancy = () => {
  const { colors } = useTheme();
  const { isLoading, submitHandler } = useUpdateCycle();
  const [pregnancyDate, setPregnancyDate] = useState('');
  const { tab, tabHandler, endDate, startDate, defaultDate } = useActivationPregnancyTabs();

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 mx-auto z-50"
      style={{ maxWidth: MAX_SCREEN_WIDTH, backgroundColor: colors.White }}
    >
      <WomenPageLayout rightElement="BackButton" paddingTop={0} paddingBottom={0}>
        <div className="flex flex-col items-center px-4 py-8 min-h-[100dvh]">
          <Typography scale="Body" size="Medium" style={{ paddingTop: HEADER_HEIGHT }}>
            برای محاسبه هفته بارداری:
          </Typography>

          <Typography scale="Body" size="Medium">
            یکی از روش‌های زیر رو انتخاب کن
          </Typography>

          <Tabs tab={tab} tabHandler={tabHandler} />

          <DateModule
            valueHandler={setPregnancyDate}
            endDate={endDate}
            startDate={startDate}
            defaultDate={defaultDate}
            key={`${startDate}-${endDate}`}
          />

          <Button
            size="medium"
            variant="fill"
            color="primary"
            className="mt-auto"
            isLoading={isLoading}
            onClick={() => submitHandler({ pregnancyDate, isDelivery: tab === 1 ? true : false })}
          >
            ثبت تغییرات
          </Button>
        </div>
      </WomenPageLayout>
    </div>
  );
};

export default PopUpEditPregnancy;
