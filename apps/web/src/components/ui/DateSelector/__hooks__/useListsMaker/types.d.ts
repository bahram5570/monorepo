import { DateFormatType, ValuesTypes } from '../../types';

export interface UseListsMakerProps {
  values: ValuesTypes;
  startDate: string;
  endDate: string;
}

export type ListTypes = { title: string; value: string }[];

export type YearsListMakerTypes = () => void;

export type InitialListsTypes = null | { years: ListTypes; months: ListTypes; days: ListTypes };
