import { useEffect, useRef, useState } from 'react';

import CrossIcon from '@assets/icons/plus.svg';
import ImpoIcon from '@assets/images/questionsImpo.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import { STORY_PROGRESS_HEIGHT } from '../../../constants';
import { ProgressBarsProps } from './types';

const ProgressBars = ({
  isCurrentStorySlide,
  currentSlideIndex,
  slideIndexHandler,
  viewStoryHandler,
  isLoading,
  stories,
}: ProgressBarsProps) => {
  const router = useRouter();
  const { colors } = useTheme();
  const timer = useRef<NodeJS.Timeout>();
  const [progressPercent, setProgressPercent] = useState(0);

  const currentSlide = stories[currentSlideIndex];
  const isCallable = !currentSlide.isViewed && progressPercent > 50;

  useEffect(() => {
    if (!isLoading && isCurrentStorySlide) {
      timer.current = setInterval(() => {
        if (progressPercent < 100) {
          setProgressPercent(progressPercent + 1);
        } else {
          slideIndexHandler(true);
          setProgressPercent(0);
        }
      }, currentSlide.time / 100);
    } else {
      setProgressPercent(0);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [currentSlide.time, progressPercent, isLoading, isCurrentStorySlide]);

  useEffect(() => {
    if (isCallable) {
      const slideId = currentSlide.id;
      viewStoryHandler(slideId);
    }
  }, [isCallable, currentSlide.id]);

  return (
    <div className="flex flex-col justify-between px-4 pt-4 z-20" style={{ height: STORY_PROGRESS_HEIGHT }}>
      <div className="w-full flex items-center gap-2 pointer-events-none select-none">
        {stories.map((_, index) => {
          let translateProgress = 0;

          if (currentSlideIndex < index) {
            translateProgress = 100;
          } else if (currentSlideIndex > index) {
            translateProgress = 0;
          } else {
            translateProgress = 100 - progressPercent;
          }

          return (
            <div
              className="relative w-full h-1 rounded-full overflow-hidden shadow-[0_4px_10px_#00000044] "
              style={{ backgroundColor: colors.Surface_Outline }}
              key={index}
            >
              <div
                dir="rtl"
                className="w-full h-full rounded-full duration-300"
                style={{ backgroundColor: colors.White, transform: `translateX(${translateProgress}%)` }}
              />
            </div>
          );
        })}
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4 pointer-events-none select-none">
          <ImpoIcon className="w-12 h-12" />

          <div>
            <Typography scale="Body" size="Small" color="Surface_Outline">
              بازبینی شده توسط
            </Typography>

            <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
              تیم تولید محتوای ایمپو
            </Typography>
          </div>
        </div>

        <div className="w-12 h-12 flex items-center justify-center cursor-pointer" onClick={() => router.back()}>
          <CrossIcon className="w-8 h-auto rotate-45" style={{ stroke: colors.Surface_Outline }} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
