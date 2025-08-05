import ChatIcon from '@assets/icons/ChatDots.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { CommentPropsType } from './type';

const Comment = ({ textPartner, fromMan, partnerName }: CommentPropsType) => {
  const { colors } = useTheme();

  return (
    <div
      className="flex flex-col items-end gap-2 justify-end py-2 pr-2 pl-10 rounded-lg"
      style={{
        background: `${!fromMan ? colors.PrimaryMan_PrimaryContainerMan : colors.PrimaryWoman_PrimaryContainer}`,
      }}
    >
      <div className="flex items-center gap-1 justify-end">
        <Typography scale="Lable" size="Medium">
          {`نظر ${!fromMan ? partnerName : 'شما'}`}
        </Typography>
        <ChatIcon
          className="w-6 h-6"
          style={{ fill: `${!fromMan ? colors.PrimaryMan_PrimaryMan : colors.PrimaryWoman_Primary}` }}
        />
      </div>
      <Typography scale="Body" size="Small">
        {textPartner}
      </Typography>
    </div>
  );
};

export default Comment;
