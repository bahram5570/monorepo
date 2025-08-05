import { useContext } from 'react';

import { NameSelectorContext } from '../../NameSelectorLayout/NameSelectorProvider';

const useNameSelectorData = () => {
  return useContext(NameSelectorContext);
};

export default useNameSelectorData;
