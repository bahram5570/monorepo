import { HttpTypes } from '@services/http/types';

export type UseApiErrorTypes = { message: string; status: number };

type ItemsTypes = Omit<HttpTypes, 'payload'>;
export interface UseApiTypes<T> extends ItemsTypes {
  onSuccess?: (v: T) => void;
  onError?: (error: UseApiErrorTypes) => void;
}
