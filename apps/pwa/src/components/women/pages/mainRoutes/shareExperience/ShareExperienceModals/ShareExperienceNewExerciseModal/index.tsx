import CustomModal from '@components/ui/CustomModal';
import { SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import ShareExperienceNewExerciseModalContainer from './ShareExperienceNewExerciseModalContainer';
import { ShareExperienceNewExerciseModalProps } from './types';

const ShareExperienceNewExerciseModal = ({
  onSuccessNewHandler,
  avatarImage,
  username,
}: ShareExperienceNewExerciseModalProps) => {
  const { getQueryParams } = useQueryParamsHandler();

  const isOpen = getQueryParams(SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME) !== null;

  return (
    <>
      <CustomModal isOpen={isOpen} isSlidingMode={true} isFullScreen={true} className="!py-0" zIndex={75}>
        <>
          {isOpen && (
            <ShareExperienceNewExerciseModalContainer
              onSuccessNewHandler={onSuccessNewHandler}
              key={isOpen ? 'k1' : 'k2'}
              avatarImage={avatarImage}
              username={username}
            />
          )}
        </>
      </CustomModal>
    </>
  );
};

export default ShareExperienceNewExerciseModal;
