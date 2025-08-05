import { OnchangeHandlerType } from '../../type';
import { FormDataType, InputType } from '../type';

export type NoteTextareaPropsType = InputType & {
  value: string | undefined;
  onchangeHandler: OnchangeHandlerType;
};
