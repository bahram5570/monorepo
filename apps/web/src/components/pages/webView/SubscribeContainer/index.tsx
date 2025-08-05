import { COLORS_LIST } from '@theme/colors';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import WebViewContainer from '../WebViewContainer';

const SubscribeContainer = () => {
  return (
    <WebViewContainer>
      <div className="flex flex-col gap-3 p-3 my-2">
        <div>
          <CustomTypography>اگه هنوز اشتراک داری از اینجا وارد قسمت پروفایل شو</CustomTypography>
        </div>

        <CustomImage
          src="/assets/images/webView/subscribe/1.webp"
          alt="subscribe1"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography>روی دکمه تمدید اشتراک بزن</CustomTypography>
        <CustomImage
          src="/assets/images/webView/subscribe/2.webp"
          alt="subscribe2"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 p-3 my-2">
        <CustomTypography> طرحی که می‌خوای رو انتخاب کن و اشتراکت رو تمدید کن</CustomTypography>
        <CustomImage
          src="/assets/images/webView/subscribe/3.webp"
          alt="subscribe3"
          width={984}
          height={1143}
          className="w-full h-auto"
        />
      </div>
      <div
        className="rounded-lg mt-7 px-[15px] py-[55px]"
        style={{ border: `1px solid ${COLORS_LIST.Primary_Primary}`, background: COLORS_LIST.Primary_PrimaryContainer }}
      >
        <CustomTypography className="text-center">
          این رو هم مدنظر داشته باش اشتراک جدید که خریدی بعد از تموم شدن اشتراک فعلیت، فعال می‌شه
        </CustomTypography>
      </div>
    </WebViewContainer>
  );
};

export default SubscribeContainer;
