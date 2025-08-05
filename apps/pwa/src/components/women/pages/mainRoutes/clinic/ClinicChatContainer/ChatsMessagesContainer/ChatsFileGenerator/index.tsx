import DownloadIcon from '@assets/icons/download.svg';
import DownloadedIcon from '@assets/icons/downloaded.svg';
import { textShorter } from '@utils/scripts';

import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import useFileDownload from '@hooks/useFileDownload';
import useTheme from '@hooks/useTheme';

import { ChatsFileGeneratorProps } from './types';

const ChatsFileGenerator = ({ media }: ChatsFileGeneratorProps) => {
  const { colors } = useTheme();
  const { downloadHandler, downloadLoading, isDownloaded } = useFileDownload();

  const mediaScripts = media.split('.');
  const name = textShorter(mediaScripts[0]) + ' .' + mediaScripts[1];

  return (
    <div className="w-[240px] flex items-center gap-2">
      <div
        className="relative w-10 h-10 min-w-10 min-h-10 rounded-full flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: colors.PrimaryWoman_Primary }}
        onClick={() => downloadHandler(media)}
      >
        {!isDownloaded && !downloadLoading && (
          <DownloadIcon className="w-6 h-auto" style={{ fill: colors.PrimaryWoman_OnPrimary }} />
        )}
        {isDownloaded && !downloadLoading && (
          <DownloadedIcon className="w-6 h-auto" style={{ stroke: colors.PrimaryWoman_OnPrimary }} />
        )}
        {downloadLoading && <Spinner color="surface" width={20} />}
      </div>

      <Typography scale="Body" size="Small">
        {name}
      </Typography>
    </div>
  );
};

export default ChatsFileGenerator;
