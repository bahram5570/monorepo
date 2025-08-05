'use client';

import { COLORS_LIST } from '@theme/colors';

import { useState } from 'react';

import { JaanPanahCityConditionEnum } from '../../../enum';
import CriticalSituation from './CriticalSituation';
import Diet from './Diet';
import Distract from './Distract';
import Speak from './Speak';
import TabBtnList from './TabBtnList';
import WaysToCalmDown from './WaysToCalmDown';
import { TabItemEnum } from './enum';
import { TabContainerPropsType } from './type';

const TabContainer = ({ result }: TabContainerPropsType) => {
  const [activeTab, setActiveTab] = useState(result.cityCondition === JaanPanahCityConditionEnum.Normal ? 0 : 1);

  const handleActiveTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <div className="w-full  flex flex-col items-center mx-auto pt-4">
          <TabBtnList activeTab={activeTab} handleActiveTab={handleActiveTab} cityCondition={result.cityCondition} />
          <div
            className=" w-full my-4"
            style={{
              border: `1px solid ${COLORS_LIST.Surface_SurfaceVariant}`,
            }}
          ></div>
          <div className=" w-full">
            <div className=" rounded-2xl " style={{ border: `1px solid ${COLORS_LIST.Surface_OutlineVariant}` }}>
              {activeTab === TabItemEnum.CriticalSituation && <CriticalSituation />}
              {activeTab === TabItemEnum.WayToCalmDown && <WaysToCalmDown />}
              {activeTab === TabItemEnum.Distract && <Distract children={result.children} />}
              {activeTab === TabItemEnum.Diet && <Diet />}
              {activeTab === TabItemEnum.Speak && <Speak />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
