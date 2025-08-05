import { Metadata } from 'next';

import AddSympathyContainer from '@components/pages/webView/AddSympathyContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const AddSympathy = () => {
  return <AddSympathyContainer />;
};

export default AddSympathy;
