import { CycleThemeEnum } from '@services/loginServices/enum';

import { FIREBASE_COOKIE_NAME, PAYMENT_COOKIE_NAME, USER_COOKIE_NAME } from '@constants/cookie.constants';
import cookies from 'js-cookie';

import { toEnglishNumbers } from './numbers';

export const cookieCreatedTime = (minutes?: number) => {
  const min = minutes || 60;
  const timeInterval = 1000 * 60 * min; // # 1 hour
  const createdTime = Date.now() + timeInterval;

  return createdTime;
};

export const getUserExpiresDate = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);

  return date;
};

// # User
export type UserCookieTypes = {
  installationPurpose: { status: number; periodStatus: number };
  cycleTheme: CycleThemeEnum;
  createdTime?: number;
  password: string;
  identity: string;
  token: string;
};

export const setUserCookie = (props: UserCookieTypes) => {
  const createdTime = props.createdTime || cookieCreatedTime();

  const user = JSON.stringify({
    installationPurpose: props.installationPurpose,
    identity: toEnglishNumbers(props.identity),
    cycleTheme: props.cycleTheme,
    password: props.password,
    token: props.token,
    createdTime,
  });

  cookies.set(USER_COOKIE_NAME, user, { expires: getUserExpiresDate(365) });
};

export const getUserCookie = () => {
  const cookie = cookies.get(USER_COOKIE_NAME);
  const user = typeof cookie === 'string' ? (JSON.parse(cookie) as UserCookieTypes) : null;

  return { user };
};

export const getFirebaseCookieToken = () => {
  const cookie = cookies.get(FIREBASE_COOKIE_NAME);
  return typeof cookie === 'string' ? cookie : '';
};

// # Payment

type PaymentCookieTypes = { route: string };

export const setPaymentCookie = (v: PaymentCookieTypes) => {
  cookies.set(PAYMENT_COOKIE_NAME, JSON.stringify(v), { expires: cookieCreatedTime(10) });
};

export const getPaymentCookie = () => {
  const cookie = cookies.get(PAYMENT_COOKIE_NAME);
  return cookie ? (JSON.parse(cookie) as PaymentCookieTypes) : null;
};

export const removePaymentCookie = () => {
  cookies.remove(PAYMENT_COOKIE_NAME);
};
