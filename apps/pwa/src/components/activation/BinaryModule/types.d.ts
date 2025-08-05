import { OptionsTypes } from '@services/activationServices/types';

type BinaryOptionsTypes = OptionsTypes[0] & { index: number; isSingleSelect?: boolean };

export interface BinaryModuleProps {
  binaryOptions: BinaryOptionsTypes[];
  valueHandler: (v: number) => void;
}

export type SelectedItemHandlerTypes = (i: { selectedIndex: number; isSingleSelect?: boolean }) => void;

export interface ItemGeneratorProps {
  selectedItemHandler: SelectedItemHandlerTypes;
  option: BinaryOptionsTypes;
  isSelected: boolean;
}

export type IndexToBinaryTypes = (v: { binaryArray: string[]; selectedIndex: number }) => number;
