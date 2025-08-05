import { CultureTypes } from '@providers/CultureProvider/types';

import { ListTypes } from '../useListsMaker/types';

export type UseInitialListsProps = Pick<CultureTypes, 'calendarType'> & {
  onInitialLists: (v: { years: ListTypes; months: ListTypes; days: ListTypes }) => void;
  startDate: string;
  endDate: string;
};
