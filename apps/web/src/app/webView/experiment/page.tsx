import { Metadata } from 'next';

import ExperimentContainer from '@components/pages/webView/ExperimentContainer';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

const Experiment = () => {
  return <ExperimentContainer />;
};

export default Experiment;
