'use client';

import { useEffect } from 'react';

import ActivationTabs from '@components/activation/ActivationTabs';
import DateModule from '@components/activation/DateModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import { ACTIVATION_BIRTHDATE_TABS_LIST, GoalNamesEnum } from '@constants/activation.constants';
import useActivationBirthdateTabs from '@hooks/__activation__/useActivationBirthdateTabs';
import useActivationBirthdayDefaultDate from '@hooks/__activation__/useActivationBirthdayDefaultDate';
import useGoalFinder from '@hooks/__activation__/useGoalFinder';
import { ACTIVATION_CR_ROUTES_INFO } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrRoutesInfo';
import useActivationCrData from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrData';
import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

const Goal2 = () => {
  // # تاریخ تولد
  const activationData = useActivationCrData();
  const defaultDate = useActivationBirthdayDefaultDate();
  const { payload, payloadHandler } = useActivationCrPayload();

  const { tab, tabHandler } = useActivationBirthdateTabs((v) => payloadHandler({ calendarType: v }));

  const { goalInfo } = useGoalFinder({ status: payload.status, periodStatus: payload.periodStatus });
  const { nextPageHandler, pageInfo, options } = usePageInfo({
    payload,
    payloadHandler,
    activationData,
    info: ACTIVATION_CR_ROUTES_INFO.goal_2,
  });

  useEffect(() => {
    let nextActivation: string | { isRegister: true } = '';

    switch (goalInfo.selectedGoal) {
      case GoalNamesEnum.INTENTION:
        nextActivation = pageInfo.nextActivationList.condition1?.url || '';
        break;
      case GoalNamesEnum.PREGNANCY:
        nextActivation = pageInfo.nextActivationList.condition2?.url || '';
        break;
      case GoalNamesEnum.TRACKER:
        nextActivation = pageInfo.nextActivationList.condition3?.url || '';
        break;
    }

    nextPageHandler({ nextActivation });
  }, [goalInfo.selectedGoal]);

  const valueHandler = (v: string) => {
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
