import { useEffect, useState } from 'react';

import CakeIcon from '@assets/icons/Cake.svg';
import { toGregorianData, toJalaliData } from '@utils/dates';

import useListsMaker from '@components/activation/DateModule/__hooks__/useListsMaker';
import { StateValuesHandlerTypes, ValuesTypes } from '@components/activation/DateModule/types';
import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WheelPicker from '@components/ui/WheelPicker';
import { CalendarTypeEnum, DATE_SEPERATOR_REGEX } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { BirthDateModalPropsType } from './type';

const BirthDateModal = ({ value, changeValueHandler, name, onCloseModal }: BirthDateModalPropsType) => {
  const { colors } = useTheme();
  const { culture } = useCulture();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const [values, setValues] = useState<ValuesTypes>({ month: '', year: '', day: '' });

  const { daysList, monthsList, yearsList } = useListsMaker({ values });

  const stateValuesHandler: StateValuesHandlerTypes = (v, name) => {
    setValues((state) => ({ ...state, [name]: v }));
  };

  const saveHandler = () => {
    let result = '';

    switch (culture.calendarType) {
      case CalendarTypeEnum.Gregorian:
        result = `${values.year}-${values.month}-${values.day}`;
        break;
      case CalendarTypeEnum.Jalali:
        result = toGregorianData(`${values.year}/${values.month}/${values.day}`);
        break;
      default:
        result = toGregorianData(`${values.year}/${values.month}/${values.day}`);
        break;
    }

    pageNavigationHandler({ showProgressBar: true, id: name });
    changeValueHandler(result, name);
    onCloseModal();
  };

  useEffect(() => {
    if (value) {
      let updatedValue = value.toString();

      if (culture.calendarType === CalendarTypeEnum.Jalali) {
        updatedValue = toJalaliData(updatedValue);
      }

      const birthDate = updatedValue.split(DATE_SEPERATOR_REGEX);

      setValues({
        month: birthDate[1],
        year: birthDate[0],
        day: birthDate[2],
      });
    }
  }, [value, culture.calendarType]);

  return (
    <>
      <CakeIcon className="w-9 h-9" />

      <Typography scale="Title" size="Small">
        تاریخ تولد
      </Typography>

      <div className="relative grid grid-cols-3 place-items-center w-full px-4">
        {daysList && monthsList && yearsList && (
          <>
            <span
              className="absolute left-0 right-0 h-10   pointer-events-none rounded-full"
              style={{ background: colors.Neutral_Surface }}
            />
            <WheelPicker
              list={yearsList}
              defaultValue={values.year}
              valueHandler={(v) => stateValuesHandler(v.toString(), 'year')}
            />

            <WheelPicker
              list={monthsList}
              defaultValue={values.month}
              valueHandler={(v) => stateValuesHandler(v.toString(), 'month')}
            />

            <WheelPicker
              list={daysList}
              defaultValue={values.day}
              valueHandler={(v) => stateValuesHandler(v.toString(), 'day')}
            />
          </>
        )}
      </div>

      <Button
        variant="fill"
        size="medium"
        color="primary"
        onClick={saveHandler}
        // onClick={() => {
        //   (onChangeHandler(), pageNavigationHandler({ showProgressBar: true, id: name }));
        // }}
      >
        ذخیره
      </Button>
    </>
  );
};

export default BirthDateModal;
