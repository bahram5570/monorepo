import { PregnancyDate1ResponseTypes } from '../__hooks__/useCalculatePregnancyDate/types';

export interface ResultModuleTypes {
  onReset: () => void;
  pregnancyDateResult: string;
  weeksResult: PregnancyDate1ResponseTypes;
}
