import { ArrangedListTypes, NameSelectorActivationFiltersProps } from '../types';

type ItemsTypes = Omit<Pick<NameSelectorActivationFiltersProps, 'items'>['items'][0], 'value'>;
export interface FilterGeneratorProps extends ItemsTypes {
  isSelected: boolean;
  onClick: () => void;
}
