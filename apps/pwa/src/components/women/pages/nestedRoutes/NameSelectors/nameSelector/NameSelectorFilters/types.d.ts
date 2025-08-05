import { SelectNameGenderEnum } from '@services/selectNameServices/enums';
import { SelectNameGenderFilterItemsTypes, SelectNameStylesFilterItemsTypes } from '@services/selectNameServices/types';

export interface NameSelectorFiltersProps {
  inputType: 'gender' | 'styles';
  isOpen: boolean;
}

export interface GenderFilterGeneratorProps {
  onSelect: (v: SelectNameGenderEnum) => void;
  list: SelectNameGenderFilterItemsTypes[];
  value: SelectNameGenderEnum;
}

export interface StylesFilterGeneratorProps {
  onSelect: (v: string) => void;
  list: SelectNameStylesFilterItemsTypes;
  value: string[];
}
