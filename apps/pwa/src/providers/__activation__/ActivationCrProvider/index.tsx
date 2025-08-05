'use client';

import { createContext, useState } from 'react';

import { PayloadHandlerTypes } from '@components/activation/MainActivationModule/types';
import { ACTIVATION_PAYLOAD_VALUES, ACTIVATION_REWARD_QUERY_NAME } from '@constants/activation.constants';
import useActivationBackQuery from '@hooks/__activation__/useActivationBackQuery';

import useActivationCrRouteProtection from './__hooks__/useActivationCrRouteProtection';
import useCrData from './__hooks__/useCrData';
import { ActivationCrProviderProps, ActivationCrTypes } from './types';

export const ActivationCrContext = createContext<ActivationCrTypes>({
  data: null,
  payloadHandler: () => {},
  payload: ACTIVATION_PAYLOAD_VALUES,
});

const ActivationProviderCr = ({ children, questionsData, errorCode }: ActivationCrProviderProps) => {
  if (typeof window === 'undefined') {
    return <></>;
  }

  const { data } = useCrData({ errorCode, questionsData });
  const [payload, setPayload] = useState(ACTIVATION_PAYLOAD_VALUES);

  const payloadHandler: PayloadHandlerTypes = (v) => {
    setPayload({ ...payload, ...v });
  };

  useActivationCrRouteProtection();
  useActivationBackQuery({ queryName: ACTIVATION_REWARD_QUERY_NAME });

  return (
    <ActivationCrContext.Provider value={{ payload, payloadHandler, data }}>
      <>{children}</>
    </ActivationCrContext.Provider>
  );
};

export default ActivationProviderCr;
