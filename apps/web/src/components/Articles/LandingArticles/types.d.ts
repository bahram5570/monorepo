import { SlidingArticleTypes } from '../ArticleCardGenerator/types';

export interface LandingArticlesTypes {
  url: string;
  title: string;
  subTitle?: string;
  showAllArticlesLinkTo: string;
}

export type LandingArticlesResponseTypes = {
  totalCount: number;
  articles: SlidingArticleTypes[];
};
