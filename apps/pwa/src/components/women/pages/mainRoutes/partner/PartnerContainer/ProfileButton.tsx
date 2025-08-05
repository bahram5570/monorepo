import ProfileIcon from '@assets/icons/headerProfile.svg';

import Spinner from '@components/ui/Spinner';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

const ProfileButton = () => {
  const { colors } = useTheme();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  let path = '/protected/profile';

  const clickHandler = () => {
    if (!pageNavigationLoading) {
      if (path === 'BACK') {
        pageNavigationHandler({ showProgressBar: false, linkTo: -1, id: 'profile' });
      } else {
        pageNavigationHandler({ showProgressBar: false, linkTo: path, id: 'profile' });
      }
    }
  };

  return (
    <div className="relative z-10 flex items-end w-full py-6">
      <div className="flex px-3 py-2 w-full">
        <div className="flex gap-4 items-center">
          <div className="cursor-pointer flex justify-center items-center w-8 h-8" onClick={clickHandler}>
            {pageNavigationLoading === 'profile' ? (
              <Spinner color="outline" width={28} />
            ) : (
              <ProfileIcon className="w-8 h-full" style={{ stroke: colors.Surface_Outline }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileButton;
