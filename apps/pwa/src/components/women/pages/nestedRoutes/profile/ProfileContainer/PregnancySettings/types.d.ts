import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

export interface PregnancySettingsProps extends Pick<ProfileResponseTypes, 'status' | 'isDelivery' | 'pregnancyDate'> {}
