import { OperatingSystemTypes } from '@providers/OperatingSystemProvider/types';

export const isDevelopeMode = () => {
  return process.env.NODE_ENV === 'development';
};

export const operatingSystemDetector = (userAgent: string | null) => {
  const agent = (userAgent || '').toLocaleLowerCase();
  let os: OperatingSystemTypes = 'windows';

  if (/iphone|ipad|ipod|macintosh|mac os|mac os x/.test(agent)) {
    os = 'ios';
  } else if (/android/.test(agent)) {
    os = 'android';
  }

  return os;
};
