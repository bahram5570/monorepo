'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

const ScrollToTopProvider = () => {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return <></>;
};

export default ScrollToTopProvider;
