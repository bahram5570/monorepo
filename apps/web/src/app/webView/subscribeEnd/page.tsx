import { Metadata } from 'next';

import SubscribeEndContainer from '@components/pages/webView/SubscribeEndContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const SubscribeEnd = () => {
  return <SubscribeEndContainer />;
};

export default SubscribeEnd;
