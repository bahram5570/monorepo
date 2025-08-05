import { ArticleIdResponseTypes } from '@app/[articleId]/types';

export interface ArticleIdPageContainerTypes extends ArticleIdResponseTypes {
  articleId: string;
}

export type ArticleSubjectListTypes = { title: string; tagType: 'h2' | 'h3'; id: string }[];
