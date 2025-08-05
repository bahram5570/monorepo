import { CommentsGeneratorProps } from '../types';

export interface CommentsGeneratorTopPartProps
  extends Pick<
    CommentsGeneratorProps,
    'avatar' | 'createTime' | 'name' | 'approvedProfile' | 'selfComment' | 'userId'
  > {}
