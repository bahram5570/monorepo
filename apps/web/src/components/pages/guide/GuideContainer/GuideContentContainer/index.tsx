'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import CircleTimer from '../CircleTimer';
import { STEP_LIST } from '../constants';
import { GuideContentContainerPropsType } from './type';

const GuideContentContainer = ({ stepsContent, currentStep }: GuideContentContainerPropsType) => {
  const { breakPoint } = useBreakPoint();
  return (
    <>
      <div className=" mt-9 pb-28 overflow-y-auto overflow-x-hidden ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${STEP_LIST.length * 100}%`,
            transform: `translateX(${currentStep * (100 / stepsContent.length)}%)`,
          }}
        >
          {stepsContent.map((step, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2" style={{ width: `${100 / stepsContent.length}%` }}>
              <>
                {step.showTimer && (
                  <>
                    <CircleTimer timer={step.timer} />
                  </>
                )}
                {!step.showTimer && (
                  <CustomImage
                    alt={`step-${index}`}
                    width={990}
                    height={1237}
                    src={step.imageUrl}
                    className="mb-6 w-full object-contain h-[calc(45vh+0vw)]"
                  />
                )}

                <div className="text-center flex flex-col justify-center items-center gap-2">
                  <CustomTypography
                    className={`${breakPoint.tablet && '!text-[17px]'}`}
                    fontSize="Title_Medium"
                    tagType="h2"
                  >
                    {step.title}
                  </CustomTypography>
                  {step.description}
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GuideContentContainer;
