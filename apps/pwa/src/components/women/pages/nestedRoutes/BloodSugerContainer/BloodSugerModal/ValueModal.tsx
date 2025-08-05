import { useState } from 'react';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WheelPicker from '@components/ui/WheelPicker';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { ValueModalPropsType } from './type';

const ValueModal = ({ name, onChange, onCloseModal, value }: ValueModalPropsType) => {
  const defaultValue = Number(value) || 100;
  const [values, setValues] = useState<number>(defaultValue);
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { colors } = useTheme();

  const stateValuesHandler: (v: number | string) => void = (v) => {
    setValues(Number(v));
  };

  const onChangeHandler = () => {
    onChange(values, name);
    onCloseModal();
  };

  const generateList = (start: number, end: number, step: number) => {
    const list = [];
    for (let value = start; value <= end; value += step) {
      list.push({ value, title: `${value}` });
    }
    return list;
  };

  const list = generateList(10, 300, 1);

  return (
    <>
      <Typography scale="Title" size="Small">
        میزان قند خونت رو انتخاب کن
      </Typography>
      <div className="relative grid grid-cols-1 place-items-center w-full px-4">
        <>
          <span
            className="absolute left-0 right-0 h-10   pointer-events-none rounded-full"
            style={{ background: colors.Neutral_Surface }}
          >
            <div className="flex justify-center items-center h-full ml-36">
              <Typography scale="Title" size="Medium">
                mg/dL
              </Typography>
            </div>
          </span>

          <WheelPicker list={list} defaultValue={values} valueHandler={(v) => stateValuesHandler(v)} />
        </>
      </div>

      <Button
        variant="fill"
        size="medium"
        color="primary"
        onClick={() => {
          (onChangeHandler(), pageNavigationHandler({ showProgressBar: true, id: name }));
        }}
      >
        ثبت اطلاعات
      </Button>
    </>
  );
};

export default ValueModal;
