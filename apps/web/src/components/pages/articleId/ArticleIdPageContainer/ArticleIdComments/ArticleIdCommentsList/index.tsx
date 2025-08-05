import CustomPagination from '@components/ui/CustomPagination';
import CustomTypography from '@components/ui/CustomTypography';
import Spinner from '@components/ui/Spinner';

import ArticleIdCommentsListGenerator from './ArticleIdCommentsListGenerator';
import { ArticleIdCommentsListTypes } from './types';

const ArticleIdCommentsList = ({
  commentsList,
  pageHandler,
  totalCount,
  isLoading,
  pageNo,
}: ArticleIdCommentsListTypes) => {
  return (
    <>
      {commentsList.length > 0 && (
        <div className="w-full">
          <CustomTypography fontSize="Headline_Medium" color={'Surface_InverseSurface'} className="pb-6">
            نظرات شما
          </CustomTypography>

          {commentsList.map((item, index) => (
            <ArticleIdCommentsListGenerator {...item} isFirstIndex={index === 0} key={index} />
          ))}

          <div className="w-full h-16 flex justify-center items-end">
            {totalCount > 1 && !isLoading && (
              <CustomPagination page={pageNo} totalPage={totalCount} pageHandler={pageHandler} />
            )}

            {isLoading && <Spinner size={40} />}
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleIdCommentsList;
