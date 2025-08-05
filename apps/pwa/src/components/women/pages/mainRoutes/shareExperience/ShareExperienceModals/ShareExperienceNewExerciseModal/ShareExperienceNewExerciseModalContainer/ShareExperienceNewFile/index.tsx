import UploadIcon from '@assets/icons/gallery.svg';
import CrossIcon from '@assets/icons/plus.svg';

import CustomImage from '@components/ui/CustomImage';
import Spinner from '@components/ui/Spinner';
import useTheme from '@hooks/useTheme';

import { ShareExperienceNewFileProps } from './types';

const ShareExperienceNewFile = ({
  uploadImageLoading,
  removeFileHandler,
  fileDataHandler,
  imageFile,
}: ShareExperienceNewFileProps) => {
  const { colors } = useTheme();

  return (
    <>
      {imageFile && (
        <div className="relative">
          <CustomImage src={imageFile} className="rounded-xl" />

          {!uploadImageLoading && (
            <div
              onClick={removeFileHandler}
              style={{ backgroundColor: colors.Neutral_OnSurface }}
              className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center"
            >
              <CrossIcon className="w-7 h-auto rotate-45" style={{ stroke: colors.White }} />
            </div>
          )}

          {uploadImageLoading && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center backdrop-blur-md rounded-xl">
              <Spinner color="surface" />
            </div>
          )}
        </div>
      )}

      {!imageFile && (
        <div className="relative ml-auto">
          <UploadIcon className="w-5 h-auto" style={{ stroke: colors.Surface_Outline }} />

          <input
            type="file"
            onChange={(e) => fileDataHandler({ e })}
            className="absolute top-0 left-0 right-0 bottom-0 opacity-0 select-none"
          />
        </div>
      )}
    </>
  );
};

export default ShareExperienceNewFile;
