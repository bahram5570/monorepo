import DownloadAppMen from '@components/DownloadApp/DownloadAppMen';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';

const DownloadPageContainer = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full relative pt-[100px] md:pt-[200px] pb-12 flex flex-col items-center gap-12">
        <DownloadApp />
        <DownloadAppMen />
      </div>
    </HeaderFooterContainer>
  );
};

export default DownloadPageContainer;
