import ActivationTabs from '@components/activation/ActivationTabs';
import { ActivationTabsListTypes } from '@components/activation/ActivationTabs/types';
import DateModule from '@components/activation/DateModule';
import useActivationPregnancyTabs from '@hooks/__activation__/useActivationPregnancyTabs';

import DatesContainer from '../DatesContainer';
import { PregnancyDatePageProps } from './types';

const PregnancyDatePage = ({ callCreateSampleApi, payloadHandler }: PregnancyDatePageProps) => {
  const { tab, tabHandler, defaultDate, endDate, startDate } = useActivationPregnancyTabs();

  const valueHandler = (v: string) => {
    payloadHandler({ pregnancyDate: v, isDeliveryDate: tab === 1 ? false : true });
  };

  const continueHandler = () => {
    if (callCreateSampleApi) {
      callCreateSampleApi();
    }
  };

  const tabsList: ActivationTabsListTypes = [
    { text: 'تاریخ شروع آخرین پریودت', value: 1 },
    { text: 'تاریخ زایمان\n (اعلام شده توسط سونوگرافی)', value: 2 },
  ];

  return (
    <DatesContainer
      title="برای محاسبه هفته بارداری یکی از روش‌های زیر رو انتخاب کن:"
      continueHandler={continueHandler}
      description=""
      subtitle=""
    >
      <ActivationTabs tab={tab} tabHandler={tabHandler} tabsList={tabsList} />

      <DateModule
        valueHandler={valueHandler}
        defaultDate={defaultDate}
        startDate={startDate}
        endDate={endDate}
        key={tab}
      />
    </DatesContainer>
  );
};

export default PregnancyDatePage;
