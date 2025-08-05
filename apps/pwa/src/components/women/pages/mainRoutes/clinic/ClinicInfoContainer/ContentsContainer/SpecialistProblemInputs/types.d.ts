import { FileDataHandlerTypes } from '@hooks/useFileUpload/types';

import { ContentsContainerProps } from '../types';
import { QuestionValuesHandlerTypes } from './__hooks__/useQuestionValues/types';
import { ValuesHandlerTypes } from './__hooks__/useValues/types';

type InfoTypes = Pick<ContentsContainerProps, 'data'>['data']['info'];

export interface SpecialistProblemInputsProps extends Pick<InfoTypes, 'info' | 'infoHelper'> {
  questionValuesHandler: QuestionValuesHandlerTypes;
}

export interface FileInputProps {
  valuesHandler: ValuesHandlerTypes;
  fileName: string;
}
