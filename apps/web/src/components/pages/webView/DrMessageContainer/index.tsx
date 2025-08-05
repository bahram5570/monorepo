import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const DrMessageContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography fontSize="Lable_Medium">سوالم حذف شده, چه کار کنم ؟</CustomTypography>
        <CustomTypography>
          درصورتی که منتظر پاسخ پزشک هستی، بلافاصله بعد از پاسخ دادن پزشک، سوال با تمام مراحل رفت و برگشتش برمی‌گرده،
          اما اگه خودت باید پاسخ پزشک رو بدی از قسمت پشتیبانی یک تیکت ارسال کن تا مشکل رو برات حل کنیم
        </CustomTypography>
      </div>
    </WebViewContainer>
  );
};

export default DrMessageContainer;
