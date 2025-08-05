import NameSelectorLayout from '@components/women/pages/nestedRoutes/NameSelectors/nameSelector/NameSelectorLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NameSelectorLayout>
      <>{children}</>
    </NameSelectorLayout>
  );
};

export default Layout;
