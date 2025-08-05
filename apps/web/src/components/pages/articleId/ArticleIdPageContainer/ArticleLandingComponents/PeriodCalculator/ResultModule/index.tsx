import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';
import { COLORS_LIST } from '@theme/colors';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { ResultModuleTypes } from './types';

const ResultModule = ({ result, onReset }: ResultModuleTypes) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div
        style={{ borderColor: COLORS_LIST.Cyan_600, backgroundColor: COLORS_LIST.White }}
        className="w-full sm:w-[400px] h-fit py-6 rounded-2xl border-[1px] mt-8 mb-10"
      >
        <CustomTypography fontSize="Lable_Medium" style={{ color: '#6C2337' }} className="text-center">
          شروع دوره پریود شما از روز :
        </CustomTypography>

        <CustomTypography fontSize="Title_Large" style={{ color: '#6C2337' }} className="text-center pt-2">
          {result}
        </CustomTypography>
      </div>

      <div className="flex justify-center cursor-pointer" onClick={onReset}>
        <CustomTypography color={'Primary_Primary'} fontSize="Title_Small">
          محاسبه دوباره دوره پریود
        </CustomTypography>
      </div>

      <CustomLink
        target="_blank"
        href={PWA_LINK_WOMEN_URL}
        style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
        className="absolute bottom-6 left-4 right-4 h-[48px] sm:max-w-[460px] mx-auto mt-auto flex items-center justify-center rounded-full"
      >
        <CustomTypography fontSize="Title_Small" color={'Primary_OnPrimary'}>
          از ایمپو استفاده کن
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default ResultModule;
