import { ActivationDataTypes } from '@services/activationServices/types';

type PageTypes = Pick<ActivationDataTypes, 'reward'>['reward'][0]['page'];
export interface AccessNotificationContainerProps extends PageTypes {
  firstName?: string;
  onComplete?: () => void;
}

export interface AccessNotificationHeadingImageProps
  extends Pick<AccessNotificationContainerProps, 'doRepeat' | 'image'> {
  backgroundColor: string;
}

export interface AccessNotificationScriptsProps
  extends Pick<AccessNotificationContainerProps, 'title' | 'description' | 'firstName'> {}

export interface AccessNotificationBtnProps extends Pick<AccessNotificationContainerProps, 'btnLabel' | 'onComplete'> {}
