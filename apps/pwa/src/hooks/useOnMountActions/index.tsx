import { useContext, useEffect } from 'react';

import { OnMountActionsContext } from '@providers/WidgetActionsProvider/OnMountActionsProvider';

import { UseOnMountActionsTypes } from './types';

const useOnMountActions = (actionsList: UseOnMountActionsTypes) => {
  const { onMountActionsListHandler } = useContext(OnMountActionsContext);

  useEffect(() => {
    if (actionsList && actionsList.length > 0) {
      onMountActionsListHandler(actionsList);
    }
  }, [actionsList]);
};

export default useOnMountActions;
