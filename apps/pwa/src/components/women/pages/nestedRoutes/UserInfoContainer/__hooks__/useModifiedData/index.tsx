import { useEffect, useState } from 'react';

import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

import useGetDataUserInfo from '../useGetDataUserInfo';
import { INITIAL_VALUES } from './constant';

const useModifiedData = () => {
  const [isModified, setIsModified] = useState(false);
  const { profileData, loading } = useGetDataUserInfo();
  const [values, setValues] = useState<ProfileResponseTypes>(INITIAL_VALUES);

  const changeValueHandler = (v: string | number, name: string) => {
    setValues({ ...values, [name]: v });
  };

  const checkIsModified = () => {
    if (
      values.birthDate !== profileData?.birthDate ||
      values.name !== profileData.name ||
      values.periodLength !== profileData.periodLength ||
      values.cycleLength !== profileData.cycleLength ||
      values.calendarType !== profileData.calendarType ||
      values.sexualStatus !== profileData.sexualStatus
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (profileData) {
      setValues(profileData);
    }
  }, [profileData]);

  useEffect(() => {
    if (profileData) {
      setIsModified(checkIsModified());
    }
  }, [values, profileData]);

  return { isModified, changeValueHandler, values, loading };
};

export default useModifiedData;
