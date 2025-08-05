import { COLORS_LIST } from '@theme/colors';

import CustomTypography from '@components/ui/CustomTypography';

import { ArticleIdNewTitleGeneratorTypes } from './types';

const ArticleIdNewTitleGenerator = ({ title, hasStar }: ArticleIdNewTitleGeneratorTypes) => {
  return (
    <div className="flex items-center gap-1 pb-2">
      <CustomTypography fontSize="Body_Medium" color={'Surface_Outline'}>
        {title}
      </CustomTypography>

      {hasStar && <div style={{ color: COLORS_LIST.Red_500 }}>*</div>}
    </div>
  );
};

export default ArticleIdNewTitleGenerator;
