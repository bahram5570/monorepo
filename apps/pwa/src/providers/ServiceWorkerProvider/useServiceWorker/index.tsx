import { useEffect, useRef } from 'react';

import { notifHandlerActionMaker } from './__utils__';
import { isDevelopeMode } from '@utils/system';

import useWidgetActions from '@hooks/useWidgetActions';
import { getFirebaseMessaging } from '@lib/firebaseConfig';
import { MessagePayload, onMessage } from 'firebase/messaging';

import { STORED_NOTIFICATIONS_CACHE_NAME } from '../constants';
import { NotificationsDataTypes } from './types';

const useServiceWorker = () => {
  const isFirstTime = useRef(isDevelopeMode());
  const { actionHandler } = useWidgetActions();

  const notifHandler = (data: NotificationsDataTypes) => {
    const action = notifHandlerActionMaker(data);
    actionHandler(action);
  };

  const handleAppNotification = async (messagePayload: MessagePayload) => {
    if (navigator.serviceWorker.controller) {
      // # Handles incoming Firebase message payload by sending notification data to the service worker

      navigator.serviceWorker.controller.postMessage({
        actionType: 'APP_NOTIFICATION_CLICK',
        payload: messagePayload.data,
      });

      // # setting up a listener for click events to trigger the notifHandler

      navigator.serviceWorker.addEventListener('message', (event) => {
        notifHandler(event.data.payload);
      });
    }
  };

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const handleServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        // # Register service worker & firebase

        await navigator.serviceWorker.register('/serviceWorker.js').then(async () => {
          // # Initializes Firebase Messaging to handle push notifications when the app is open

          await getFirebaseMessaging().then((messaging) => {
            if (messaging) {
              onMessage(messaging, (payload) => {
                handleAppNotification(payload);
              });
            }
          });

          // # Handle notification action after the app is open by getting data from cache

          caches.open(STORED_NOTIFICATIONS_CACHE_NAME).then((cache) => {
            cache.match(`/${STORED_NOTIFICATIONS_CACHE_NAME}`).then((res) => {
              res?.json().then((data) => {
                notifHandler(data);
                caches.delete(STORED_NOTIFICATIONS_CACHE_NAME);
              });
            });
          });
        });
      }
    };

    handleServiceWorker();

    window.addEventListener('focus', handleServiceWorker);

    return () => {
      window.removeEventListener('focus', handleServiceWorker);
    };
  }, []);
};

export default useServiceWorker;
