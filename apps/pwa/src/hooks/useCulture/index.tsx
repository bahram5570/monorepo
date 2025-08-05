import { useContext } from 'react';

import { CultureConext } from '@providers/CultureProvider/CultureContainer';

const useCulture = () => {
  return useContext(CultureConext);
};

export default useCulture;
