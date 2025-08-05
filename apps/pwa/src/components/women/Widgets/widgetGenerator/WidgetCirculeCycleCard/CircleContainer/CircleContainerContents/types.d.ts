import { CircleContainerProps } from '../types';

type DataTypes = NonNullable<Pick<CircleContainerProps, 'data'>['data']>;
type ItemsTypes = Pick<DataTypes, 'button' | 'description' | 'leading' | 'title' | 'textColor'>;
export interface CircleContainerContentsProps extends ItemsTypes {}

export interface BtnProps extends Pick<CircleContainerContentsProps, 'button'> {}
