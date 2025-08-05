'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';
import { scrollToIdHandler } from '@utils/navigation';

const LandingsContentsGenerator = ({ title, description }: { title: string; description: string }) => {
  const { breakPoint } = useBreakPoint();

  return (
    <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
      <CustomTypography
        tagType="h1"
        color={'Neutral_OnBackground'}
        className="py-2 lg:pt-2 lg:pb-1 text-center md:text-right"
        fontSize={breakPoint.tablet ? 'Headline_Medium' : 'Headline_Large'}
      >
        {title}
      </CustomTypography>

      <CustomTypography
        tagType="span"
        fontSize="Body_Large"
        color={'Surface_InverseSurface'}
        className="text-center md:text-right"
      >
        {description}
      </CustomTypography>

      <CustomButton
        varient="fill"
        className="!w-[120px] lg:!w-[182px] h-[40px] !mt-2 !mb-8"
        onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
        fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}
      >
        دانلود ایمپو
      </CustomButton>
    </div>
  );
};

export default LandingsContentsGenerator;
