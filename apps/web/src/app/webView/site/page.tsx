import { Metadata } from 'next';

import SiteContainer from '@components/pages/webView/SiteContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Site = () => {
  return <SiteContainer />;
};

export default Site;
