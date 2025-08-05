import { GoalNamesEnum } from '@constants/activation.constants';

import GoalSelector from './GoalSelector';
import Scripts from './Scripts';
import SelectDates from './SelectDates';
import WavesContainer from './WavesContainer';
import { FAKE_CYCLE_HEADING_HEIGHT } from './constants';
import { TopPartProps } from './types';

const TopPart = ({ openDatesHandler, goalInfo, payloadHandler }: TopPartProps) => {
  return (
    <div
      className="relative w-full pt-14 px-4 flex flex-col overflow-hidden z-0"
      style={{ height: FAKE_CYCLE_HEADING_HEIGHT }}
    >
      <WavesContainer topPartBackgroundColor={goalInfo.topPartBackgroundColor} />

      <GoalSelector selectedGoalTitle={goalInfo.selectedGoalTitle} payloadHandler={payloadHandler} />

      <Scripts title={goalInfo.title} inputsTitle={goalInfo.inputsTitle} inputsTitleColor={goalInfo.inputsTitleColor} />

      <SelectDates
        isPregnancy={goalInfo.selectedGoal === GoalNamesEnum.PREGNANCY}
        selectDatesBottomIcon={goalInfo.selectDatesBottomIcon}
        selectDatesBottomText={goalInfo.selectDatesBottomText}
        selectDatesBtnText={goalInfo.selectDatesBtnText}
        selectDatesTopText={goalInfo.selectDatesTopText}
        selectDatesTopIcon={goalInfo.selectDatesTopIcon}
        openDatesHandler={openDatesHandler}
      />
    </div>
  );
};

export default TopPart;
