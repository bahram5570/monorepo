import Achievements from '@components/Achievements';
import AppFeatures from '@components/AppFeatures';
import LandingArticles from '@components/Articles/LandingArticles';
import Comments from '@components/Comments';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';
import Scores from '@components/Scores';

import HomeFooter from './HomeFooter';
import HomeHeading from './HomeHeading';
import { HOME_ACHIEVEMENTS_LIST, HOME_COMMENTS_LIST } from './constants';

const HomePageContainer = () => {
  return (
    <HeaderFooterContainer hasFooterLink={true}>
      <div className="relative w-full flex flex-col items-center gap-12 pb-12">
        <HomeHeading />
        <QrCode />
        <Achievements list={HOME_ACHIEVEMENTS_LIST} />
        <AppFeatures />
        <Scores title="امتیاز کاربران در اَپ‌استور" />
        <LandingArticles
          showAllArticlesLinkTo="blogs"
          url="support/article/articles/1/10/publishedFilter"
          title="دنبال بهترین و به‌روزترین مقالات برای حل مشکلات چرخه قاعدگیت هستی؟"
          subTitle="مقالات ایمپو از به‌روزترین و تخصصی‌ترین منابع و توسط متخصصین هر حوزه نوشته می‌شه و بهت کمک می‌کنه تا جواب سوالاتت رو در کوتاه‌ترین زمان پیدا کنی"
        />
        <Comments list={HOME_COMMENTS_LIST} />
        <DownloadApp />
        <HomeFooter />
      </div>
    </HeaderFooterContainer>
  );
};

export default HomePageContainer;
