import { Metadata } from 'next';

import CalendarUntidyContainer from '@components/pages/webView/CalendarUntidyContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const CalendarUntidy = () => {
  return <CalendarUntidyContainer />;
};

export default CalendarUntidy;
