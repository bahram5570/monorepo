import InfoIcon from '@assets/icons/infoIcon.svg';

import Typography from '@components/ui/Typography';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import { CHAT_HEADING_HEIGHT } from '../constants';

const ChatHeading = () => {
  const { colors } = useTheme();

  return (
    <div
      className="fixed left-0 right-0 w-full px-5 pt-2 mx-auto  z-20"
      style={{
        top: HEADER_HEIGHT,
        maxWidth: MAX_SCREEN_WIDTH,
        height: CHAT_HEADING_HEIGHT,
        backgroundColor: colors.Neutral_Background,
      }}
    >
      <div
        className="flex items-center justify-end gap-2 border-[1px] rounded-lg p-3 h-fit"
        style={{ borderColor: colors.Yellow_500 }}
      >
        <Typography scale="Body" size="Medium">
          مکالمات شما با حفظ حریم شخصی ثبت میشن
        </Typography>

        <div className="w-[1px] h-[32px]" style={{ backgroundColor: colors.Neutral_Surface }} />

        <InfoIcon className="w-6 h-auto" style={{ fill: colors.Yellow_500 }} />
      </div>
    </div>
  );
};

export default ChatHeading;
