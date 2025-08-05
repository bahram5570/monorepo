import { InitialEnabledValueTypes } from './types';

export const initialEnabledValue: InitialEnabledValueTypes = (fetchOnMount) => {
  switch (fetchOnMount) {
    case true:
      return true;
    case false:
      return false;
    default:
      return true;
  }
};
