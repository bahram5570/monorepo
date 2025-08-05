import { COLORS_LIST } from '@theme/colors';

import { PREGNANCY_TEST_ONLINE_QUESTION_LIST } from '../constants';
import { TestOnlineProgressBarTypes } from './types';

const TestOnlineProgressBar = ({ currentStep }: TestOnlineProgressBarTypes) => {
  const totalSteps = Object.entries(PREGNANCY_TEST_ONLINE_QUESTION_LIST).length;
  const percent = 100 - ((Number(currentStep) + 1) * 100) / totalSteps;

  return (
    <div
      className="relative w-full h-1 rounded-full mb-10 sm:mt-6 overflow-hidden"
      style={{ backgroundColor: COLORS_LIST.White }}
    >
      <div
        className="w-full h-full rounded-full block"
        style={{ backgroundColor: COLORS_LIST.Primary_Primary, transform: `translateX(${percent}%)` }}
      />
    </div>
  );
};

export default TestOnlineProgressBar;
