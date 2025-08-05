import { GetTypes, UseApiCommonObjectsTypes } from '../types';

export type UseHelperQueryProps<T> = GetTypes<T> & UseApiCommonObjectsTypes<T>;

export type InitialEnabledValueTypes = (fetchOnMount?: boolean) => boolean;
