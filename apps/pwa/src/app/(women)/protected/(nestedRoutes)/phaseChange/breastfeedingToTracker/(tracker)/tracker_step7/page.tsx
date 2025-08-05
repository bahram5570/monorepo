'use client';

import CompleteRegisterContainer from '@components/activation/CompleteRegisterContainer';
import Tracker7Container from '@components/activation/pages/tracker/Tracker7Container/page';
import useChangePhase from '@hooks/__activation__/useChangePhase';
import usePhaseChangeData from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangeData';
import usePhaseChangePayload from '@providers/PhaseChangeProvider/__hooks__/usePhaseChangePayload';

import { CHANGE_PHASE_ROUTES } from '../../routesInfo';

const TrackerStep7 = () => {
  // # چرخه
  const { payload, payloadHandler } = usePhaseChangePayload();
  const activationData = usePhaseChangeData();

  const { phaseChangeHandler, isLoading, fetchedUser } = useChangePhase({ payload, api: 'info/period/enter' });

  return (
    <>
      {fetchedUser && <CompleteRegisterContainer payload={payload} fetchedUser={fetchedUser} />}

      <Tracker7Container
        payload={payload}
        isLoading={isLoading}
        onRegister={phaseChangeHandler}
        activationData={activationData}
        payloadHandler={payloadHandler}
        info={CHANGE_PHASE_ROUTES.tracker_step7}
      />
    </>
  );
};

export default TrackerStep7;
