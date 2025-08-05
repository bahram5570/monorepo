import { Metadata } from 'next';

import AfterDeadlineContainer from '@components/pages/webView/AfterDeadlineContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const AfterDeadline = () => {
  return <AfterDeadlineContainer />;
};

export default AfterDeadline;
