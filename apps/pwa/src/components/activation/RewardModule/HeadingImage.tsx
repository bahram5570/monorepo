import Image from 'next/image';

import useIsLargeScreenHeight from '@hooks/__activation__/useIsLargeScreenHeight';
import { LottieCanvas } from '@lib/LottieCanvas';

import { HeadingImageProps } from './types';

const HeadingImage = ({ backgroundColor, image, doRepeat, order }: HeadingImageProps) => {
  const { isLargeScreen } = useIsLargeScreenHeight();

  const isLottie = image.includes('.lottie');

  return (
    <div
      style={{ backgroundColor, order }}
      className={`relative w-full flex pointer-events-none ${isLargeScreen ? 'h-[55dvh]' : 'h-[45dvh]'}`}
    >
      {isLottie && <LottieCanvas src={image} autoplay={true} loop={doRepeat} />}

      {!isLottie && <Image src={image} alt={image} fill={true} priority={true} sizes="100dvw" objectFit="contain" />}
    </div>
  );
};

export default HeadingImage;
