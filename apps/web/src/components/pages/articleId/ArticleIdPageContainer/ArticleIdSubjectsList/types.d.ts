import { ArticleSubjectListTypes } from '../types';

export interface ArticleIdSubjectsListTypes {
  articleSubjectList: ArticleSubjectListTypes;
}

type ItemsTypes = ArticleSubjectListTypes[0];
export interface ArticleIdSubjectsListGeneratorTypes extends ItemsTypes {
  isFirstElement: boolean;
}
