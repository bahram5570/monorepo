import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { NEED_TOAST_PATH_LIST } from './constants';

const useHasSignsChanged = () => {
  const [hasSignsChanged, setHasSignsChanged] = useState(false);
  const pathname = usePathname();

  const changeSignsStaus = () => {
    setHasSignsChanged(true);
  };

  useEffect(() => {
    const isNeedDatePath = NEED_TOAST_PATH_LIST.some((item) => pathname.includes(item));

    if (!isNeedDatePath) setHasSignsChanged(false);
  }, [pathname]);

  return { hasSignsChanged, changeSignsStaus };
};

export default useHasSignsChanged;
