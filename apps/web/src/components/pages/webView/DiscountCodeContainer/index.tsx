import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const DiscountCodeContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <div>
          <CustomTypography>تو صفحه خرید اشتراک از اینجا روی قسمت ثبت کد تخفیف برن</CustomTypography>
        </div>

        <CustomImage
          src="/assets/images/webView/discountCode/1.webp"
          alt="discountCode1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>کد تخفیفت رو تایپ کن روی دکمه اعمال کد تخفیف بزن</CustomTypography>
        <CustomImage
          src="/assets/images/webView/discountCode/2.webp"
          alt="discountCode2"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>و بعد از اعمال تخفیف رو دکمه پرداخت بزن</CustomTypography>

        <CustomImage
          src="/assets/images/webView/discountCode/3.webp"
          alt="discountCode3"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
    </WebViewContainer>
  );
};

export default DiscountCodeContainer;
