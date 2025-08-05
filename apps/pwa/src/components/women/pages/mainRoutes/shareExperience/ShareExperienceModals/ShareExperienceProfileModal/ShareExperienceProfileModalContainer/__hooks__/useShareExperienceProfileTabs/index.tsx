import { useState } from 'react';

const useShareExperienceProfileTabs = () => {
  const [tab, setTab] = useState(1);

  const tabHandler = (t: number) => {
    setTab(t);
  };

  return { tab, tabHandler };
};

export default useShareExperienceProfileTabs;
