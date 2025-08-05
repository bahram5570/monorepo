import { useState } from 'react';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WheelPicker from '@components/ui/WheelPicker';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { ConditionModalPropsType } from './type';

const ConditionModal = ({ name, onChange, onCloseModal, value }: ConditionModalPropsType) => {
  const [values, setValues] = useState<number>(Number(value));
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { colors } = useTheme();

  const stateValuesHandler: (v: number | string) => void = (v) => {
    setValues(Number(v));
  };

  const onChangeHandler = () => {
    onChange(values, name);
    onCloseModal();
  };

  const conditionList = [
    { title: 'ناشتا', value: 0 },
    { title: 'دو ساعت بعد از غذا', value: 1 },
  ];

  return (
    <>
      <Typography scale="Title" size="Small">
        زمان اندازه‌گیری قند خونت رو انتخاب کن
      </Typography>
      <div className="relative grid grid-cols-1 place-items-center w-full px-4">
        <>
          <span
            className="absolute left-0 right-0 h-10   pointer-events-none rounded-full"
            style={{ background: colors.Neutral_Surface }}
          />
          <WheelPicker list={conditionList} defaultValue={values} valueHandler={(v) => stateValuesHandler(v)} />
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

export default ConditionModal;
