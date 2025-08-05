import { useState } from 'react';

import FileIcon from '@assets/icons/Paper.svg';
import CameraIcon from '@assets/icons/camera.svg';
import GalleryIcon from '@assets/icons/gallery.svg';
import imageCompression from 'browser-image-compression';

import useTheme from '@hooks/useTheme';

import Spinner from '../Spinner';
import Typography from '../Typography';
import { FileInputTypes } from './enum';
import { FileInputHandlerTypes, FileInputManagerPropsType } from './type';

const FileInputManager = ({
  ShowGalleryInput = true,
  ShowCameraInput = true,
  uploadImageLoading,
  fileDataHandler,
  ShowFileInput,
}: FileInputManagerPropsType) => {
  const { colors } = useTheme();
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const handleFileInput: FileInputHandlerTypes = (type) => async (e) => {
    setActiveInput(type);

    const file = e.target.files?.[0];
    if (!file) return;

    if (type === FileInputTypes.CAMERA) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 640,
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);
        fileDataHandler({ e, file: compressedFile });
      } catch (error) {
        console.error('Image compression failed:', error);
      }
    } else {
      fileDataHandler({ e });
    }
  };

  return (
    <>
      {ShowCameraInput && (
        <div className=" p-2">
          <input
            type="file"
            accept="image/*"
            id="camera-input"
            className="hidden"
            capture="environment"
            onChange={handleFileInput(FileInputTypes.CAMERA)}
          />
          <label htmlFor="camera-input">
            <div className="flex justify-end items-center gap-2">
              <Typography scale="Body" size="Large" color="Neutral_OnBackground">
                دوربین
              </Typography>
              <div
                className="w-12 h-12 rounded-full flex justify-center items-center"
                style={{ border: `1px solid ${colors.Surface_SurfaceVariant}` }}
              >
                {uploadImageLoading && activeInput === FileInputTypes.CAMERA ? (
                  <Spinner width={20} color="primary" />
                ) : (
                  <CameraIcon className="w-10 h-10" style={{ stroke: colors.Surface_Outline }} />
                )}
              </div>
            </div>
          </label>
        </div>
      )}
      {ShowGalleryInput && (
        <div className="p-2">
          <input
            type="file"
            accept="image/*"
            id="gallery-input"
            className="hidden"
            onChange={handleFileInput(FileInputTypes.GALLERY)}
          />
          <label htmlFor="gallery-input">
            <div className="flex justify-end items-center gap-2">
              <Typography scale="Body" size="Large" color="Neutral_OnBackground">
                گالری
              </Typography>
              <div
                className="w-12 h-12 rounded-full flex justify-center items-center"
                style={{ border: `1px solid ${colors.Surface_SurfaceVariant}` }}
              >
                {uploadImageLoading && activeInput === FileInputTypes.GALLERY ? (
                  <Spinner width={20} color="primary" />
                ) : (
                  <GalleryIcon className="w-5 h-5" style={{ stroke: colors.Surface_Outline }} />
                )}
              </div>
            </div>
          </label>
        </div>
      )}

      {ShowFileInput && (
        <div className="p-2">
          <input type="file" id="file-input" className="hidden" onChange={handleFileInput(FileInputTypes.FILE)} />
          <label htmlFor="file-input">
            <div className="flex justify-end items-center gap-2">
              <Typography scale="Body" size="Large" color="Neutral_OnBackground">
                فایل
              </Typography>
              <div
                className="w-12 h-12 rounded-full flex justify-center items-center"
                style={{ border: `1px solid ${colors.Surface_SurfaceVariant}` }}
              >
                {uploadImageLoading && activeInput === FileInputTypes.FILE ? (
                  <Spinner width={20} color="primary" />
                ) : (
                  <FileIcon className="w-5 h-5" style={{ stroke: colors.Surface_Outline }} />
                )}
              </div>
            </div>
          </label>
        </div>
      )}
    </>
  );
};

export default FileInputManager;
