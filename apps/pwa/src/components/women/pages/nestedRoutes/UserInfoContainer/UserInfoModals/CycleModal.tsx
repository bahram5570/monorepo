import { useState } from 'react';

import CycleIcon from '@assets/icons/cycle.svg';

import useListMaker from '@components/activation/CyclesModule/__hooks__/useListMaker';
import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import WheelPicker from '@components/ui/WheelPicker';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { CycleModalPropsType } from './type';

const CycleModal = ({ changeValueHandler, name, value, onCloseModal }: CycleModalPropsType) => {
  const [cycleLengthValue, setCycleLengthValue] = useState<string | number>(0);
  const { dataList } = useListMaker({ name: 'totalCycleLength' });
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { colors } = useTheme();

  const valueHandler = (v: string | number) => {
    setCycleLengthValue(v);
  };

  const onChangeHandler = () => {
    changeValueHandler(cycleLengthValue, name);
    onCloseModal();
  };

  const updateDataList = dataList?.list.map((item) => ({ ...item, title: `\u200F${item.title} روز` })) ?? [];

  return (
    <>
      <CycleIcon className="w-9 h-9" />

      <Typography scale="Title" size="Small">
        طول چرخه
      </Typography>

      <div className="relative grid grid-cols-1 place-items-center px-4 w-full">
        {dataList && (
          <>
            <span
              className="absolute left-0 right-0 h-10 pointer-events-none rounded-full"
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

export default CycleModal;
