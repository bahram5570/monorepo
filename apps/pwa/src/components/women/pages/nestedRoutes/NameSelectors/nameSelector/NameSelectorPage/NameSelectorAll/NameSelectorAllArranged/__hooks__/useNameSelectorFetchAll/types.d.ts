import { FetchSelectNameCardTypes } from '@services/selectNameServices/types';

type ApiInfoTypes = 'pagination' | 'filters';

export type NameSelectorApiInfoTypes = null | { url: string; type: ApiInfoTypes };

export type NameSelectorApiHandlerTypes = (v: ApiInfoTypes) => void;

export type NameSelectorFetchAllResponseTypes = {
  totalcount: number;
  items: FetchSelectNameCardTypes[];
};
