import { ProfileLinkListPropsType } from '../ProfileLinkList/type';

export interface BreastfeedingSettingPropsType
  extends Pick<ProfileLinkListPropsType, 'status' | 'isDelivery' | 'pregnancyDate'> {}
