import { Metadata } from 'next';

import SubscribeContainer from '@components/pages/webView/SubscribeContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Subscribe = () => {
  return <SubscribeContainer />;
};

export default Subscribe;
