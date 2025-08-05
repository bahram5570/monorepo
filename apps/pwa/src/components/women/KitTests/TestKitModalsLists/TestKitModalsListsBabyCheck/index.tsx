import TrashIcon from '@assets/icons/trash.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import { BabyCheckTypeEnums } from '@components/women/KitTests/KitTestBabyCheck/enum';
import { kitTestScripts } from '@components/women/KitTests/KitTestRange/constants';
import useTheme from '@hooks/useTheme';

import { KitTestModuleTypeEnums } from '../../enum';
import TestKitModalsListRangeSVG from '../TestKitModalsListRangeSVG';
import useTestKitsDeleteModal from '../__hooks__/useTestKitsDeleteModal';
import { TestKitModalsListsBabyCheckProps } from './types';

const TestKitModalsListsBabyCheck = ({ data }: TestKitModalsListsBabyCheckProps) => {
  const { colors } = useTheme();
  const { openDeleteModalHandler } = useTestKitsDeleteModal();

  const analogScript = (result: number) => {
    let script = '';

    if (result < 0.1) {
      script = kitTestScripts.babyCheck.resultLow;
    }
    if (result >= 0.1 && result <= 0.9) {
      script = kitTestScripts.babyCheck.resultAverage;
    }
    if (result > 0.9) {
      script = kitTestScripts.babyCheck.resultHigh;
    }

    return script;
  };

  return (
    <>
      {data.map((item, index) => (
        <div className="w-full flex flex-col" key={index}>
          {index > 0 && <div className="w-full h-[1px] my-3" style={{ backgroundColor: colors.Neutral_Surface }} />}

          <div className="w-full flex items-center justify-between gap-1">
            <TrashIcon
              className="w-6"
              style={{ stroke: colors.Error_Error }}
              onClick={() =>
                openDeleteModalHandler({
                  index,
                  createTime: item.createTime,
                  moduleType: KitTestModuleTypeEnums.BabyCheck,
                })
              }
            />

            <div className="w-full flex flex-row-reverse items-center gap-2">
              {item.type === BabyCheckTypeEnums.Analog && (
                <>
                  <TestKitModalsListRangeSVG result={item.result} />

                  <div className="flex items-center gap-1">
                    <Typography scale="Lable" size="Medium">
                      {analogScript(item.result)}
                    </Typography>

                    <Typography scale="Body" size="Medium">
                      بیبی‌چک نواری:
                    </Typography>
                  </div>
                </>
              )}

              {item.type === BabyCheckTypeEnums.Digital && (
                <>
                  <CustomImage
                    width={56}
                    src={
                      item.result === 1
                        ? '/assets/images/digitalBabyCheckPositive.webp'
                        : '/assets/images/digitalBabyCheckNegative.webp'
                    }
                  />

                  <div className="flex items-center gap-1">
                    <Typography scale="Lable" size="Medium">
                      {item.result === 1 ? 'مثبت' : 'منفی'}
                    </Typography>

                    <Typography scale="Body" size="Medium">
                      بیبی‌چک دیجیتال:
                    </Typography>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestKitModalsListsBabyCheck;
