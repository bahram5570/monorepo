import {
  SelectedDigitalBabyCheckHandlerTypes,
  SelectedDigitalBabyCheckTypes,
} from '../__hooks__/useSelectedDigitalBabyCheck/types';
import { DigitalBabyCheckListTypes } from '../types';

export interface KitTestDigitalBabyCheckGeneratorProps extends DigitalBabyCheckListTypes {
  selectedDigitalBabyCheck: SelectedDigitalBabyCheckTypes;
  selectedDigitalBabyCheckHandler: SelectedDigitalBabyCheckHandlerTypes;
}
