import { BioType, TextBioType } from '../../../__hooks__/useCalendarGetData/types';
import { BiorhythmStatusType } from '../type';

export type BiorhythmContainerProps = BiorhythmStatusType & {
  percent: number;
};
