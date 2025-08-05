'use client';

import { createContext, useEffect, useRef, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import LoadingProgressBar from './LoadingProgressBar';
import { LoadingStatesTypes, PageNavigationHandlerTypes, PageNavigationLoadingContextTypes } from './types';

export const PageNavigationLoadingContext = createContext<PageNavigationLoadingContextTypes>({
  pageNavigationLoading: false,
  pageNavigationHandler: () => {},
});

const PageNavigationLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  if (typeof window === 'undefined') {
    return;
  }

  const router = useRouter();
  const path = usePathname();
  const timer = useRef<NodeJS.Timeout>();
  const searchParams = useSearchParams();
  const [progressBarLoading, setPogressBarLoading] = useState<LoadingStatesTypes>(false);
  const [pageNavigationLoading, setPageNavigationLoading] = useState<LoadingStatesTypes>(false);

  useEffect(() => {
    if (pageNavigationLoading || progressBarLoading) {
      timer.current = setTimeout(() => {
        setPogressBarLoading(false);
        setPageNavigationLoading(false);
      }, 5000);
    }

    return () => clearTimeout(timer.current);
  }, [pageNavigationLoading, progressBarLoading]);

  useEffect(() => {
    const body = document.body;

    if (pageNavigationLoading || progressBarLoading) {
      body.style.pointerEvents = 'none';
    } else {
      body.style.pointerEvents = 'auto';
    }

    return () => {
      body.style.pointerEvents = 'auto';
    };
  }, [pageNavigationLoading, progressBarLoading]);

  useEffect(() => {
    // # Disables loadings on changing of page or query param
    setPogressBarLoading(false);
    setPageNavigationLoading(false);

    return () => {
      setPogressBarLoading(false);
      setPageNavigationLoading(false);
    };
  }, [path, searchParams]);

  const pageNavigationHandler: PageNavigationHandlerTypes = ({ showProgressBar, linkTo, id }) => {
    if (linkTo) {
      if (linkTo === -1) {
        router.back();
      } else {
        router.push(linkTo);
      }
    }

    if (showProgressBar) {
      setPogressBarLoading(id);
    } else {
      setPageNavigationLoading(id);
    }
  };

  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => setIsRendered(true), []);

  if (!isRendered) {
    return <></>;
  }

  return (
    <PageNavigationLoadingContext.Provider value={{ pageNavigationHandler, pageNavigationLoading }}>
      <>
        {progressBarLoading && <LoadingProgressBar />}
        {children}
      </>
    </PageNavigationLoadingContext.Provider>
  );
};

export default PageNavigationLoadingProvider;
