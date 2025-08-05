'use server';

import WomenFooter from '@components/women/WomenFooter';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <>{children}</>
      <WomenFooter />
    </div>
  );
};

export default Layout;
