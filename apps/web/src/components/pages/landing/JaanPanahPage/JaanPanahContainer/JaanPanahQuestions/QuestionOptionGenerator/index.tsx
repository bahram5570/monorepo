import { COLORS_LIST } from '@theme/colors';

import TickIcon from '@assets/icons/tick.svg';
import CustomTypography from '@components/ui/CustomTypography';

import { QuestionOptionGeneratorTypes } from './types';

const QuestionOptionGenerator = ({ title, isSelected, onClick }: QuestionOptionGeneratorTypes) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-12 rounded-xl flex items-center gap-4 px-5 cursor-pointer"
      style={{ backgroundColor: isSelected ? COLORS_LIST.Success_Success : COLORS_LIST.Surface_SurfaceVariant }}
    >
      <TickIcon className="w-4 h-auto" style={{ fill: isSelected ? COLORS_LIST.White : COLORS_LIST.Transparent }} />

      <CustomTypography fontSize="Body_Large" color={isSelected ? 'White' : 'Black'}>
        {title}
      </CustomTypography>
    </div>
  );
};

export default QuestionOptionGenerator;
