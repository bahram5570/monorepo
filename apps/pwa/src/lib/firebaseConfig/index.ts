import { getFirebaseCookieToken, getUserCookie, getUserExpiresDate, setUserCookie } from '@utils/cookies';

import { FIREBASE_COOKIE_NAME } from '@constants/cookie.constants';
import { initializeApp } from 'firebase/app';
import { Messaging, getMessaging, getToken } from 'firebase/messaging';
import cookies from 'js-cookie';

import { FIREBASE_CONFIG, FIREBASE_VAPID_KEY } from './constants';

export const getFirebaseMessaging = async (): Promise<Messaging | null> => {
  if (typeof window === 'undefined') {
    return null;
  }

  const fireBaseApp = initializeApp(FIREBASE_CONFIG);
  return getMessaging(fireBaseApp);
};

export const firebaseToken = async (onReload: () => void) => {
  if ('Notification' in window && Notification.permission === 'granted') {
    const isServiceWorkerReady = await navigator.serviceWorker.ready;

    if (isServiceWorkerReady) {
      const token = getFirebaseCookieToken();
      const messaging = await getFirebaseMessaging();

      if (token === '') {
        const registration = await navigator.serviceWorker.getRegistration();

        if (messaging) {
          const ft = await getToken(messaging, {
            vapidKey: FIREBASE_VAPID_KEY,
            serviceWorkerRegistration: registration,
          });

          if (ft) {
            cookies.set(FIREBASE_COOKIE_NAME, ft, { expires: getUserExpiresDate(365) });

            // # Reset the user token
            const { user } = getUserCookie();

            if (user) {
              const updatedUser = { ...user };
              updatedUser.createdTime = Date.now();
              setUserCookie(updatedUser);
              onReload();
            }
          }
        }
      }
    }
  }
};
