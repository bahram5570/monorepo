import { Metadata } from 'next';

import DownloadPageContainer from '@components/pages/download/DownloadPageContainer';

export const metadata: Metadata = {
  title: 'راهنمای نصب اپلیکیشن ایمپو',
  description: 'راهنمای نصب',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/download`,
  },
};

const Download = () => {
  return <DownloadPageContainer />;
};

export default Download;
