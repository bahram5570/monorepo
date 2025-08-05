'use client';

import { COLORS_LIST } from '@theme/colors';

import { useState } from 'react';

import CustomButton from '@components/ui/CustomButton';
import CustomInput from '@components/ui/CustomInput';
import CustomTypography from '@components/ui/CustomTypography';

import { initailData } from '../constants';
import SuccessModal from './SuccessModal';
import useSubmit from './__hooks__/useSubmit';

const PaymentFormSection = () => {
  const [formData, setFormData] = useState(initailData);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { handleSubmit } = useSubmit({
    openModalHandler: () => {
      setIsOpenModal(true);
      setFormData(initailData);
    },
  });

  const handleInputChange = (value: string, name: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="w-full md:w-11/12 lg:w-10/12 px-4 md:px-0 my-4 mx-auto grid grid-cols-1 md:grid-cols-2 sm:gap-10 gap-4 items-center mb-24">
      <div className="w-full">
        <div className="flex items-center gap-1 pb-2">
          <CustomTypography fontSize="Body_Medium">
            شماره یا ایمیلی که در ایمپو باهاش ثبت نام کردی (اجباری)
          </CustomTypography>
        </div>

        <CustomInput
          hasOutline={true}
          fontSize="Body_Medium"
          value={formData.username}
          className="w-full sm:p-4 p-2 rounded-xl"
          onValue={(v) => handleInputChange(v, 'username')}
          style={{ outlineColor: COLORS_LIST.Primary_Primary, backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
          placeholder="شماره یا ایمیلی که در ایمپو ثبت نام کردی"
        />
      </div>

      <div className="w-full">
        <div className="flex items-center gap-1 pb-2">
          <CustomTypography fontSize="Body_Medium">نام کاربری در pay pal (اجباری)</CustomTypography>
        </div>

        <CustomInput
          hasOutline={true}
          fontSize="Body_Medium"
          value={formData.paypalUsername}
          className="w-full sm:p-4 p-2 rounded-xl"
          onValue={(v) => handleInputChange(v, 'paypalUsername')}
          style={{ outlineColor: COLORS_LIST.Primary_Primary, backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
          placeholder="شماره یا ایمیلی که در pay pal ثبت نام کردی"
        />
      </div>
      <div className="w-full">
        <div className="flex items-center gap-1 pb-2">
          <CustomTypography fontSize="Body_Medium">شماره واتساپ</CustomTypography>
        </div>

        <CustomInput
          hasOutline={true}
          fontSize="Body_Medium"
          value={formData.whatupUsername}
          className="w-full sm:p-4 p-2 rounded-xl"
          onValue={(v) => handleInputChange(v, 'whatupUsername')}
          style={{ outlineColor: COLORS_LIST.Primary_Primary, backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
          placeholder="شماره واتساپی که بتونیم باهات در ارتباط باشیم"
        />
      </div>

      <div className=" self-end">
        <CustomButton
          varient="outline"
          className="!w-2/5"
          fontSize="Lable_Large"
          onClick={() => handleSubmit(formData)}
          isDisable={!formData.username && !formData.paypalUsername}
        >
          ارسال
        </CustomButton>
      </div>

      <SuccessModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </div>
  );
};

export default PaymentFormSection;
