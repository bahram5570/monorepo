import { useState } from 'react';

const useSelectMain = () => {
  const [mainValue, setMainValue] = useState('');

  const mainValueHandler = (v: string) => {
    setMainValue(v);
  };

  return { mainValue, mainValueHandler };
};

export default useSelectMain;
