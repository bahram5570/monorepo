import { useEffect, useState } from 'react';

import PaperClipIcon from '@assets/icons/paperclip.svg';
import TrashIcon from '@assets/icons/trash.svg';
import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { UploadInputPropsType } from './type';

const UploadInput = ({ fileName, uploadImageLoading, valuesHandler }: UploadInputPropsType) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (uploadImageLoading) {
      const intervalId = setInterval(() => {
        setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
      }, 500);

      return () => clearInterval(intervalId);
    } else {
      setProgress(100);
    }
  }, [uploadImageLoading]);

  const fileNameList = fileName.split('.');
  const fileNameScript = `${textShorter(fileNameList[0])} .${fileNameList[1]}`;

  return (
    <>
      {fileName !== '' && (
        <div className="flex flex-col gap-3">
          <div
            style={{ background: colors.Surface_SurfaceVariant }}
            className="flex  rounded-full justify-evenly items-center px-5 py-3 gap-3"
          >
            <div className="flex gap-3">
              <CustomImage src={fileName} width={48} height={48} className="rounded-md" />

              <Typography scale="Body" size="Medium" className="break-all" textAlign="left">
                {fileNameScript}
              </Typography>
            </div>

            <div
              className="w-10 h-10 min-w-10 min-h-10 rounded-full flex justify-center items-center cursor-pointer"
              style={{ backgroundColor: colors.Error_ErrorContainer }}
              onClick={() => valuesHandler('', 'fileName')}
            >
              <TrashIcon className="w-5 h-auto" style={{ stroke: colors.Black }} />
            </div>
          </div>
          {uploadImageLoading && (
            <div className={`w-full h-1 bg-gray-200 rounded-full`}>
              <div
                className={`h-full rounded-full`}
                style={{ width: `${progress}%`, background: colors.PrimaryWoman_Primary }}
              ></div>
            </div>
          )}
        </div>
      )}

      {fileName === '' && (
        <div
          style={{ border: `1px solid ${colors.Neutral_Surface}` }}
          className="rounded-2xl py-5 px-2 flex flex-col gap-3"
        >
          <Typography scale="Body" size="Small" color="Surface_Outline" className="w-full" textAlign="center">
            میتونی برای خاطره خودت یک عکس آپلود کنی
          </Typography>

          <div className=" p-2 flex  justify-center items-center ">
            <div
              className="flex  justify-center items-center gap-2 rounded-full pl-6 pr-4 py-3"
              style={{ background: colors.PrimaryWoman_PrimaryContainer }}
              onClick={() => {
                (newQueryParamsHandler({
                  [MODAL_QUERY_NAME]: 'true',
                  name: 'UploadMemoryImage',
                }),
                  pageNavigationHandler({
                    showProgressBar: true,
                    id: 'UploadMemoryImage',
                  }));
              }}
            >
              <Typography scale="Lable" size="Large" color="PrimaryWoman_Primary">
                ثبت خاطره
              </Typography>
              <div className="w-5 h-5 flex justify-center items-center">
                <PaperClipIcon className="w-5 h-5" style={{ stroke: colors.PrimaryWoman_Primary }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadInput;
