import CurrentDateInSignProvider from '@providers/DateInSignProvider';
import PaymentProvider from '@providers/PaymentProvider';
import PermissionsProvider from '@providers/PermissionsProvider';
import ProfileProvider from '@providers/ProfileProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PaymentProvider />
      <PermissionsProvider />

      <ProfileProvider>
        <CurrentDateInSignProvider>
          <>{children}</>
        </CurrentDateInSignProvider>
      </ProfileProvider>
    </>
  );
};

export default Layout;
