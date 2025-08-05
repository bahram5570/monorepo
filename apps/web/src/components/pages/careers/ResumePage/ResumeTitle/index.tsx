import CustomTypography from '@components/ui/CustomTypography';

const ResumeTitle = () => {
  return (
    <div className="w-full flex flex-col gap-1 pb-4 md:pb-6">
      <CustomTypography fontSize="Title_Medium" color={'Neutral_OnBackground'}>
        اطلاعات شخصی
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium">بعد از پر کردن اطلاعات،فایل رزومه را آپلود کنید</CustomTypography>
    </div>
  );
};

export default ResumeTitle;
