import { useEffect, useRef } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import useTheme from '@hooks/useTheme';

import { KeyDownHandlerTypes, SingleCodeProps, ValueHandlerTypes } from './types';

const SingleCode = ({ focusInfo, stepIndex, stepValue, stepHandler, deleteHandler, otpStatus }: SingleCodeProps) => {
  const { colors, typography } = useTheme();
  const ref = useRef<HTMLInputElement>(null);

  const isSelected = focusInfo.index === stepIndex;

  const isLastInput = stepIndex === 5;

  useEffect(() => {
    const { current } = ref;

    if (current) {
      if (isSelected) {
        current.focus();
      }
    }
  }, [focusInfo, stepIndex, ref]);

  const font = typography.Headline.Small;
  const borderColor = isSelected ? colors.Surface_Outline : colors.Surface_OutlineVariant;

  const valueHandler: ValueHandlerTypes = (e) => {
    const value = e.target.value;
    stepHandler(value);

    if (isLastInput && value.length > 0) {
      setTimeout(() => {
        ref.current?.blur();
      }, 100);
    }
  };

  const keyDownHandler: KeyDownHandlerTypes = (e) => {
    const { key } = e;

    if (key === 'Backspace' || key === 'Delete') {
      deleteHandler();
    }
  };

  return (
    <input
      ref={ref}
      type="tel"
      onChange={valueHandler}
      onKeyDown={keyDownHandler}
      style={{ ...font, borderColor }}
      value={toPersianNumbers(stepValue)}
      className={`w-10 h-10 rounded-xl border-[1px] text-center pointer-events-none caret-transparent 
        ${otpStatus === 'wrong' && 'animate-otpError'}
        ${otpStatus === 'correct' && 'animate-otpSuccess'}
      `}
    />
  );
};

export default SingleCode;
