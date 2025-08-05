import { CommentsResponseTypes } from '../__hooks__/useGetData/types';

type ListTypes = Pick<CommentsResponseTypes, 'comment'>['comment']['list'];

export interface SpecialistCommentsListProps {
  commentsData: ListTypes;
}

export interface SpecialistCommentsGeneratorProps {
  isPositive: boolean;
  scripts: string[];
}
