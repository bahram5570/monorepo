import { ArticleIdCommentsTypes } from '../types';

export interface ArticleIdCommentsNewCommentTypes extends Pick<ArticleIdCommentsTypes, 'articleId'> {}

export interface ArticleIdNewTitleGeneratorTypes {
  title: string;
  hasStar?: boolean;
}

export interface ArticleIdNewRateTypes {
  rate: number;
  rateHandler: (v: number) => void;
}

export interface ArticleIdNewTextareaTypes {
  message: string;
  messageHandler: (v: string) => void;
}
