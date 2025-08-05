import { Metadata } from 'next';

import ChangeLastPeriodContainer from '@components/pages/webView/ChangeLastPeriodContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const ChangeLastPeriod = () => {
  return <ChangeLastPeriodContainer />;
};

export default ChangeLastPeriod;
