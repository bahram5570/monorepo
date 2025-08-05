import { headers } from 'next/headers';

import { operatingSystemDetector } from '@utils/system';

import OperatingSystemProviderContainer from './OperatingSystemProviderContainer';

const OperatingSystemProvider = ({ children }: { children: React.ReactNode }) => {
  const userAgent = headers().get('user-agent');
  const os = operatingSystemDetector(userAgent);

  return (
    <OperatingSystemProviderContainer os={os}>
      <>{children}</>
    </OperatingSystemProviderContainer>
  );
};

export default OperatingSystemProvider;
