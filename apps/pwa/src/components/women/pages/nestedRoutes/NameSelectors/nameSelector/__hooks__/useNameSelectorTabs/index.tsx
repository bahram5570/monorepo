import { useContext } from 'react';

import { NameSelectorTabsContext } from '../../NameSelectorLayout/NameSelectorProvider';

const useNameSelectorTabs = () => {
  return useContext(NameSelectorTabsContext);
};

export default useNameSelectorTabs;
