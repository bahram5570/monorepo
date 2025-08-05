'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import ImpoIcon from '@assets/icons/impoNameMen.svg';
import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';
import { scrollToIdHandler } from '@utils/navigation';

const MenHeadingContents = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <div className="flex flex-col items-center md:items-start">
      <ImpoIcon className="w-[270px] lg:w-[370px] h-auto" />

      <CustomTypography
        tagType="h1"
        fontSize="Headline_Medium"
        color={'Neutral_OnBackground'}
        className="py-2 lg:pt-2 lg:pb-1 text-center md:text-right"
      >
        مراقبت از خود و رابطه
      </CustomTypography>

      <CustomButton
        varient="fill"
        backgroundColor="PrimaryMan_PrimaryMan"
        className="!w-[120px] lg:!w-[182px] h-[40px] !mt-2 !mb-8"
        onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
        fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}
      >
        نصب ایمپو
      </CustomButton>
    </div>
  );
};

export default MenHeadingContents;
