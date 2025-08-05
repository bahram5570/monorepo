import { getUserCookie } from '@utils/cookies';

import { USER_COOKIE_NAME } from '@constants/cookie.constants';
import Cookies from 'js-cookie';

import { CacheTypes, HttpTypes, OptionsTypes } from './types';

const cacheOptionsFinder = (props: HttpTypes) => {
  let cacheOptions: CacheTypes = {};
  const cache = props.cache || 'no-cache';

  if (props.cache === 'force-cache') {
    cacheOptions = { cache, revalidate: props.revalidate || 0 };
  } else {
    cacheOptions = { cache };
  }

  return { cacheOptions };
};

const clientAuthorizationHandler = () => {
  const { user } = getUserCookie();
  return user ? `Bearer ${user.token}` : undefined;
};

const serverAuthorizationHandler = async () => {
  const { cookies } = await import('next/headers');
  const userData = cookies().get(USER_COOKIE_NAME)?.value as undefined | string;
  return userData ? `Bearer ${JSON.parse(userData).token}` : undefined;
};

const authTokenFinder = async () => {
  let Authorization: undefined | string = undefined;

  // # Base on rendering type (client or server side), proper cookie function will be used
  if (typeof window !== 'undefined') {
    Authorization = clientAuthorizationHandler();
  } else {
    Authorization = await serverAuthorizationHandler();
  }

  return { Authorization };
};

export const applyOptions = async (props: HttpTypes) => {
  const { cacheOptions } = cacheOptionsFinder(props);
  const { Authorization } = await authTokenFinder();

  let options: OptionsTypes = { method: props.method || 'GET' };
  options = props.contentType === 'multipart/form-data' ? { ...options } : { ...options, ...cacheOptions };

  let headers = {};
  headers = { ...headers, Authorization };

  if (props.method === 'POST' || props.method === 'PUT' || props.method === 'DELETE') {
    let body = undefined;

    if (props.contentType === 'multipart/form-data') {
      body = props.payload;
    } else {
      headers = { ...headers, 'Content-Type': props.contentType || 'application/json' };
      body = JSON.stringify(props.payload);
    }

    options = { ...options, body };
  }

  options = { ...options, headers };

  return { options };
};

export const clearCacheHandler = () => {
  Cookies.remove(USER_COOKIE_NAME);
  window.location.href = '/';
};
