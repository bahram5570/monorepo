import { sectionStorageChecker } from './__utils__';

import { ACTIVATION_REWARD_QUERY_NAME } from '@constants/activation.constants';
import useActivationBackQuery from '@hooks/__activation__/useActivationBackQuery';

// # In case of 'ACTIVATION_REWARD_QUERY_NAME' query (the query that opens 'Rewards') to be 'true',
// # it will be removed on back and forward (browser buttons)
const useActivationGoBackHandler = () => {
  useActivationBackQuery({ queryName: ACTIVATION_REWARD_QUERY_NAME, onCallBack: sectionStorageChecker });
};

export default useActivationGoBackHandler;
