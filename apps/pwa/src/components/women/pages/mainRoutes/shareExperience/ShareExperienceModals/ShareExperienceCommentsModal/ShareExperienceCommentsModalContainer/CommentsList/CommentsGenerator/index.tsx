import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import CommentsGeneratorBottomPart from './CommentsGeneratorBottomPart';
import CommentsGeneratorTopPart from './CommentsGeneratorTopPart';
import ReplyGenerator from './ReplyGenerator';
import { CommentsGeneratorProps } from './types';

const CommentsGenerator = (props: CommentsGeneratorProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full flex flex-col items-end pt-4 border-t-[1px]"
      style={{ borderTopColor: props.isFirstIndex ? colors.Transparent : colors.Neutral_Surface }}
    >
      <CommentsGeneratorTopPart
        approvedProfile={props.approvedProfile}
        selfComment={props.selfComment}
        createTime={props.createTime}
        avatar={props.avatar}
        name={props.name}
        userId={props.userId}
      />

      <div className="w-full flex flex-col items-end pr-10 -translate-y-4">
        <Typography scale="Body" size="Small">
          {props.text}
        </Typography>

        <CommentsGeneratorBottomPart
          selfComment={props.selfComment}
          likeCount={props.likeCount}
          disliked={props.disliked}
          userId={props.userId}
          avatar={props.avatar}
          state={props.state}
          shareId={props.id}
          id={props.shareId}
          name={props.name}
        />

        <ReplyGenerator
          repliesCount={props.repliesCount}
          commentName={props.name}
          shareId={props.shareId}
          replies={props.replies}
          commentId={props.id}
          userId={props.userId}
        />
      </div>
    </div>
  );
};

export default CommentsGenerator;
