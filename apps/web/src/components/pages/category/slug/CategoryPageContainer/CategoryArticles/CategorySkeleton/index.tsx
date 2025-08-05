import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import { useEffect, useState } from 'react';

import { CATEGORY_PAGE_SIZE } from '../__hooks__/useCategoryGetData/constants';

const CategorySkeleton = () => {
  const [list, setList] = useState<number[]>([]);
  const { breakPoint } = useBreakPoint();

  useEffect(() => {
    const result: number[] = [];

    for (let i = 0; i < CATEGORY_PAGE_SIZE; i++) {
      result.push(i);
    }

    setList(result);
  }, []);

  return (
    <>
      {!breakPoint.laptop &&
        list.map((item) => (
          <div
            className="w-full py-[32px] flex gap-5 border-t-[1px] animate-pulse"
            style={{
              borderTopColor: item === 0 ? COLORS_LIST.Transparent : COLORS_LIST.Neutral_Surface,
            }}
            key={item}
          >
            <div
              className="min-w-[280px] h-[210px] rounded-2xl"
              style={{ backgroundColor: COLORS_LIST.Neutral_Surface }}
            />

            <div className="flex flex-col w-full h-[210px] gap-6">
              <div className="w-[200px] h-[20px] rounded-md" style={{ backgroundColor: COLORS_LIST.Neutral_Surface }} />
              <div className="w-full h-[80px] rounded-md" style={{ backgroundColor: COLORS_LIST.Neutral_Surface }} />
              <div
                className="w-full h-[40px] rounded-md mt-auto"
                style={{ backgroundColor: COLORS_LIST.Neutral_Surface }}
              />
            </div>
          </div>
        ))}

      {breakPoint.laptop &&
        list.map((item) => (
          <div
            className="w-full flex flex-col py-[8px] gap-5 border-t-[1px] animate-pulse"
            style={{
              borderTopColor: item === 0 ? COLORS_LIST.Transparent : COLORS_LIST.Neutral_Surface,
            }}
            key={item}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="w-full h-[40px] rounded-md" style={{ backgroundColor: COLORS_LIST.Neutral_Surface }} />

              <div
                className="w-[110px] h-[70px] md:w-[160px] md:h-[100px] rounded-2xl"
                style={{ backgroundColor: COLORS_LIST.Neutral_Surface }}
              />
            </div>

            <div className="w-full h-[30px] rounded-md" style={{ backgroundColor: COLORS_LIST.Neutral_Surface }} />
          </div>
        ))}
    </>
  );
};

export default CategorySkeleton;
