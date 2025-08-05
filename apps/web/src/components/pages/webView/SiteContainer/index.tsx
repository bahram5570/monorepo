import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const SiteContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <div className="flex flex-col justify-center items-center gap-4 my-2">
          <CustomImage src="/assets/images/webView/site/1.webp" alt="site1" width={58} height={64} />
          <CustomTypography>
            اگه اپلیکیشنت رو از سایت ایمپو و لینک مستقیم دانلود و نصب کردی و تراکنش انجام دادی اما اشتراکت فعال نشده،
            اپلیکیشنت رو ببند و بعد از چند دقیقه دوباره وارد شو. اگه باز هم اشتراک برات فعال نشده‌بود، مبلغ کسر شده
            حداکثر تا 72 ساعت بعد به حسابت برمی‌گرده و دوباره باید مراحل خرید اشتراک رو از اول انجام بدی.
          </CustomTypography>
        </div>

        <CustomImage
          src="/assets/images/webView/site/2.webp"
          alt="site2"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
    </WebViewContainer>
  );
};

export default SiteContainer;
