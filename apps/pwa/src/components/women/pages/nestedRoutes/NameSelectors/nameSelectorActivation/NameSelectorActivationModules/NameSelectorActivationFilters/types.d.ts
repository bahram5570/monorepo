import { FetchSelectNameActivationTypes } from '@services/selectNameServices/types';

type ItemsTypes = Pick<FetchSelectNameActivationTypes, 'style'>['style']['styles'][0]['items'];

export interface NameSelectorActivationFiltersProps {
  items: ItemsTypes;
  currentValue: string;
  onSelect: (v: string) => void;
}

export type UeArrangeListTypes = ItemsTypes;

export type ArrangedListTypes = ItemsTypes[];
