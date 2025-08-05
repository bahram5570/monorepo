import { PartnerCodeResponseType } from './__hooks__/useGetdata/type';

type UserCodeInfoType = Pick<PartnerCodeResponseType, 'code' | 'shareText'>;
