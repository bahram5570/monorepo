import CustomImage from '@components/ui/CustomImage';

import WebViewContainer from '../WebViewContainer';

const XiaomiContainer = () => {
  return (
    <WebViewContainer>
      <CustomImage
        src="/assets/images/webView/xiaomi/1.webp"
        alt="xiaomi1"
        width={1381}
        height={1728}
        className="w-full h-auto"
      />
    </WebViewContainer>
  );
};

export default XiaomiContainer;
