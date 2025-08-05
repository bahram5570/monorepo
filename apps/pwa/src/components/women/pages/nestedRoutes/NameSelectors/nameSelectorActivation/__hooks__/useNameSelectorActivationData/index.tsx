import { useContext } from 'react';

import { NameSelectorActivatioContext } from '../../NameSelectorActivationLayout/NameSelectorActivationProvider';

const useNameSelectorActivationData = () => {
  return useContext(NameSelectorActivatioContext);
};

export default useNameSelectorActivationData;
