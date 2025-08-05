import { Metadata } from 'next';

import RemoveQuestionContainer from '@components/pages/webView/RemoveQuestionContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const RemoveQuestion = () => {
  return <RemoveQuestionContainer />;
};

export default RemoveQuestion;
