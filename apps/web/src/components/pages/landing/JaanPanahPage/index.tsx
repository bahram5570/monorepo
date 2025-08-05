import HeaderFooterContainer from '@components/HeaderFooterContainer';

import JaanPanahContainer from './JaanPanahContainer';
import JaanPanahHeading from './JaanPanahHeading';

const JaanPanahPage = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full flex flex-col gap-8 md:gap-12 pb-12">
        <JaanPanahHeading />
        <JaanPanahContainer />
      </div>
    </HeaderFooterContainer>
  );
};

export default JaanPanahPage;
