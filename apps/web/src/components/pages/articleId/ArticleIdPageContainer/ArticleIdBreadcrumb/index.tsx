import BlogsBreadcrumb from '@components/Articles/Blogs/BlogsBreadcrumb';

import { ArticleIdBreadcrumbTypes } from './types';

const ArticleIdBreadcrumb = ({ articleTitle, categorySlug, categoryTitle }: ArticleIdBreadcrumbTypes) => {
  const breadcrumbList = [
    { title: 'مقالات', linkTo: '/blogs' },
    { title: categoryTitle, linkTo: `/category/${categorySlug}` },
  ];

  return <BlogsBreadcrumb breadcrumbList={breadcrumbList} />;
};

export default ArticleIdBreadcrumb;
