import CustomImage from '@components/ui/CustomImage';

import WebViewContainer from '../WebViewContainer';

const HuaweiContainer = () => {
  return (
    <WebViewContainer>
      <CustomImage
        src="/assets/images/webView/huawei/1.webp"
        alt="huawei1"
        width={984}
        height={1143}
        className="w-full h-auto"
      />
    </WebViewContainer>
  );
};

export default HuaweiContainer;
