import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { ACTIVATION_CR_FIRST_PATH } from '../../__constants__/activationCrContants';

const useActivationCrRouteProtection = () => {
  const router = useRouter();

  useEffect(() => {
    sessionStorage.clear();
    router.push(ACTIVATION_CR_FIRST_PATH);
  }, []);
};

export default useActivationCrRouteProtection;
