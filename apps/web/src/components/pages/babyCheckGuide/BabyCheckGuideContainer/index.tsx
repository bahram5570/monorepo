'use client';

import { useState } from 'react';

import CustomTab from '@components/ui/CustomTab';

import BabyCheckGuide from './BabyCheckGuide';
import PhotoGuide from './PhotoGuide';
import { TAB_LIST } from './constants';
import { BabyCheckGuideTabEnum } from './enum';

const BabyCheckGuideContainer = () => {
  const [activeTab, setActiveTab] = useState(BabyCheckGuideTabEnum.PhotoGuide);

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab as BabyCheckGuideTabEnum);
  };

  return (
    <CustomTab activeTab={activeTab} handleActiveTab={handleActiveTab} tabList={TAB_LIST}>
      <>
        {activeTab === BabyCheckGuideTabEnum.PhotoGuide && <PhotoGuide />}
        {activeTab === BabyCheckGuideTabEnum.BabyCheckGuide && <BabyCheckGuide />}
      </>
    </CustomTab>
  );
};

export default BabyCheckGuideContainer;
