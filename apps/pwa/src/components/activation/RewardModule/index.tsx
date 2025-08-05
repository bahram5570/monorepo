import { colorFormatConverter } from '@utils/scripts';

import BackButton from '@components/ui/BackButton';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import { OrderOfRewardElementsTypes } from '@providers/__activation__/types';

import Btn from './Btn';
import HeadingImage from './HeadingImage';
import Scripts from './Scripts';
import usePreventScroll from './__hooks__/usePreventScroll';
import { RewardModuleProps } from './types';

const RewardModule = ({
  orderOfRewardElements,
  currentRewardData,
  isOnMountModule,
  btnHandler,
  firstName,
  isLoading,
  noBackButton,
}: RewardModuleProps) => {
  usePreventScroll();

  const elementsOrder: OrderOfRewardElementsTypes = orderOfRewardElements || { image: 1, scripts: 2 };
  const color1 = currentRewardData ? colorFormatConverter(currentRewardData.gradient[1]) : '';
  const color2 = currentRewardData ? colorFormatConverter(currentRewardData.gradient[0]) : '';

  return (
    <>
      {currentRewardData && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 mx-auto z-40"
          style={{ backgroundColor: color1, maxWidth: MAX_SCREEN_WIDTH }}
        >
          <div className="relative w-full min-h-[100dvh] flex flex-col gap-5">
            {!noBackButton && (
              <div className="absolute top-4 right-4 z-10 w-12 h-12 flex justify-center items-center">
                <BackButton variant="text" color="outline" />
              </div>
            )}

            <div className="flex flex-col items-center">
              <HeadingImage
                doRepeat={currentRewardData.doRepeat}
                image={currentRewardData.image}
                order={elementsOrder.image}
                backgroundColor={color2}
              />

              <Scripts
                description={currentRewardData.description}
                title={currentRewardData.title}
                order={elementsOrder.scripts}
                firstName={firstName}
              />
            </div>

            <Btn
              btnLabel2={currentRewardData.btnLabel2}
              btnLabel={currentRewardData.btnLabel}
              isOnMountModule={isOnMountModule}
              btnHandler={btnHandler}
              isLoading={isLoading}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default RewardModule;
