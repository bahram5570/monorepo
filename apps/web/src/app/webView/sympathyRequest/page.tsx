import { Metadata } from 'next';

import SympathyRequestContainer from '@components/pages/webView/SympathyRequestContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const SympathyRequest = () => {
  return <SympathyRequestContainer />;
};

export default SympathyRequest;
