import { toGregorianData } from '@utils/dates';

import { CalendarTypeEnum } from '@constants/date.constants';
import useApi from '@hooks/useApi';
import useCulture from '@hooks/useCulture';
import { useRouter } from 'next/navigation';

import { ItemType } from '../useGetData/type';
import { UseSubmitPropsType } from './type';

const useSubmit = ({ isEditMode }: UseSubmitPropsType) => {
  const router = useRouter();
  const { culture } = useCulture();

  const successHandler = () => {
    router.push('/protected/calendar');
  };

  const method = isEditMode ? 'POST' : 'PUT';

  const { callApi, isLoading } = useApi({
    api: `date/note?AppVersion=${process.env.NEXT_PUBLIC_APP_VERSION || ''}`,
    method: method,
    onSuccess: successHandler,
  });

  const submitHandler = ({ time, text, title, noteId }: ItemType) => {
    const payload = {
      dateTime: culture.calendarType === CalendarTypeEnum.Jalali ? toGregorianData(time) : time,
      ...(noteId ? { noteId } : {}),
      reminder: false,
      text,
      title,
    };

    callApi(payload);
  };
  return { submitHandler, isLoading };
};

export default useSubmit;
