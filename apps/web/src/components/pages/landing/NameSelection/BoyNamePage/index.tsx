import CtaBanner from '@components/CtaBanner';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';
import CustomTypography from '@components/ui/CustomTypography';
import { ctaBannerService } from '@services/ctaBannerServices';

import AuthorProfile from '../GirlNamePage/AuthorProfile';
import AlphabetBtns from './AlphabetBtns';
import CustomTable from './CustomTable';
import Description from './Description';
import IntroductionSection from './IntroductionSection';
import NameSelectionHeading from './NameSelectionHeading';
import { NAME_SELECTION_BANNER_NAME_2, PERSIAN_BOY_NAME_DICTIONARY } from './constants';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';

const BoyNamePage = async () => {
  const { ctaData } = await ctaBannerService(NAME_SELECTION_BANNER_NAME_2);
  const dataEntries = Object.entries(PERSIAN_BOY_NAME_DICTIONARY);
  
  return (
    <HeaderFooterContainer>
      <div className="w-full flex flex-col items-center pb-12 mx-auto">
        <NameSelectionHeading />
        <QrCode />
        <AuthorProfile
          imageUrl="/assets/images/doctor.webp"
          name="مهلا شریعتی"
          publishDate="31 مرداد"
          readingTime=" 12 دقیقه برای خواندن"
        />

        <div className="w-full sm:w-9/12 md:w-8/12 lg:w-6/12 px-3 pb-16">
          <AlphabetBtns />
          <IntroductionSection />

          {ctaData && (
            <div className="w-full pb-20">
              <CtaBanner {...ctaData} />
            </div>
          )}

          {dataEntries.map((item) => (
            <div id={item[0]} key={item[0]} className="mb-16 flex flex-col gap-3">
              <CustomTypography
                fontSize="Headline_Small"
                tagType="h2"
              >{`انتخاب اسم پسر امروزی بر اساس حرف «${item[1].category}»`}</CustomTypography>
              <CustomTable data={item[1].list} />
            </div>
          ))}

          <Description />
        </div>

        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default BoyNamePage;
