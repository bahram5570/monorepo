import { COLORS_LIST } from '@theme/colors';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { SlidesArrowTypes } from './types';

const SlidesArrow = ({ isNextSlide, onClick, isDisabled }: SlidesArrowTypes) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
      className={`
                    min-w-10 
                    min-h-10 
                    sm:min-w-12 
                    sm:min-h-12 
                    flex 
                    items-center 
                    justify-center 
                    rounded-full 
                    cursor-pointer 
                    ${!isNextSlide && '-scale-100'}
                    ${isDisabled && 'opacity-40 pointer-events-none'}
                `}
    >
      <ArrowBackIosRoundedIcon sx={{ width: 20, height: 20, fill: COLORS_LIST.Surface_InverseSurface }} />
    </div>
  );
};

export default SlidesArrow;
