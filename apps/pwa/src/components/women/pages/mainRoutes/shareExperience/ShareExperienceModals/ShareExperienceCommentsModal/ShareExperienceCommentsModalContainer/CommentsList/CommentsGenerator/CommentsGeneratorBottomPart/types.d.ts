import { CommentsGeneratorProps } from '../types';

export interface CommentsGeneratorBottomPartProps
  extends Pick<
    CommentsGeneratorProps,
    'disliked' | 'likeCount' | 'selfComment' | 'id' | 'state' | 'userId' | 'avatar' | 'name' | 'shareId'
  > {}
