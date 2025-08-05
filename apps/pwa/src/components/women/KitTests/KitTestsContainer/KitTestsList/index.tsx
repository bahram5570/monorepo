import { useEffect, useState } from 'react';

import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

import { KitTestModuleTypeEnums } from '../../enum';
import { kitTestMainInfo } from './constants';
import { DetailsTypes, KitTestsListProps } from './types';

const KitTestsList = ({ moduleType, data, gregorianDate }: KitTestsListProps) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const [details, setDetails] = useState<DetailsTypes>(null);
  const { pageNavigationHandler } = usePageNavigationLoading();

  useEffect(() => {
    if (data) {
      const result = kitTestMainInfo({ data, moduleType });
      setDetails(result);
    } else {
      setDetails(null);
    }
  }, [data]);

  const clickHandler = () => {
    pageNavigationHandler({ id: gregorianDate, showProgressBar: true });

    const modalName =
      moduleType === KitTestModuleTypeEnums.BabyCheck
        ? MODALS.TEST_KITS_LIST_BABYCHECK
        : MODALS.TEST_KITS_LIST_OVULATION;

    newQueryParamsHandler({ [modalName]: 'true', moduleType, gregorianDate, isHistoryList: 'true' });
  };

  return (
    <>
      {details && (
        <>
          <div className="w-full h-[1px] my-4" style={{ backgroundColor: colors.Neutral_Surface }} />

          <div className="w-full rounded-lg flex items-center justify-end gap-2  cursor-pointer" onClick={clickHandler}>
            <Typography scale="Body" size="Small">
              {details.buttonScript}
            </Typography>

            <details.Icon className="w-8 h-auto" />
          </div>
        </>
      )}
    </>
  );
};

export default KitTestsList;
