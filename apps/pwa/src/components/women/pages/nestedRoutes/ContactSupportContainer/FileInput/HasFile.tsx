import DownloadedIcon from '@assets/icons/downloaded.svg';
import TrashIcon from '@assets/icons/trash.svg';
import { chatFileTypeDetector } from '@components/women/pages/mainRoutes/clinic/ClinicChatContainer/ChatsMessagesContainer/__utils__';
import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { HasFilePropsType } from './type';

const HasFile = ({ fileName, valuesHandler }: HasFilePropsType) => {
  const { isImageType } = chatFileTypeDetector(fileName);
  const fileNameList = fileName.split('.');
  const fileNameScript = `${textShorter(fileNameList[0])} .${fileNameList[1]}`;
  const { colors } = useTheme();

  return (
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
        <TrashIcon className="w-5 h-auto" style={{ stroke: colors.Error_Error }} />
      </div>
    </div>
  );
};

export default HasFile;
