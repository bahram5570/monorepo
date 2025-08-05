import { SignsContainerProps } from '../../types';

export interface UseSignsSlideProps extends Pick<SignsContainerProps, 'infoList'> {}

export type SlideHandlerTypes = (v: number) => void;
