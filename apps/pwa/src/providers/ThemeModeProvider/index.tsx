'use client';

import { createContext, useState } from 'react';

import { ThemeModeTypes } from './types';

export const ThemeModeContext = createContext<ThemeModeTypes>('ligth');

const ThemeModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode] = useState<ThemeModeTypes>('ligth');

  return <ThemeModeContext.Provider value={themeMode}>{children}</ThemeModeContext.Provider>;
};

export default ThemeModeProvider;
