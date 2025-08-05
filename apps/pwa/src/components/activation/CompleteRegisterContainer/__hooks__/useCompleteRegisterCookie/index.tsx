import { useEffect } from 'react';

import { setUserCookie } from '@utils/cookies';

import { UseCompleteRegisterCookieProps } from './types';

const useCompleteRegisterCookie = ({ fetchedUser, clearStorage }: UseCompleteRegisterCookieProps) => {
  useEffect(() => {
    const updateduser = { ...fetchedUser };
    updateduser.createdTime = Date.now();
    setUserCookie(updateduser);

    if (clearStorage) {
      sessionStorage.clear();
    }
  }, []);
};

export default useCompleteRegisterCookie;
