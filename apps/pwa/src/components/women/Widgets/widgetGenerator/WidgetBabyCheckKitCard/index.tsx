import { currentDate } from '@utils/dates';

import KitTestsContainer from '@components/women/KitTests/KitTestsContainer';
import { KitTestModuleTypeEnums } from '@components/women/KitTests/enum';
import { KitTestsTypes } from '@components/women/pages/nestedRoutes/signs/__hooks__/useGetData/types';

import TestBabyKitModalsLists from './TestBabyKitModalsLists';
import useNewBabyCheckData from './__hooks__/useNewBabyCheckData';
import { WidgetBabyCheckKitCardProps } from './types';

const { gDate } = currentDate();

const WidgetBabyCheckKitCard = ({ data }: WidgetBabyCheckKitCardProps) => {
  const { onAdd, onDelete, updatedData } = useNewBabyCheckData({ data });

  const testData: KitTestsTypes = {
    babyChecks: updatedData.items,
    ovulationResult: { result: 0, createTime: '', count: 0 },
  };

  return (
    <>
      <KitTestsContainer data={testData} gregorianDate={gDate} moduleType={KitTestModuleTypeEnums.BabyCheck} />
      <TestBabyKitModalsLists onAdd={onAdd} onDelete={onDelete} data={updatedData} />
    </>
  );
};

export default WidgetBabyCheckKitCard;
