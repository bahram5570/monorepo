import { CompleteRegisterContainerProps } from '../../types';

export interface UseCompleteRegisterCookieProps
  extends Pick<CompleteRegisterContainerProps, 'fetchedUser' | 'clearStorage'> {}
