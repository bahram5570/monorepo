import LogoutIcon from '@assets/icons/logout.svg';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { USER_COOKIE_NAME } from '@constants/cookie.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import { STORED_NOTIFICATIONS_CACHE_NAME } from '@providers/ServiceWorkerProvider/constants';
import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const LogoutModal = () => {
  const router = useRouter();
  const { colors } = useTheme();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isLoading = pageNavigationLoading === 'LogoutModal';

  const logoutHandler = async () => {
    localStorage.clear();
    sessionStorage.clear();
    cookies.remove(USER_COOKIE_NAME);
    pageNavigationHandler({ showProgressBar: false, id: 'LogoutModal', linkTo: '/' });

    await caches.delete(STORED_NOTIFICATIONS_CACHE_NAME);
  };

  return (
    <div className="w-[290px] flex flex-col items-center gap-4">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ backgroundColor: colors.Error_ErrorContainer }}
      >
        <LogoutIcon className="w-6 h-auto" style={{ stroke: colors.Error_Error }} />
      </div>

      <Typography scale="Title" size="Medium">
        خروج از کاربری
      </Typography>

      <Typography scale="Body" size="Medium">
        مطمئنی می‌خوای از حساب کاربریت خارج بشی؟
      </Typography>

      <div className="w-full flex items-center justify-between gap-2">
        <Button
          size="medium"
          variant="outline"
          color="FREE-STYLES"
          isLoading={isLoading}
          onClick={logoutHandler}
          contentsColor={colors.Error_Error}
          buttonColor={colors.Error_ErrorContainer}
          style={{ backgroundColor: colors.Error_ErrorContainer }}
        >
          خروج
        </Button>

        <Button variant="fill" size="medium" color="surface" onClick={() => router.back()}>
          خیر
        </Button>
      </div>
    </div>
  );
};

export default LogoutModal;
