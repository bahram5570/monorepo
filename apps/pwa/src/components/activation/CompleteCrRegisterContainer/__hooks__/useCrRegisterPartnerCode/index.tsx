import { useState } from 'react';

import { baseUrl } from '@services/http';

import { ERROR_SERVER } from '@hooks/useApi/constants';
import useCustomToast from '@hooks/useCustomToast';

import { UseCrRegisterPartnerCodeProps } from './types';

const useCrRegisterPartnerCode = ({ token, onComplete }: UseCrRegisterPartnerCodeProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { onToast } = useCustomToast();

  const callApi = async (v: { code: string }) => {
    setIsLoading(true);

    try {
      const res = await fetch(`${baseUrl}/partner/create`, {
        body: JSON.stringify(v),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error();
      }

      onComplete();
    } catch (error) {
      onToast({ message: ERROR_SERVER, type: 'error' });
    }

    setIsLoading(false);
  };

  return { callApi, isLoading };
};

export default useCrRegisterPartnerCode;
