'use client';

import { useEffect, useRef } from 'react';

import { getPaymentCookie, removePaymentCookie } from '@utils/cookies';
import { isDevelopeMode } from '@utils/system';

// import { getPaymentAction, removePaymentAction } from '@actions/payment';
import { useRouter } from 'next/navigation';

import { PAYMENT_QUERY_NAME } from './constants';
import { PaymentQueryTypes } from './types';

const PaymentProvider = () => {
  const router = useRouter();
  const isFirstTime = useRef(isDevelopeMode());

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    const handlePayment = () => {
      const data = getPaymentCookie();

      const params = new URLSearchParams(window.location.search).get(PAYMENT_QUERY_NAME);
      const queryData = params ? (JSON.parse(params) as PaymentQueryTypes) : null;

      if (data) {
        removePaymentCookie();

        if (!queryData) {
          return;
        }

        if (!queryData.isSuccessful) {
          return;
        }

        router.push(data.route);
      } else {
        if (queryData) {
          router.replace(window.location.pathname);
        }
      }
    };

    handlePayment();
  }, []);

  return <></>;
};

export default PaymentProvider;
