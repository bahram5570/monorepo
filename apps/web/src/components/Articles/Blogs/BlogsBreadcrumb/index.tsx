import { Fragment } from 'react';

import { Breadcrumbs } from '@mui/material';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { BlogsBreadcrumbTypes } from './types';

const BlogsBreadcrumb = ({ breadcrumbList }: BlogsBreadcrumbTypes) => {
  return (
    <Breadcrumbs>
      <CustomLink href="/">
        <CustomTypography className="pb-2" fontSize="Lable_Medium" color={'Surface_Outline'}>
          خانه
        </CustomTypography>
      </CustomLink>

      {breadcrumbList.map((item, index) => (
        <Fragment key={index}>
          {typeof item.linkTo === 'undefined' ? (
            <CustomTypography className="pb-2" fontSize="Lable_Medium" color={'Surface_Outline'}>
              {item.title}
            </CustomTypography>
          ) : (
            <CustomLink href={item.linkTo}>
              <CustomTypography className="pb-2" fontSize="Lable_Medium" color={'Surface_Outline'}>
                {item.title}
              </CustomTypography>
            </CustomLink>
          )}
        </Fragment>
      ))}
    </Breadcrumbs>
  );
};

export default BlogsBreadcrumb;
