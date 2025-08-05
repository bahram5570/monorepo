import { Metadata } from 'next';

import IosContainer from '@components/pages/webView/IosContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Ios = () => {
  return <IosContainer />;
};

export default Ios;
