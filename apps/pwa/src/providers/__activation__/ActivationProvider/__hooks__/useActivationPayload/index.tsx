import { useContext } from 'react';

import { ActivationContext } from '@providers/__activation__/ActivationProvider';

const useActivationPayload = () => {
  const { payload, payloadHandler } = useContext(ActivationContext);

  return { payload, payloadHandler };
};

export default useActivationPayload;
