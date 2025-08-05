import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const RemoveQuestionContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <div>
          <CustomTypography>
            درصورتی که منتظر پاسخ پزشک هستی، بلافاصله بعد از پاسخ دادن پزشک، سوال با تمام مراحل رفت و برگشتش برمی‌گرده
          </CustomTypography>
        </div>

        <CustomImage
          src="/assets/images/webView/removeQuestion/1.webp"
          alt="removeQuestion1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>
          اما اگه خودت باید پاسخ پزشک رو بدی از قسمت پشتیبانی یک تیکت ارسال کن تا مشکل رو برات حل کنیم
        </CustomTypography>
        <CustomImage
          src="/assets/images/webView/removeQuestion/2.webp"
          alt="removeQuestion2"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
    </WebViewContainer>
  );
};

export default RemoveQuestionContainer;
