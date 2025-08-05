import CloseIcon from '@assets/icons/plus.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const ChatFooterClosed = () => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full h-[40px] rounded-lg border-[1px] flex items-center justify-center gap-2"
      style={{ borderColor: colors.Surface_OutlineVariant, backgroundColor: colors.Surface_SurfaceVariant }}
    >
      <Typography scale="Lable" size="Medium">
        این تیکت بسته شد
      </Typography>

      <div
        className="w-5 h-5 flex items-center justify-center border-[1px] rounded-full"
        style={{ borderColor: colors.Error_Error }}
      >
        <CloseIcon className="w-4 h-auto rotate-45" style={{ stroke: colors.Error_Error, fill: colors.Error_Error }} />
      </div>
    </div>
  );
};

export default ChatFooterClosed;
