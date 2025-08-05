'use server';

import { getCultureCookie } from '@app/actions/cookie.actions';

import CultureContainer from './CultureContainer';

const CultureProvider = async ({ children }: { children: React.ReactNode }) => {
  const defaultValues = await getCultureCookie();

  return (
    <CultureContainer defaultValues={defaultValues}>
      <>{children}</>
    </CultureContainer>
  );
};

export default CultureProvider;
