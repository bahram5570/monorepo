'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import CustomTypography from '@components/ui/CustomTypography';

const InfoSection = () => {
  const { breakPoint } = useBreakPoint();

  if (!breakPoint.mobile) {
    return <></>;
  }

  return (
    <div className="flex  w-full justify-between border-b-[1px] py-2">
      <div className="flex flex-col w-full justify-center items-center   border-l-[1px]">
        <CustomTypography fontSize="Title_Large" color="Neutral_OnBackground">
          100+ هزار
        </CustomTypography>
        <CustomTypography fontSize="Title_Small" color="Surface_OutlineVariant">
          نصب فعال
        </CustomTypography>
      </div>
      <div className="flex flex-col w-full justify-center items-center  border-l-[1px]">
        <CustomTypography fontSize="Title_Large" color="Neutral_OnBackground">
          100+ هزار
        </CustomTypography>
        <CustomTypography fontSize="Title_Small" color="Surface_OutlineVariant">
          بازدید روزانه
        </CustomTypography>
      </div>
      <div className="flex flex-col w-full justify-center items-center   border-l-[1px]">
        <CustomTypography fontSize="Title_Large" color="Neutral_OnBackground">
          100+ هزار
        </CustomTypography>
        <CustomTypography fontSize="Title_Small" color="Surface_OutlineVariant">
          کاربرفعال
        </CustomTypography>
      </div>
    </div>
  );
};

export default InfoSection;
