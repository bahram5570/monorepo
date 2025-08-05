import { Metadata } from 'next';

import ChangeCyclePeriodLengthContainer from '@components/pages/webView/ChangeCyclePeriodLengthContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const ChangeCyclePeriodLength = () => {
  return <ChangeCyclePeriodLengthContainer />;
};

export default ChangeCyclePeriodLength;
