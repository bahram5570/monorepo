'use client';

import { useEffect, useRef } from 'react';

import { permissionHandler } from './__utils__';
import { isDevelopeMode } from '@utils/system';

import useOperatingSystem from '@hooks/useOperatingSystem';
import { useRouter } from 'next/navigation';

const PermissionsProvider = () => {
  const router = useRouter();
  const isFirstTime = useRef(isDevelopeMode());
  const { operatingSystem, isAddToHome } = useOperatingSystem();

  const reloadHandler = () => {
    router.refresh();
  };

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const accessHandler = async () => {
      if ('Notification' in window && isAddToHome !== null) {
        if (operatingSystem === 'ios' && isAddToHome) {
          await permissionHandler(reloadHandler);
        }

        if (operatingSystem === 'android' || operatingSystem === 'windows') {
          await permissionHandler(reloadHandler);
        }
      }
    };

    accessHandler();
  }, [operatingSystem, isAddToHome]);

  return <></>;
};

export default PermissionsProvider;
