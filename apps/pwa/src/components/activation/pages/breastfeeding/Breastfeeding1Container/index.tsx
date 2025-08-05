import { useMemo } from 'react';

import { currentDate } from '@utils/dates';

import DateModule from '@components/activation/DateModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Breastfeeding1ContainerProps } from './types';

const { gDate, jDate } = currentDate();

const Breastfeeding1Container = ({
  payload,
  payloadHandler,
  info,
  activationData,
  isLoading,
  onRegister,
}: Breastfeeding1ContainerProps) => {
  const { culture } = useCulture();
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });

  const defaultDate = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Gregorian:
        return gDate;
      case CalendarTypeEnum.Jalali:
        return jDate;
      default:
        return jDate;
    }
  }, [culture.calendarType]);

  if (options === undefined) {
    return <></>;
  }

  const valueHandler = (v: string) => {
    nextPageHandler({
      nextActivation: pageInfo.nextActivationList.condition1?.url || '',
      rewardId: pageInfo.nextActivationList.condition1?.rewardId,
    });

    payloadHandler({ childBirthDate: v });
  };

  return (
    <MainActivationModule isLoading={isLoading} onRegister={onRegister} {...pageInfo}>
      <DateModule valueHandler={valueHandler} defaultDate={defaultDate} />
    </MainActivationModule>
  );
};

export default Breastfeeding1Container;
