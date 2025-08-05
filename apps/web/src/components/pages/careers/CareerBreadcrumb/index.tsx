import { Fragment } from 'react';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { CareerBreadcrumbTypes } from './types';

const CareerBreadcrumb = ({ list }: CareerBreadcrumbTypes) => {
  return (
    <div className="flex items-center gap-2 pb-4">
      {list.map((item, index) => {
        const isLastIndex = index === list.length - 1;

        return (
          <Fragment key={index}>
            <>
              {index > 0 && (
                <CustomTypography fontSize="Title_Small" color={'Surface_Outline'}>
                  /
                </CustomTypography>
              )}

              <CustomLink href={item.href}>
                <CustomTypography fontSize={isLastIndex ? 'Title_Small' : 'Body_Medium'}>{item.title}</CustomTypography>
              </CustomLink>
            </>
          </Fragment>
        );
      })}
    </div>
  );
};

export default CareerBreadcrumb;
