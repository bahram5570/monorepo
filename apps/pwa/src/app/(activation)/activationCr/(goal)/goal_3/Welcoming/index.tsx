import WelcomingIcon from '@assets/icons/welcoming.svg';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import ProgressBar from './ProgressBar';
import useWelcomingSteps from './__hooks__/useWelcomingSteps';
import { StepsList } from './__hooks__/useWelcomingSteps/constants';

const Welcoming = () => {
  const { steps } = useWelcomingSteps();
  const { colors } = useTheme();

  if (steps === StepsList.FINISH) {
    return <></>;
  }

  const containerOpacity = { [StepsList.START]: 1, [StepsList.FADE_IN]: 1, [StepsList.FADE_OUT]: 0 }[steps];
  const contentsOpacity = { [StepsList.START]: 0, [StepsList.FADE_IN]: 1, [StepsList.FADE_OUT]: 1 }[steps];

  return (
    <div
      style={{ backgroundColor: colors.White, maxWidth: MAX_SCREEN_WIDTH, opacity: containerOpacity }}
      className="fixed top-0 left-0 right-0 h-full min-h-[100dvh] mx-auto duration-1000 z-40"
    >
      <div
        className="w-full h-full flex flex-col items-center justify-center px-10 duration-1000"
        style={{ opacity: contentsOpacity }}
      >
        <WelcomingIcon />

        <Typography scale="Title" size="Large" className="py-2">
          ایمپویی عزیز سلام
        </Typography>

        <Typography scale="Body" size="Large" color="Neutral_OnSurface" textAlign="center">
          ایمپو یعنی تو مهم هستی. ما اینجا تلاش می کنیم تا حال جسمی و روحی خوبی داشته باشی و بتونی در زمان قاعدگی یا
          بارداری بیشتر مراقب خودت باشی
        </Typography>

        <ProgressBar />
      </div>
    </div>
  );
};

export default Welcoming;
