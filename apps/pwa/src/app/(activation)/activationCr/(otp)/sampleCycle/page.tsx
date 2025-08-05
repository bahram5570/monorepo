'use client';

import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('./SampleCycleContainer'), {
  ssr: false,
});

const SampleCycle = () => {
  const { payload } = useActivationCrPayload();

  return <DynamicComponentWithNoSSR payload={payload} />;
};

export default SampleCycle;
