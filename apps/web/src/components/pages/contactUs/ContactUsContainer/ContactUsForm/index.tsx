'use client';

import useBreakPoint from '@hooks/useBreakPoint';
import useOperatingSystem from '@hooks/useOperatingSystem';
import { COLORS_LIST } from '@theme/colors';

import { useState } from 'react';

import CustomButton from '@components/ui/CustomButton';
import CustomInput from '@components/ui/CustomInput';
import CustomTypography from '@components/ui/CustomTypography';
import { typographyMaker } from '@components/ui/CustomTypography/__utils__';

import useSubmit from './__hooks__/useSubmit';
import { UserInfoType } from './type';

const ContactUsForm = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType>({} as UserInfoType);
  const { breakPoint } = useBreakPoint();
  const { operatingSystem } = useOperatingSystem();
  const { submitHandler } = useSubmit();

  const onChangeHandler = (v: string | number, name: string) => {
    setUserInfo({ ...userInfo, [name]: v });
  };

  const typographyDetails = typographyMaker({ fontSize: 'Body_Medium', operatingSystem, isWeb: !breakPoint.laptop });

  return (
    <div className="flex flex-col sm:gap-3 gap-4  mx-4">
      <div className="flex sm:flex-row items-center flex-col sm:gap-3 gap-4">
        <div className="w-full">
          <div className="flex items-center gap-1 pb-2">
            <CustomTypography fontSize="Body_Medium">نام و نام خانوادگی</CustomTypography>
          </div>

          <CustomInput
            hasOutline={true}
            fontSize="Body_Medium"
            value={userInfo?.fullName || ''}
            className="w-full sm:p-4 p-2 rounded-xl"
            onValue={(v) => onChangeHandler(v, 'fullName')}
            style={{ outlineColor: COLORS_LIST.Primary_Primary, backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
            placeholder="متن خود را وارد کنید"
          />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-1 pb-2">
            <CustomTypography fontSize="Body_Medium"> موضوع</CustomTypography>
          </div>
          <CustomInput
            hasOutline={true}
            fontSize="Body_Medium"
            value={userInfo?.subject || ''}
            className="w-full sm:p-4 p-2 rounded-xl"
            onValue={(v) => onChangeHandler(v, 'subject')}
            style={{ outlineColor: COLORS_LIST.Primary_Primary, backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
            placeholder="متن خود را وارد کنید"
          />
        </div>
      </div>
      <div className="flex sm:flex-row items-center flex-col sm:gap-3 gap-4">
        <div className="w-full">
          <div className="flex items-center gap-1 pb-2">
            <CustomTypography fontSize="Body_Medium"> ایمیل</CustomTypography>
          </div>

          <CustomInput
            hasOutline={true}
            fontSize="Body_Medium"
            value={userInfo?.email || ''}
            className="w-full sm:p-4 p-2  rounded-xl"
            onValue={(v) => onChangeHandler(v, 'email')}
            style={{ outlineColor: COLORS_LIST.Primary_Primary, backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
            placeholder="متن خود را وارد کنید"
          />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-1 pb-2">
            <CustomTypography fontSize="Body_Medium"> شماره تلفن</CustomTypography>
          </div>

          <CustomInput
            hasOutline={true}
            fontSize="Body_Medium"
            value={userInfo?.phoneNumber || ''}
            className="w-full sm:p-4 p-2 rounded-xl"
            onValue={(v) => onChangeHandler(v, 'phoneNumber')}
            style={{ outlineColor: COLORS_LIST.Primary_Primary, backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
            placeholder="متن خود را وارد کنید"
            maxLength={11}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1 pb-2">
          <CustomTypography fontSize="Body_Medium">توضیحات</CustomTypography>
        </div>

        <textarea
          rows={6}
          value={userInfo?.description || ''}
          className="w-full sm:p-4 p-2 rounded-xl"
          onChange={(e) => onChangeHandler(e.target.value, 'description')}
          style={{
            ...typographyDetails,
            outlineColor: COLORS_LIST.Primary_Primary,
            backgroundColor: COLORS_LIST.Surface_SurfaceVariant,
          }}
        />
      </div>
      <div className=" flex justify-center items-center">
        <CustomButton varient="outline" fontSize="Lable_Large" onClick={() => submitHandler(userInfo)} isDisable>
          ارسال
        </CustomButton>
      </div>
    </div>
  );
};

export default ContactUsForm;
