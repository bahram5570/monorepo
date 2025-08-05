'use client';

import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';

import { colorMaker, resultMaker, typographyMaker } from './__utils__';
import { CustomTypographyTypes } from './types';

const CustomTypography = ({
  numbersMode,
  className,
  children,
  fontSize,
  tagType,
  style,
  color,
}: CustomTypographyTypes) => {
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();

  const selectedColor = colorMaker(color);
  const result = resultMaker({ children, numbersMode });
  const typographyDetails = typographyMaker({ fontSize, operatingSystem, isWeb: !breakPoint.laptop });

  const Tag = tagType || 'p';

  return (
    <Tag className={`select-none ${className}`} style={{ color: selectedColor, ...typographyDetails, ...style }}>
      <>{result}</>
    </Tag>
  );
};

export default CustomTypography;
