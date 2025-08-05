import { TabContainerPropsType } from '../type';

type ResultType = Pick<TabContainerPropsType, 'result'>['result'];
type ItemType = Pick<ResultType, 'children'>;

export interface DistractPropsType extends ItemType {}
