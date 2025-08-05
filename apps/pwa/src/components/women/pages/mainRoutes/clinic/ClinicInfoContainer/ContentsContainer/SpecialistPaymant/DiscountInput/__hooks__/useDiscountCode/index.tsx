import { useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import useCustomToast from '@hooks/useCustomToast';
import { useParams } from 'next/navigation';

import { ClinicInfoResponseTypes } from '../../../../../__hooks__/useGetDataClinicInfo/types';
import { ApplyDiscountResponseTypes, UseDiscountCodeProps } from './types';

const useDiscountCode = ({ id, approvedCodeHandler }: UseDiscountCodeProps) => {
  const type = Number(useParams()?.clinicInfo);
  const [code, setCode] = useState('');
  const { onToast } = useCustomToast();

  const { getQuery, updateQuery } = useCustomReactQuery();

  const successHandler = (v: ApplyDiscountResponseTypes) => {
    if (v.valid) {
      approvedCodeHandler(v.discountCode);
      const oldData = getQuery<ClinicInfoResponseTypes>({ queryKey: ['clinicInfo'] });

      if (oldData) {
        oldData.info = { ...oldData.info, ...v };
        updateQuery({ queryKey: ['clinicInfo'], payload: oldData });
      }
    }

    onToast({ message: v.discountMessage });
  };

  const { callApi, isLoading } = useApi<ApplyDiscountResponseTypes>({
    api: 'advice/applyDiscount',
    onSuccess: successHandler,
    method: 'POST',
  });

  const codeHandler = (v: string) => {
    setCode(v);
  };

  const submitHandler = () => {
    callApi({ code, type, drId: id });
  };

  return { code, codeHandler, submitHandler, isLoading };
};

export default useDiscountCode;
