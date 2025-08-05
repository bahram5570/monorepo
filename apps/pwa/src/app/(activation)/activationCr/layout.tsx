import { fetchActivationData } from '@services/activationServices';

import ActivationCrProvider from '@providers/__activation__/ActivationCrProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const { questionsData, errorCode } = await fetchActivationData('woman/account/questions');

  return (
    <>
      <ActivationCrProvider questionsData={questionsData} errorCode={errorCode}>
        <>{children}</>
      </ActivationCrProvider>
    </>
  );
};

export default Layout;
