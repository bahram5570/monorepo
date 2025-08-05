import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/navigation';

const useShareExperienceReport = () => {
  const router = useRouter();
  const { onToast } = useCustomToast();
  const [api, setApi] = useState<null | string>(null);

  const successHandler = () => {
    onToast({ message: 'پست با موفقیت ریپورت شد' });
    router.back();
    setApi(null);
  };

  const errorHandler = () => {
    setApi(null);
  };

  const { isLoading, callApi } = useApi({
    method: 'GET',
    api: api || '',
    fetchOnMount: false,
    onError: errorHandler,
    onSuccess: successHandler,
    queryKey: ['report' + api],
  });

  useEffect(() => {
    if (api !== null) {
      callApi();
    }
  }, [api]);

  const reportHandler = (id: string) => {
    setApi(`shareeexperience/v3/experience/report/${id}`);
  };

  return { reportHandler, isLoading };
};

export default useShareExperienceReport;
