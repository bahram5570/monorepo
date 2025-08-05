import useApi from '@hooks/useApi';
import { useRouter } from 'next/navigation';

import { ResponseType } from './type';

const useAvatar = () => {
  const router = useRouter();

  const successHandler = () => {
    router.back();
  };

  const { callApi, isLoading } = useApi({
    method: 'POST',
    onSuccess: successHandler,
    api: `profile/image?AppVersion=${process.env.NEXT_PUBLIC_APP_VERSION || ''}`,
  });

  const editHandler = (v: ResponseType) => {
    if (v.fileName) {
      callApi({ fileName: v.fileName });
    }
  };

  return { editHandler, isLoading };
};

export default useAvatar;
