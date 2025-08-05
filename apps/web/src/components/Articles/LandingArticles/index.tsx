import http from '@services/http';

import LandingArticlesContainer from './LandingArticlesContainer';
import { LandingArticlesResponseTypes, LandingArticlesTypes } from './types';

const LandingArticles = async ({ url, title, subTitle, showAllArticlesLinkTo }: LandingArticlesTypes) => {
  const data = await http<LandingArticlesResponseTypes>({
    url,
    method: 'GET',
    cache: 'no-store',
  });

  return (
    <LandingArticlesContainer
      title={title}
      subTitle={subTitle}
      data={data.data?.articles}
      showAllArticlesLinkTo={showAllArticlesLinkTo}
    />
  );
};

export default LandingArticles;
