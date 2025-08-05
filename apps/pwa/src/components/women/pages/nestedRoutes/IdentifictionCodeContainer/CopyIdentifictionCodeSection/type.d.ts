import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

type IdentifictionCode = Pick<ProfileResponseTypes, 'interfaceCode'>;

export interface CopyIdentifictionCodeSectionPropsType extends IdentifictionCode {
  copyToClipboard: (text: string) => Promise<void>;
}
