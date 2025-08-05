import { ChallengeResponseType } from '../__hooks__/useGetData/type';

export type PartnerCardPropsType = Pick<ChallengeResponseType, 'partner' | 'valid'>;
