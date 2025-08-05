import { firebaseToken } from '@lib/firebaseConfig';

export const permissionHandler = async (onReload: () => void) => {
  await Notification.requestPermission().then(async (result) => {
    if (result === 'granted') {
      await firebaseToken(onReload);
    }
  });
};
