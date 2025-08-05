'use client';

import { createContext, useState } from 'react';

import { PayloadHandlerTypes } from '@components/activation/MainActivationModule/types';
import { ACTIVATION_PAYLOAD_VALUES, ACTIVATION_REWARD_QUERY_NAME } from '@constants/activation.constants';
import useActivationBackQuery from '@hooks/__activation__/useActivationBackQuery';

import useData from './__hooks__/useData';
import usePhaseChangeReloadProtection from './__hooks__/usePhaseChangeReloadProtection';
import { PhaseChangeProviderProps, PhaseChangeTypes } from './types';

export const PhaseChangeContext = createContext<PhaseChangeTypes>({
  data: null,
  payloadHandler: () => {},
  payload: ACTIVATION_PAYLOAD_VALUES,
});

const PhaseChangeProvider = ({ children, questionsData, errorCode }: PhaseChangeProviderProps) => {
  if (typeof window === 'undefined') {
    return <></>;
  }

  const { data } = useData({ errorCode, questionsData });
  const [payload, setPayload] = useState(ACTIVATION_PAYLOAD_VALUES);

  const payloadHandler: PayloadHandlerTypes = (v) => {
    setPayload({ ...payload, ...v });
  };

  usePhaseChangeReloadProtection();
  useActivationBackQuery({ queryName: ACTIVATION_REWARD_QUERY_NAME });

  return (
    <PhaseChangeContext.Provider value={{ payload, payloadHandler, data }}>
      <>{children}</>
    </PhaseChangeContext.Provider>
  );
};

export default PhaseChangeProvider;
