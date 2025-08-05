import { HEADER_MULTI_LINK, HEADER_SINGLE_LINK } from '../../types';

export interface HeaderMobileLInksTypes {
  isOpen: boolean;
  isOpenHandler: (b: boolean) => void;
}

export type SingleLinkGeneratorTypes = HEADER_SINGLE_LINK & {
  closeHandler: () => void;
};

export type MultiLinkGeneratorTypes = HEADER_MULTI_LINK & {
  isSelected: boolean;
  closeHandler: () => void;
  selectHandler: () => void;
};
