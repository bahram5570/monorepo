import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';

import CareersAboutUs from './CareersAboutUs';
import CareersBanner from './CareersBanner';
import CareersHeading from './CareersHeading';
import CareersHiringProcess from './CareersHiringProcess';
import CareersMap from './CareersMap';
import CareersOpportunities from './CareersOpportunities';
import CareersSlides from './CareersSlides';
import CareersValues from './CareersValues';
import { CareersPageTypes } from './types';

const CareersPage = ({ opportunities }: CareersPageTypes) => {
  return (
    <HeaderFooterContainer>
      <div className="w-full">
        <QrCode className="top-[500px]" />
        <CareersHeading />
        <CareersAboutUs />
        <CareersValues />
        <CareersOpportunities opportunities={opportunities} />
        <CareersHiringProcess />
        <CareersSlides />
        <CareersBanner />
        <CareersMap />
      </div>
    </HeaderFooterContainer>
  );
};

export default CareersPage;
