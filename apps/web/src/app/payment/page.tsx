import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import PaymentContainer from '@components/pages/payment/PaymentContainer';

export const metadata: Metadata = {
  title: 'پرداخت',
  description: 'پرداخت بین المللی اشتراک ایمپو',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/payment`,
  },
};

const Payment = () => {
  return <PaymentContainer />;
};

export default Payment;
