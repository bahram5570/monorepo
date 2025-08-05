import { WheelPickerProps } from '@components/ui/WheelPicker/types';

import { WeightHeightModuleProps } from '../../types';

export interface UseListMakerProps extends Pick<WeightHeightModuleProps, 'type'> {}

type ValueTypes = Pick<WheelPickerProps, 'list'>['list'][0];
export type DataListTypes = { list: ValueTypes[]; defaultValue: number } | null;
