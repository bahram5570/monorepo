import useTheme from '@hooks/useTheme';

import { RadioButtonProps } from './types';

function RadioButton({ isChecked, onClick, isDisable, testId }: RadioButtonProps) {
  const { colors } = useTheme();
  const color = isChecked ? colors.PrimaryWoman_Primary : colors.Surface_Outline;

  function clickHandler() {
    if (!isDisable && onClick) {
      onClick();
    }
  }

  return (
    <div
      data-testid={testId}
      onClick={clickHandler}
      className={`w-10 h-10 rounded-full flex justify-center items-center ${isDisable && 'opacity-25'}`}
    >
      <div style={{ borderColor: color }} className={`w-5 h-5 rounded-full flex border-2`}>
        {isChecked && <div style={{ backgroundColor: color }} className="w-3 h-3 rounded-full bg-slate-300 m-auto" />}
      </div>
    </div>
  );
}

export default RadioButton;
