import AppFeatures from '@components/AppFeatures';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';

import DownloadSection from './DownloadSection';
import ImpoStory from './ImpoStory';

// import InfoSection from './InfoSection';

const AboutUsContainer = () => {
  return (
    <HeaderFooterContainer>
      <div className="flex flex-col items-center justify-center gap-5">
        <DownloadSection />
        <QrCode className="xl:top-[740px]" />
        {/* <InfoSection /> */}
        <ImpoStory />
        <AppFeatures />
        <div className="w-full my-4">
          <DownloadApp />
        </div>
      </div>
    </HeaderFooterContainer>
  );
};

export default AboutUsContainer;
