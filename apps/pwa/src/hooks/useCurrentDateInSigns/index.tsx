import { useContext } from 'react';

import { DateInSignContext } from '@providers/DateInSignProvider';

const useCurrentDateInSigns = () => {
  return useContext(DateInSignContext);
};

export default useCurrentDateInSigns;
