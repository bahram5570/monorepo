import { SlidingArticleTypes } from '@components/Articles/ArticleCardGenerator/types';

import { LandingArticlesTypes } from '../types';

type Types = Pick<LandingArticlesTypes, 'title' | 'subTitle' | 'showAllArticlesLinkTo'>;

export interface LandingArticlesContainerTypes extends Types {
  data?: SlidingArticleTypes[];
}
