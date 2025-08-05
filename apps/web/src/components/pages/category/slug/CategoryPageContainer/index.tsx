import BlogsBreadcrumb from '@components/Articles/Blogs/BlogsBreadcrumb';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import QrCode from '@components/QrCode';

import CategoryArticles from './CategoryArticles';
import CategoryBlogsCategories from './CategoryBlogsCategories';
import CategoryMainTitle from './CategoryMainTitle';
import CategorySearch from './CategorySearch';
import { CategoryPageContainerTypes } from './types';

const CategoryPageContainer = ({ categoryData, categoriesList }: CategoryPageContainerTypes) => {
  const breadcrumbList = [{ title: 'نویسنده', linkTo: '/blogs' }, { title: categoryData.title }];

  return (
    <HeaderFooterContainer isArticlePage={true} hasFooterLink={true}>
      <div className="w-full pt-[100px] md:pt-[150px] md:w-11/12 lg:w-10/12 px-4 md:px-0">
        <CategorySearch />
        <CategoryBlogsCategories categoriesList={categoriesList} />
        <QrCode className="xl:top-[400px] top-[620px]   lg:top-[415px]" />
        <BlogsBreadcrumb breadcrumbList={breadcrumbList} />
        <CategoryMainTitle title={categoryData.title} />
        <CategoryArticles id={categoryData.id} />
      </div>

      <div className="w-full py-12">
        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default CategoryPageContainer;
