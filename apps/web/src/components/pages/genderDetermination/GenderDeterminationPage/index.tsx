import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';

import GenderDeterminationContents from './GenderDeterminationContents';
import GenderDeterminationDoctor from './GenderDeterminationDoctor';
import GenderDeterminationHeading from './GenderDeterminationHeading';

// import GenderDeterminationLink from './GenderDeterminationLink';

const GenderDeterminationPage = () => {
  return (
    <>
      <HeaderFooterContainer>
        <div className="relative w-full pb-[80px]">
          <GenderDeterminationHeading />
          <QrCode className="xl:top-[400px]" />

          <div className="bg-[url(/assets/images/genderDeterminationBackground.webp)] bg-cover bg-top">
            <div className="relative w-full px-4 mx-auto md:w-11/12 lg:w-10/12 md:max-w-full">
              <GenderDeterminationDoctor />
              <GenderDeterminationContents />
            </div>
          </div>
        </div>
      </HeaderFooterContainer>

      {/* <GenderDeterminationLink /> */}
    </>
  );
};

export default GenderDeterminationPage;
