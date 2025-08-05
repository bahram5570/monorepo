import ThreeDotsIcon from '@assets/icons/threeDots.svg';

import { SHARE_EXPERIENCE_REPORT_MODAL_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { ShareExperienceReportModuleProps } from './types';

const ShareExperienceReportModule = (props: ShareExperienceReportModuleProps) => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    const queryData = JSON.stringify({ id: props.id, dummyData: Math.random() });
    newQueryParamsHandler({ [SHARE_EXPERIENCE_REPORT_MODAL_QUERY_NAME]: queryData });
    pageNavigationHandler({ id: props.id, showProgressBar: true });
  };

  return (
    <div className="w-10 flex justify-center" onClick={selectHandler}>
      <ThreeDotsIcon className="w-1" style={{ fill: colors.Surface_InverseSurface }} />
    </div>
  );
};

export default ShareExperienceReportModule;
