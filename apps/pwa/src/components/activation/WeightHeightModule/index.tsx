import WheelPicker from '@components/ui/WheelPicker';
import WheelPickerDivider from '@components/ui/WheelPicker/WheelPickerDivider';
import useIsLargeScreenHeight from '@hooks/__activation__/useIsLargeScreenHeight';

import useInitialValueHandler from './__hooks__/useInitialValueHandler';
import useListMaker from './__hooks__/useListMaker';
import { WeightHeightModuleProps } from './types';

const WeightHeightModule = ({ type, valueHandler }: WeightHeightModuleProps) => {
  const { dataList } = useListMaker({ type });
  const { isLargeScreen } = useIsLargeScreenHeight();

  const changeHandler = (v: string | number) => {
    valueHandler(Number(v));
  };

  useInitialValueHandler(() => {
    valueHandler(dataList?.defaultValue || 0);
  });

  return (
    <div className="relative flex justify-center mx-6 px-6" style={{ marginTop: isLargeScreen ? '40px' : '0' }}>
      {dataList && (
        <>
          <WheelPickerDivider isTop={true} />
          <WheelPicker list={dataList.list} defaultValue={dataList.defaultValue} valueHandler={changeHandler} />
          <WheelPickerDivider isTop={false} />
        </>
      )}
    </div>
  );
};

export default WeightHeightModule;
