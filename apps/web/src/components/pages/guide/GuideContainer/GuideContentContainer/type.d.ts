import { GuideContainerPropsType } from '../type';

export type stepsContentType = Pick<GuideContainerPropsType, 'stepsContent'>;

export interface GuideContentContainerPropsType extends stepsContentType {
  currentStep: number;
}
