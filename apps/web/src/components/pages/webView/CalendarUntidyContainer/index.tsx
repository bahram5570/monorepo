import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const CalendarUntidyContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography fontSize="Lable_Medium">تقویمم بهم ریخته، چه‌کار کنم؟</CustomTypography>
        <CustomTypography>
          اگر تاریخ پریودهات در تقویم بهم ریخته و مطابق تاریخی که قبلا ثبت کردی نیست، لازمه حداقل اطلاعات و تاریخ آخرین
          پریودت رو در تیکت پشتیبانی برامون ارسال کنی و یا در ساعات اداری با شماره پشتیبانی تماس بگیری تا مشکلت رو حل
          کنیم.
        </CustomTypography>
      </div>
    </WebViewContainer>
  );
};

export default CalendarUntidyContainer;
