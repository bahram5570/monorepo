import { COLORS_LIST } from '@theme/colors';

import ImpoNameIcon from '@assets/icons/impoName.svg';
import CustomTypography from '@components/ui/CustomTypography';

import HomeHeadingContentBtn from './HomeHeadingContentBtn';

const HomeHeadingContent = () => {
  return (
    <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
      <ImpoNameIcon
        className="w-[112px] lg:w-[138px] h-auto pointer-events-none"
        style={{ fill: COLORS_LIST.Primary_Primary }}
      />

      <CustomTypography
        tagType="h1"
        fontSize="Headline_Medium"
        color={'Neutral_OnBackground'}
        className="py-2 lg:pt-2 lg:pb-1"
      >
        دوستته، مشاورته، مراقبته
      </CustomTypography>

      <CustomTypography
        tagType="span"
        fontSize="Body_Large"
        color={'Surface_InverseSurface'}
        className="text-center lg:text-right"
      >
        ایمپو کنارته تا بتونی چرخه قاعدگی، زمان تخمک‌گذاری و دوره بارداریت رو با آرامش دنبال کنی
      </CustomTypography>

      <HomeHeadingContentBtn />
    </div>
  );
};

export default HomeHeadingContent;
