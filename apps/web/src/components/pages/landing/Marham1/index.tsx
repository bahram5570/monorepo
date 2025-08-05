import HeaderFooterContainer from '@components/HeaderFooterContainer';

import MarhaamContainer from './MarhaamContainer';
import MarhaamHeading from './MarhaamHeading';

const Marhaam1PageContainer = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full flex flex-col gap-8 md:gap-12 pb-12">
        <MarhaamHeading />
        <MarhaamContainer />
      </div>
    </HeaderFooterContainer>
  );
};

export default Marhaam1PageContainer;
