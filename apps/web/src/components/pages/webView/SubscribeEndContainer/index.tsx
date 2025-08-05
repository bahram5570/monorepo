import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const SubscribeEndContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <div>
          <CustomTypography>اگه اشتراکت تموم شده، بعد از بازکردن اپلیکیشن و دیدن صفحه اشتراک:</CustomTypography>
          <ul className="list-disc px-5">
            <li>
              <CustomTypography>طرح اشتراکی که می‌خوای رو انتخاب کن </CustomTypography>
            </li>
            <li>
              <CustomTypography>و اشتراکت رو تمدید کن</CustomTypography>
            </li>
          </ul>
        </div>

        <CustomImage
          src="/assets/images/webView/subscribeEnd/1.webp"
          alt="subscribeEnd1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
    </WebViewContainer>
  );
};

export default SubscribeEndContainer;
