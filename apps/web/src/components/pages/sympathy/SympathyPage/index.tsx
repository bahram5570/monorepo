import Achievements from '@components/Achievements';
import LandingArticles from '@components/Articles/LandingArticles';
import Comments from '@components/Comments';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import FeaturesIntruduction from '@components/FeaturesIntruduction';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';
import Scores from '@components/Scores';

import SympathyHeading from './SympathyHeading';
import { SYMPATHY_ACHIEVEMENTS_LIST, SYMPATHY_COMMENTS_LIST, SYMPATHY_FEATURES_INTRODUCTION_LIST } from './constants';

const SympathyPage = () => {
  return (
    <HeaderFooterContainer>
      <div className="w-full relative pb-12 flex flex-col items-center gap-12">
        <SympathyHeading />
        <QrCode />
        <Achievements list={SYMPATHY_ACHIEVEMENTS_LIST} />
        <FeaturesIntruduction
          list={SYMPATHY_FEATURES_INTRODUCTION_LIST}
          mainTitle="چرا باید از همدل ایمپو استفاده کنیم؟"
        />
        <Scores title="امتیاز کاربران در اَپ‌استور" />
        <LandingArticles
          showAllArticlesLinkTo="blogs"
          url="support/article/articles/category/66237e86251126b65492b0c2/0/10"
          title="جدیدترین مقاله‌ها در مورد مسائل زوج‌ها و بهبود رابطه جنسی رو می‌تونی در این بخش مطالعه کنی"
          subTitle="مقالات ایمپو از به‌روزترین و تخصصی‌ترین منابع و توسط متخصصین هر حوزه نوشته می‌شه و بهت کمک می‌کنه تا جواب سوالاتت رو در کوتاه‌ترین زمان پیدا کنی"
        />
        <Comments list={SYMPATHY_COMMENTS_LIST} />
        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default SympathyPage;
