import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { QuestionImageGeneratorTypes } from './types';

const QuestionImageGenerator = ({ title, image, isSelected, onClick }: QuestionImageGeneratorTypes) => {
  const { breakPoint } = useBreakPoint();

  return (
    <div onClick={onClick} className="w-[104px] h-fit flex flex-col items-center gap-3 cursor-pointer">
      <div
        className="relative w-[104px] h-[104px] rounded-full border-[1.5px] overflow-hidden"
        style={{
          borderColor: isSelected ? COLORS_LIST.Success_Success : COLORS_LIST.Surface_SurfaceVariant,
        }}
      >
        <CustomImage src={image} alt="" fill={true} className="object-contain mt-2" />
      </div>

      <CustomTypography
        color={isSelected ? 'Success_Success' : 'Black'}
        fontSize={breakPoint.tablet ? 'Title_Medium' : 'Title_Small'}
      >
        {title}
      </CustomTypography>
    </div>
  );
};

export default QuestionImageGenerator;
