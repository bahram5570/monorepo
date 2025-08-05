import ShareExperienceDeleteModule from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceDeleteModule';
import ShareExperienceLikesModule from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceLikesModule';
import ShareExperienceReportModule from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceReportModule';

import { ReplyGeneratorBottomPartProps } from './types';

const ReplyGeneratorBottomPart = (props: ReplyGeneratorBottomPartProps) => {
  return (
    <div className="w-full flex items-center gap-6 pb-4">
      {props.selfExperience && (
        <ShareExperienceDeleteModule
          commentId={props.commentId}
          shareId={props.shareId}
          replyId={props.id}
          type="reply"
        />
      )}

      {!props.selfExperience && <ShareExperienceReportModule id={props.shareId} />}

      <ShareExperienceLikesModule
        isSelf={props.selfExperience}
        likeCount={props.likeCount}
        commentId={props.commentId}
        disliked={props.disliked}
        shareId={props.shareId}
        replyId={props.id}
        state={props.state}
        type="reply"
      />
    </div>
  );
};

export default ReplyGeneratorBottomPart;
