import useOperatingSystem from '@hooks/useOperatingSystem';
import { COLORS_LIST } from '@theme/colors';
import Image from 'next/image';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import CustomModal from '../CustomModal';
import { CustomImagePreviewTypes } from './types';

const CustomImagePreview = ({ src, previewImage, previewBackground, closeHandler }: CustomImagePreviewTypes) => {
  const { operatingSystem } = useOperatingSystem();

  const ImageComponent = (
    <div className="relative w-full h-full" style={{ backgroundColor: previewBackground || COLORS_LIST.Transparent }}>
      <Image
        alt=""
        src={src}
        width={0}
        height={0}
        sizes="100dvw"
        className="object-contain object-center w-[100dvw] h-[100dvh]"
      />
    </div>
  );

  const isIos = operatingSystem === 'ios';

  return (
    <>
      <CustomModal isOpen={previewImage} onClose={closeHandler}>
        <div className="relative w-[100dvw] h-[100dvh]">
          <CloseRoundedIcon
            onClick={closeHandler}
            className="absolute top-4 left-4 z-10"
            sx={{ width: 50, height: 50, fill: COLORS_LIST.White, stroke: COLORS_LIST.Surface_Outline, strokeWidth: 1 }}
          />

          {isIos ? (
            ImageComponent
          ) : (
            <TransformWrapper>
              <TransformComponent>
                <>{ImageComponent}</>
              </TransformComponent>
            </TransformWrapper>
          )}
        </div>
      </CustomModal>
    </>
  );
};

export default CustomImagePreview;
