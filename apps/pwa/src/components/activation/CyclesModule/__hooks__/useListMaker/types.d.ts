import { WheelPickerProps } from '@components/ui/WheelPicker/types';

export type ListTypes = Pick<WheelPickerProps, 'list'>['list'];

export type DataListStateTypes = null | { list: ListTypes; defaultValue: number };

type PeriodLengthTypes = {
  name: 'periodLength';
  totalCycleLength: number;
};
type TotalCycleLengthTypes = {
  name: 'totalCycleLength';
};

type NameTypes = PeriodLengthTypes | TotalCycleLengthTypes;

export type UseListMakerProps = NameTypes;

export type ListMakerTypes = (min: number, max: number) => ListTypes;
