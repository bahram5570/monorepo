import { IsSelectedFinderTypes } from './types';

export const isSelectedFinder = ({ category, sign, selectedSigns }: IsSelectedFinderTypes) => {
  const isSelected = selectedSigns.some((item) => item.category === category && item.sign === sign);
  return { isSelected };
};
