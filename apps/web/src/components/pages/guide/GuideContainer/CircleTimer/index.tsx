'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import useTimer from './__hooks__/useTimer';
import { CircleTimerPropsType } from './type';

export default function CircleTimer({ timer }: CircleTimerPropsType) {
  const { centerX, centerY, dashoffset, handleStart, remainingTime, circumference, isRunning, progress } = useTimer({
    timer,
  });
  const { breakPoint } = useBreakPoint();

  return (
    <div className="px-4 relative">
      <svg width="120" height="120" viewBox="0 0 120 120" className="mb-5 w-full h-full">
        <circle cx="60" cy="60" r="50" fill="none" stroke="#F7F7F7" strokeWidth="7"></circle>
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="#F24F7A"
          strokeWidth="7"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        ></circle>

        <circle cx={centerX} cy={centerY} r="3" fill="white" stroke="white"></circle>
      </svg>

      <div
        className="absolute top-0 bottom-0 right-0 left-0 px-[60px] flex flex-col  items-center justify-self-center sm:gap-3"
        style={{ alignSelf: 'anchor-center' }}
      >
        <CustomTypography
          fontSize="Headline_Large"
          className={`${breakPoint.mobile && '!text-[30px]'}   text-center`}
          color="Surface_OnSurfaceVariant"
        >
          {`${remainingTime} ثانیه`}
        </CustomTypography>

        <CustomButton
          varient="fill"
          backgroundColor="Primary_Primary"
          textColor="White"
          onClick={handleStart}
          isDisable={isRunning}
          className="sm:w-full w-[70%] !mb-1"
        >
          {progress === 1 ? 'شروع مجدد' : ' شروع تست'}
        </CustomButton>
        <div className="w-[65%] max-[400px]:w-[45%] max-[500px]:w-[40%] flex justify-center items-center">
          <CustomImage
            alt="timer"
            width={990}
            height={1237}
            src="/assets/images/guide/ovulation-test/ovulation-test-4.webp"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
