'use client';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import Tracker9Container from '@components/activation/pages/tracker/Tracker9Container';
import useUpdateOldUser from '@hooks/__activation__/useUpdateOldUser';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { COMPLETE_ACTIVATION_ROUTES } from '../../routesInfo';

const TrackerStep6 = () => {
  // # قد
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  const { updateHandler, isLoading, pair, fetchedUser } = useUpdateOldUser(payload);

  const partnerData = pair
    ? { question: activationData?.reward[14]?.page, reward: activationData?.reward[52]?.page }
    : undefined;

  return (
    <>
      {fetchedUser && (
        <CompleteRegisterContainer payload={payload} partnerData={partnerData} fetchedUser={fetchedUser} />
      )}

      <Tracker9Container
        payload={payload}
        isLoading={isLoading}
        onRegister={updateHandler}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={COMPLETE_ACTIVATION_ROUTES.tracker_step6}
      />
    </>
  );
};

export default TrackerStep6;
