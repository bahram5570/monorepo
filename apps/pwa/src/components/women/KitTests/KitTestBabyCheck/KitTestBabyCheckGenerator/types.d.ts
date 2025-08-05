import { SelectedBabyCheckHandlerTypes } from '../__hooks__/useSelectedBabyCheck/types';
import { BabyCheckTypeEnums } from '../enum';
import { BabyCkeckListTypes } from '../types';

export interface KitTestBabyCheckGeneratorProps extends BabyCkeckListTypes {
  selectedBabyCheck: BabyCheckTypeEnums | null;
  selectedBabyCheckHandler: SelectedBabyCheckHandlerTypes;
}
