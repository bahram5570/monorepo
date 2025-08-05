import { useEffect, useState } from 'react';

const useRedirectToPwa = (targetUrl: string) => {
  const [redirectLink, setRedirectLink] = useState<string | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type !== 'ACTIVATION_CR_REGISTER') {
        return;
      }

      if (event.data?.registerInfo) {
        setRedirectLink(`${targetUrl}?${event.data?.registerInfo}`);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return { redirectLink };
};

export default useRedirectToPwa;
