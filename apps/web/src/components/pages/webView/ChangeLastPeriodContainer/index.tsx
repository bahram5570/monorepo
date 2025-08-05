import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const ChangeLastPeriodContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <div>
          <CustomTypography>
            اگه مدت زیادیه که وارد ایمپو نشدی و تاریخ پریودت طبق پیش بینی ایمپو پیش نرفته از صفحه اصلی روی دکمه ویرایش
            چرخه بزن
          </CustomTypography>
        </div>

        <CustomImage
          src="/assets/images/webView/changeLastPeriod/1.webp"
          alt="changeLastPeriod1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>و بعد روی دکمه تنظیمات بزن</CustomTypography>
        <CustomImage
          src="/assets/images/webView/changeLastPeriod/2.webp"
          alt="changeLastPeriod2"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>تاریخ شروع آخرین باری که پریود شدی</CustomTypography>

        <CustomImage
          src="/assets/images/webView/changeLastPeriod/3.webp"
          alt="changeLastPeriod3"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>و همینطور تاریخ پایان آخرین پریودت رو انتخاب کن و دکمه ویرایش چرخه رو بزن</CustomTypography>

        <CustomImage
          src="/assets/images/webView/changeLastPeriod/4.webp"
          alt="changeLastPeriod4"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>همینطور که می بینی چرخه و تقویم با تاریخ جدیدی که وارد کردی هماهنگ شده</CustomTypography>

        <CustomImage
          src="/assets/images/webView/changeLastPeriod/5.webp"
          alt="changeLastPeriod5"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
    </WebViewContainer>
  );
};

export default ChangeLastPeriodContainer;
