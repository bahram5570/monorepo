'use client';

import { createContext, useEffect, useState } from 'react';

import { IsAddToHomeTypes, OperatingSystemContextTypes, OperatingSystemTypes } from './types';

export const OperatingSystemContext = createContext<OperatingSystemContextTypes>({
  isAddToHome: null,
  operatingSystem: 'windows',
});

const OperatingSystemProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAddToHome, setIsAddToHome] = useState<IsAddToHomeTypes>(null);
  const [operatingSystem, setOperatingSystem] = useState<OperatingSystemTypes>('windows');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent.toLowerCase();

      if (/iphone|ipad|ipod|mac os/i.test(userAgent)) {
        setOperatingSystem('ios');
      } else if (/android/i.test(userAgent)) {
        setOperatingSystem('android');
      } else {
        setOperatingSystem('windows');
      }

      setIsAddToHome(window.matchMedia('(display-mode: standalone)').matches);
    }
  }, []);

  return (
    <OperatingSystemContext.Provider value={{ operatingSystem, isAddToHome }}>
      <>{children}</>
    </OperatingSystemContext.Provider>
  );
};

export default OperatingSystemProvider;
