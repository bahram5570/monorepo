import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

type IdentifictionCode = Pick<ProfileResponseTypes, 'interfaceShareText'>;

export interface ShareIdentifictionCodeSectionPropsType extends IdentifictionCode {}
