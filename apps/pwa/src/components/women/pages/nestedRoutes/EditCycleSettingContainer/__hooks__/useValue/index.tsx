import { useEffect, useState } from 'react';

import { CycleThemeEnum } from '@services/loginServices/enum';

import useProfileData from '@hooks/__profile__/useProfileData';

const useValue = () => {
  const { profileData, isLoading } = useProfileData();
  const [selectedValue, setSelectedValue] = useState<CycleThemeEnum>(CycleThemeEnum.Flat);
  const [isModified, setIsModified] = useState(false);

  const handleChange = (v: CycleThemeEnum) => {
    setSelectedValue(v);
  };

  const checkIsModified = () => {
    if (selectedValue !== profileData?.cycleTheme) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (profileData) {
      setSelectedValue(profileData.cycleTheme);
    }
  }, [profileData]);

  useEffect(() => {
    if (profileData) {
      setIsModified(checkIsModified());
    }
  }, [selectedValue, profileData]);

  return { selectedValue, handleChange, isModified, loading: isLoading };
};

export default useValue;
