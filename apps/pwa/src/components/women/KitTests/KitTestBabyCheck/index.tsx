import Button from '@components/ui/Button';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

import KitTestBabyCheckGenerator from './KitTestBabyCheckGenerator';
import useSelectedBabyCheck from './__hooks__/useSelectedBabyCheck';
import { BABY_CHECK_SELECTOR_LIST } from './constants';
import { KitTestBabyCheckProps } from './types';

const KitTestBabyCheck = ({ moduleType, gregorianDate }: KitTestBabyCheckProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { selectedBabyCheck, selectedBabyCheckHandler } = useSelectedBabyCheck();

  const applyHandler = () => {
    if (selectedBabyCheck !== null) {
      pageNavigationHandler({ showProgressBar: true, id: MODALS.TEST_KITS_BABYCHECK });

      newQueryParamsHandler({
        moduleType,
        gregorianDate,
        babyCheckType: selectedBabyCheck,
        [MODALS.TEST_KITS_BABYCHECK]: 'true',
      });
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center gap-14">
        {BABY_CHECK_SELECTOR_LIST.map((item, index) => (
          <KitTestBabyCheckGenerator
            key={index}
            icon={item.icon}
            title={item.title}
            babyCheckType={item.babyCheckType}
            selectedBabyCheck={selectedBabyCheck}
            selectedBabyCheckHandler={selectedBabyCheckHandler}
          />
        ))}
      </div>

      <Button
        variant="fill"
        size="medium"
        color="primary"
        className="mt-8"
        onClick={applyHandler}
        isDisable={selectedBabyCheck === null}
      >
        ادامه
      </Button>
    </>
  );
};

export default KitTestBabyCheck;
