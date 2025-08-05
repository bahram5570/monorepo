import { useState } from 'react';

const useIsOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = (b: boolean) => {
    setIsOpen(b);
  };

  return { isOpen, isOpenHandler };
};

export default useIsOpen;
