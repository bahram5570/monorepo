import LandingArticles from '@components/Articles/LandingArticles';

import { ArticleIdSampleArticlesTypes } from './types';

const ArticleIdSampleArticles = ({ categoryId, categoryTitle }: ArticleIdSampleArticlesTypes) => {
  return (
    <LandingArticles
      showAllArticlesLinkTo="blogs"
      url={`support/article/articles/category/${categoryId}/1/10`}
      title={`سایر مقالات دسته ${categoryTitle}`}
    />
  );
};

export default ArticleIdSampleArticles;
