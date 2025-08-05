import { FetchSelectNameCardTypes } from '@services/selectNameServices/types';

export type FavoriteResponseTypes = {
  totalCount: number;
  items: FetchSelectNameCardTypes[];
};
