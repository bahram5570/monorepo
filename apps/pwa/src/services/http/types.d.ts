type DoCacheTypes = {
  cache?: 'force-cache';
  revalidate?: number;
};

type NoCacheTypes = {
  cache?: 'no-cache';
};

export type MethodNameTypes = 'GET' | 'DELETE' | 'POST' | 'PUT';

export type CacheTypes = DoCacheTypes | NoCacheTypes;

export type HttpContentTypeTyps = 'application/json' | 'multipart/form-data';

export type HttpTypes = CacheTypes & {
  contentType?: HttpContentTypeTyps;
  method?: MethodNameTypes;
  payload?: object;
  url: string;
};

export type OptionsTypes = {
  method?: MethodNameTypes;
  body?: string | object;
  headers?: HeadersInit;
};

export type HttpResultTypes<T> = { data: undefined | T; error: undefined | { message: string; status: number } };
