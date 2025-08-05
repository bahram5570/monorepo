import { Metadata } from 'next';

import DevicesContainer from '@components/pages/webView/DevicesContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Devices = () => {
  return <DevicesContainer />;
};

export default Devices;
