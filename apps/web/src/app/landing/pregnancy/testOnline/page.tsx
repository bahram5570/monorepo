import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import TestOnlineContainer from '@components/pages/landing/pregnancy/TestOnlineContainer';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست بارداری',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/pregnancy/testonline`,
  },
};

const Testonline = () => {
  return <TestOnlineContainer />;
};

export default Testonline;
