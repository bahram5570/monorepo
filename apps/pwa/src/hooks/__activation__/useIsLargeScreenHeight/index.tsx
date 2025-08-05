import { useEffect, useState } from 'react';

const useIsLargeScreenHeight = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const el = document.documentElement;

    if (el) {
      const HEADING_ICON_SCREEN_MIN_HEIGHT = 650;
      const isLarge = el.clientHeight > HEADING_ICON_SCREEN_MIN_HEIGHT;
      setIsLargeScreen(isLarge);
    }
  }, []);

  return { isLargeScreen };
};

export default useIsLargeScreenHeight;
