import { ItemType } from '../__hooks__/useGetData/type';
import { NoteValueType, OnchangeHandlerType } from '../type';

export type InputType = {
  label: string;
  description: string;
  name: keyof ItemType;
};

export type FormDataType = {
  btnModal: InputType[];
  textareaInput: InputType[];
};

export type NoteInputGeneratorPropsType = {
  onChangeHandler: OnchangeHandlerType;
  noteValue: ItemType;
};
