import ArrowIcon from '@assets/icons/arrow.svg';

import Spinner from '@components/ui/Spinner';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { ICONS_SIZE } from './constant';

const BackButton = () => {
  const { colors } = useTheme();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const id = `BackButton_ShareExperience`;

  const clickHandler = () => {
    if (!pageNavigationLoading) {
      pageNavigationHandler({ showProgressBar: false, linkTo: -1, id });
    }
  };

  return (
    <div
      className="cursor-pointer flex justify-center items-center"
      style={{ width: ICONS_SIZE, height: ICONS_SIZE }}
      onClick={clickHandler}
    >
      {pageNavigationLoading === id && <Spinner color="outline" width={28} />}
      {pageNavigationLoading !== id && (
        <ArrowIcon className="w-6 h-full stroke-2" style={{ stroke: colors.Surface_Outline }} />
      )}
    </div>
  );
};

export default BackButton;
