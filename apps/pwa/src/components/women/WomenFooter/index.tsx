'use client';

import { usePathname } from 'next/navigation';

import Container from './Container';
import { FOOTER_PAGES_LIST } from './constants';

const WomenFooter = () => {
  const pathName = usePathname();

  const hasFooter = FOOTER_PAGES_LIST.some(
    (item) => item.url.toLocaleLowerCase() === pathName.toLocaleLowerCase().split('?')[0],
  );

  return <>{hasFooter && <Container pathName={pathName} />}</>;
};

export default WomenFooter;
