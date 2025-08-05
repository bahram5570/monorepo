import BlogsBreadcrumb from '@components/Articles/Blogs/BlogsBreadcrumb';
import DownloadApp from '@components/DownloadApp/DownloadAppWomen';
import HeaderFooterContainer from '@components/HeaderFooterContainer';
import CategoryMainTitle from '@components/pages/category/slug/CategoryPageContainer/CategoryMainTitle';

import AuthorProfile from './AuthorProfile';
import AuthorArticles from './AutorArticles';
import { AuthorPageContainerTypes } from './types';

const AuthorPageContainer = (props: AuthorPageContainerTypes) => {
  const breadcrumbList = [{ title: 'نویسنده', linkTo: '/blogs' }, { title: 'نویسنده' }];

  return (
    <HeaderFooterContainer>
      <div className="w-full pt-[100px] md:pt-[150px] md:w-11/12 lg:w-10/12 px-4 md:px-0">
        <BlogsBreadcrumb breadcrumbList={breadcrumbList} />
        <AuthorProfile authorName={props.authorName} authorPic={props.authorPic} description={props.description} />
        <CategoryMainTitle title={props.authorName} />
        <AuthorArticles id={props.id} />
      </div>

      <div className="w-full py-12">
        <DownloadApp />
      </div>
    </HeaderFooterContainer>
  );
};

export default AuthorPageContainer;
