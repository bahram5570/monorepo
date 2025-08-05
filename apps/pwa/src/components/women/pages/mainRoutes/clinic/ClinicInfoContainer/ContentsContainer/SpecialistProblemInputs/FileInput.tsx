import { chatFileTypeDetector } from '../../../ClinicChatContainer/ChatsMessagesContainer/__utils__';
import AttachIcon from '@assets/icons/attach.svg';
import DownloadedIcon from '@assets/icons/downloaded.svg';
import TrashIcon from '@assets/icons/trash.svg';
import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { FileInputProps } from './types';

const FileInput = ({ fileName, valuesHandler }: FileInputProps) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const { isImageType } = chatFileTypeDetector(fileName);
  const fileNameList = fileName.split('.');
  const fileNameScript = `${textShorter(fileNameList[0])} .${fileNameList[1]}`;

  return (
    <div className="w-full px-4 rounded-lg" style={{ backgroundColor: colors.Surface_SurfaceVariant }}>
      {fileName === '' && (
        <div
          className="relative w-full flex items-center justify-center gap-2 py-2 cursor-pointer"
          onClick={() => {
            (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' }),
              pageNavigationHandler({ showProgressBar: false, id: 'specialistProblemModal' }));
          }}
        >
          <>
            <Typography scale="Body" size="Medium" className="pointer-events-none">
              ارسال آزمایش یا گزارش (اختیاری)
            </Typography>

            <AttachIcon className="w-3 h-auto rotate-45 pointer-events-none" style={{ fill: colors.Black }} />
          </>
        </div>
      )}

      {fileName !== '' && (
        <div className="relative w-full flex items-center justify-between gap-5 py-3">
          <div className="flex items-center gap-2">
            {isImageType && <CustomImage src={fileName} width={48} height={48} className="rounded-md" />}
            {!isImageType && (
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.White }}
              >
                <DownloadedIcon className="w-7 h-auto" style={{ fill: colors.Surface_OutlineVariant }} />
              </div>
            )}

            <Typography scale="Body" size="Medium" className="break-all" textAlign="left">
              {fileNameScript}
            </Typography>
          </div>

          <div
            className="w-10 h-10 min-w-10 min-h-10 rounded-full flex justify-center items-center cursor-pointer"
            style={{ backgroundColor: colors.Error_ErrorContainer }}
            onClick={() => valuesHandler({ name: 'fileName', value: '' })}
          >
            <TrashIcon className="w-5 h-auto" style={{ stroke: colors.Black }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FileInput;
