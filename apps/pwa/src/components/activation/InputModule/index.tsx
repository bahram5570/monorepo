import { toPersianNumbers } from '@utils/numbers';

import styles from './styles.module.css';

import useTheme from '@hooks/useTheme';

import { ACTIVATION_INPUT_MODULE_ID } from '../ActivationHeading/constants';
import { InputModuleProps } from './types';

const InputModule = ({ placeHolder, value, valueHandler, isTextTyps, testId }: InputModuleProps) => {
  const { typography, colors } = useTheme();

  const caretColor = colors.PrimaryWoman_Primary;
  const textColor = colors.Neutral_OnBackground;
  const font = typography.Title.Large;

  return (
    <input
      data-testid={testId}
      placeholder={placeHolder}
      id={ACTIVATION_INPUT_MODULE_ID}
      value={toPersianNumbers(value)}
      type={isTextTyps ? 'text' : 'tel'}
      onChange={(e) => valueHandler(e.target.value)}
      style={{ ...font, color: textColor, caretColor, direction: isTextTyps ? 'rtl' : 'ltr' }}
      className={`border-none bg-transparent w-full relative pt-7 text-center placeholder-[#EFEFEF] ${styles.input}`}
    />
  );
};

export default InputModule;
