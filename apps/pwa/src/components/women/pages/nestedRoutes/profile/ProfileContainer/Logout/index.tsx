import LogoutIcon from '@assets/icons/logout.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import { PROFILE_MODAL_QUERY_NAME } from '../ProfileLinkList/constants';
import { ProfileModalNameEnums } from '../ProfileModals/enum';

const LogOut = () => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const selectHandler = () => {
    newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      [PROFILE_MODAL_QUERY_NAME]: ProfileModalNameEnums.Logout,
    });

    pageNavigationHandler({ showProgressBar: false, id: ProfileModalNameEnums.Logout });
  };

  const isLoading = pageNavigationLoading === ProfileModalNameEnums.Logout;

  return (
    <div className="flex justify-center">
      <div
        className="flex items-center gap-2 px-6 py-2 rounded-full border-[1px] select-none cursor-pointer my-9"
        style={{ borderColor: colors.Surface_OutlineVariant }}
        onClick={selectHandler}
      >
        <Typography scale="Lable" size="Large" color="Black">
          خروج از حساب کاربری
        </Typography>

        {isLoading && <Spinner width={24} color="primary" />}
        {!isLoading && <LogoutIcon className="w-6 h-auto" style={{ stroke: colors.Black }} />}
      </div>
    </div>
  );
};

export default LogOut;
