import { useEffect, useState } from 'react';

import { TabTypes, UseSelectTabProps } from './types';

const useSelectTab = ({ rate }: UseSelectTabProps) => {
  const [tab, setTab] = useState<TabTypes | null>(null);

  useEffect(() => {
    if (rate > 0) {
      if (rate < 3) {
        setTab('negative');
      } else {
        setTab('positive');
      }
    }
  }, [rate]);

  const tabHandler = (v: TabTypes) => {
    setTab(v);
  };

  return { tab, tabHandler };
};

export default useSelectTab;
