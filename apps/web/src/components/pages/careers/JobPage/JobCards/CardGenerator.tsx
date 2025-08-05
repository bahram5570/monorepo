import { COLORS_LIST } from '@theme/colors';

import CustomTypography from '@components/ui/CustomTypography';

import { CardGeneratorTypes } from './types';

const CardGenerator = ({ Icon, description, title }: CardGeneratorTypes) => {
  return (
    <div
      style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
      className="w-full h-[60px] md:h-[64px] flex items-center gap-3 px-[12px] md:px-[18px] py-[8px] rounded-xl"
    >
      <div className="w-6 h-6 min-w-6 min-h-6">
        <Icon className="w-full h-auto" />
      </div>

      <div className="flex flex-col gap-1">
        <CustomTypography fontSize="Body_Small" color={'Neutral_OnBackground'}>
          {title}:
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" color={'Neutral_OnSurface'}>
          {description}
        </CustomTypography>
      </div>
    </div>
  );
};

export default CardGenerator;
