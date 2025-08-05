import { ResponsePropsType } from '../__hooks__/useGetData/type';

export type PartnerAvatarPropsType = Pick<ResponsePropsType, 'profileUrl' | 'name' | 'jointime'>;
