import { useState } from 'react';

import { MarhaamFeelingEnum } from '@components/pages/landing/Marham1/enum';

const useResult = () => {
  const [result, setResultStatus] = useState<MarhaamFeelingEnum | null>(null);

  const resultHandler = (v: MarhaamFeelingEnum) => {
    setResultStatus(v);
  };

  return { result, resultHandler };
};

export default useResult;
