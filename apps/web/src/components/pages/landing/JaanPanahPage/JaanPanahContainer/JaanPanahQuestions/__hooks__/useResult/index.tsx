import { useState } from 'react';

import { JaanPanahResultTypes } from '@components/pages/landing/JaanPanahPage/types';

const useResult = () => {
  const [result, setResultStatus] = useState<JaanPanahResultTypes | null>(null);

  const resultHandler = (v: JaanPanahResultTypes) => {
    setResultStatus(v);
  };

  return { result, resultHandler };
};

export default useResult;
