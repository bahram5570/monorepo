'use client';

import { COLORS_LIST } from '@theme/colors';

import CustomButton from '../CustomButton';
import { CustomTabPropsType } from './type';

const CustomTab = ({ children, handleActiveTab, tabList, activeTab }: CustomTabPropsType) => {
  return (
    <div>
      <div className="w-full max-w-[500px] flex flex-col items-center mx-auto pt-4">
        <div className="flex justify-center sticky top-0 p-[10px] w-full" style={{ background: COLORS_LIST.White }}>
          {tabList.map((tab) => (
            <CustomButton
              varient="FREE_COLORS"
              fontSize={activeTab === tab.id ? 'Lable_Medium' : 'Body_Small'}
              onClick={() => handleActiveTab(tab.id)}
              textColor={activeTab === tab.id ? COLORS_LIST.Primary_Primary : COLORS_LIST.Surface_Outline}
              backgroundColor={COLORS_LIST.White}
              borderColor={COLORS_LIST.White}
              className="!rounded-none"
              style={{
                borderBottom: activeTab === tab.id ? `1px solid ${COLORS_LIST.Primary_Primary}` : 'none',
              }}
            >
              {tab.label}
            </CustomButton>
          ))}
        </div>

        {children}
      </div>
    </div>
  );
};

export default CustomTab;
