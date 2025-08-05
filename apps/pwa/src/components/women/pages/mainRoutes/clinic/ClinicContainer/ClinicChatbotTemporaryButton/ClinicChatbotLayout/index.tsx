import { useEffect, useRef } from 'react';

import CrossIcon from '@assets/icons/plus.svg';

import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import { ClinicChatbotLayoutPropsType } from './type';

const ClinicChatbotLayout = ({
  children,
  className,
  handleCloseModal,
  isModalVisible,
  onChangeValueHandler,
}: ClinicChatbotLayoutPropsType) => {
  const { colors } = useTheme();
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetRef.current) {
      const currentHeight = targetRef.current.offsetHeight;
      onChangeValueHandler(currentHeight);
    }
  }, []);

  return (
    <div
      className={`fixed left-0 right-0   mx-auto ${isModalVisible ? 'h-96' : 'h-14'}   f z-30  ${className}`}
      style={{
        maxWidth: MAX_SCREEN_WIDTH,
        backgroundColor: colors.White,
        bottom: isModalVisible ? FOOTER_HEIGTH + 16 : FOOTER_HEIGTH + 30,
      }}
      ref={targetRef}
    >
      <>
        {isModalVisible && (
          <div
            className="absolute w-10 top-4 left-4 h-10 flex flex-col justify-center items-center cursor-pointer rounded-full z-50"
            style={{ background: colors.White }}
          >
            <CrossIcon
              onClick={handleCloseModal}
              style={{ stroke: colors.Surface_Outline }}
              className="w-7 h-auto rotate-45 mx-auto stroke-[2px]"
            />
          </div>
        )}

        {children}
      </>
    </div>
  );
};

export default ClinicChatbotLayout;
