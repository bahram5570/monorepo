import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import { RATING_FOOTER_HEIGHT } from './constants';
import { RatingFooterProps } from './types';

const RatingFooter = ({ rate, onClick }: RatingFooterProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 flex flex-col items-center justify-end gap-2 px-4 pb-6 mx-auto z-30"
      style={{ height: RATING_FOOTER_HEIGHT, maxWidth: MAX_SCREEN_WIDTH, backgroundColor: colors.White }}
    >
      <Typography scale="Body" size="Medium" color="Surface_Outline">
        نظراتت با حفظ حریم شخصی ثبت میشن!
      </Typography>

      {rate > 0 && (
        <Button variant="fill" size="medium" color="primary" onClick={onClick}>
          ثبت نظر
        </Button>
      )}
    </div>
  );
};

export default RatingFooter;
