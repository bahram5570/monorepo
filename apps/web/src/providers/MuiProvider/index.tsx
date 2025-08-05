import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const MuiProvider = ({ children }: { children: React.ReactNode }) => {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
};

export default MuiProvider;
