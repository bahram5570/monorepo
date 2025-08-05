'use client';

import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('@components/women/pages/nestedRoutes/signs/SignsPage'),
  {
    ssr: false,
  },
);

const SignsPage = () => {
  return <DynamicComponentWithNoSSR />;
};

export default SignsPage;
