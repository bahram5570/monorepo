importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-messaging-compat.js');

const OFFLINE_CACHE_NAME = 'offlinePage';
const STORED_NOTIFICATION_CACHE_NAME = 'storedNotification';
const CACHE_OFFLINE_PAGE = '/offlinePage.html';

self.addEventListener('install', (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(OFFLINE_CACHE_NAME).then((cache) => {
      return cache.add(CACHE_OFFLINE_PAGE);
    }),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== OFFLINE_CACHE_NAME) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then(async (response) => {
        if (navigator.onLine) {
          return response;
        }

        return await offlineResponse();
      })
      .catch(async () => {
        try {
          return await offlineResponse();
        } catch (error) {
          return await offlineResponse();
        }
      }),
  );
});

const offlineResponse = async () => {
  const errorResponse = new Response(
    `
      <!DOCTYPE html>
      <html lang="fa">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>ایمپو</title>
          <style>
            body { text-align: center; padding: 50px; }
          </style>
        </head>
        
        <body>
          <h1>مشکلی پیش اومده!</h1>
        </body>
      </html>
    `,
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/html' },
    },
  );

  try {
    const cache = await caches.open(OFFLINE_CACHE_NAME);
    const offlinePage = await cache.match('/offlinePage.html');

    if (offlinePage) {
      return offlinePage;
    } else {
      return errorResponse;
    }
  } catch (error) {
    return errorResponse;
  }
};

// # Firebase setup

const firebaseConfig = {
  appId: '1:497330213206:web:538d02ea2d3155564086f7',
  apiKey: 'AIzaSyDE0iz1eBW9Ku2do2kKmsJnUj6tvB4_Z2U',
  databaseURL: 'https://impo-53eb6.firebaseio.com',
  authDomain: 'impo-53eb6.firebaseapp.com',
  storageBucket: 'impo-53eb6.appspot.com',
  messagingSenderId: '497330213206',
  measurementId: 'G-ESJG2B6KLW',
  projectId: 'impo-53eb6',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.data?.title || '', {
    icon: '/assets/images/questionsImpo.svg',
    body: payload.data?.message || '',
    image: payload.data?.image || '',
    data: payload.data,
  });
});

self.addEventListener('message', (event) => {
  // # Gets notification that made in app
  const payload = event.data?.payload;
  if (event.data?.actionType !== 'APP_NOTIFICATION_CLICK' || !payload) {
    return;
  }

  self.registration.showNotification(payload?.title || '', {
    icon: '/assets/images/questionsImpo.svg',
    body: payload?.message || '',
    data: event.data,
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((allCliensts) => {
      const actionType = event.notification?.data?.actionType;

      // # Handle notification click if app is open
      if (actionType === 'APP_NOTIFICATION_CLICK') {
        allCliensts.forEach((client) => {
          client.postMessage(event.notification.data);
        });

        return;
      }

      // # Open app when it's closed
      caches.open(STORED_NOTIFICATION_CACHE_NAME).then((cache) => {
        const res = new Response(JSON.stringify(event.notification.data), {
          headers: { 'Content-Type': 'application/json' },
        });

        return cache.put(STORED_NOTIFICATION_CACHE_NAME, res);
      });

      clients.openWindow('/');
    }),
  );
});
