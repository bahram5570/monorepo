import { Metadata } from 'next';

import SamsungContainer from '@components/pages/webView/SamsungContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Samsung = () => {
  return <SamsungContainer />;
};

export default Samsung;
