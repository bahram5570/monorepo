import { AuthorPageContainerTypes } from '../types';

export interface AuthorProfileTypes
  extends Pick<AuthorPageContainerTypes, 'authorName' | 'authorPic' | 'description'> {}
