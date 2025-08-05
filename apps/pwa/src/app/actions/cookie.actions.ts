'use server';

import { CULTURE_COOKIE_NAME } from '@constants/cookie.constants';
import { CultureTypes } from '@providers/CultureProvider/types';
import { cookies } from 'next/headers';

export const setCultureCookie = async (culture: CultureTypes) => {
  cookies().set({
    value: JSON.stringify(culture),
    name: CULTURE_COOKIE_NAME,
    httpOnly: false,
    path: '/',
  });
};

export const getCultureCookie = async () => {
  const cookie = cookies().get(CULTURE_COOKIE_NAME);
  const result: CultureTypes | null = cookie ? JSON.parse(cookie.value) : null;
  return result;
};

export const deleteCultureCookie = async () => {
  cookies().delete(CULTURE_COOKIE_NAME);
};
