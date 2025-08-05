import useCustomToast from '@hooks/useCustomToast';

import { UserInfoType } from '../../type';
import { handleValidation } from './__utils__';

const useSubmit = () => {
  const { onToast } = useCustomToast();

  const submitHandler = (payload: UserInfoType) => {
    const invalidMessage = handleValidation(payload);

    if (invalidMessage) {
      return onToast({ type: 'error', message: invalidMessage });
    }
  };

  return { submitHandler };
};

export default useSubmit;
