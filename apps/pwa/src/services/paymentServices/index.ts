import { BANK_PAYMENT_STATUS_QUERY_NAME, BANK_PAYMENT_TYPE_QUERY_NAME } from '@constants/links.constants';
import { PAYMENT_QUERY_NAME } from '@providers/PaymentProvider/constants';
import { PaymentTypeQueryEnum } from '@providers/PaymentProvider/enums';
import { NextResponse } from 'next/server';

export const paymentStatusService = async (queryParams: string, requestUrl: string) => {
  let paymentResponse = null;
  const result = { paymentType: '', isSuccessful: '' };

  const params = queryParams.split('&');

  for (const param of params) {
    const [key, value] = param.split('=');

    if (key === BANK_PAYMENT_STATUS_QUERY_NAME) {
      result.isSuccessful = value;
    }

    if (key === BANK_PAYMENT_TYPE_QUERY_NAME) {
      result.paymentType = value;
    }
  }

  if (result.paymentType) {
    let route = '';

    switch (result.paymentType) {
      case PaymentTypeQueryEnum.Subscription:
        route = 'cycle';
        break;

      case PaymentTypeQueryEnum.Clinic:
        route = 'clinic';
        break;
    }

    const paymentQuery = `${PAYMENT_QUERY_NAME}=${JSON.stringify(result)}`;
    paymentResponse = NextResponse.redirect(new URL(`/protected/${route}?${paymentQuery}`, requestUrl));
  }

  return { paymentResponse };
};
