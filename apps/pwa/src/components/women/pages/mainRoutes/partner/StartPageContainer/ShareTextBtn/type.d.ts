import { PartnerCodeResponseType } from '../__hooks__/useGetdata/type';

type shareTextType = Pick<PartnerCodeResponseType, 'shareText'>;

export interface ShareTextBtnPropsType extends shareTextType {}
