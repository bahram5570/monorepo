import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import BoyNamePage from '@components/pages/landing/NameSelection/BoyNamePage';

export const metadata: Metadata = {
  title: 'اسم پسر خاص و تک؛ انتخاب اسم‌های پسرانه شیک و جدید',
  description:
    'با این راهنما، بین قشنگترین اسم‌های پسرانه‌ خاص، جدید، مذهبی یا ریشه‌دار، بهترین نام را برای فرزندتان متناسب با سلیقه، فرهنگ خود انتخاب کنید',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/landing/boy-name`,
  },
};

const BoyName = () => {
  return <BoyNamePage />;
};

export default BoyName;
