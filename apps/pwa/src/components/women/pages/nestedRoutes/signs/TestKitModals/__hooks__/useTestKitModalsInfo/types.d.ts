import { BabyCheckTypeEnums } from '@components/women/KitTests/KitTestBabyCheck/enum';
import { KitTestModuleTypeEnums } from '@components/women/KitTests/enum';

export type TestKistModalListTypes = {
  type: 'lists';
  gregorianDate: string;
  moduleType: KitTestModuleTypeEnums;
};

export type TestKistModalBabyCheckTypes = {
  type: 'babyCheckSelectors';
  gregorianDate: string;
  babyCheckType: BabyCheckTypeEnums;
  moduleType: KitTestModuleTypeEnums;
};

export type ModalInfoTypes = null | TestKistModalListTypes | TestKistModalBabyCheckTypes;
