import { useState } from 'react';

import { ShowAllHandlerTypes } from './types';

const useShowAll = () => {
  const [showAll, setShowAll] = useState(false);

  const showAllHandler: ShowAllHandlerTypes = () => {
    setShowAll(true);
  };

  return { showAll, showAllHandler };
};

export default useShowAll;
