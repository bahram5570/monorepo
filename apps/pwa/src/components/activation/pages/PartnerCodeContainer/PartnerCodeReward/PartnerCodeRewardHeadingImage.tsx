import Image from 'next/image';

import useIsLargeScreenHeight from '@hooks/__activation__/useIsLargeScreenHeight';
import { LottieCanvas } from '@lib/LottieCanvas';

import { PartnerCodeRewardHeadingImageProps } from './types';

const PartnerCodeRewardHeadingImage = ({ backgroundColor, image, doRepeat }: PartnerCodeRewardHeadingImageProps) => {
  const { isLargeScreen } = useIsLargeScreenHeight();

  const isLottie = image.includes('.lottie');

  return (
    <div
      className={`relative w-fullflex pointer-events-none ${isLargeScreen ? 'h-[55dvh]' : 'h-[30dvh]'}`}
      style={{ backgroundColor }}
    >
      {image.trim() !== '' && (
        <>
          {isLottie && <LottieCanvas src={image} autoplay={true} loop={doRepeat} />}

          {!isLottie && (
            <Image src={image} alt={image} fill={true} priority={true} sizes="100dvw" objectFit="contain" />
          )}
        </>
      )}
    </div>
  );
};

export default PartnerCodeRewardHeadingImage;
