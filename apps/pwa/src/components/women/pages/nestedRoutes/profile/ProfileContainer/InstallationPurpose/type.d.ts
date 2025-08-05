import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

export interface InstallationPurposePropsType extends Pick<ProfileResponseTypes, 'changeStatusBtns'> {}
