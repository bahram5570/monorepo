import { Metadata } from 'next';

import DiscountCodeContainer from '@components/pages/webView/DiscountCodeContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const DiscountCode = () => {
  return <DiscountCodeContainer />;
};

export default DiscountCode;
