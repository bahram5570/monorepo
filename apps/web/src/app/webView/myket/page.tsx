import { Metadata } from 'next';

import MyketContainer from '@components/pages/webView/MyketContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const MyKet = () => {
  return <MyketContainer />;
};

export default MyKet;
