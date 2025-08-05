import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

export interface ProfileLinkListPropsType
  extends Pick<ProfileResponseTypes, 'isDelivery' | 'status' | 'pregnancyDate'> {
  hasSubscribtion: boolean;
}
