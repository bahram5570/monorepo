import SingleCode from './SingleCode';
import useCodes from './__hooks__/useCodes';
import useFocus from './__hooks__/useFocus';
import { CodesProps } from './types';

const Codes = ({ submitHandler, isLoading, otpStatus }: CodesProps) => {
  const { steps, stepsHandler, deleteHandler } = useCodes({ submitHandler, otpStatus });
  const { focusInfo, isFocusHandler } = useFocus({ steps });

  return (
    <div
      onClick={isFocusHandler}
      className="flex justify-center gap-2 w-full px-7"
      style={{ pointerEvents: isLoading ? 'none' : 'initial' }}
    >
      {steps.map((stepValue, stepIndex) => (
        <SingleCode
          stepHandler={(v) => stepsHandler(v, stepIndex)}
          deleteHandler={deleteHandler}
          focusInfo={focusInfo}
          stepIndex={stepIndex}
          stepValue={stepValue}
          otpStatus={otpStatus}
          key={stepIndex}
        />
      ))}
    </div>
  );
};

export default Codes;
