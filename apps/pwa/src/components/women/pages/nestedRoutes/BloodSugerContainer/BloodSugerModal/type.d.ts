import { InputValueType } from '../type';

export type OnchangeHandlerType = (v: string | number | null, name: string) => void;

export type ModalPropsType = {
  value: InputValueType;
  onChange: OnchangeHandlerType;
};

export type ConditionModalPropsType = Pick<ModalPropsType, 'onChange'> & {
  name: string;
  onCloseModal: () => void;
  value: number | null;
};

export type ValueModalPropsType = Pick<ModalPropsType, 'onChange'> & {
  name: string;
  onCloseModal: () => void;
  value: number | null;
};
