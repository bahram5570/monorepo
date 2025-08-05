'use client';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import useWelcomingSteps from './__hooks__/useWelcomingSteps';
import { StepsList } from './__hooks__/useWelcomingSteps/constants';
import { onCompleteType } from './__hooks__/useWelcomingSteps/types';

const Welcoming = ({ onComplete }: { onComplete?: onCompleteType }) => {
  const { steps } = useWelcomingSteps(onComplete);
  if (steps === StepsList.FINISH) {
    return <></>;
  }

  const showTitle = steps >= StepsList.SHOW_TITLE;
  const showSubTitle = steps >= StepsList.SHOW_SUBTITLE;

  return (
    <>
      <div
        style={{ maxWidth: MAX_SCREEN_WIDTH }}
        className="fixed top-0 left-0 right-0 bottom-0 h-[100dvh] flex flex-col items-center gap-2 px-5 pt-[370px] mx-auto"
      >
        <Typography
          scale="Title"
          size="Medium"
          textAlign="center"
          style={{ opacity: showTitle ? '1' : '0' }}
          className={`${steps === StepsList.START ? 'duration-0' : 'duration-1000'}`}
        >
          همراه عزیز ایمپو سلام!
        </Typography>

        <Typography
          scale="Body"
          size="Large"
          textAlign="center"
          style={{ opacity: showSubTitle ? '1' : '0' }}
          className={`${steps === StepsList.START ? 'duration-0' : 'duration-1000'}`}
        >
          از اینکه به جمع ایمپویی‌ها پیوستی و برای مراقبت از خودت اپلیکیشن ایمپو رو نصب کردی، خوشحالیم&#128525;
        </Typography>
      </div>
    </>
  );
};

export default Welcoming;
