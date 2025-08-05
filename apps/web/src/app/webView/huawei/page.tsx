import { Metadata } from 'next';

import HuaweiContainer from '@components/pages/webView/HuaweiContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Huawei = () => {
  return <HuaweiContainer />;
};

export default Huawei;
