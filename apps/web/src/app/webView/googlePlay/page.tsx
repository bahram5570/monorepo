import { Metadata } from 'next';

import GooglePlayContainer from '@components/pages/webView/GooglePlayContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const GooglePlay = () => {
  return <GooglePlayContainer />;
};

export default GooglePlay;
