import { SelectNameGenderEnum } from './enums';

export type SelectNameGenderFilterItemsTypes = {
  title: string;
  subtitle: string;
  value: SelectNameGenderEnum;
};

export type SelectNameStylesFilterItemsTypes = {
  [x in string]: {
    items: {
      title: string;
      value: string;
      subtitle: string;
    }[];
  };
};

export type FetchSelectNameCardTypes = {
  id: string;
  title: string;
  isLiked: boolean;
  description: string;
  gender: SelectNameGenderEnum;
};

export type FetchSelectNameActivationTypes = {
  weclome: {
    btn: string;
    title: string;
    description: string;
  };

  charFilter: {
    btn: string;
    hint: string;
    title: string;
  };

  gender: {
    btn: string;
    title: string;
    items: SelectNameGenderFilterItemsTypes[];
  };

  style: {
    btn: string;
    title: string;
    filterTitle: string;
    styles: SelectNameStylesFilterItemsTypes;
  };
};

export type FetchSelectNameTypes = {
  image: string;
  pageNo: number;
  pageSize: number;
  description: string;
  allTotalCount: number;
  favoritesTotalCount: number;
  all: FetchSelectNameCardTypes[];
  suggest: FetchSelectNameCardTypes[];
  favorites: FetchSelectNameCardTypes[];
  filters: SelectNameStylesFilterItemsTypes;
  genderFilters: SelectNameGenderFilterItemsTypes[];
};
