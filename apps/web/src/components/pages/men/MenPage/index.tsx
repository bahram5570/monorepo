import Achievements from '@components/Achievements';
import LandingArticles from '@components/Articles/LandingArticles';
import Comments from '@components/Comments';
import DownloadAppMen from '@components/DownloadApp/DownloadAppMen';
import FeaturesIntruduction from '@components/FeaturesIntruduction';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';
import Scores from '@components/Scores';

import MenHeading from './MenHeading';
import { MEN_ACHIEVEMENTS_LIST, MEN_COMMENTS_LIST, MEN_FEATURES_INTRODUCTION_LIST } from './constants';

const MenPage = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full relative pb-12 flex flex-col items-center gap-12">
        <MenHeading />
        <QrCode />
        <Achievements list={MEN_ACHIEVEMENTS_LIST} />
        <FeaturesIntruduction
          list={MEN_FEATURES_INTRODUCTION_LIST}
          mainTitle="چرا باید ایمپو آقایان را برای مدیریت رابطه همدلی نصب کنیم؟"
        />
        <Scores title="امتیاز کاربران در اَپ‌استور" />
        <LandingArticles
          showAllArticlesLinkTo="blogs"
          url="support/article/articles/category/64e9a588bd64be4a71068877/0/10"
          title="جدیدترین مقاله‌ها در حوزه سلامتی روحی و جسمی آقایان رو می‌تونی در این بخش مطالعه کنی"
          subTitle="مقالات ایمپو از به‌روزترین و تخصصی‌ترین منابع و توسط متخصصین هر حوزه نوشته می‌شه و بهت کمک می‌کنه تا جواب سوالاتت رو در کوتاه‌ترین زمان پیدا کنی"
        />
        <Comments list={MEN_COMMENTS_LIST} />
        <DownloadAppMen />
      </div>
    </HeaderFooterContainer>
  );
};

export default MenPage;
