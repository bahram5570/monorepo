import Image from 'next/image';

import { LottieCanvas } from '@lib/LottieCanvas';

import { AccessNotificationHeadingImageProps } from './types';

const AccessNotificationHeadingImage = ({ backgroundColor, image, doRepeat }: AccessNotificationHeadingImageProps) => {
  const isLottie = image.includes('.lottie');

  return (
    <div className="relative w-full h-[56dvh] flex pointer-events-none" style={{ backgroundColor }}>
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

export default AccessNotificationHeadingImage;
