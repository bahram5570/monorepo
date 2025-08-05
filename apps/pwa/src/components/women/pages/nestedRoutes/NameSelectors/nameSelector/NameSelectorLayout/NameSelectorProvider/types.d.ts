import { SelectNameGenderEnum } from '@services/selectNameServices/enums';
import { FetchSelectNameTypes } from '@services/selectNameServices/types';

import { NameSelectorTabsEnum } from '../enum';

export interface NameSelectorProviderTypes {
  children: React.ReactNode;
  initialData: FetchSelectNameTypes;
}

export type NameSelectorProviderDataTypes = FetchSelectNameTypes;
export type NameSelectorProviderFavoriteFiltersTypes = { paneNo: number };
export type NameSelectorProviderAllFiltersTypes = { paneNo: number; gender: SelectNameGenderEnum; styles: string[] };

export type NameSelectorResetFiltersTypes = 'gender' | 'styles' | undefined;

export interface NameSelectorContextTypes {
  allFilters: NameSelectorProviderAllFiltersTypes;
  setAllFilters: React.Dispatch<React.SetStateAction<NameSelectorProviderAllFiltersTypes>>;

  favoriteFilters: NameSelectorProviderFavoriteFiltersTypes;
  setFavoriteFilters: React.Dispatch<React.SetStateAction<NameSelectorProviderFavoriteFiltersTypes>>;

  data: FetchSelectNameTypes | null;
  setData: React.Dispatch<React.SetStateAction<FetchSelectNameTypes>>;

  applyFilters: boolean;
  applyFiltersHandler: () => void;

  resetFiltersHandler: (v?: NameSelectorResetFiltersTypes) => void;
}

export type NameSelectorTabHandlerTypes = (v: NameSelectorTabsEnum) => void;

export interface NameSelectorTabsContextTypes {
  tab: NameSelectorTabsEnum;
  tabHandler: NameSelectorTabHandlerTypes;
}
