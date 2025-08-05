export type ArticlesTypes = {
  doctor: null | {
    profileImage: string;
    speciality: string;
    visitCard: string;
    name: string;
    id: string;
  };
  imageCoverTitle: string;
  canonicalLink: string;
  imageCoverAlt: string;
  snippetTitle: string;
  imageCover: string;
  createTime: string;
  title: string;
  meta: string;
  body: string;
  url: string;
  categories: {
    seoPublicDescription: string;
    imageCoverTitle: string;
    seoPublicTitle: string;
    imageCoverAlt: string;
    categoryPic: string;
    seoAdvanced: string;
    imageCover: string;
    isIndex: boolean;
    title: string;
    slug: string;
    meta: string;
    body: string;
    id: string;
  }[];
  publishTime: string;
  keywords: string[];
  isIndex: boolean;
  author: {
    authorPicTitle: string;
    authorPicAlt: string;
    description: string;
    phoneNumber: string;
    authorName: string;
    firstName: string;
    authorPic: string;
    lastName: string;
    email: string;
    bio: string;
    id: string;
  };
  before: {
    title: string;
    url: string;
  };
  after: {
    title: string;
    url: string;
  };
  commentCount: number;
  rateCount: number;
  status: number;
  rate: number;
  faqs: {
    question: string;
    answer: string;
    id: string;
  }[];
};
