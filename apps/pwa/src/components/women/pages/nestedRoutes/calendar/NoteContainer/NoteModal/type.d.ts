import { NoteInputGeneratorPropsType } from '../NoteInputGenerator/type';

export type NoteModalPropsType = Pick<NoteInputGeneratorPropsType, 'noteValue' | 'onChangeHandler'>;

export type CalendarModalPropsType = Pick<NoteModalPropsType, 'onChangeHandler'> & {
  dateTime: string;
  onCloseModalHandler: () => void;
};
