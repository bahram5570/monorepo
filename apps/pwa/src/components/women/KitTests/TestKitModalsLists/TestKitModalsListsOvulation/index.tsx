import TrashIcon from '@assets/icons/trash.svg';

import Typography from '@components/ui/Typography';
import { kitTestScripts } from '@components/women/KitTests/KitTestRange/constants';
import useTheme from '@hooks/useTheme';

import { KitTestModuleTypeEnums } from '../../enum';
import TestKitModalsListRangeSVG from '../TestKitModalsListRangeSVG';
import useTestKitsDeleteModal from '../__hooks__/useTestKitsDeleteModal';
import { TestKitModalsListsOvulationProps } from './types';

const TestKitModalsListsOvulation = ({ data }: TestKitModalsListsOvulationProps) => {
  const { colors } = useTheme();
  const { openDeleteModalHandler } = useTestKitsDeleteModal();

  const testScript = (result: number) => {
    let script = '';

    if (result < 0.1) {
      script = kitTestScripts.babyCheck.resultLow;
    }
    if (result > 0.1 && result < 0.9) {
      script = kitTestScripts.babyCheck.resultAverage;
    }
    if (result >= 0.9) {
      script = kitTestScripts.babyCheck.resultHigh;
    }

    return script;
  };

  const deleteHandler = () => {
    if (data) {
      openDeleteModalHandler({ createTime: data.createTime, moduleType: KitTestModuleTypeEnums.Ovulation, index: -1 });
    }
  };

  return (
    <>
      {data && (
        <div className="w-full flex items-center justify-between gap-1">
          <TrashIcon className="w-6" style={{ stroke: colors.Error_Error }} onClick={deleteHandler} />

          <div className="flex items-center gap-2">
            <Typography scale="Lable" size="Medium">
              {testScript(data.result)}
            </Typography>

            <TestKitModalsListRangeSVG result={data.result} />
          </div>
        </div>
      )}
    </>
  );
};

export default TestKitModalsListsOvulation;
