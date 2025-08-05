import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const SympathyRequestContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>
          اگه برای پارتنرت درخواست همدلی فرستادی ولی اون درخواستت رو نمی‌بینه ، احتمالا اپلیکینش آپدیت نیست با آپدیت
          کردن ایمپو آقایان و بانوان هر دو نفر به آخرین نسخه، مشکل رفع خواهد شد
        </CustomTypography>
      </div>
    </WebViewContainer>
  );
};

export default SympathyRequestContainer;
