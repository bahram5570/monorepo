import { COLORS_LIST } from '@theme/colors';

import { useEffect, useState } from 'react';

import { JaanPanahCityConditionEnum } from '@components/pages/landing/JaanPanahPage/enum';
import CustomButton from '@components/ui/CustomButton';

import { TAB_LIST_DANGER, TAB_LIST_NORMAL } from '../constants';
import { TabBtnListPropsType } from './type';

const TabBtnList = ({ activeTab, handleActiveTab, cityCondition }: TabBtnListPropsType) => {
  const [tabList, setTabList] = useState(TAB_LIST_NORMAL);

  useEffect(() => {
    if (cityCondition === JaanPanahCityConditionEnum.Danger) {
      setTabList(TAB_LIST_DANGER);
    } else {
      setTabList(TAB_LIST_NORMAL);
    }
  }, [cityCondition]);

  return (
    <div className="flex  flex-wrap  gap-2 p-[10px] w-full" style={{ background: COLORS_LIST.White }}>
      {tabList.map((tab) => (
        <CustomButton
          varient="FREE_COLORS"
          // fontSize={activeTab === tab.id ? 'Lable_Large' : 'Body_Medium'}
          fontSize="Body_Medium"
          onClick={() => handleActiveTab(tab.id)}
          textColor={activeTab === tab.id ? COLORS_LIST.Primary_Primary : COLORS_LIST.Neutral_OnSurface}
          backgroundColor={activeTab === tab.id ? COLORS_LIST.Primary_PrimaryContainer : COLORS_LIST.White}
          borderColor={COLORS_LIST.White}
          className="!px-6 !py-3 !h-12 !w-fit !rounded-[100px] "
          style={{
            border: `1px solid ${activeTab === tab.id ? COLORS_LIST.White : COLORS_LIST.Surface_OutlineVariant}`,
          }}
        >
          {tab.label}
        </CustomButton>
      ))}
    </div>
  );
};

export default TabBtnList;
