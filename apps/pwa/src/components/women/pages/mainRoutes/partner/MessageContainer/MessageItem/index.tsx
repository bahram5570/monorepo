import { formatPersionDate } from '../utils';
import HamdelIcon from '@assets/icons/hamdel.svg';
import { toPersianNumbers } from '@utils/numbers';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { MessageItemPropsType } from './type';

const MessageItem = ({ fromMan, text, createTime }: MessageItemPropsType) => {
  const { colors } = useTheme();
  const date = new Date(createTime);

  return (
    <>
      {fromMan && (
        <div className=" flex gap-2 px-2 items-center bg-white absolute -top-[6px] right-6">
          <Typography scale="Lable" size="Medium" textAlign="right" className="w-full">
            پیام همدل شما
          </Typography>
          <HamdelIcon className="w-[18px] h-[18px]" style={{ stroke: colors.PrimaryMan_PrimaryMan }} />
        </div>
      )}
      <div className="flex flex-col justify-between h-full p-1 gap-3">
        <Typography
          scale="Body"
          size="Small"
          textAlign="justify"
          className={`w-full p-1 break-words ${fromMan ? ` mt-1` : ``}`}
        >
          {text}
        </Typography>
        <Typography scale="Body" size="Small" color="Surface_Outline">
          {toPersianNumbers(formatPersionDate(date))}
        </Typography>
      </div>
    </>
  );
};

export default MessageItem;
