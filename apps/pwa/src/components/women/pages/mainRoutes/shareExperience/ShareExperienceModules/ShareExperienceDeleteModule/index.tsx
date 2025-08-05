import TrashIcon from '@assets/icons/trash.svg';

import { SHARE_EXPERIENCE_DELETE_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { ShareExperienceDeleteModuleProps } from './types';

const ShareExperienceDeleteModule = (props: ShareExperienceDeleteModuleProps) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    const queryData = JSON.stringify({ ...props, dummyData: Math.random() });
    newQueryParamsHandler({ [SHARE_EXPERIENCE_DELETE_MODAL_QUERY_NAME]: queryData });
    pageNavigationHandler({ id: props.shareId, showProgressBar: true });
  };

  return (
    <div className="w-10 flex justify-center" onClick={selectHandler}>
      <TrashIcon className="w-5" style={{ stroke: colors.Surface_InverseSurface }} />
    </div>
  );
};

export default ShareExperienceDeleteModule;
