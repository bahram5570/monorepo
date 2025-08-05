import { FetchSelectNameCardTypes } from '@services/selectNameServices/types';

type HasPagination = {
  onPagination: () => void;
  isLastIndex: boolean;
  isLoading: boolean;
};
type NoPagination = {
  onPagination?: undefined;
};
type ItemsTypes = HasPagination | NoPagination;

export type NameSelectorCardProps = ItemsTypes & FetchSelectNameCardTypes & { startingLetter?: string };
