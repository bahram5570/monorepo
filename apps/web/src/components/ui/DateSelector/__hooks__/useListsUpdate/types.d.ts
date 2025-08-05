import { ValuesTypes } from '../../types';
import { InitialListsTypes, ListTypes } from '../useListsMaker/types';

export interface UseListsUpdateProps {
  onListsUpdate: (v: { months: ListTypes; days: ListTypes }) => void;
  initialLists: InitialListsTypes;
  values: ValuesTypes;
  startDate: string;
  endDate: string;
}

export type StartAndEndDatesTypes = (v: { startDate: string; endDate: string }) => {
  startMonth: string;
  startYear: string;
  startDay: string;
  endMonth: string;
  endYear: string;
  endDay: string;
};

export type MonthListUpdaterTypes = (v: {
  monthsList: ListTypes;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  year: string;
}) => ListTypes;

export type DaysListUpdaterTypes = (v: {
  daysList: ListTypes;
  startMonth: string;
  startYear: string;
  endMonth: string;
  startDay: string;
  endDay: string;
  endYear: string;
  month: string;
  year: string;
}) => ListTypes;
