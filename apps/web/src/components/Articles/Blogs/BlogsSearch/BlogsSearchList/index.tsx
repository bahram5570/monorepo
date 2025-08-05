import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import styles from './styles.module.css';
import { BlogsSearchListTypes } from './types';

const BlogsSearchList = ({ articlesSearchList }: BlogsSearchListTypes) => {
  const { breakPoint } = useBreakPoint();

  return (
    <div
      className={`
                  w-full 
                  h-fit 
                  max-h-[256px] 
                  md:max-h-[448px] 
                  overflow-x-hidden 
                  overflow-y-auto 
                  absolute 
                  top-[50px] 
                  md:top-[62px] 
                  left-0 
                  right-0 
                  rounded-xl
                  shadow-md
                  z-20
                  ${styles.modal}
                `}
      style={{ backgroundColor: COLORS_LIST.White }}
    >
      {articlesSearchList.length === 0 && (
        <CustomTypography
          fontSize={breakPoint.laptop ? 'Body_Medium' : 'Title_Small'}
          color={'Surface_InverseSurface'}
          className="p-5"
        >
          مقاله‌ای پیدا نشد!
        </CustomTypography>
      )}

      {articlesSearchList.length > 0 &&
        articlesSearchList.map((item, index) => (
          <CustomLink href={`/${item.url}`} key={index}>
            <div
              className="w-full h-[64px] flex items-center px-5 border-t-[1px]"
              style={{ borderTopColor: index === 0 ? COLORS_LIST.Transparent : COLORS_LIST.Neutral_Surface }}
            >
              <CustomTypography
                fontSize={breakPoint.laptop ? 'Body_Medium' : 'Title_Small'}
                color={'Surface_InverseSurface'}
              >
                {item.title.trim()}
              </CustomTypography>
            </div>
          </CustomLink>
        ))}
    </div>
  );
};

export default BlogsSearchList;
