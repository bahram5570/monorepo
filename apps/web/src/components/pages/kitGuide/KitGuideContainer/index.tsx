'use client';

import { useState } from 'react';

import CustomTab from '@components/ui/CustomTab';

import KitGuideSection from './KitGuideSection';
import PhotoGuide from './PhotoGuide';
import { TAB_LIST } from './constants';
import { KitGuideTabEnum } from './enum';

const KitGuideContainer = () => {
  const [activeTab, setActiveTab] = useState(KitGuideTabEnum.PhotoGuide);

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab as KitGuideTabEnum);
  };

  return (
    <CustomTab activeTab={activeTab} handleActiveTab={handleActiveTab} tabList={TAB_LIST}>
      <>
        {activeTab === KitGuideTabEnum.PhotoGuide && <PhotoGuide />}
        {activeTab === KitGuideTabEnum.KitGuideSection && <KitGuideSection />}
      </>
    </CustomTab>
  );
};

export default KitGuideContainer;
