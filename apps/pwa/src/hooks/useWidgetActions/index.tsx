import { useContext } from 'react';

import { WidgetActionsContext } from '@providers/WidgetActionsProvider';

const useWidgetActions = () => {
  return useContext(WidgetActionsContext);
};

export default useWidgetActions;
