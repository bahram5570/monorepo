import { SERVER_URL, SSL_STAGE_URL, STAGE_URL } from '@constants/links.constants';

import { applyOptions, clearCacheHandler } from './__utils__';
import { HttpResultTypes, HttpTypes } from './types';

// export const baseUrl = STAGE_URL;
// export const baseUrl = SSL_STAGE_URL;
export const baseUrl = SERVER_URL;

export const articleImageUrl = baseUrl + '/support/article/panel/image/';
export const fileImageUrl = baseUrl + '/file/';

const http = async <T>(props: HttpTypes) => {
  const result: HttpResultTypes<T> = { data: undefined, error: undefined };

  try {
    const { options } = await applyOptions(props);
    const url = `${baseUrl}/${props.url}`;
    const res = await fetch(url, options);

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
