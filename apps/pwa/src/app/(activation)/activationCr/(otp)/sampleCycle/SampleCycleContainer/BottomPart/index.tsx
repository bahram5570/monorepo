import Slides from '@app/(activation)/activationCr/(goal)/fakeCycle/FakeCyclePageContainer/BottomPart/Slides';
import useBottomPartData from '@app/(activation)/activationCr/(goal)/fakeCycle/FakeCyclePageContainer/BottomPart/__hooks__/useBottomPartData';
import { FAKE_CYCLE_FOOTER_HEIGTH } from '@app/(activation)/activationCr/(goal)/fakeCycle/FakeCyclePageContainer/PageContainer/FakeCycleContainer/constants';
import useGoalFinder from '@hooks/__activation__/useGoalFinder';

import { SAMPLE_CYCLE_CONTINUE_BTN_HEIGHT } from '../ContinueBtn/constants';
import { BottomPartProps } from './types';

const BottomPart = ({ payload }: BottomPartProps) => {
  const { goalInfo } = useGoalFinder({ periodStatus: payload.periodStatus, status: payload.status });
  const bottomPartData = useBottomPartData();

  return (
    <div style={{ paddingBottom: FAKE_CYCLE_FOOTER_HEIGTH + SAMPLE_CYCLE_CONTINUE_BTN_HEIGHT + 12 }}>
      <Slides slides={bottomPartData[goalInfo.selectedGoal].slides} />
    </div>
  );
};

export default BottomPart;
