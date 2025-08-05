'use client';

import { createContext, useState } from 'react';

import useWidgetActions from '@hooks/useWidgetActions';

import { ActionTypes } from '../widgetCommon';
import OnMountActionsEventListener from './OnMountActionsEventListener';
import { OnMountActionsListHandlerTypes, OnMountActionsTypes } from './types';

export const OnMountActionsContext = createContext<OnMountActionsTypes>({ onMountActionsListHandler: () => {} });

const OnMountActionsProvider = ({ children }: { children: React.ReactNode }) => {
  const { onMountActionsHandler } = useWidgetActions();
  const [actionsList, setActionsList] = useState<null | ActionTypes[]>(null);

  const onMountActionsListHandler: OnMountActionsListHandlerTypes = (v) => {
    setActionsList(v);
  };

  const triggeredHandler = () => {
    if (actionsList) {
      onMountActionsHandler(actionsList);
      setActionsList(null);
    }
  };

  return (
    <OnMountActionsContext.Provider value={{ onMountActionsListHandler }}>
      <>{children}</>

      {actionsList && <OnMountActionsEventListener triggeredHandler={triggeredHandler} />}
    </OnMountActionsContext.Provider>
  );
};

export default OnMountActionsProvider;
