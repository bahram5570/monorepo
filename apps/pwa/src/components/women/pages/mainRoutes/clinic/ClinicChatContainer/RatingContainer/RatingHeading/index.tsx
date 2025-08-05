import CloseIcon from '@assets/icons/plus.svg';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import { RATING_HEADING_HEIGHT } from './constants';

const RatingHeading = () => {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <div
      className="fixed top-0 left-0 right-0 px-4 pt-6 mx-auto z-30"
      style={{ maxWidth: MAX_SCREEN_WIDTH, backgroundColor: colors.White, height: RATING_HEADING_HEIGHT }}
    >
      <div className="w-full flex items-center justify-between">
        <div
          onClick={() => router.back()}
          style={{ borderColor: colors.Neutral_Surface }}
          className="w-12 h-12 rounded-full flex items-center justify-center border-[1px]"
        >
          <CloseIcon className="w-8 h-auto rotate-45" style={{ stroke: colors.Black }} />
        </div>

        <Typography scale="Lable" size="Large" color="Surface_OnSurfaceVariant">
          ثبت نظر
        </Typography>
      </div>
    </div>
  );
};

export default RatingHeading;
