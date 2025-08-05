import { useMemo, useState } from 'react';

import PregnancyIcon from '@assets/icons/pregnancy.svg';
import { toGregorianData, toJalaliData } from '@utils/dates';

import DateModule from '@components/activation/DateModule';
import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import useDateIntervals from '@providers/__activation__/ActivationProvider/__hooks__/useDateIntervals';

import { ChildBirthDateModalPropsType } from './type';

const ChildBirthDate = ({ changeValueHandler, onCloseModal, childBirthDate }: ChildBirthDateModalPropsType) => {
  const { culture } = useCulture();
  const [selectedDate, setSelectedDate] = useState('');
  const { pregnancyPeriodStart, pregnancyPeriodEnd } = useDateIntervals();

  const valueHandler = (v: string) => {
    setSelectedDate(v);
  };

  const applyHandler = () => {
    let updatedDate = '';

    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        updatedDate = toGregorianData(selectedDate);
        break;
      case CalendarTypeEnum.Gregorian:
        updatedDate = selectedDate;
        break;
      default:
        updatedDate = toGregorianData(selectedDate);
        break;
    }

    changeValueHandler(updatedDate, 'childBirthDate');
    onCloseModal();
  };

  const defaultDate = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return toJalaliData(childBirthDate);
      case CalendarTypeEnum.Gregorian:
        return childBirthDate;
      default:
        return toJalaliData(childBirthDate);
    }
  }, [culture.calendarType, childBirthDate]);

  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center">
        <PregnancyIcon className="w-9 h-9" />

        <Typography scale="Title" size="Small">
          تاریخ زایمان
        </Typography>
      </div>

      <DateModule
        defaultDate={defaultDate}
        valueHandler={valueHandler}
        endDate={pregnancyPeriodEnd}
        startDate={pregnancyPeriodStart}
      />

      <Button variant="fill" size="medium" color="primary" onClick={applyHandler}>
        ذخیره
      </Button>
    </>
  );
};

export default ChildBirthDate;
