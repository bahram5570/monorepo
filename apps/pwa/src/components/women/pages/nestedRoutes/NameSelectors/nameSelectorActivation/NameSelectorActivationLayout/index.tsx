import { fetchSelectNameActivation } from '@services/selectNameServices';

import NameSelectorActivationProvider from './NameSelectorActivationProvider';
import { NameSelectorActivationLayoutTypes } from './types';

const NameSelectorActivationLayout = async ({ children }: NameSelectorActivationLayoutTypes) => {
  const { data } = await fetchSelectNameActivation();

  if (!data) {
    return <></>;
  }

  return (
    <NameSelectorActivationProvider initialData={data}>
      <>{children}</>
    </NameSelectorActivationProvider>
  );
};

export default NameSelectorActivationLayout;
