import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import TestOnlineResultContainer from '@components/pages/landing/pregnancy/TestOnlineResultContainer';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست بارداری',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/pregnancy/result`,
  },
};

const Result = () => {
  return <TestOnlineResultContainer />;
};

export default Result;
