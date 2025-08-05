import { Metadata } from 'next';

import BazarContainer from '@components/pages/webView/BazarContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Bazar = () => {
  return <BazarContainer />;
};

export default Bazar;
