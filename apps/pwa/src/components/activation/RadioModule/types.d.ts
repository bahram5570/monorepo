import { OptionsTypes } from '@services/activationServices/types';

export type SelectedItemTypes = number | null;

export interface RadioModuleProps {
  onSelect: (id: number) => void;
  options: OptionsTypes;
}

export interface RadioGeneratorProps {
  selectedItemHandler: (id: number) => void;
  selectedItem: SelectedItemTypes;
  option: OptionsTypes[0];
}
