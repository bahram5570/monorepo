import { BabyCheckTypeEnums } from '../../KitTestBabyCheck/enum';

export interface TestKitModalsListsBabyCheckProps {
  data: { type: BabyCheckTypeEnums; result: number; createTime: string }[];
}
