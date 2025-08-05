import { useEffect, useState } from 'react';

import { ChildTypeEnum } from '@constants/activation.constants';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';

import { UserInfoValueInputType } from '../../type';
import { INITIAL_VALUES } from './constants';

const useModifiedData = () => {
  const { data } = useGetProfileData();
  const [values, setValues] = useState<UserInfoValueInputType>(INITIAL_VALUES);

  const changeValueHandler = (v: string | number, name: string) => {
    setValues({ ...values, [name]: v });
  };

  const checkIsModified = () => {
    if (
      values.childBirthDate !== data?.childBirthDate ||
      values.childName !== data?.childName ||
      values.childType !== data?.childType
    ) {
      return true;
    }

    return false;
  };

  const checkIsEmptyChildName = () => {
    if (values.childType !== ChildTypeEnum.Twin && !values.childName) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    if (data) {
      setValues({ childBirthDate: data.childBirthDate, childName: data.childName, childType: data.childType });
    }
  }, [data]);

  return { checkIsModified, changeValueHandler, values, checkIsEmptyChildName };
};

export default useModifiedData;
