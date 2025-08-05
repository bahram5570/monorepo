'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import CustomPagination from '@components/ui/CustomPagination';

import CategoryArticlesGenerator from './CategoryArticlesGenerator';
import CategorySkeleton from './CategorySkeleton';
import useCategoryGetData from './__hooks__/useCategoryGetData';
import { CategoryArticlesTypes } from './types';

const CategoryArticles = ({ id }: CategoryArticlesTypes) => {
  const { breakPoint } = useBreakPoint();
  const { isLoading, data, totalPage, page, pageHandler } = useCategoryGetData(id);

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

export default CategoryArticles;
