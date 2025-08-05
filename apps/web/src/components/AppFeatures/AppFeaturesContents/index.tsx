import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { APP_FEATURES_CONTENTS_LIST } from '../constants';
import useContents from './__hooks__/useContents';
import { AppFeaturesContentsTypes } from './types';

const AppFeaturesContents = ({ currentTab }: AppFeaturesContentsTypes) => {
  const { breakPoint } = useBreakPoint();
  const { contentsStyles, isRendered } = useContents({ currentTab });

  const contentsList = Object.entries(APP_FEATURES_CONTENTS_LIST);

  return (
    <>
      {contentsList.map((contentItem, contentIndex) => (
        <div key={contentIndex} className={`${currentTab !== contentIndex && 'max-h-0 max-w-0 overflow-hidden'}`}>
          <div
            style={{ ...contentsStyles }}
            className={`grid duration-200 overflow-hidden ${!isRendered && '!max-h-0 !max-w-0'}`}
          >
            {contentItem[1].map((item, index) => {
              const gridRow = breakPoint.laptop ? `${item.mobile.row}` : `${item.desktop.row}`;
              const image = breakPoint.laptop ? `${item.mobile.image}` : `${item.desktop.image}`;
              const gridColumn = breakPoint.laptop ? `${item.mobile.column}` : `${item.desktop.column}`;

              return (
                <CustomLink
                  key={index + contentIndex}
                  href={item.lintTo}
                  style={{ gridColumn, gridRow, backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
                  className="relative w-full h-full rounded-2xl lg:rounded-3xl select-none pointer-events-none overflow-hidden"
                >
                  <CustomImage
                    key={image}
                    fill={true}
                    src={image}
                    alt={index.toString()}
                    sizes="(max-width: 1024px) 350px, 860px"
                    className="w-full h-auto object-cover object-top pointer-events-none"
                  />

                  <div className="absolute left-0 right-0 bottom-0 flex flex-col gap-1 p-4 lg:p-6">
                    <CustomTypography
                      color={'Neutral_OnBackground'}
                      fontSize={breakPoint.laptop ? 'Lable_Small' : 'Title_Small'}
                    >
                      {item.title}
                    </CustomTypography>

                    <CustomTypography
                      fontSize="Body_Small"
                      color={'Neutral_OnSurface'}
                      className={`${breakPoint.laptop && '!text-[9px]'}`}
                    >
                      {item.description}
                    </CustomTypography>
                  </div>
                </CustomLink>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default AppFeaturesContents;
