import { WheelPickerItemTypes, WheelPickerProps } from '../../types';

export interface UseWheelPickerListDataProps extends Pick<WheelPickerProps, 'list' | 'defaultValue'> {}

export type WheelPickerListDataTypes = null | { updatedList: WheelPickerItemTypes[]; initialSlide: number };
