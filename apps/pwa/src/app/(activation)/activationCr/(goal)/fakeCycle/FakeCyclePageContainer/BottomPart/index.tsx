import PredictCards from './PredictCards';
import Slides from './Slides';
import useBottomPartData from './__hooks__/useBottomPartData';
import { BottomPartProps } from './types';

const BottomPart = ({ selectedGoal, openDatesHandler }: BottomPartProps) => {
  const bottomPartData = useBottomPartData();

  return (
    <div className="relative w-full pt-5 pb-10">
      <PredictCards selectedGoal={selectedGoal} bottomPartData={bottomPartData} openDatesHandler={openDatesHandler} />
      <Slides slides={bottomPartData[selectedGoal].slides} key={selectedGoal.toString()} />
    </div>
  );
};

export default BottomPart;
