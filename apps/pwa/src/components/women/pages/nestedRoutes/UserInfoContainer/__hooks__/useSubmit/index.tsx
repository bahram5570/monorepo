import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';
import { useRouter } from 'next/navigation';

import { PayloadType } from './type';

const useSubmit = ({ birthDate, calendarType, cycleLength, name, periodLength, sexualStatus }: PayloadType) => {
  const { updateQuery, getQuery } = useCustomReactQuery();
  const profileData = getQuery<ProfileResponseTypes>({ queryKey: ['profile'] });
  const router = useRouter();

  const successHandler = () => {
    const payload = {
      ...profileData,
      calendarType,
      periodLength,
      sexualStatus,
      cycleLength,
      birthDate,
      name,
    };

    updateQuery({ queryKey: ['profile'], payload });
    router.back();
  };

  const { callApi, isLoading } = useApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'profile/woman/info',
  });

  const submitHandler = () => {
    const payload = {
      name,
      birthDate,
      cycleLength,
      calendarType,
      periodLength,
      sexualStatus,
    };

    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
