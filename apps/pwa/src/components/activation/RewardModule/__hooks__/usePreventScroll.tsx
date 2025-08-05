import { useEffect } from 'react';

const usePreventScroll = () => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);
};

export default usePreventScroll;
