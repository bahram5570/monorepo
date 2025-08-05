import { ResponsePropsType } from './__hooks__/useGetData/type';

export type DeletePartnerPropsType = Pick<ResponsePropsType, 'jointime' | 'name' | 'profileUrl'>;
