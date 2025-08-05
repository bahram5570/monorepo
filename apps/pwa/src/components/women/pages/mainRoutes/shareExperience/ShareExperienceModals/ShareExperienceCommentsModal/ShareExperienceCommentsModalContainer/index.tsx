import Spinner from '@components/ui/Spinner';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import {
  SHARE_EXPERIENCE_COMMENTS_CONTAINER_ID,
  SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME,
} from '@components/women/pages/mainRoutes/shareExperience/constants';
import useOverflowHandler from '@hooks/useOverflowHandler';
import useTheme from '@hooks/useTheme';

import ShareExperienceContentsModule from '../../../ShareExperienceModules/ShareExperienceContentsModule';
import ShareExperienceNewCommentFooterModule from '../../../ShareExperienceModules/ShareExperienceNewCommentFooterModule';
import CommentsBottomPart from './CommentsBottomPart';
import CommentsList from './CommentsList';
import useCommentsList from './CommentsList/__hooks__/useCommentsList';
import CommentsTopPart from './CommentsTopPart';
import useNewCommentQueries from './__hooks__/useNewCommentQueries';
import { ShareExperienceCommentsModalContainerProps } from './types';

const ShareExperienceCommentsModalContainer = (props: ShareExperienceCommentsModalContainerProps) => {
  useOverflowHandler();
  const { colors } = useTheme();
  const { newCommentQueries } = useNewCommentQueries(props.id);
  const { isLoading, commentsData } = useCommentsList(props.id);

  return (
    <WomenPageLayout rightElement="BackButton" paddingTop={0}>
      {isLoading && typeof commentsData === 'undefined' && (
        <div className="py-10 flex justify-center items-center" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
          <Spinner color="primary" />
        </div>
      )}

      {typeof commentsData !== 'undefined' && (
        <>
          <div id={SHARE_EXPERIENCE_COMMENTS_CONTAINER_ID} className=" h-[100dvh] overflow-y-auto">
            <div
              className="relative flex flex-col px-4"
              style={{ paddingTop: HEADER_HEIGHT + 16, paddingBottom: HEADER_HEIGHT * 2 }}
            >
              <CommentsTopPart {...commentsData} id={props.id} />

              <ShareExperienceContentsModule
                isSelf={commentsData.self}
                image={commentsData.image}
                text={commentsData.text}
                hasLinkTo={false}
                id={props.id}
              />

              <CommentsBottomPart {...commentsData} id={props.id} />

              <div className="w-full h-1 my-4" style={{ backgroundColor: colors.Neutral_Surface }} />

              <CommentsList id={props.id} comments={commentsData.comments} />

              {isLoading && (
                <div className="absolute left-0 right-0 bottom-20 w-full flex justify-center">
                  <Spinner color="outline" width={40} />
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {typeof commentsData !== 'undefined' && (
        <ShareExperienceNewCommentFooterModule
          queries={{ [SHARE_EXPERIENCE_NEW_REPLY_MODAL_QUERY_NAME]: JSON.stringify(newCommentQueries) }}
          placeholder="نظرت رو درباره این تجربه بنویس"
          avatar={newCommentQueries?.avatar || ''}
        />
      )}
    </WomenPageLayout>
  );
};

export default ShareExperienceCommentsModalContainer;
