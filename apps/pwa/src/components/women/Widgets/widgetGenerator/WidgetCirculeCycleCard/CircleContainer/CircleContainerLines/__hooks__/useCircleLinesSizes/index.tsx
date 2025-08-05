import { SVGProps } from 'react';

import { CIRCLE_LINES_WIDTH } from '../../../constants';
import { UseCircleLinesSizesProps } from './types';

const useCircleLinesSizes = ({ containerSize }: UseCircleLinesSizesProps) => {
  const radius = (containerSize - CIRCLE_LINES_WIDTH) / 2;
  const strokeDasharray = 2 * Math.PI * radius;

  const svgStyles: SVGProps<SVGSVGElement> = {
    width: containerSize,
    height: containerSize,
    viewBox: `0 0 ${containerSize} ${containerSize}`,
    className: 'absolute top-0 left-0 right-0 bottom-0',
  };

  const circleStyles: SVGProps<SVGCircleElement> = {
    r: radius,
    fill: 'transparent',
    cx: containerSize / 2,
    cy: containerSize / 2,
    strokeLinecap: 'round',
    strokeWidth: CIRCLE_LINES_WIDTH,
    strokeDasharray: strokeDasharray,
  };

  return { strokeDasharray, svgStyles, circleStyles };
};

export default useCircleLinesSizes;
