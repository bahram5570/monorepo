import ShareExperienceBookmarkModule from '../../../../ShareExperienceModules/ShareExperienceBookmarkModule';
import ShareExperienceCommentsModule from '../../../../ShareExperienceModules/ShareExperienceCommentsModule';
import ShareExperienceDeleteModule from '../../../../ShareExperienceModules/ShareExperienceDeleteModule';
import ShareExperienceLikesModule from '../../../../ShareExperienceModules/ShareExperienceLikesModule';
import ShareExperienceReportModule from '../../../../ShareExperienceModules/ShareExperienceReportModule';
import { CommentsBottomPartProps } from './types';

const CommentsBottomPart = (props: CommentsBottomPartProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      {!props.self && <ShareExperienceReportModule id={props.id} />}

      {/* {props.selfExperience && <ShareExperienceDeleteModule type="experience" shareId={props.id} />} */}

      {!props.self && <ShareExperienceBookmarkModule id={props.id} isBookmarked={props.isBookmarked} />}

      <ShareExperienceCommentsModule isSelf={true} commentCount={props.commentCount} id={props.id} />

      <ShareExperienceLikesModule
        type="experience"
        shareId={props.id}
        state={props.state}
        disliked={props.dislikeCount}
        likeCount={props.likeCount}
        isSelf={props.self}
      />
    </div>
  );
};

export default CommentsBottomPart;
