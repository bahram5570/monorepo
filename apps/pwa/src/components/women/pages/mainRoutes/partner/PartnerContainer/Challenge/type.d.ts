import { ChallengeResponseType } from '../__hooks__/useGetData/type';

export type ChallengePropsType = Pick<ChallengeResponseType, 'card' | 'valid' | 'button'>;
