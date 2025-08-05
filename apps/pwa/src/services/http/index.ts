import { applyOptions, clearCacheHandler } from './__utils__';

import {
  BASE_URL_LOCAL_1,
  BASE_URL_SERVER,
  BASE_URL_STAGE_1,
  BASE_URL_STAGE_2,
  BASE_URL_STAGE_SSL,
} from '@constants/links.constants';

import { HttpResultTypes, HttpTypes } from './types';

// export const baseUrl = BASE_URL_SERVER
export const baseUrl = BASE_URL_STAGE_SSL;
// export const baseUrl = BASE_URL_STAGE_1
// export const baseUrl = BASE_URL_STAGE_2
// export const baseUrl = BASE_URL_LOCAL_1

const http = async <T>(props: HttpTypes) => {
  const result: HttpResultTypes<T> = { data: undefined, error: undefined };

  try {
    const { options } = await applyOptions(props);
    const url = `${baseUrl}/${props.url}`;

    const newOptions = { ...options } as any;
    const res = await fetch(url, { ...newOptions });

    if (!res.ok) {
      const status = res.status;

      if (status === 401 || status === 403) {
        clearCacheHandler();
      }

      throw new Error(res.statusText, { cause: status });
    }

    result.data = await res.json();
  } catch (er) {
    const error = er as Error;
    const cause = Number(error.cause);
    const status = isNaN(cause) ? 500 : cause;

    result.error = { message: error.message, status };
  }

  return result;
};

export default http;
