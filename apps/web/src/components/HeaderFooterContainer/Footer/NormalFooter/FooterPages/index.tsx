import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { FOOTER_PAGES_LIST } from './constants';

const FooterPages = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:col-span-8 md:row-span-2">
      {FOOTER_PAGES_LIST.map((item, groupIndex) => (
        <div className="flex flex-col items-center md:items-start gap-3" key={groupIndex}>
          <CustomTypography
            fontSize={breakPoint.tablet ? 'Title_Medium' : 'Title_Small'}
            color={breakPoint.tablet ? 'Surface_OnSurfaceVariant' : 'Neutral_OnBackground'}
          >
            {item.groupName}
          </CustomTypography>

          <div className="w-full grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-2">
            {item.pages.map((page, pageIndex) => {
              const isTwoColumns =
                breakPoint.tablet && item.pages.length % 2 && page.smallScreenOrder === item.pages.length;

              return (
                <CustomLink
                  href={page.linkTo}
                  aria-label={page.linkTo}
                  key={`page-${pageIndex}`}
                  className="w-full h-[40px] md:h-fit rounded-full flex items-center justify-center md:justify-start"
                  style={{
                    order: page.smallScreenOrder,
                    backgroundColor: breakPoint.tablet ? COLORS_LIST.Surface_SurfaceVariant : 'transparent',
                    gridColumn: isTwoColumns ? 'span 2' : 'span 1',
                  }}
                >
                  <CustomTypography
                    fontSize={breakPoint.tablet ? 'Lable_Large' : 'Body_Small'}
                    color={breakPoint.tablet ? 'Neutral_OnSurface' : 'Surface_OnSurfaceVariant'}
                  >
                    {page.title}
                  </CustomTypography>
                </CustomLink>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterPages;
