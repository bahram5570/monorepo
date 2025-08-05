import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import GirlNamePage from '@components/pages/landing/NameSelection/GirlNamePage';

export const metadata: Metadata = {
  title: 'زیباترین اسم دخترانه؛ انتخاب اسم دختر جدید، شیک و بامعنی',
  description:
    'با راهنمای انتخاب اسم دختر در کنار شما هستیم تا میان اسامی خاص، جدید، باکلاس و ریشه‌دار، زیباترین اسم دخترانه مناسب فرهنگ و سلیقه خود را پیدا کنید.',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/landing/girl-name`,
  },
};

const GirlName = () => {
  return <GirlNamePage />;
};

export default GirlName;
