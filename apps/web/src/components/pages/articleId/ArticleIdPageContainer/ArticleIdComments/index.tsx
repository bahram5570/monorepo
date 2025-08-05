'use client';

import { COLORS_LIST } from '@theme/colors';

import ArticleIdCommentsList from './ArticleIdCommentsList';
import ArticleIdCommentsNewComment from './ArticleIdCommentsNewComment';
import useGetData from './__hooks__/useGetData';
import { ArticleIdCommentsTypes } from './types';

const ArticleIdComments = ({ articleId }: ArticleIdCommentsTypes) => {
  const { isLoading, commentsList, totalCount, pageNo, pageHandler } = useGetData(articleId);

  return (
    <div
      className="w-full flex flex-col gap-20 border-[1px] rounded-2xl px-4 md:px-6 py-5"
      style={{ borderColor: COLORS_LIST.Neutral_Surface }}
    >
      <ArticleIdCommentsNewComment articleId={articleId} />

      <ArticleIdCommentsList
        commentsList={commentsList}
        pageHandler={pageHandler}
        totalCount={totalCount}
        isLoading={isLoading}
        pageNo={pageNo}
      />
    </div>
  );
};

export default ArticleIdComments;
