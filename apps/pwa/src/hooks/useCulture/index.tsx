import { useContext } from 'react';

import { CultureConext } from '@providers/CultureProvider';

const useCulture = () => {
  return useContext(CultureConext);
};

export default useCulture;
