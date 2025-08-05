import ShareExperienceDeleteModule from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceDeleteModule';
import ShareExperienceLikesModule from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceLikesModule';
import ShareExperienceReportModule from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceReportModule';

import ReplyBtn from './ReplyBtn';
import { CommentsGeneratorBottomPartProps } from './types';

const CommentsGeneratorBottomPart = (props: CommentsGeneratorBottomPartProps) => {
  return (
    <div className="w-full flex items-center justify-between py-4">
      {props.selfComment && <ShareExperienceDeleteModule type="comment" shareId={props.id} commentId={props.shareId} />}

      {!props.selfComment && <ShareExperienceReportModule id={props.id} />}

      <ShareExperienceLikesModule
        likeCount={props.likeCount}
        isSelf={props.selfComment}
        disliked={props.disliked}
        commentId={props.shareId}
        state={props.state}
        shareId={props.id}
        type="comment"
      />

      <ReplyBtn
        commentId={props.shareId}
        userId={props.userId}
        avatar={props.avatar}
        shareId={props.id}
        name={props.name}
      />
    </div>
  );
};

export default CommentsGeneratorBottomPart;
