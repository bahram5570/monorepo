'use client';

import { createContext, useState } from 'react';

import { OperatingSystemContextTypes, OperatingSystemProviderContainerTypes, OperatingSystemTypes } from './types';

export const OperatingSystemContext = createContext<OperatingSystemContextTypes>({
  operatingSystem: 'windows',
});

const OperatingSystemProviderContainer = ({ children, os }: OperatingSystemProviderContainerTypes) => {
  const [operatingSystem] = useState<OperatingSystemTypes>(os);

  return (
    <OperatingSystemContext.Provider value={{ operatingSystem }}>
      <>{children}</>
    </OperatingSystemContext.Provider>
  );
};

export default OperatingSystemProviderContainer;
