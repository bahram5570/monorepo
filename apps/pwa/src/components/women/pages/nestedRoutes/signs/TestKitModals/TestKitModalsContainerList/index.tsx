import TestKitModalsListsBabyCheck from '@components/women/KitTests/TestKitModalsLists/TestKitModalsListsBabyCheck';
import TestKitModalsListsOvulation from '@components/women/KitTests/TestKitModalsLists/TestKitModalsListsOvulation';
import { KitTestModuleTypeEnums } from '@components/women/KitTests/enum';

import TestKitModalsContainer from '../TestKitModalsContainer';
import useGetData from './__hooks__/useGetData';
import { TestKitModalsContainerListProps } from './types';

const TestKitModalsContainerList = ({ gregorianDate, moduleType }: TestKitModalsContainerListProps) => {
  const { kitTestHistory } = useGetData({ gregorianDate, moduleType });

  return (
    <>
      {kitTestHistory && (
        <TestKitModalsContainer title={kitTestHistory.title}>
          {kitTestHistory.moduleType === KitTestModuleTypeEnums.BabyCheck && (
            <TestKitModalsListsBabyCheck data={kitTestHistory.data} />
          )}

          {kitTestHistory.moduleType === KitTestModuleTypeEnums.Ovulation && (
            <TestKitModalsListsOvulation data={kitTestHistory.data} />
          )}
        </TestKitModalsContainer>
      )}
    </>
  );
};

export default TestKitModalsContainerList;
