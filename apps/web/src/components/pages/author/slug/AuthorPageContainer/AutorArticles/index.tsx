'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import CategoryArticlesGenerator from '@components/pages/category/slug/CategoryPageContainer/CategoryArticles/CategoryArticlesGenerator';
import CategorySkeleton from '@components/pages/category/slug/CategoryPageContainer/CategoryArticles/CategorySkeleton';
import CustomPagination from '@components/ui/CustomPagination';

import useAuthorGetData from './__hooks__/useAuthorGetData';
import { AuthorArticlesTypes } from './types';

const AuthorArticles = ({ id }: AuthorArticlesTypes) => {
  const { breakPoint } = useBreakPoint();
  const { isLoading, data, totalPage, page, pageHandler } = useAuthorGetData(id);

  return (
    <div className="w-full flex flex-col">
      {isLoading ? (
        <CategorySkeleton />
      ) : (
        data.map((article, index) => <CategoryArticlesGenerator {...article} isFirstIndex={index === 0} key={index} />)
      )}

      {totalPage !== null && (
        <div className="w-full flex justify-center py-6">
          <CustomPagination
            page={page}
            totalPage={totalPage}
            pageHandler={pageHandler}
            size={breakPoint.laptop ? 'small' : 'medium'}
          />
        </div>
      )}
    </div>
  );
};

export default AuthorArticles;
