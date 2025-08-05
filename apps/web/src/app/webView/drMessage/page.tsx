import { Metadata } from 'next';

import DrMessageContainer from '@components/pages/webView/DrMessageContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const DrMessage = () => {
  return <DrMessageContainer />;
};

export default DrMessage;
