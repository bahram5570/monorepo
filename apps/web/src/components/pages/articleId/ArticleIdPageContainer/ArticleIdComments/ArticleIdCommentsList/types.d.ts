import { ArticleIdCommentsDataTypes } from '../__hooks__/useGetData/types';

export interface ArticleIdCommentsListTypes {
  pageNo: number;
  isLoading: boolean;
  totalCount: number;
  pageHandler: (p: number) => void;
  commentsList: ArticleIdCommentsDataTypes;
}

type CommentTypes = ArticleIdCommentsDataTypes[0];
export interface ArticleIdCommentsListGeneratorTypes extends CommentTypes {
  isFirstIndex: boolean;
}
