import { BioType, SingleDateTypes, TextBioType } from '../../__hooks__/useCalendarGetData/types';

export type SelectedDayBiorhythmProps = {
  selectedDateInfo: SingleDateTypes;
};

export type BiorhythmStatusType = {
  Icon: ReactDOM;
  text: string;
  type: keyof BioType;
  typeText: keyof TextBioType;
};
