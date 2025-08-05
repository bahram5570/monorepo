import { fetchActivationData } from '@services/activationServices';

import ActivationProvider from '@providers/__activation__/ActivationProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const { questionsData, errorCode } = await fetchActivationData('woman/account/questions');

  return (
    <>
      <ActivationProvider questionsData={questionsData} errorCode={errorCode}>
        {children}
      </ActivationProvider>
    </>
  );
};

export default Layout;
