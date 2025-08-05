import NameSelectorActivationLayout from '@components/women/pages/nestedRoutes/NameSelectors/nameSelectorActivation/NameSelectorActivationLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NameSelectorActivationLayout>
      <>{children}</>
    </NameSelectorActivationLayout>
  );
};

export default Layout;
