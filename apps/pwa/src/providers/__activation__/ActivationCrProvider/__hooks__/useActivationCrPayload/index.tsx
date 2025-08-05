import { useContext } from 'react';

import { ActivationCrContext } from '../..';

const useActivationCrPayload = () => {
  const { payload, payloadHandler } = useContext(ActivationCrContext);

  return { payload, payloadHandler };
};

export default useActivationCrPayload;
