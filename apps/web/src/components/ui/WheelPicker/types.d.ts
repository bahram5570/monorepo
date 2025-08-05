export type WheelPickerValueTypes = string | number;

export type WheelPickerItemTypes = { title: string; value: WheelPickerValueTypes };

export interface WheelPickerProps {
  valueHandler: (v: WheelPickerValueTypes) => void;
  defaultValue?: WheelPickerValueTypes;
  list: WheelPickerItemTypes[];
}
