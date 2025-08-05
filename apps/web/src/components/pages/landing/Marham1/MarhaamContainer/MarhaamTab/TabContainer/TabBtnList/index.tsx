import { COLORS_LIST } from '@theme/colors';

import CustomButton from '@components/ui/CustomButton';

import { TAB_LIST } from '../constants';
import { TabBtnListPropsType } from './type';

const TabBtnList = ({ activeTab, handleActiveTab }: TabBtnListPropsType) => {
  return (
    <div
      className="flex sticky top-[70px] sm:relative z-20 sm:top-0 flex-wrap  gap-2 p-[10px] w-full"
      style={{ background: COLORS_LIST.White }}
    >
      {TAB_LIST.map((tab, index) => (
        <CustomButton
          varient="FREE_COLORS"
          // fontSize={activeTab === tab.id ? 'Lable_Large' : 'Body_Medium'}
          fontSize="Body_Medium"
          key={index}
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
