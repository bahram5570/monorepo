'use client';

import useServiceWorker from './useServiceWorker';

const ServiceWorkerProvider = ({ children }: { children: React.ReactNode }) => {
  useServiceWorker();

  return <>{children}</>;
};

export default ServiceWorkerProvider;
