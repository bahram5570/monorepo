import React, { useState } from 'react';

import WheelPicker from '@components/ui/WheelPicker';
import WheelPickerDivider from '@components/ui/WheelPicker/WheelPickerDivider';
import { currentDate } from '@utils/dates';

import useDefaultDate from './__hooks__/useDefaultDate';
import { START_DATE } from './__hooks__/useInitialLists/constants';
import useListsMaker from './__hooks__/useListsMaker';
import useValueHandler from './__hooks__/useValueHandler';
import { DateSelectorProps, StateValuesHandlerTypes, ValuesTypes } from './types';

const { jDate } = currentDate();

const DateSelector = ({ defaultDate, startDate, endDate, valueHandler }: DateSelectorProps) => {
  const [values, setValues] = useState<ValuesTypes>({ month: '', year: '', day: '' });

  useValueHandler({ values, valueHandler });

  useDefaultDate({
    defaultDate: defaultDate || endDate,
    onDefaultData: (v) => setValues(v),
  });

  const { daysList, monthsList, yearsList } = useListsMaker({
    startDate: startDate || START_DATE,
    endDate: endDate || jDate,
    values,
  });

  const stateValuesHandler: StateValuesHandlerTypes = (v, name) => {
    setValues((state) => ({ ...state, [name]: v }));
  };

  return (
    <div className="relative w-full grid grid-cols-3 place-items-center mx-auto">
      {daysList && monthsList && yearsList && (
        <>
          <WheelPicker
            list={yearsList}
            defaultValue={values.year}
            valueHandler={(v) => stateValuesHandler(v.toString(), 'year')}
          />

          <WheelPickerDivider isTop={true} />

          <WheelPicker
            list={monthsList}
            defaultValue={values.month}
            valueHandler={(v) => stateValuesHandler(v.toString(), 'month')}
          />

          <WheelPickerDivider isTop={false} />

          <WheelPicker
            list={daysList}
            defaultValue={values.day}
            valueHandler={(v) => stateValuesHandler(v.toString(), 'day')}
          />
        </>
      )}
    </div>
  );
};

export default React.memo(DateSelector, () => {
  return true;
});
