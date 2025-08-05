export type ArticleIdCommentResponseTypes = {
  totalCount: number;
  comments: {
    message: string;
    status: number;
    phone: string;
    name: string;
    time: string;
    id: string;
    reply: {
      message: string;
      valid: boolean;
      time: string;
    };
  }[];
};

export type ArticleIdCommentsDataTypes = Pick<ArticleIdCommentResponseTypes, 'comments'>['comments'];
