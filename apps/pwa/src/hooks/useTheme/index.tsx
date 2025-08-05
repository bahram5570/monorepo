import { useContext, useEffect, useState } from 'react';

import useOperatingSystem from '@hooks/useOperatingSystem';
import { ThemeModeContext } from '@providers/ThemeModeProvider';
import { COLORS_DARK, COLORS_LIGHT } from '@theme/colors';
import { FONTS_ANDROID, FONTS_IOS } from '@theme/fonts';

function useTheme() {
  // # Typography
  const { operatingSystem } = useOperatingSystem();
  const typography = operatingSystem === 'ios' ? FONTS_IOS : FONTS_ANDROID;

  // # Theme mode
  const themeMode = useContext(ThemeModeContext);
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    if (themeMode === 'ligth') {
      setIsLightMode(true);
    } else if (themeMode === 'dark') {
      setIsLightMode(false);
    } else if (themeMode === 'system') {
      setIsLightMode(window.matchMedia('(prefers-color-scheme: light)').matches);
    }
  }, [themeMode]);

  const colors = isLightMode ? COLORS_LIGHT : COLORS_DARK;

  return { typography, colors };
}

export default useTheme;
