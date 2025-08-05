import { fetchActivationData } from '@services/activationServices';

import PhaseChangeProvider from '@providers/PhaseChangeProvider';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const { questionsData, errorCode } = await fetchActivationData('woman/account/authquestions');

  return (
    <>
      <PhaseChangeProvider questionsData={questionsData} errorCode={errorCode}>
        {children}
      </PhaseChangeProvider>
    </>
  );
};

export default Layout;
