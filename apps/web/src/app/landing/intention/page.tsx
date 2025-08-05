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

import IntentionHeading from './IntentionHeading';
import {
  INTENTION_ACHIEVEMENTS_LIST,
  INTENTION_COMMENTS_LIST,
  INTENTION_FEATURES_INTRODUCTION_LIST,
} from './constants';

export const metadata: Metadata = {
  title: 'پیشگیری از بارداری یا اقدام به بارداری',
  description: 'Preventing pregnancy or trying to get pregnant',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/landing/intention`,
  },
};

const Intention = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full relative pb-12 flex flex-col items-center gap-12">
        <IntentionHeading />
        <QrCode />
        <Achievements list={INTENTION_ACHIEVEMENTS_LIST} />
        <FeaturesIntruduction
          list={INTENTION_FEATURES_INTRODUCTION_LIST}
          mainTitle="چرا باید ایمپو را برای اقدام به بارداری نصب کنید؟"
        />
        <Scores title="امتیاز کاربران در اَپ‌استور" />
        <LandingArticles
          showAllArticlesLinkTo="blogs"
          url="support/article/articles/category/64e9a587bd64be4a71068872/0/10"
          title="تصمیم گرفتی باردار بشی و دنبال منبعی موثق برای اقدام به بارداری می‌گردی؟"
          subTitle="مقالات ایمپو از به‌روزترین و تخصصی‌ترین منابع و توسط متخصصین هر حوزه نوشته می‌شه و بهت کمک می‌کنه تا جواب سوالاتت رو در کوتاه‌ترین زمان پیدا کنی"
        />
        <Comments list={INTENTION_COMMENTS_LIST} />
        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default Intention;
