import { useEffect } from 'react';

import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { UPDATE_CYCLE_CARD_QUERY_KEY_NAME } from './constants';
import { CycleCardStatusHandlerTypes, CycleCardStatusTypes } from './types';

const useUpdateCycleCard = () => {
  const { newQuery, getQuery, updateQuery } = useCustomReactQuery([UPDATE_CYCLE_CARD_QUERY_KEY_NAME]);

  useEffect(() => {
    newQuery({ queryKey: [UPDATE_CYCLE_CARD_QUERY_KEY_NAME], payload: { status: 'normal' } });
  }, []);

  const queryData = getQuery<CycleCardStatusTypes>({ queryKey: [UPDATE_CYCLE_CARD_QUERY_KEY_NAME] });
  const cycleCardStatus = queryData ? queryData.status : 'normal';

  const cycleCardStatusHandler: CycleCardStatusHandlerTypes = (v) => {
    updateQuery({ queryKey: [UPDATE_CYCLE_CARD_QUERY_KEY_NAME], payload: { status: v } });
  };

  return { cycleCardStatus, cycleCardStatusHandler };
};

export default useUpdateCycleCard;
