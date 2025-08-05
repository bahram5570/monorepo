import useBreakPoint from '@hooks/useBreakPoint';

import { useEffect, useState } from 'react';

const useTabSizes = () => {
  const { breakPoint } = useBreakPoint();
  const [tabSizes, setTabSizes] = useState({ totalDashArray: 374, rx: 22, height: 40, width: 170, isMobile: false });

  useEffect(() => {
    if (breakPoint.laptop) {
      setTabSizes({ totalDashArray: 374, rx: 22, height: 40, width: 170, isMobile: true });
    } else {
      setTabSizes({ totalDashArray: 374, rx: 22, height: 48, width: 163, isMobile: false });
    }
  }, [breakPoint]);

  return { tabSizes };
};

export default useTabSizes;
