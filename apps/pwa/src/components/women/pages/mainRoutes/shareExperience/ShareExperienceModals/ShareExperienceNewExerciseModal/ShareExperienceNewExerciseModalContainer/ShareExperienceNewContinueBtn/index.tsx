import Button from '@components/ui/Button';
import { SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ShareExperienceNewContinueBtnProps } from './types';

const ShareExperienceNewContinueBtn = ({ text }: ShareExperienceNewContinueBtnProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isDisable = text.trim().length < 1;
  const id = 'forum';
  const isLoading = pageNavigationLoading === id;

  const clickHandler = () => {
    pageNavigationHandler({ id, showProgressBar: false });
    newQueryParamsHandler({ [SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME]: 'true' });
  };

  return (
    <div className="mt-auto px-4 py-6">
      <Button
        size="medium"
        variant="fill"
        color="primary"
        isDisable={isDisable}
        isLoading={isLoading}
        onClick={clickHandler}
      >
        بعدی
      </Button>
    </div>
  );
};

export default ShareExperienceNewContinueBtn;
