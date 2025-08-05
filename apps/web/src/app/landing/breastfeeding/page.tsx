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

import BreastfeedingHeading from './BreastfeedingHeading';
import {
  BREASTFEEDING_ACHIEVEMENTS_LIST,
  BREASTFEEDING_COMMENTS_LIST,
  BREASTFEEDING_FEATURES_INTRODUCTION_LIST,
} from './constants';

export const metadata: Metadata = {
  title: 'شیردهی',
  description: 'breastfeeding',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/landing/breastfeeding`,
  },
};

const Breastfeeding = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full relative pb-12 flex flex-col items-center gap-12">
        <BreastfeedingHeading />
        <QrCode />
        <Achievements list={BREASTFEEDING_ACHIEVEMENTS_LIST} />
        <FeaturesIntruduction
          list={BREASTFEEDING_FEATURES_INTRODUCTION_LIST}
          mainTitle="چرا باید ایمپو را برای مراقبت از کودک نصب کنید؟"
        />
        <Scores title="امتیاز کاربران در اَپ‌استور" />
        <LandingArticles
          showAllArticlesLinkTo="blogs"
          url="support/article/articles/category/64e9a587bd64be4a71068872/0/10"
          title="در مسیر رشد فرزند عزیزت هم کنارت هستیم با ارائه مقاله‌های به‌روز و معتبر"
          subTitle="مقالات ایمپو از به‌روزترین و تخصصی‌ترین منابع و توسط متخصصین هر حوزه نوشته می‌شه و بهت کمک می‌کنه تا جواب سوالاتت رو در کوتاه‌ترین زمان پیدا کنی"
        />
        <Comments list={BREASTFEEDING_COMMENTS_LIST} />
        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default Breastfeeding;
