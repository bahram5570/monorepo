import { Metadata } from 'next';

import XiaomiContainer from '@components/pages/webView/XiaomiContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Xiaomi = () => {
  return <XiaomiContainer />;
};

export default Xiaomi;
