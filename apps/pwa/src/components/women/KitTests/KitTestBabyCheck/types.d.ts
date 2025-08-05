import { KitTestsContainerProps } from '../KitTestsContainer/types';
import { BabyCheckTypeEnums } from './enum';

export interface KitTestBabyCheckProps extends Pick<KitTestsContainerProps, 'gregorianDate' | 'moduleType'> {}

export type BabyCkeckListTypes = { icon: string; babyCheckType: BabyCheckTypeEnums; title: string };
