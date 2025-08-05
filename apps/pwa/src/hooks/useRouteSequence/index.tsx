import { useContext } from 'react';

import { RouteSequenceContext } from '@providers/RouteSequenceProvider';

const useRouteSequence = () => {
  return useContext(RouteSequenceContext);
};

export default useRouteSequence;
