import { InformationType, ResponsePropsType } from '../__hooks__/useGetData/type';

type DateType = Pick<Pick<ResponsePropsType, 'data'>['data'], 'from' | 'to'>;

export interface DateCheckupQestionPropsType extends DateType {}
