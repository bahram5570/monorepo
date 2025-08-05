import { KitTestModuleTypeEnums } from '@components/women/KitTests/enum';

export interface TestKitModalsContainerListProps {
  gregorianDate: string;
  moduleType: KitTestModuleTypeEnums;
}

export interface TestKitModalsPropsType {
  onComplete?: () => void;
}
