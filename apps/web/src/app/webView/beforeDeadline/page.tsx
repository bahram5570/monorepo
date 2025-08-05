import { Metadata } from 'next';

import BeforeDeadlineContainer from '@components/pages/webView/BeforeDeadlineContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const BeforeDeadline = () => {
  return <BeforeDeadlineContainer />;
};

export default BeforeDeadline;
