import { useEffect, useState } from 'react';

import { useMediaQuery } from '@mui/material';

const useBreakPoint = () => {
  const [breakPoint, setBreakPoint] = useState({
    mobile: true,
    tablet: true,
    laptop: true,
    desktop: false,
    wide: false,
  });

  const isSm = useMediaQuery('(max-width:640px)', { noSsr: true });
  const isMd = useMediaQuery('(max-width:768px)', { noSsr: true });
  const isLg = useMediaQuery('(max-width:1024px)', { noSsr: true });
  const isWide = useMediaQuery('(min-width:1536px)', { noSsr: true });

  useEffect(() => {
    const result = { mobile: false, tablet: false, laptop: false, desktop: false, wide: false };

    if (isSm) {
      result.mobile = true;
    }
    if (isMd) {
      result.tablet = true;
    }
    if (isLg) {
      result.laptop = true;
    }
    if (!isSm && !isMd && !isLg) {
      result.desktop = true;
    }

    if (isWide) {
      result.wide = true;
    }

    setBreakPoint(result);
  }, [isSm, isMd, isLg, isWide]);

  return { breakPoint };
};

export default useBreakPoint;
