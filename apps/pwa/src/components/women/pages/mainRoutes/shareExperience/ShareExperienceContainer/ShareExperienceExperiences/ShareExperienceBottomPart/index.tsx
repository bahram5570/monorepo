import ShareExperienceBookmarkModule from '../../../ShareExperienceModules/ShareExperienceBookmarkModule';
import ShareExperienceCommentsModule from '../../../ShareExperienceModules/ShareExperienceCommentsModule';
import ShareExperienceDeleteModule from '../../../ShareExperienceModules/ShareExperienceDeleteModule';
import ShareExperienceLikesModule from '../../../ShareExperienceModules/ShareExperienceLikesModule';
import ShareExperienceReportModule from '../../../ShareExperienceModules/ShareExperienceReportModule';
import { ShareExperienceBottomPartProps } from './types';

const ShareExperienceBottomPart = (props: ShareExperienceBottomPartProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      {!props.selfExperience && <ShareExperienceReportModule id={props.id} />}

      {props.selfExperience && <ShareExperienceDeleteModule type="experience" shareId={props.id} />}

      {!props.selfExperience && <ShareExperienceBookmarkModule id={props.id} isBookmarked={props.isBookmarked} />}

      <ShareExperienceCommentsModule isSelf={false} commentCount={props.commentCount} id={props.id} />

      <ShareExperienceLikesModule
        type="experience"
        shareId={props.id}
        state={props.state}
        disliked={props.disliked}
        likeCount={props.likeCount}
        isSelf={props.selfExperience}
      />
    </div>
  );
};

export default ShareExperienceBottomPart;
