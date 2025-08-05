import { EditActivationOptionsTypes } from '../../__hooks__/useGetData/types';

export interface EditActivationOptionGeneratorProps extends Pick<EditActivationOptionsTypes, 'title'> {
  isSelected: boolean;
  onClick: () => void;
  isFirstIndex: boolean;
}
