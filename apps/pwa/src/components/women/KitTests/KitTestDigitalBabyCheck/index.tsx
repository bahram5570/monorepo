import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';

import KitTestDigitalBabyCheckGenerator from './KitTestDigitalBabyCheckGenerator';
import useSelectedDigitalBabyCheck from './__hooks__/useSelectedDigitalBabyCheck';
import { KIT_TEST_DIGITAL_BABY_CHECK_LIST } from './constants';
import { KitTestDigitalBabyCheckProps } from './types';

const KitTestDigitalBabyCheck = ({ submitHandler }: KitTestDigitalBabyCheckProps) => {
  const { selectedDigitalBabyCheck, selectedDigitalBabyCheckHandler } = useSelectedDigitalBabyCheck();

  const clickHandler = () => {
    if (selectedDigitalBabyCheck !== null) {
      submitHandler(selectedDigitalBabyCheck);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Typography scale="Body" size="Medium">
        نتیجه تستت رو انتخاب کن:
      </Typography>

      <div className="flex items-center justify-center gap-14 pt-4 pb-9">
        {KIT_TEST_DIGITAL_BABY_CHECK_LIST.map((item, index) => (
          <KitTestDigitalBabyCheckGenerator
            key={index}
            icon={item.icon}
            title={item.title}
            babyCheckResult={item.babyCheckResult}
            selectedDigitalBabyCheck={selectedDigitalBabyCheck}
            selectedDigitalBabyCheckHandler={selectedDigitalBabyCheckHandler}
          />
        ))}
      </div>

      <Button
        size="medium"
        variant="fill"
        color="primary"
        onClick={clickHandler}
        isDisable={selectedDigitalBabyCheck === null}
      >
        ادامه
      </Button>
    </div>
  );
};

export default KitTestDigitalBabyCheck;
