import { CustomModalProps } from '../../types';

type Types = Pick<CustomModalProps, 'isOpen' | 'isSlidingMode'>;

export interface UseModalStatusProps extends Types {}
