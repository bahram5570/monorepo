import { EditActivationOptionsEnum } from '../useGetData/enum';
import { EditActivationOptionsTypes, EditActivationQuestionsTypes } from '../useGetData/types';

export type SelectHandlerValueTypes = Pick<EditActivationQuestionsTypes, 'keyName'> & {
  isSelected: boolean;
  item: EditActivationOptionsTypes;
};

export type EditActivationPayloadTypes = {
  [x in string]: { value: number; latestOptionStrategy: EditActivationOptionsEnum };
};
