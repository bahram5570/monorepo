import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const ChangeCyclePeriodLengthContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <div>
          <CustomTypography>
            برای اینکه محاسبات چرخه و پیش‌بینی تاریخ پریود، PMS و دوره باروری و تخمک‌گذاریت در ایمپو دقیق باشه لازمه طول
            دوره و طول پریودت رو در اپلیکیشن دقیق وارد کرده باشی. برای تغییر طول دوره و پریود کافیه پروفایل رو از بالا
            سمت چپ انتخاب کنی
          </CustomTypography>
        </div>

        <CustomImage
          src="/assets/images/webView/changeCyclePeriodLength/1.webp"
          alt="changeCyclePeriodLength1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>وارد قسمت اطلاعات کاربری بشی</CustomTypography>
        <CustomImage
          src="/assets/images/webView/changeCyclePeriodLength/2.webp"
          alt="changeCyclePeriodLength2"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>طول پریود رو از اینجا</CustomTypography>

        <CustomImage
          src="/assets/images/webView/changeCyclePeriodLength/3.webp"
          alt="changeCyclePeriodLength3"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>و طول دوره رو از این قسمت تغییر بدی</CustomTypography>

        <CustomImage
          src="/assets/images/webView/changeCyclePeriodLength/4.webp"
          alt="changeCyclePeriodLength4"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
    </WebViewContainer>
  );
};

export default ChangeCyclePeriodLengthContainer;
