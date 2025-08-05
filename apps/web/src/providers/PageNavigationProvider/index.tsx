'use client';

import { createContext, useEffect, useRef, useState } from 'react';

import LoadingProgressBar from './LoadingProgressBar';
import useChangeRouteDetect from './__hooks__/useChangeRouteDetect';
import { PageNavigationLoadingContextTypes } from './types';

export const PageNavigationLoadingContext = createContext<PageNavigationLoadingContextTypes>({
  pageNavigationHandler: () => {},
});

const PageNavigationLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const timer = useRef<NodeJS.Timeout>();
  const [isLoading, setIsLoading] = useState(false);

  useChangeRouteDetect(setIsLoading);

  useEffect(() => {
    if (isLoading) {
      timer.current = setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    }

    return () => clearTimeout(timer.current);
  }, [isLoading]);

  const pageNavigationHandler = () => {
    setIsLoading(true);
  };

  return (
    <PageNavigationLoadingContext.Provider value={{ pageNavigationHandler }}>
      <>
        {isLoading && <LoadingProgressBar />}
        <>{children}</>
      </>
    </PageNavigationLoadingContext.Provider>
  );
};

export default PageNavigationLoadingProvider;
