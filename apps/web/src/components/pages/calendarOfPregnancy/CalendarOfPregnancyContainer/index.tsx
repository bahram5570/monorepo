import CtaBanner from '@components/CtaBanner';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';
import { ctaBannerService } from '@services/ctaBannerServices';

import CalendarOfPregnancyContent from './CalendarOfPregnancyContent';
import CalendarOfPregnancyDownloadScript from './CalendarOfPregnancyDownloadScript';
import CalendarOfPregnancyHeading from './CalendarOfPregnancyHeading';
import CalendarOfPregnancyInfo from './CalendarOfPregnancyInfo';
import CalendarOfPregnancyMethods from './CalendarOfPregnancyMethods';
import CalendarOfPregnancyMonths from './CalendarOfPregnancyMonths';
import CalendarOfPregnancyTable from './CalendarOfPregnancyTable';
import CalendarOfPregnancyThreeMonths from './CalendarOfPregnancyThreeMonths';
import CalendarOfPregnancyWeeks from './CalendarOfPregnancyWeeks';
import { CALENDAR_OF_PREGNANCY_BANNER_NAME } from './constants';

const CalendarOfPregnancyContainer = async () => {
  const { ctaData } = await ctaBannerService(CALENDAR_OF_PREGNANCY_BANNER_NAME);

  return (
    <HeaderFooterContainer>
      <div className="absolute top-0 left-0 right-0 w-full h-[90vh] bg-gradient-to-b from-[#FFDCD9] pointer-events-none" />

      <div className="relative w-full max-w-[640px] pt-[100px] md:pt-[150px] pb-12 px-4">
        <CalendarOfPregnancyHeading />
        <QrCode />
        <CalendarOfPregnancyMethods />
        <CalendarOfPregnancyContent />
        <CalendarOfPregnancyTable />
        <CalendarOfPregnancyInfo />
        <CalendarOfPregnancyWeeks />
        <CalendarOfPregnancyMonths />
        <CalendarOfPregnancyThreeMonths />
        <CalendarOfPregnancyDownloadScript />

        {ctaData && <CtaBanner {...ctaData} />}
      </div>
    </HeaderFooterContainer>
  );
};

export default CalendarOfPregnancyContainer;
