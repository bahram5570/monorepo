'use client';

import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';

import { colorMaker, typographyMaker } from '../CustomTypography/__utils__';
import { resultMaker } from './__utils__';
import { CustomInputTypes } from './types';

const CustomInput = ({
  hasOutline = false,
  placeholder = '',
  numbersMode,
  className,
  fontSize,
  onValue,
  style,
  color,
  value,
  maxLength,
}: CustomInputTypes) => {
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = resultMaker(e.target.value, numbersMode);
    onValue(result);
  };

  const selectedColor = colorMaker(color);
  const updatedValue = resultMaker(value, numbersMode);
  const typographyDetails = typographyMaker({ fontSize, operatingSystem, isWeb: !breakPoint.laptop });

  return (
    <input
      type="text"
      value={updatedValue}
      onChange={changeHandler}
      placeholder={placeholder}
      style={{ color: selectedColor, ...typographyDetails, ...style }}
      className={`w-full sm:h-full h-12 ${!hasOutline && 'outline-none'} ${className}`}
      maxLength={maxLength}
    />
  );
};

export default CustomInput;
