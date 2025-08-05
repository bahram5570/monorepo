'use client';

import ActivationTabs from '@components/activation/ActivationTabs';
import DateModule from '@components/activation/DateModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import { ACTIVATION_BIRTHDATE_TABS_LIST } from '@constants/activation.constants';
import useActivationBirthdateTabs from '@hooks/__activation__/useActivationBirthdateTabs';
import useActivationBirthdayDefaultDate from '@hooks/__activation__/useActivationBirthdayDefaultDate';
import { ACTIVATION_ROUTES_INFO } from '@providers/__activation__/ActivationProvider/__constants__/activationRoutesInfo';
import useActivationData from '@providers/__activation__/ActivationProvider/__hooks__/useActivationData';
import useActivationPayload from '@providers/__activation__/ActivationProvider/__hooks__/useActivationPayload';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

const Goal2 = () => {
  // # تاریخ تولد
  const activationData = useActivationData();
  const defaultDate = useActivationBirthdayDefaultDate();
  const { payload, payloadHandler } = useActivationPayload();

  const { tab, tabHandler } = useActivationBirthdateTabs((v) => payloadHandler({ calendarType: v }));

  const { nextPageHandler, pageInfo, options } = usePageInfo({
    payload,
    payloadHandler,
    activationData,
    info: ACTIVATION_ROUTES_INFO.goal_2,
  });

  const valueHandler = (v: string) => {
    nextPageHandler({ nextActivation: 'goal_3' });
    payloadHandler({ birthDate: v });
  };

  if (options === undefined) {
    return <></>;
  }

  return (
    <MainActivationModule {...pageInfo}>
      <ActivationTabs tab={tab} tabHandler={tabHandler} tabsList={ACTIVATION_BIRTHDATE_TABS_LIST} />
      <DateModule valueHandler={valueHandler} defaultDate={defaultDate} key={tab} />
    </MainActivationModule>
  );
};

export default Goal2;
