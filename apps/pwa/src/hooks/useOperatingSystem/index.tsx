import { useContext } from 'react';

import { OperatingSystemContext } from '@providers/OperatingSystemProvider';

const useOperatingSystem = () => {
  return useContext(OperatingSystemContext);
};

export default useOperatingSystem;
