'use client';

import { createContext, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import {
  NameSelectorActivatioContextTypes,
  NameSelectorActivatioPayloadHandlerTypes,
  NameSelectorActivatioPayloadTypes,
  NameSelectorActivationProviderTypes,
} from './types';

const PAYLOAD_INITIAL_DATA: NameSelectorActivatioPayloadTypes = { charFilter: '', gender: 0, styles: [''] };

export const NameSelectorActivatioContext = createContext<NameSelectorActivatioContextTypes>({
  data: null,
  payloadHandler: () => {},
  payload: PAYLOAD_INITIAL_DATA,
});

const NameSelectorActivationProvider = ({ children, initialData }: NameSelectorActivationProviderTypes) => {
  const router = useRouter();
  const [data] = useState(initialData);
  const [payload, setPayload] = useState<NameSelectorActivatioPayloadTypes>(PAYLOAD_INITIAL_DATA);

  const payloadHandler: NameSelectorActivatioPayloadHandlerTypes = ({ name, value }) => {
    setPayload({ ...payload, [name]: value });
  };

  useEffect(() => {
    const pathname = location.pathname;
    const mainStep = '/protected/nameSelectorActivation/step1';

    if (pathname !== mainStep) {
      router.replace(mainStep);
    }
  }, []);

  return (
    <NameSelectorActivatioContext.Provider value={{ data, payload, payloadHandler }}>
      <>{children}</>
    </NameSelectorActivatioContext.Provider>
  );
};

export default NameSelectorActivationProvider;
