'use client';

import { createContext, useEffect, useState } from 'react';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { usePathname, useRouter } from 'next/navigation';

import {
  RouteSequenceContextTypes,
  RouteSequenceListTypes,
  RouteSequenceProviderProps,
  SequenceHandlerTypes,
} from './types';

export const RouteSequenceContext = createContext<RouteSequenceContextTypes>({ sequenceHandler: () => {} });

const RouteSequenceProvider = ({ children }: RouteSequenceProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { searchParams } = useQueryParamsHandler();
  const [routesList, setRoutesList] = useState<RouteSequenceListTypes>(null);

  let currentSearchParams = '';
  if (searchParams && searchParams instanceof URLSearchParams) {
    // # Error handling for iOS compatibility issues with searchParams.
    try {
      const entries = searchParams?.entries();

      if (entries && typeof entries.forEach === 'function') {
        entries.forEach(([key, value]: [string, string]) => {
          currentSearchParams += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (routesList !== null) {
      const currentPathname = pathname + window.location.search;
      const currentRouteIndex = routesList.findIndex((route) => route === currentPathname);

      if (currentRouteIndex > -1) {
        const nextRoute = routesList?.[currentRouteIndex + 1];

        if (nextRoute) {
          const delayTimer = setTimeout(() => {
            router.push(nextRoute);
          }, 100);

          return () => {
            clearTimeout(delayTimer);
          };
        } else {
          setRoutesList(null);
        }
      }
    }
  }, [routesList, pathname, currentSearchParams]);

  const sequenceHandler: SequenceHandlerTypes = (list) => {
    if (list.length === 0) {
      return;
    }

    setRoutesList(list);
    router.push(list[0]);
  };

  return (
    <RouteSequenceContext.Provider value={{ sequenceHandler }}>
      <>{children}</>
    </RouteSequenceContext.Provider>
  );
};

export default RouteSequenceProvider;
