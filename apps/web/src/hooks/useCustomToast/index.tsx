import { CustomToastContext } from '@providers/CustomToastProvider';

import { useContext } from 'react';

const useCustomToast = () => {
  return useContext(CustomToastContext);
};

export default useCustomToast;
