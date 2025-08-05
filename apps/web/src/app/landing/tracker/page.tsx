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

import TrackerHeading from './TrackerHeading';
import { TRACKER_ACHIEVEMENTS_LIST, TRACKER_COMMENTS_LIST, TRACKER_FEATURES_INTRODUCTION_LIST } from './constants';

export const metadata: Metadata = {
  title: 'پریود ترکر و تقویم قاعدگی ایمپو',
  description: 'impo calendar',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/landing/tracker`,
  },
};

const Tracker = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full relative pb-12 flex flex-col items-center gap-12">
        <TrackerHeading />
        <QrCode />
        <Achievements list={TRACKER_ACHIEVEMENTS_LIST} />
        <FeaturesIntruduction
          list={TRACKER_FEATURES_INTRODUCTION_LIST}
          mainTitle="چرا باید ایمپو را برای مدیریت تقویم قاعدگی نصب کنید؟"
        />
        <Scores title="امتیاز کاربران در اَپ‌استور" />
        <LandingArticles
          showAllArticlesLinkTo="blogs"
          url="support/article/articles/category/64e9a587bd64be4a71068873/1/10"
          title="دنبال بهترین و به‌روزترین مقالات برای حل مشکلات چرخه قاعدگیت هستی؟"
          subTitle="مقالات ایمپو از به‌روزترین و تخصصی‌ترین منابع و توسط متخصصین هر حوزه نوشته می‌شه و بهت کمک می‌کنه تا جواب سوالاتت رو در کوتاه‌ترین زمان پیدا کنی"
        />
        <Comments list={TRACKER_COMMENTS_LIST} />
        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default Tracker;
