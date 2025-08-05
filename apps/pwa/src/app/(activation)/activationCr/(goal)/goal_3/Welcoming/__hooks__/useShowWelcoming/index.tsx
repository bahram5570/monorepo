import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useShowWelcoming = () => {
  const [showWelcoming, setShowWelcoming] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const isLogginProcess = !pathname.includes('protected');

    if (isLogginProcess) {
      setShowWelcoming(true);
    }
  }, []);

  return { showWelcoming };
};

export default useShowWelcoming;
