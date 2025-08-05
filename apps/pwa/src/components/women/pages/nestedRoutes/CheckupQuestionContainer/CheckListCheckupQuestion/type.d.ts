import { ResponsePropsType } from '../__hooks__/useGetData/type';

type CheckListType = Pick<Pick<ResponsePropsType, 'data'>['data'], 'checkList'>;

export interface CheckListCheckupQuestionPropsType extends CheckListType {}
