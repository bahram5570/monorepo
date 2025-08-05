export const isDevelopeMode = () => {
  return process.env.NODE_ENV === 'development';
};

export const notificationPermission = async (callback?: (v: NotificationPermission) => Promise<void>) => {
  // if ('Notification' in window) {
  //   const permission = await Notification.requestPermission();
  //   if (callback) {
  //     if (permission === 'granted') {
  //       await callback('granted');
  //     } else {
  //       await callback('denied');
  //     }
  //   }
  // } else {
  //   if (callback) {
  //     await callback('default');
  //   }
  // }
};
