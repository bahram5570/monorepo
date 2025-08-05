import CustomImage from '@components/ui/CustomImage';

import WebViewContainer from '../WebViewContainer';

const SamsungContainer = () => {
  return (
    <WebViewContainer>
      <CustomImage
        src="/assets/images/webView/samsung/1.webp"
        alt="samsung1"
        width={984}
        height={1143}
        className="w-full h-auto"
      />
    </WebViewContainer>
  );
};

export default SamsungContainer;
