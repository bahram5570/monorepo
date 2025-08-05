import { ArticlesTypes } from '@app/types';

export type BlogsResponseTypes = {
  totalCount: number;
  categories: {
    seoPublicDescription: string;
    articles: ArticlesTypes[];
    imageCoverTitle: string;
    seoPublicTitle: string;
    imageCoverAlt: string;
    seoAdvanced: string;
    categoryPic: string;
    imageCover: string;
    totalCount: number;
    isIndex: boolean;
    title: string;
    slug: string;
    meta: string;
    body: string;
    id: string;
  }[];
};
