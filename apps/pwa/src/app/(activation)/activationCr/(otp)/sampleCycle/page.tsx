'use client';

import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

import SampleCycleContainer from './SampleCycleContainer';

const SampleCycle = () => {
  const { payload } = useActivationCrPayload();

  return (
    <>
      <SampleCycleContainer payload={payload} />
    </>
  );
};

export default SampleCycle;
