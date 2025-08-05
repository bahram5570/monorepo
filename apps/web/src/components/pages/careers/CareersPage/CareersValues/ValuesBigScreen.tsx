import { COLORS_LIST } from '@theme/colors';

import CustomTypography from '@components/ui/CustomTypography';

import { ValuesBigScreenTypes } from './types';

const ValuesBigScreen = ({ list }: ValuesBigScreenTypes) => {
  return (
    <div
      style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
      className="w-full grid grid-cols-[repeat(2,minmax(0,260px))] lg:grid-cols-[repeat(3,minmax(0,260px))] gap-x-16 gap-y-9 py-6 justify-center"
    >
      {list.map((item, index) => (
        <div className="w-full flex items-start gap-2" key={index}>
          <div className="w-14 h-14 min-w-14 min-h-14">
            <item.Icon className="w-full h-full" />
          </div>

          <div>
            <CustomTypography fontSize="Title_Small" color={'Neutral_OnBackground'} className="pb-1">
              {item.title}
            </CustomTypography>

            <CustomTypography fontSize="Body_Small" color={'Surface_InverseSurface'}>
              {item.description}
            </CustomTypography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValuesBigScreen;
