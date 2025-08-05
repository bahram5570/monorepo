import { useState } from 'react';

import BloodIcon from '@assets/icons/Blood.svg';

import useListMaker from '@components/activation/CyclesModule/__hooks__/useListMaker';
import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WheelPicker from '@components/ui/WheelPicker';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { PeriodModalPropsType } from './type';

const PeriodModal = ({ totalCycleLength, changeValueHandler, name, value, onCloseModal }: PeriodModalPropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const [PeriodValue, setPeriodValue] = useState<string | number>(0);
  const { dataList } = useListMaker({ name: 'periodLength', totalCycleLength: totalCycleLength });

  const valueHandler = (v: string | number) => {
    setPeriodValue(v);
  };

  const onChangeHandler = () => {
    changeValueHandler(PeriodValue, name);
    onCloseModal();
  };
  const updateDataList = dataList?.list.map((item) => ({ ...item, title: `\u200F${item.title} روز` })) ?? [];

  return (
    <>
      <BloodIcon className="w-9 h-9" />

      <Typography scale="Title" size="Small">
        طول پریود
      </Typography>

      <div className="relative grid grid-cols-1 place-items-center w-full px-4">
        {dataList && (
          <>
            <span
              className="absolute left-0 right-0 h-10   pointer-events-none rounded-full"
              style={{ background: colors.Neutral_Surface }}
            />
            <WheelPicker list={updateDataList} defaultValue={value} valueHandler={valueHandler} />
          </>
        )}
      </div>

      <Button
        variant="fill"
        size="medium"
        color="primary"
        onClick={() => {
          (onChangeHandler(), pageNavigationHandler({ showProgressBar: true, id: name }));
        }}
      >
        ذخیره
      </Button>
    </>
  );
};

export default PeriodModal;
