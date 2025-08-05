import { useContext } from 'react';

import { PageNavigationLoadingContext } from '@providers/PageNavigationProvider';

const usePageNavigationLoading = () => {
  return useContext(PageNavigationLoadingContext);
};

export default usePageNavigationLoading;
