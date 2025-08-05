import { fetchSelectName } from '@services/selectNameServices';

import NameSelectorProvider from './NameSelectorProvider';
import { NameSelectorLayoutTypes } from './types';

const NameSelectorLayout = async ({ children }: NameSelectorLayoutTypes) => {
  const { data } = await fetchSelectName();

  if (!data) {
    return <></>;
  }

  return (
    <NameSelectorProvider initialData={data}>
      <>{children}</>
    </NameSelectorProvider>
  );
};

export default NameSelectorLayout;
