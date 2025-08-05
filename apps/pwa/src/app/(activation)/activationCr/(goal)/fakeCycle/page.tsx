'use client';

import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('./FakeCyclePageContainer'), {
  ssr: false,
});

const FakeCycle = () => {
  // # چرخه موقت
  const { payload, payloadHandler } = useActivationCrPayload();

  return (
    <>
      <DynamicComponentWithNoSSR payload={payload} payloadHandler={payloadHandler} />
    </>
  );
};

export default FakeCycle;
