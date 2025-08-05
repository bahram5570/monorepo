import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const BazarContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>بعد از ورود به کافه بازار، رو پروفایلت بزن</CustomTypography>
        <CustomImage
          src="/assets/images/webView/bazar/1.webp"
          alt="bazar1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>قسمت کیف پول و پرداخت رو انتخاب کن</CustomTypography>
        <CustomImage
          src="/assets/images/webView/bazar/2.webp"
          alt="bazar2"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>برو تو قسمت تراکنش‌ها</CustomTypography>

        <CustomImage
          src="/assets/images/webView/bazar/3.webp"
          alt="bazar3"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>و از اینجا توکن رو کپی کن</CustomTypography>

        <CustomImage
          src="/assets/images/webView/bazar/4.webp"
          alt="bazar4"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>
          بعد برگرد تو اپلیکیشن ایمپو و از این قسمت توکنی که کپی کردی رو وارد کن و دکمه ارسال توکن رو بزن، با این کار
          اشتراکت فعال می‌شه
        </CustomTypography>

        <CustomImage
          src="/assets/images/webView/bazar/5.webp"
          alt="bazar5"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
    </WebViewContainer>
  );
};

export default BazarContainer;
