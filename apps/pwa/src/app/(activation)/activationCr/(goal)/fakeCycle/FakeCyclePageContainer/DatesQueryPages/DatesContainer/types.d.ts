import React from 'react';

import { ScriptsTypes } from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo/types';

export interface DatesContainerProps extends ScriptsTypes {
  continueHandler: () => void;
  children: React.ReactNode;
}
