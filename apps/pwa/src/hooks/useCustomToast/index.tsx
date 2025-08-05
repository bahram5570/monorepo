import { useContext } from 'react';

import { ToastContext } from '@providers/ToastProvider';

const useCustomToast = () => {
  const { onToast } = useContext(ToastContext);

  return { onToast };
};

export default useCustomToast;
