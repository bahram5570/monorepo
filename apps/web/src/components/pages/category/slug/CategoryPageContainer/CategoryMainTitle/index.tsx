import CustomTypography from '@components/ui/CustomTypography';

import { CategoryMainTitleTypes } from './types';

const CategoryMainTitle = ({ title }: CategoryMainTitleTypes) => {
  return (
    <div className="w-full pb-16">
      {/* <CustomTypography tagType="h1" fontSize="Headline_Medium">{`مقالات مربوط به ${title}`}</CustomTypography> */}
      <CustomTypography tagType="h1" fontSize="Headline_Small">{`مقالات مربوط به ${title}`}</CustomTypography>
    </div>
  );
};

export default CategoryMainTitle;
