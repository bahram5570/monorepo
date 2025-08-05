import { useState } from 'react';

import { getUserCookie, setPaymentCookie } from '@utils/cookies';
import { externalLink } from '@utils/navigation';

import useApi from '@hooks/useApi';
import useCustomToast from '@hooks/useCustomToast';
import { useParams, useRouter } from 'next/navigation';

import { ApprovedCodeHandlerTypes, BuyResponseTypes, UseBuyProps } from './types';

const useBuy = ({ id, questionValues, type }: UseBuyProps) => {
  const clinicInfo = (useParams().clinicInfo as string).split('-');
  const [approvedCode, setApprovedCode] = useState('');
  const { onToast } = useCustomToast();
  const router = useRouter();

  const isCompletePayment = clinicInfo[1] === 'completePayment';
  const payValue = clinicInfo[0];
  const ticket = isCompletePayment ? type : Number(payValue);

  const successHandler = async (v: BuyResponseTypes) => {
    if (v.isValid) {
      if (v.redirectBank) {
        const { user } = getUserCookie();

        if (user?.identity) {
          setPaymentCookie({ route: `/protected/clinic/clinicChat?ticketId=${v.id}` });
          externalLink(`https://web.impo.app/financial/AsanPardakht/${v.bankResp.token}/${user.identity}`);
        }
      } else {
        router.push(`/protected/clinic/clinicChat?ticketId=${v.id}`);
      }
    } else {
      onToast({ message: 'مشکلی در پرداخت پیش آمد، دوباره تلاش کنید' });
    }
  };

  const { callApi, isLoading } = useApi<BuyResponseTypes>({
    method: 'PUT',
    onSuccess: successHandler,
    api: isCompletePayment ? `advice/newweb/${payValue}` : 'advice/newweb',
  });

  const approvedCodeHandler: ApprovedCodeHandlerTypes = (v: string) => {
    setApprovedCode(v);
  };

  const submitHandler = () => {
    const payload = {
      ticket,
      drId: id,
      code: approvedCode,
      text: questionValues.text,
      fileName: questionValues.fileName,
    };

    callApi(payload);
  };

  return { approvedCodeHandler, submitHandler, isLoading };
};

export default useBuy;
