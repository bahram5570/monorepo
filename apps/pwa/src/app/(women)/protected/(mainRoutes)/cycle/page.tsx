'use client';

import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('@components/women/pages/mainRoutes/cycle/CyclePageContainer'), {
  ssr: false,
});

const Cycle = () => {
  return <DynamicComponentWithNoSSR />;
};

export default Cycle;
