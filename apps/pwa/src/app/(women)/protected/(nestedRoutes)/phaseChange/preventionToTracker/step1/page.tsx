'use client';

import { useEffect, useRef, useState } from 'react';

import { isDevelopeMode } from '@utils/system';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import { PayloadHandlerTypes } from '@components/activation/MainActivationModule/types';
import Spinner from '@components/ui/Spinner';
import useChangePhase from '@hooks/__activation__/useChangePhase';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';
import { ActivationPayloadTypes } from '@providers/__activation__/types';

import usePhaseChangeInstallationPurpose from '../../__hooks__/usePhaseChangeInstallationPurpose';

const Step1 = () => {
  const [updatedPayload, setUpdatedPayload] = useState<null | ActivationPayloadTypes>(null);
  const { payload } = usePhaseChangePayload();

  const payloadHandler: PayloadHandlerTypes = (v) => {
    const copyPayload = { ...payload, ...v };
    setUpdatedPayload(copyPayload);
  };

  usePhaseChangeInstallationPurpose({ payloadHandler, installationPurpose: 'tracker' });

  if (updatedPayload === null) {
    return <></>;
  }

  return <PreventionToTrackerContainer updatedPayload={updatedPayload} />;
};

export default Step1;

const PreventionToTrackerContainer = ({ updatedPayload }: { updatedPayload: ActivationPayloadTypes }) => {
  const isFirstTime = useRef(isDevelopeMode());
  const { phaseChangeHandler, isLoading, fetchedUser } = useChangePhase({
    payload: updatedPayload,
    api: 'info/period/enter',
  });

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
    } else {
      phaseChangeHandler();
    }
  }, []);

  return (
    <div className="relative w-full h-[100dvh]">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner color="outline" />
        </div>
      )}

      {fetchedUser && <CompleteRegisterContainer payload={updatedPayload} fetchedUser={fetchedUser} />}
    </div>
  );
};
