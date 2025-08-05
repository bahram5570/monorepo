'use client';

import { COLORS_LIST } from '@theme/colors';

import { CAREER_CONTAINER_MAX_WIDTH } from '@components/pages/careers/constants';
import CustomTypography from '@components/ui/CustomTypography';

import useSteps from './__hooks__/useSteps';
import { HIRING_ITEMS_LIST } from './constants';

const CareersHiringProcess = () => {
  const { step } = useSteps(HIRING_ITEMS_LIST.length - 1);

  return (
    <div
      style={{ maxWidth: CAREER_CONTAINER_MAX_WIDTH + 140 }}
      className="w-full flex flex-col items-center px-6 md:px-4 pt-4 md:pt-10 mx-auto"
    >
      <CustomTypography tagType="h2" fontSize="Headline_Medium" color={'Neutral_OnBackground'} className="pb-4 md:pb-8">
        فرآیند ایمپویی شدن
      </CustomTypography>

      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-5">
        {HIRING_ITEMS_LIST.map((item, index) => {
          const isOnIcon = step >= index;
          const isOnProgress = step >= index + 1;
          const isLastIndex = index === HIRING_ITEMS_LIST.length - 1;

          return (
            <div className="relative w-fit md:w-full min-w-fit flex md:flex-col items-center gap-4" key={index}>
              {!isLastIndex && (
                <div
                  style={{ backgroundColor: COLORS_LIST.Neutral_Surface }}
                  className="
                              absolute 
                              top-0 
                              right-6 
                              h-full 
                              w-[2px] 
                              translate-y-[calc(50%+8px)] 
                              md:w-full 
                              md:h-[2px] 
                              md:top-7 
                              md:right-0 
                              md:left-0 
                              md:translate-y-0 
                              md:-translate-x-[50%]
                              overflow-hidden
                            "
                >
                  <div
                    style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
                    className={`w-full h-full duration-700 ${isOnProgress ? 'translate-y-0 md:translate-x-0' : '-translate-y-full md:translate-x-full'}`}
                  />
                </div>
              )}

              <div className="relative w-12 h-12 min-w-12 min-h-12 md:w-14 md:h-14 md:min-w-14 md:min-h-14 z-10">
                <item.OffIcon className="w-full h-full" />
                <item.OnIcon
                  className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full duration-500 ${isOnIcon ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>

              <CustomTypography fontSize="Body_Small" color={'Neutral_OnBackground'} className="text-center">
                {item.title}
              </CustomTypography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareersHiringProcess;
