import { InputValueType } from '../type';

export type ModalPropsType = {
  value: InputValueType;
  onChange: (v: InputValueType) => void;
};

export type ConditionModalPropsType = ModalPropsType & {
  onCloseModal: () => void;
};
