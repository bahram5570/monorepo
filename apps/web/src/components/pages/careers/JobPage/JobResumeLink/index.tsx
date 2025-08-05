import { COLORS_LIST } from '@theme/colors';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { JobResumeLinkTypes } from './types';

const JobResumeLink = ({ id }: JobResumeLinkTypes) => {
  return (
    <CustomLink href={`${id}/resume`}>
      <CustomTypography
        fontSize="Lable_Large"
        color={'Primary_OnPrimary'}
        style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
        className="md:w-[230px] py-[10px] md:py-[12px] mx-auto rounded-full text-center"
      >
        درخواست همکاری
      </CustomTypography>
    </CustomLink>
  );
};

export default JobResumeLink;
