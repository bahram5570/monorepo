import { CacheTypes, HttpContentTypeTyps, MethodNameTypes } from '@services/http/types';

type GetTypes<T> = CacheTypes & {
  method: 'GET';
  initialData?: T;
  queryKey: [string];
  cacheTime?: number;
  fetchOnMount?: boolean;
};

type DeleteTypes = {
  method: 'DELETE';
};

type PostTypes = {
  method: 'POST';
  contentType?: HttpContentTypeTyps;
};

type PutTypes = {
  method: 'PUT';
  contentType?: HttpContentTypeTyps;
};

type MethodTypes<T> = GetTypes<T> | PostTypes | PutTypes | DeleteTypes;

export type UseApiCommonObjectsTypes<T> = {
  onSuccess?: (v: T) => void;
  onError?: () => void;
  api: string;
};

export type UseApiPorps<T> = MethodTypes<T> & UseApiCommonObjectsTypes<T>;
