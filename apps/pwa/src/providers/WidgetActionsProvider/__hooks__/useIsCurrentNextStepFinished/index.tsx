import { useState } from 'react';

import { IsCurrentNextStepFinishedHandlerTypes } from './types';

const useIsCurrentNextStepFinished = () => {
  const [isCurrentNextStepFinished, setIsCurrentNextStepFinished] = useState(false);

  const isCurrentNextStepFinishedHandler: IsCurrentNextStepFinishedHandlerTypes = (b) => {
    setIsCurrentNextStepFinished(b);
  };

  return { isCurrentNextStepFinished, isCurrentNextStepFinishedHandler };
};

export default useIsCurrentNextStepFinished;
