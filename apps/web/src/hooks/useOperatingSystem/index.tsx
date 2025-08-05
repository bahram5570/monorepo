import { OperatingSystemContext } from '@providers/OperatingSystemProvider/OperatingSystemProviderContainer';

import { useContext } from 'react';

const useOperatingSystem = () => {
  return useContext(OperatingSystemContext);
};

export default useOperatingSystem;
