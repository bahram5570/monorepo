import { useState } from 'react';

import { StateValuesHandlerTypes } from '@components/activation/DateModule/types';
import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WheelPicker from '@components/ui/WheelPicker';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { InputValueType } from '../type';
import { ConditionModalPropsType } from './type';

const InputModal = ({ onChange, onCloseModal, value }: ConditionModalPropsType) => {
  const [values, setValues] = useState<InputValueType>({
    high: value.high || 180,
    low: value.low || 20,
  });
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { colors } = useTheme();

  const stateValuesHandler: StateValuesHandlerTypes = (v, name) => {
    setValues((state) => ({ ...state, [name]: Number(v) }));
  };

  const onChangeHandler = () => {
    onChange(values);
    onCloseModal();
  };

  const generateList = (start: number, end: number, step: number) => {
    const list = [];
    for (let value = start; value <= end; value += step) {
      list.push({ value, title: `${value}` });
    }
    return list;
  };

  const highList = generateList(100, 300, 10);
  const lowList = generateList(0, 200, 10);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <Typography scale="Title" size="Small">
          میزان فشار خونت رو وارد کن
        </Typography>
        <Typography scale="Body" size="Medium" textAlign="center">
          حواست باشه که عدد سمت چپ، عدد بالاتر (سیستولیک) و عدد سمت راست، عدد پایین‌تر (دیاستولیک) فشار خونته
        </Typography>
      </div>

      <div className="relative grid grid-cols-1 place-items-center w-full px-4">
        <>
          <span
            className="absolute left-0 right-0 h-10   pointer-events-none rounded-full"
            style={{ background: colors.Neutral_Surface }}
          >
            <div className="flex justify-center items-center h-full ml-40">
              <Typography scale="Title" size="Medium">
                mmHg
              </Typography>
            </div>
          </span>
          <div className="flex gap-2 relative">
            <WheelPicker
              list={highList}
              defaultValue={values.high}
              valueHandler={(v) => stateValuesHandler(v.toString(), 'high')}
            />
            <span className="flex justify-center items-center">/</span>
            <WheelPicker
              list={lowList}
              defaultValue={values.low}
              valueHandler={(v) => stateValuesHandler(v.toString(), 'low')}
            />
          </div>
        </>
      </div>

      <Button
        variant="fill"
        size="medium"
        color="primary"
        onClick={() => {
          (onChangeHandler(), pageNavigationHandler({ showProgressBar: true, id: 'bloodPressure' }));
        }}
      >
        ثبت اطلاعات
      </Button>
    </>
  );
};

export default InputModal;
