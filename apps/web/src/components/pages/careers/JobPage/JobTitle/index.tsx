import { COLORS_LIST } from '@theme/colors';

import ImpoNameIcon from '@assets/icons/impo3.svg';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { JobTitleTypes } from './types';

const JobTitle = ({ title, id }: JobTitleTypes) => {
  return (
    <div className="w-full flex items-center justify-between pb-6 md:pb-8">
      <div className="flex items-center gap-2">
        <ImpoNameIcon className="w-8 h-auto" />
        <div className="w-[1px] h-[26px]" style={{ backgroundColor: COLORS_LIST.Neutral_Surface }} />
        <CustomTypography fontSize="Title_Medium" color={'Neutral_OnBackground'}>
          {title}
        </CustomTypography>
      </div>

      <CustomLink href={`${id}/resume`} className="hidden md:block">
        <CustomTypography
          fontSize="Lable_Large"
          color={'Primary_OnPrimary'}
          className="py-[10px] px-[22px] rounded-full"
          style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
        >
          درخواست همکاری
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default JobTitle;
