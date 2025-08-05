import React, { useState } from 'react';

import WheelPicker from '@components/ui/WheelPicker';
import WheelPickerDivider from '@components/ui/WheelPicker/WheelPickerDivider';
import useIsLargeScreenHeight from '@hooks/__activation__/useIsLargeScreenHeight';

import useDefaultDate from './__hooks__/useDefaultDate';
import useListsMaker from './__hooks__/useListsMaker';
import useValueHandler from './__hooks__/useValueHandler';
import { DateModuleProps, StateValuesHandlerTypes, ValuesTypes } from './types';

const DateModule = ({ defaultDate, startDate, endDate, valueHandler }: DateModuleProps) => {
  const { isLargeScreen } = useIsLargeScreenHeight();
  const [values, setValues] = useState<ValuesTypes>({ month: '', year: '', day: '' });

  useValueHandler({ values, valueHandler });

  useDefaultDate({
    onDefaultData: (v) => setValues(v),
    defaultDate: defaultDate || endDate,
  });

  const { daysList, monthsList, yearsList } = useListsMaker({ values, endDate, startDate });

  const stateValuesHandler: StateValuesHandlerTypes = (v, name) => {
    setValues((state) => ({ ...state, [name]: v }));
  };

  return (
    <div
      style={{ marginTop: isLargeScreen ? '40px' : '0' }}
      className="relative w-[calc(100%_-_48px)] grid grid-cols-3 place-items-center mx-auto"
    >
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

export default React.memo(DateModule, () => {
  return true;
});
