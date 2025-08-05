'use client';

import { COLORS_LIST } from '@theme/colors';

import { useState } from 'react';

import { MarhaamFeelingEnum } from '../../../enum';
import Aggression from './Aggression';
import Anxiety from './Anxiety';
import Depression from './Depression';
import Disappointed from './Disappointed';
import PsychologicalAnesthesia from './PsychologicalAnesthesia';
import TabBtnList from './TabBtnList';
import { TabContainerPropsType } from './type';

const TabContainer = ({ result }: TabContainerPropsType) => {
  const [activeTab, setActiveTab] = useState(result);

  const handleActiveTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <div className="w-full  flex flex-col items-center mx-auto pt-4">
          <TabBtnList activeTab={activeTab} handleActiveTab={handleActiveTab} />
          <div
            className=" w-full my-4"
            style={{
              border: `1px solid ${COLORS_LIST.Surface_SurfaceVariant}`,
            }}
          ></div>
          <div className=" w-full">
            <>
              {activeTab === MarhaamFeelingEnum.Depression && <Depression />}
              {activeTab === MarhaamFeelingEnum.Aggression && <Aggression />}
              {activeTab === MarhaamFeelingEnum.Anxiety && <Anxiety />}
              {activeTab === MarhaamFeelingEnum.Disappointed && <Disappointed />}
              {activeTab === MarhaamFeelingEnum.PsychologicalAnesthesia && <PsychologicalAnesthesia />}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
