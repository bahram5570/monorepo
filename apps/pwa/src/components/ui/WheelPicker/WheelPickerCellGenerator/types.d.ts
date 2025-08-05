import { WheelPickerItemTypes } from '../types';

export interface WheelPickerCellGeneratorProps extends Pick<WheelPickerItemTypes, 'title'> {
  resetKey: number;
  isSelectedItem: boolean;
  isBeforeOrAfterSelectedItem: boolean;
}
