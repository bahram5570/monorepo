import { colorFormatConverter } from '@utils/scripts';

export const generateLinearGradient = (colors: string[]): string => {
  if (colors.length < 4) {
    throw new Error('At least 4 colors are required for the gradient.');
  }

  const stops = [0, 33.58, 59.11, 100];
  const gradientColors = colors.map((color, index) => `${colorFormatConverter(color)} ${stops[index]}%`).join(', ');

  return `linear-gradient(251.67deg, ${gradientColors})`;
};
