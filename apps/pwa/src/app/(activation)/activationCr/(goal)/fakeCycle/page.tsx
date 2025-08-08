'use client';

import useActivationCrPayload from '@providers/__activation__/ActivationCrProvider/__hooks__/useActivationCrPayload';

import FakeCyclePageContainer from './FakeCyclePageContainer';

const FakeCycle = () => {
  // # چرخه موقت
  const { payload, payloadHandler } = useActivationCrPayload();

  return (
    <>
      <FakeCyclePageContainer payload={payload} payloadHandler={payloadHandler} />
    </>
  );
};

export default FakeCycle;
