import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';

import BlogsArticles from '../BlogsArticles';
import BlogsCategory from '../BlogsCategory';
import BlogsMainHeading from '../BlogsMainHeading';
import { BlogsPageContainerTypes } from './types';

const BlogsPageContainer = ({ data }: BlogsPageContainerTypes) => {
  return (
    <HeaderFooterContainer isArticlePage={true} hasFooterLink={true}>
      <div className="w-full relative pb-12 flex flex-col items-center gap-12">
        <BlogsMainHeading />
        <QrCode className="xl:top-[400px] top-[620px]   lg:top-[415px]" />
        <BlogsCategory categories={data.categories} />
        <BlogsArticles categories={data.categories} />
        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default BlogsPageContainer;
