import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';
import { useRouter } from 'next/navigation';

import { ApiInfoTypes, UseInterfaceCodeProps } from './types';

const useInterfaceCode = ({ onComplete }: UseInterfaceCodeProps) => {
  const router = useRouter();
  const { onToast } = useCustomToast();
  const [code, setCode] = useState('');
  const [apiInfo, setApiInfo] = useState<ApiInfoTypes>(null);

  const codeHandler = (v: string) => {
    setCode(v);
  };

  const successHandler = ({ valid }: { valid: boolean }) => {
    if (valid) {
      setCode('');
      router.back();
      onComplete(code);
      onToast({ message: 'کد معرف با موفقیت ثبت شد', type: 'success' });
    } else {
      onToast({ message: 'کد معرف نامعتبر است', type: 'error' });
    }

    setApiInfo(null);
  };

  const errorHandler = () => {
    setApiInfo(null);
  };

  const { callApi, isLoading } = useApi({
    method: 'GET',
    fetchOnMount: false,
    onError: errorHandler,
    api: apiInfo?.api || '',
    onSuccess: successHandler,
    queryKey: [`${apiInfo?.queryKey}`],
  });

  useEffect(() => {
    if (apiInfo) {
      callApi();
    }
  }, [apiInfo]);

  const submitHandler = () => {
    setApiInfo({ api: `woman/checkinterface/${code}`, queryKey: `${Date.now()}` });
  };

  return { code, codeHandler, isLoading, submitHandler };
};

export default useInterfaceCode;
