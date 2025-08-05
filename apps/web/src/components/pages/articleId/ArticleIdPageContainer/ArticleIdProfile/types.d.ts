import { ArticleIdPageContainerTypes } from '../types';

type AuthorTypes = Pick<Pick<ArticleIdPageContainerTypes, 'author'>['author'], 'authorName' | 'id'>;
type ProfileTypes = Pick<ArticleIdPageContainerTypes, 'publishTime' | 'rateCount' | 'commentCount'>;
type ItemsTypes = AuthorTypes & ProfileTypes;
export interface ArticleIdProfileTypes extends ItemsTypes {
  wordsCount: number;
  name: string | undefined;
  profileImage: string | undefined;
}

export interface ArticleIdProfileInfoTypes
  extends Pick<ArticleIdProfileTypes, 'rateCount' | 'commentCount' | 'publishTime' | 'wordsCount'> {}
