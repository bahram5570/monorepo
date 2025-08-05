import { useEffect } from 'react';

import useCustomReactQuery from '@hooks/useCustomReactQuery';

const useChatInitialSetUp = (ref: React.RefObject<HTMLDivElement>) => {
  const { newQuery } = useCustomReactQuery(['chatFileLoading']);

  useEffect(() => {
    newQuery({ queryKey: ['chatFileLoading'], payload: { isLoading: false } });

    const el = ref.current;

    if (el) {
      const scrollHeight = el.scrollHeight;
      window.scroll({ top: scrollHeight + 1000, behavior: 'instant' });
    }
  }, []);
};

export default useChatInitialSetUp;
