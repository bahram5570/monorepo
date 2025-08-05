import { InfoListTypes } from '../../../__hooks__/useGetData/types';
import { SelectedSignsHandlerTypes } from '../CategoryGenerator/types';
import { SignsListsPros } from '../types';

export interface SignsListsContainerProps {
  info: InfoListTypes[0];
  selectHandler: SelectedSignsHandlerTypes;
}
