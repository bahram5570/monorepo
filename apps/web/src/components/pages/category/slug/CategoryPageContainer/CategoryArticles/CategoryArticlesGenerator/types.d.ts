import { ArticlesTypes } from '@app/types';

export interface CategoryArticlesGeneratorTypes extends ArticlesTypes {
  isFirstIndex: boolean;
}

export interface GeneratorScriptsTypes extends Pick<CategoryArticlesGeneratorTypes, 'url' | 'title' | 'body'> {}

export interface GeneratorProfileTypes
  extends Pick<CategoryArticlesGeneratorTypes, 'author' | 'publishTime' | 'commentCount' | 'rateCount'> {}
