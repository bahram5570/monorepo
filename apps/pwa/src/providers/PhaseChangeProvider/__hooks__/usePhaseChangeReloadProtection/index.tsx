import { useEffect } from 'react';

import { PHASE_CHANGE_FIRST_PATH_NAME } from '@providers/PhaseChangeProvider/constants';
import { useRouter } from 'next/navigation';

const usePhaseChangeReloadProtection = () => {
  const router = useRouter();

  useEffect(() => {
    const pathname = location.pathname;
    const pathnameList = pathname.split('/');
    const currentPath = pathnameList[pathnameList.length - 1];
    const result = pathname.replace(currentPath, PHASE_CHANGE_FIRST_PATH_NAME);

    const queryParams = location.search;

    router.push(result + queryParams);
  }, []);
};

export default usePhaseChangeReloadProtection;
