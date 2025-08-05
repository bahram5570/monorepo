'use client';

import { useState } from 'react';

import ActivationBackBtn from '@components/activation/ActivationBackBtn';
import ActivationHeading from '@components/activation/ActivationHeading';
import { HEADING_HEIGHT } from '@components/activation/ActivationHeading/constants';
import DateModule from '@components/activation/DateModule';
import Button from '@components/ui/Button';
import useActivationPregnancyTabs from '@hooks/__activation__/useActivationPregnancyTabs';

import Tabs from './Tabs';
import useUpdateCycle from './__hooks__/useUpdateCycle';

const EditPregnancyContainer = () => {
  const { isLoading, submitHandler } = useUpdateCycle();
  const [pregnancyDate, setPregnancyDate] = useState('');
  const { tab, tabHandler, endDate, startDate, defaultDate } = useActivationPregnancyTabs();

  return (
    <div className="relative flex flex-col overflow-x-hidden min-h-[100dvh]">
      <ActivationBackBtn />

      <ActivationHeading
        progressPercentage={100}
        scripts={{ description: '', subtitle: '', title: 'برای محاسبه هفته بارداری یکی از روش‌های زیر رو انتخاب کن:' }}
      />

      <div className="flex flex-col items-center px-4 min-h-[100dvh]" style={{ paddingTop: HEADING_HEIGHT }}>
        <Tabs tab={tab} tabHandler={tabHandler} />

        <DateModule
          valueHandler={setPregnancyDate}
          endDate={endDate}
          startDate={startDate}
          defaultDate={defaultDate}
          key={`${startDate}-${endDate}`}
        />

        <div className="flex mx-auto mt-auto pb-6 w-[204px] min-w-fit">
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
      </div>
    </div>
  );
};

export default EditPregnancyContainer;
