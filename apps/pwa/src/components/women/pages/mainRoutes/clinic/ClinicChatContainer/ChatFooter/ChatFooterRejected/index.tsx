import LinkToIcon from '@assets/icons/linkTo.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const ChatFooterRejected = () => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full h-[56px] rounded-lg border-[1px] flex flex-col items-center justify-center gap-1"
      style={{ borderColor: colors.Surface_OutlineVariant, backgroundColor: colors.Surface_SurfaceVariant }}
    >
      <div className="flex items-end gap-1">
        <Typography scale="Lable" size="Medium">
          این تیکت رد شد
        </Typography>

        <LinkToIcon className="w-6 h-auto" style={{ stroke: colors.Surface_Outline }} />
      </div>

      <Typography scale="Lable" size="Small">
        دلیل: نامربوط بودن بیماری با تخصص پزشک
      </Typography>
    </div>
  );
};

export default ChatFooterRejected;
