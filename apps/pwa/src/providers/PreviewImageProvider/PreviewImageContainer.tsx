import { useEffect } from 'react';

import CrossIcon from '@assets/icons/plus.svg';
import Image from 'next/image';

import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useOverflowHandler from '@hooks/useOverflowHandler';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import { PreviewImageContainerProps } from './types';

const PreviewImageContainer = ({ src, shape = 'full' }: PreviewImageContainerProps) => {
  useOverflowHandler();
  const router = useRouter();
  const { colors } = useTheme();

  useEffect(() => {
    // # Disable touch events for IOS
    const touchMoveListener = (e: TouchEvent) => {
      e.preventDefault();
    };

    document.addEventListener('touchmove', touchMoveListener, { passive: false });

    return () => {
      document.removeEventListener('touchmove', touchMoveListener);
    };
  }, []);

  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      className="fixed top-0 left-0 right-0 bottom-0 mx-auto bg-[#00000033] backdrop-blur-sm z-[500]"
    >
      <CrossIcon
        onClick={() => router.back()}
        style={{ stroke: colors.White }}
        className="absolute top-4 left-4 w-10 h-auto rotate-45 cursor-pointer stroke-[2px] z-10"
      />

      <div className="relative w-full h-full flex justify-center">
        {shape === 'full' && <Image src={src} alt="" fill={true} className="object-contain" />}

        {shape === 'circle' && (
          <div
            className="relative w-[90vw] h-[90vw] rounded-full overflow-hidden border-4 mt-[20vh]"
            style={{ maxWidth: MAX_SCREEN_WIDTH * 0.9, maxHeight: MAX_SCREEN_WIDTH * 0.9 }}
          >
            <Image alt="" fill={true} src={src} className="object-cover object-center" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewImageContainer;
