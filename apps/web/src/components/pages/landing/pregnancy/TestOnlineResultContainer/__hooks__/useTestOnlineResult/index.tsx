import { useEffect, useState } from 'react';

import { handleResutl } from './__utils__';

const useTestOnlineResult = () => {
  const [data, setData] = useState<null | { title: string; message: string }>(null);

  useEffect(() => {
    const result = handleResutl();

    if (result) {
      setData(result);
    }
  }, []);

  return { data };
};

export default useTestOnlineResult;
