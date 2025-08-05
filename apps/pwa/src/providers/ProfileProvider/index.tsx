'use client';

import { createContext } from 'react';

import useGetProfileData from './__hooks__/useGetProfileData';
import useSubscriptionGuard from './__hooks__/useSubscriptionGuard';
import { ProfileContextTypes, ProfileProviderPropsTypes } from './type';

export const ProfileContext = createContext<ProfileContextTypes>({ profileData: undefined, isLoading: false });

const ProfileProvider = ({ children, onComplete }: ProfileProviderPropsTypes) => {
  const { data, isLoading } = useGetProfileData(onComplete);

  useSubscriptionGuard(data?.remaindDays);

  return <ProfileContext.Provider value={{ profileData: data, isLoading }}>{children}</ProfileContext.Provider>;
};

export default ProfileProvider;
