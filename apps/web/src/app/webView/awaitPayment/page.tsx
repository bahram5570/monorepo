import { Metadata } from 'next';

import AwaitPaymentContainer from '@components/pages/webView/AwaitPaymentContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const AwaitPayment = () => {
  return <AwaitPaymentContainer />;
};

export default AwaitPayment;
