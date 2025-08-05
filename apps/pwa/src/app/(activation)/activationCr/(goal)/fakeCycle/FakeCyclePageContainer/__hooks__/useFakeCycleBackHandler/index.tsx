import { useEffect } from 'react';

import { sectionStorageChecker } from '@providers/__activation__/ActivationProvider/__hooks__/useActivationGoBackHandler/__utils__';

import { SAMPLE_CYCLE_STORAGE_NAME } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrContants';
import { useRouter } from 'next/navigation';

import { FAKE_CYCLE_QUESTIONS_NAME } from '../../constants';

const useFakeCycleBackHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const queryList = window.location.search.slice(1).split('&');

    const hasSelectedQuery =
      queryList.findIndex((item) => {
        return item.split('=')[0] === FAKE_CYCLE_QUESTIONS_NAME;
      }) > -1;

    if (hasSelectedQuery) {
      sectionStorageChecker();
      router.replace('fakeCycle');
      sessionStorage.removeItem(SAMPLE_CYCLE_STORAGE_NAME);
    }
  }, []);
};

export default useFakeCycleBackHandler;
