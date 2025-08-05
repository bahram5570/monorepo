import { DateFormatType } from '../../types';
import { ListTypes } from '../useListsMaker/types';

export interface UseInitialListsProps {
  onInitialLists: (v: { years: ListTypes; months: ListTypes; days: ListTypes }) => void;
  startDate: string;
  endDate: string;
}
