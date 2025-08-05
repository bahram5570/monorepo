import { SpecialistCommentsProps } from '../../types';

export interface UseGetDataProps extends SpecialistCommentsProps {}

export type CommentsResponseTypes = {
  isValid: boolean;
  comment: {
    totalCount: number;
    pageSize: number;
    pageMax: number;
    pageNo: number;
    list: {
      descritpion: string;
      positives: string[];
      negatives: string[];
      userName: string;
      rate: number;
      time: string;
    }[];
  };
};
