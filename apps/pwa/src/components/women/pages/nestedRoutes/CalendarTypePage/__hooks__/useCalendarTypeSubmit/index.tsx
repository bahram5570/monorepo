import { CalendarTypeEnum } from '@constants/date.constants';
import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { useRouter } from 'next/navigation';

const useCalendarTypeSubmit = (calendarType: CalendarTypeEnum) => {
  const router = useRouter();
  const { cultureHandler } = useCulture();
  const { data: profileData, updateProfileData } = useGetProfileData();

  const successHandler = () => {
    cultureHandler('calendarType', calendarType);
    updateProfileData();
    router.back();
  };

  const { callApi, isLoading } = useApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'profile/woman/info',
  });

  const submitHandler = () => {
    if (profileData) {
      const { name, birthDate, cycleLength, periodLength, sexualStatus } = profileData;

      const payload = {
        name,
        birthDate,
        cycleLength,
        calendarType,
        periodLength,
        sexualStatus,
      };

      callApi(payload);
    }
  };

  return { submitHandler, isLoading };
};

export default useCalendarTypeSubmit;
