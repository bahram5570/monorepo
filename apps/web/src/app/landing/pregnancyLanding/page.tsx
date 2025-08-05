import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import Achievements from '@components/Achievements';
import LandingArticles from '@components/Articles/LandingArticles';
import Comments from '@components/Comments';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import FeaturesIntruduction from '@components/FeaturesIntruduction';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';
import Scores from '@components/Scores';

import PregnancyLandingHeading from './PregnancyLandingHeading';
import {
  PREGNACNY_ACHIEVEMENTS_LIST,
  PREGNACNY_COMMENTS_LIST,
  PREGNACNY_FEATURES_INTRODUCTION_LIST,
} from './constants';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description:
    'با اپلیکیشن بارداری ایمپو، وضعیت جنین و آزمایش‌ها رو به صورت هفتگی دنبال کن و با توصیه‌های تخصصی،رژیم غذایی و پزشک آنلاین بارداری رو با آرامش سپری کن.',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/landing/pregnancyLanding`,
  },
};

const Pregnancy = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full relative pb-12 flex flex-col items-center gap-12">
        <PregnancyLandingHeading />
        <QrCode />
        <Achievements list={PREGNACNY_ACHIEVEMENTS_LIST} />
        <FeaturesIntruduction
          list={PREGNACNY_FEATURES_INTRODUCTION_LIST}
          mainTitle="اپلیکیشن بارداری هفته به هفته ایمپو چه کمکی بهت می‌کنه؟"
        />
        <Scores title="امتیاز کاربران در اپ استور به عنوان بهترین اپلیکیشن بارداری برای ایفون" />
        <LandingArticles
          showAllArticlesLinkTo="blogs"
          url="support/article/articles/category/64e9a587bd64be4a71068872/0/10"
          title="به‌دنبال مرجعی برای مراقبت‌های هفته به هفته و ماهانه در بارداری هستی؟"
          subTitle="مقالات ایمپو با استفاده از به‌روزترین و تخصصی ترین منابع و توسط متخصصین هر حوزه نوشته می‌شه و بهت کمک می‌کنه تا جواب سوالاتت رو در کوتاه‌ترین زمان پیدا کنی."
        />
        <Comments list={PREGNACNY_COMMENTS_LIST} />
        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default Pregnancy;
