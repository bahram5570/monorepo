import { JaanPanahTabPropsType, MarhaamTabPropsType } from '../type';

type ItemType = Pick<MarhaamTabPropsType, 'result'>;

export interface TabContainerPropsType extends ItemType {}
