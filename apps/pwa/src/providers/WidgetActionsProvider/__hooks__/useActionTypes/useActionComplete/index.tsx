import { useEffect, useRef, useState } from 'react';

const useActionComplete = (onActionComplete: () => void) => {
  const [isPending, setIsPending] = useState(false);

  const onComplete = () => {
    setIsPending(true);
  };

  useEffect(() => {
    if (isPending) {
      onActionComplete();
      setIsPending(false);
    }
  }, [isPending]);

  return { onComplete };
};

export default useActionComplete;
