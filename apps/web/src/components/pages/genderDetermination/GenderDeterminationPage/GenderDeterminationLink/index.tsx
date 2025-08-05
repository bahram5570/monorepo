import { COLORS_LIST } from '@theme/colors';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

const GenderDeterminationLink = () => {
  return (
    <div
      style={{ backgroundColor: COLORS_LIST.White }}
      className="fixed left-0 right-0 bottom-[80px] lg:bottom-0 pt-4 lg:pb-6 px-4 mx-auto shadow-[0_-12px_8px_#00000003] z-20"
    >
      <CustomLink
        href={''}
        className="w-full sm:max-w-[300px] h-[40px] mx-auto rounded-full flex items-center justify-center"
        style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
      >
        <CustomTypography fontSize="Lable_Large" color={'White'}>
          مشاوره اولیه رایگان
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default GenderDeterminationLink;
