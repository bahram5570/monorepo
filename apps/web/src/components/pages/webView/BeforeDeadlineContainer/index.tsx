import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const BeforeDeadlineContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <div>
          <CustomTypography>اگر زودتر از زمانی که در ایمپو پیش‌بینی شده پریود شدی</CustomTypography>
          <CustomTypography>کافیه همون روز از قسمت اصلی چرخه دکمه "امروز پریود شدم" رو انتخاب کنی</CustomTypography>
        </div>

        <CustomImage
          src="/assets/images/webView/beforeDeadline/1.webp"
          alt="beforeDeadline1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>و یا از طریق دکمه "ویرایش چرخه" تاریخ جدید پریودت رو وارد کنی</CustomTypography>
        <CustomImage
          src="/assets/images/webView/beforeDeadline/2.webp"
          alt="beforeDeadline2"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>بعد از اعمال تغییرات، روزی که در اون هستی به روز اول پریودت تغییر می‌کنه</CustomTypography>

        <CustomImage
          src="/assets/images/webView/beforeDeadline/3.webp"
          alt="beforeDeadline3"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
    </WebViewContainer>
  );
};

export default BeforeDeadlineContainer;
