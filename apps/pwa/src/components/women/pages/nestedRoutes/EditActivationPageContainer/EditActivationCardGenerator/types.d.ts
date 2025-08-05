import { SelectHandlerValueTypes } from '../__hooks__/useEditActivationPayload/types';
import { EditActivationOptionsTypes, EditActivationQuestionsTypes } from '../__hooks__/useGetData/types';

export interface EditActivationCardGeneratorProps
  extends Pick<EditActivationQuestionsTypes, 'title' | 'initStrategy' | 'options'> {
  value: number;
  selectOptionHandler: (v: Omit<SelectHandlerValueTypes, 'keyName'>) => void;
}
