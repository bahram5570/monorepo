import { useState } from 'react';

import useDateIntervals from '@providers/__activation__/ActivationProvider/__hooks__/useDateIntervals';

const useActivationPregnancyTabs = () => {
  const { pregnancyPeriodStart, pregnancyPeriodEnd, giveBirthStart, giveBirthEnd } = useDateIntervals();
  const [tab, setTab] = useState(1);

  const tabHandler = (t: number) => {
    setTab(t);
  };

  const startDate = tab === 1 ? pregnancyPeriodStart : giveBirthStart;
  const defaultDate = tab === 1 ? pregnancyPeriodEnd : giveBirthStart;
  const endDate = tab === 1 ? pregnancyPeriodEnd : giveBirthEnd;

  return { tab, tabHandler, startDate, defaultDate, endDate };
};

export default useActivationPregnancyTabs;
