import { useEffect } from 'react';

import {
  ACTIVATION_FIRST_PATH_OF_SECTION_1,
  ACTIVATION_FIRST_PATH_OF_SECTION_2,
  ACTIVATION_FIRST_PATH_OF_SECTION_3,
  ACTIVATION_SECTION_1_NAME,
  ACTIVATION_SECTION_2_NAME,
} from '@providers/__activation__/ActivationProvider/__constants__/activationContants';
import { useRouter } from 'next/navigation';

import { useActivationSectionRouteProtectionProps } from './types';

const useActivationSectionRouteProtection = ({ payloadHandler }: useActivationSectionRouteProtectionProps) => {
  const router = useRouter();

  useEffect(() => {
    const storageOfSection2 = sessionStorage.getItem(ACTIVATION_SECTION_2_NAME);
    const storageOfSection1 = sessionStorage.getItem(ACTIVATION_SECTION_1_NAME);

    if (storageOfSection2 && storageOfSection1) {
      const payload2 = JSON.parse(storageOfSection2);
      const payload1 = JSON.parse(storageOfSection1);
      payloadHandler({ ...payload1, ...payload2 });
      router.push(ACTIVATION_FIRST_PATH_OF_SECTION_3);
    } else if (storageOfSection1) {
      const payload1 = JSON.parse(storageOfSection1);
      payloadHandler(payload1);
      router.push(ACTIVATION_FIRST_PATH_OF_SECTION_2);
    } else {
      router.push(ACTIVATION_FIRST_PATH_OF_SECTION_1);
    }
  }, []);
};

export default useActivationSectionRouteProtection;
