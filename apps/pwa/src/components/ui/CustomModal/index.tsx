import { Fragment, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { MAX_SCREEN_WIDTH, PORTAL_ID } from '@constants/app.constants';
import useIsRendered from '@hooks/useIsRendered';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import useModalStatus from './__hooks__/useModalStatus';
import { MODAL_BACKGROUND_ID, MODAL_DEFAULT_Z_INDEX, MODAL_MIN_SIZE } from './constants';
import { CustomModalProps } from './types';
import useModalRendered from './useModalRendered';

const CustomModal = ({
  isSlidingMode = false,
  isFullScreen = false,
  backgroundColor,
  className,
  children,
  isOpen,
  zIndex = MODAL_DEFAULT_Z_INDEX,
}: CustomModalProps) => {
  const router = useRouter();
  const { colors } = useTheme();
  const { isRendered } = useIsRendered();
  const { isDelayPassed } = useModalRendered();
  const { isModalOpen, isSlidingModeTrue } = useModalStatus({ isOpen, isSlidingMode });

  const borderRadius = isFullScreen ? '0' : isSlidingModeTrue ? '0' : '12px';

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.style.height = '100dvh';
      body.style.overflow = 'hidden';
    } else {
      body.style.height = '';
      body.style.overflow = '';
    }
    return () => {
      body.style.height = '';
      body.style.overflow = '';
    };
  }, [isModalOpen]);

  const clickHandler = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement | undefined;

    if (el) {
      if (el.id === MODAL_BACKGROUND_ID) {
        router.back();
      }
    }
  };

  if (!isRendered) {
    return <></>;
  }

  return (
    <>
      {createPortal(
        <div
          onClick={clickHandler}
          id={MODAL_BACKGROUND_ID}
          style={{
            maxWidth: MAX_SCREEN_WIDTH,
            opacity: isDelayPassed ? '1' : '0',
            pointerEvents: isModalOpen ? 'all' : 'none',
            alignItems: isSlidingModeTrue ? 'flex-end' : 'center',
            zIndex,
          }}
          className={`fixed top-0 left-0 right-0 bottom-0 flex justify-center mx-auto  
              ${isModalOpen ? 'animate-modalBackgroundOpen' : 'animate-modalBackgroundClose'}`}
        >
          <div
            className={`px-4 py-6 rounded-xl
                ${className}
                ${!isSlidingModeTrue && !isModalOpen && 'animate-modalCenterModeClose'}
                ${!isSlidingModeTrue && isModalOpen && 'animate-modalCenterModeOpen'}
                ${isSlidingModeTrue && !isModalOpen && 'animate-modalSlidingModeClose'}
                ${isSlidingModeTrue && isModalOpen && 'animate-modalSlidingModeOpen'}
            `}
            style={{
              borderRadius,
              minWidth: MODAL_MIN_SIZE,
              minHeight: MODAL_MIN_SIZE,
              height: isFullScreen ? '100%' : 'fit-content',
              width: isFullScreen || isSlidingModeTrue ? '100%' : 'fit-content',
              backgroundColor: typeof backgroundColor === 'undefined' ? colors.White : backgroundColor,
            }}
          >
            <Fragment key={isModalOpen ? 'k1' : 'k2'}>{children}</Fragment>
          </div>
        </div>,
        document.getElementById(PORTAL_ID) as Element,
      )}
    </>
  );
};

export default CustomModal;
