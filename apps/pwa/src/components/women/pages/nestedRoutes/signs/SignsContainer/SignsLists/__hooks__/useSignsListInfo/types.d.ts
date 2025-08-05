import { SignsContainerProps } from '../../../types';

export interface UseSignsListInfoProps {
  infoData: Pick<SignsContainerProps, 'infoList'>['infoList'][0];
  slideIndex: number;
  slide: number;
}
