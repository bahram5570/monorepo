import CustomImage from '@components/ui/CustomImage';

import WebViewContainer from '../WebViewContainer';

const DevicesContainer = () => {
  return (
    <WebViewContainer>
      <CustomImage
        src="/assets/images/webView/devices/1.webp"
        alt="devices1"
        width={984}
        height={1143}
        className="w-full h-auto"
      />
    </WebViewContainer>
  );
};

export default DevicesContainer;
