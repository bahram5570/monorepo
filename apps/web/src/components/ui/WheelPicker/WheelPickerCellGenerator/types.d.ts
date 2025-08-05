import { WheelPickerItemTypes } from '../types';

export interface WheelPickerCellGeneratorProps extends Pick<WheelPickerItemTypes, 'title'> {
  isSelectedItem: boolean;
  isBeforeOrAfterSelectedItem: boolean;
}
