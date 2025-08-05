import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const IosContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography fontSize="Lable_Medium"> نسخه IOS</CustomTypography>
        <CustomTypography>
          در حال حاضر کاربران دارای سیستم عامل IOS از وب اپ استفاده می‌کنند و به همین دلیل امکان فعال‌کردن و نمایش
          یادآور برای آنها وجود ندارد. به زودی این امکان با انتشار نسخه اپلیکیشن برای گوشی‌های دارای سیستم عامل IOS
          فراهم خواهد شد.
        </CustomTypography>
      </div>
    </WebViewContainer>
  );
};

export default IosContainer;
