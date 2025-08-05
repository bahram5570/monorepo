import { useState } from 'react';

import { CurrentTabHandlerTypes } from './types';

const useAppFeaturesTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const currentTabHandler: CurrentTabHandlerTypes = (n) => {
    setCurrentTab(n);
  };

  return { currentTab, currentTabHandler };
};

export default useAppFeaturesTabs;
