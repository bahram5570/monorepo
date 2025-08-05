import Spinner from '@components/ui/Spinner';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import useTheme from '@hooks/useTheme';

import ShareExperienceChangeAvatarModal from '../../ShareExperienceModals/ShareExperienceChangeAvatarModal';
import ShareExperienceCommentsModal from '../../ShareExperienceModals/ShareExperienceCommentsModal';
import ShareExperienceDefultAvatarListModal from '../../ShareExperienceModals/ShareExperienceDefultAvatarListModal';
import ShareExperienceDeleteModal from '../../ShareExperienceModals/ShareExperienceDeleteModal';
import ShareExperienceEditProfileModal from '../../ShareExperienceModals/ShareExperienceEditProfileModal';
import ShareExperienceNewExerciseModal from '../../ShareExperienceModals/ShareExperienceNewExerciseModal';
import ShareExperienceNewReplyModal from '../../ShareExperienceModals/ShareExperienceNewReplyModal';
import ShareExperienceProfileModal from '../../ShareExperienceModals/ShareExperienceProfileModal';
import ShareExperienceReportModal from '../../ShareExperienceModals/ShareExperienceReportModal';
import ShareExperienceTopicModal from '../../ShareExperienceModals/ShareExperienceTopicModal';
import ShareExperienceUnfollowModal from '../../ShareExperienceModals/ShareExperienceUnfollowModal';
import ShareExperienceContentsModule from '../../ShareExperienceModules/ShareExperienceContentsModule';
import ShareExperienceBottomPart from './ShareExperienceBottomPart';
import ShareExperienceTopPart from './ShareExperienceTopPart';
import useExperiences from './__hooks__/useExperiences';
import useShareExperienceOrders from './__hooks__/useShareExperienceOrders';
import { ShareExperienceExperiencesProps } from './types';

const ShareExperienceExperiences = ({
  onSuccessNewHandler,
  selectedCategoryId,
  profile,
}: ShareExperienceExperiencesProps) => {
  const { colors } = useTheme();
  const { shareExperienceOrdersList } = useShareExperienceOrders();
  const { isLoading, experiencesData } = useExperiences(selectedCategoryId);

  return (
    <>
      {!isLoading && experiencesData && (
        <>
          <ShareExperienceNewExerciseModal
            onSuccessNewHandler={onSuccessNewHandler}
            avatarImage={profile.avatarImage}
            username={profile.username}
          />
          <ShareExperienceCommentsModal
            // expirences={experiencesData.expirences}
            shareExperienceOrdersList={shareExperienceOrdersList}
          />
          <ShareExperienceUnfollowModal />
          <ShareExperienceNewReplyModal />
          <ShareExperienceReportModal />
          <ShareExperienceDeleteModal />
          <ShareExperienceTopicModal avatarImage={profile.avatarImage} />
          <ShareExperienceProfileModal shareExperienceOrdersList={shareExperienceOrdersList} />
          <ShareExperienceChangeAvatarModal />
          <ShareExperienceDefultAvatarListModal />
          <ShareExperienceEditProfileModal />
        </>
      )}

      <div className="flex flex-col px-4 relative" style={{ paddingBottom: FOOTER_HEIGTH * 2 }}>
        {experiencesData?.expirences.map((item, index) => (
          <div
            key={index}
            className="w-full border-t-[1px] pt-5 pb-4 z-0"
            style={{ borderTopColor: colors.Surface_SurfaceVariant }}
          >
            <ShareExperienceTopPart {...item} />

            <div className="w-full pr-10">
              <ShareExperienceContentsModule
                image={item.image}
                text={item.text}
                hasLinkTo={true}
                isSelf={false}
                id={item.id}
              />

              <ShareExperienceBottomPart {...item} />
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="absolute left-0 right-0 bottom-20 w-full flex justify-center">
            <Spinner color="outline" width={40} />
          </div>
        )}
      </div>
    </>
  );
};

export default ShareExperienceExperiences;
