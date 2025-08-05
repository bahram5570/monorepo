import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const MyketContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <div>
          <CustomTypography>بعد از ورود به مایکت، رو پروفایلت بزن</CustomTypography>
        </div>

        <CustomImage
          src="/assets/images/webView/myket/1.webp"
          alt="myket1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>تراکنش‌های پرداخت رو انتخاب کن</CustomTypography>
        <CustomImage
          src="/assets/images/webView/myket/2.webp"
          alt="myket2"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>تراکنش مربوط به خرید اشتراک از ایمپو رو پیدا کن شماره توکن رو بخاطر بسپار</CustomTypography>

        <CustomImage
          src="/assets/images/webView/myket/3.webp"
          alt="myket3"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>بعد برگرد تو اپلیکیشن ایمپو</CustomTypography>

        <CustomImage
          src="/assets/images/webView/myket/4.webp"
          alt="myket4"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-4 p-3 my-2">
        <CustomTypography>و از این قسمت توکنی که کپی کردی رو وارد کن و دکمه ارسال توکن رو بزن.</CustomTypography>

        <CustomImage
          src="/assets/images/webView/myket/5.webp"
          alt="myket5"
          width={984}
          height={1143}
          className="w-full h-auto"
        />

        <CustomTypography> با این کار اشتراکت فعال می‌شه</CustomTypography>
      </div>
    </WebViewContainer>
  );
};

export default MyketContainer;
