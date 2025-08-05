import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const AwaitPaymentContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>
          اگر پرداخت کامل شده، برو داخل برنامه، بخش کلینیک، اگر سوال در حالت در انتظار پرداخته:
        </CustomTypography>
        <CustomImage
          src="/assets/images/webView/awaitPayment/1.webp"
          alt="awaitPayment1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>
          برو داخل قسمت "مشاهده همه" اگه علاوه بر سوال "در انتظار پرداخت" سوالی وجود داره که "در حال بررسی" هست، سوال
          فرستاده شده و نیاز به پرداخت دوباره نیست.
        </CustomTypography>
        <CustomImage
          src="/assets/images/webView/awaitPayment/2.webp"
          alt="awaitPayment2"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <div>
          <CustomTypography>سوال "درحال بررسی" توسط پزشک پاسخ داده‌می‌شه</CustomTypography>
          <CustomTypography>و سوال "در انتظار پرداخت" بعد از 24 ساعت حذف می‌شه.</CustomTypography>
          <CustomTypography>اما اگه سوال "در حال بررسی" در قسمت "مشاهده همه" وجود نداشت،</CustomTypography>
          <CustomTypography>فرآیند کامل نشده و مبلغ کسر شده حداکثر بعد از 72 ساعت به حسابت برمی‌گرده</CustomTypography>
        </div>

        <CustomImage
          src="/assets/images/webView/awaitPayment/3.webp"
          alt="awaitPayment3"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
    </WebViewContainer>
  );
};

export default AwaitPaymentContainer;
