import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const ExperimentContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>
          در این حالت فقط کافیه اپلیکیشنت رو به آخرین نسخه آپدیت کنی تا هم تو بتونی برای پزشک فایل ارسال کنی و هم پزشک
          برای تو!
        </CustomTypography>
        <CustomImage
          src="/assets/images/webView/experiment/1.webp"
          alt="experiment1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
    </WebViewContainer>
  );
};

export default ExperimentContainer;
