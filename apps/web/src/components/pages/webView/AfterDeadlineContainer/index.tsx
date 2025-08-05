import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const AfterDeadlineContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>
          در صورتی که به هر دلیل پریودت عقب افتاد، ایمپو رو باز کن و در جواب سوال زیر گزینه " نه هنوز پریود نشدم" رو
          انتخاب کن
        </CustomTypography>
        <CustomImage
          src="/assets/images/webView/afterDeadline/1.webp"
          alt="afterDeadline1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography> با این کار چرخه قاعدگیت وارد تاخیر میشه. </CustomTypography>
        <CustomImage
          src="/assets/images/webView/afterDeadline/2.webp"
          alt="afterDeadline2"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>
          این کار رو تا روزی که پریود شدی ادامه بده و روزی که پریود شدی گزینه " آره پریود شدم" رو انتخاب کن{' '}
        </CustomTypography>

        <CustomImage
          src="/assets/images/webView/afterDeadline/3.webp"
          alt="afterDeadline3"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>در این حالت چرخه، روز اول قاعدگیت رو نمایش خواهد داد</CustomTypography>

        <CustomImage
          src="/assets/images/webView/afterDeadline/4.webp"
          alt="afterDeadline4"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
    </WebViewContainer>
  );
};

export default AfterDeadlineContainer;
