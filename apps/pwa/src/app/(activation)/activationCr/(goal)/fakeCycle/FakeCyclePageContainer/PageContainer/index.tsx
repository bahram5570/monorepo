import BottomPart from '../BottomPart';
import PregnancyDatePage from '../DatesQueryPages/PregnancyDatePage';
import StartPeriodDatePage from '../DatesQueryPages/StartPeriodDatePage';
import TotalCycleLengthDatePage from '../DatesQueryPages/TotalCycleLengthDatePage';
import TopPart from '../TopPart';
import useSelectDates from '../__hooks__/useSelectDates';
import { FakeCycleDatesEnums } from '../enums';
import FakeCycleContainer from './FakeCycleContainer';
import { FAKE_CYCLE_FOOTER_HEIGTH } from './FakeCycleContainer/constants';
import { PageContainerProps } from './types';

const PageContainer = ({ goalInfo, callCreateSampleApi, payloadHandler }: PageContainerProps) => {
  const { openDatesHandler, fakeCycleDates } = useSelectDates({ selectedGoal: goalInfo.selectedGoal });

  return (
    <>
      {fakeCycleDates === null && (
        <FakeCycleContainer>
          <div
            style={{ backgroundColor: goalInfo.backgroundColor, paddingBottom: FAKE_CYCLE_FOOTER_HEIGTH }}
            className="w-full min-h-[100dvh]"
          >
            <TopPart goalInfo={goalInfo} openDatesHandler={openDatesHandler} payloadHandler={payloadHandler} />
            <BottomPart selectedGoal={goalInfo.selectedGoal} openDatesHandler={openDatesHandler} />
          </div>
        </FakeCycleContainer>
      )}

      {fakeCycleDates === FakeCycleDatesEnums.totalCycleLengthData && (
        <TotalCycleLengthDatePage callCreateSampleApi={callCreateSampleApi} payloadHandler={payloadHandler} />
      )}

      {fakeCycleDates === FakeCycleDatesEnums.startPeriodDate && (
        <StartPeriodDatePage payloadHandler={payloadHandler} />
      )}

      {fakeCycleDates === FakeCycleDatesEnums.pregnancyDate && (
        <PregnancyDatePage callCreateSampleApi={callCreateSampleApi} payloadHandler={payloadHandler} />
      )}
    </>
  );
};

export default PageContainer;
