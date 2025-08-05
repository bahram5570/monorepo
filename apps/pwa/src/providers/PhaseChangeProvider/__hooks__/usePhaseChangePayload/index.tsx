import { useContext } from 'react';

import { PhaseChangeContext } from '@providers/PhaseChangeProvider';

const usePhaseChangePayload = () => {
  const { payload, payloadHandler } = useContext(PhaseChangeContext);

  return { payload, payloadHandler };
};

export default usePhaseChangePayload;
