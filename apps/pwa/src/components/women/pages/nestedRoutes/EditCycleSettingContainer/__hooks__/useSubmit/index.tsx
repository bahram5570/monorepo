import { CycleThemeEnum } from '@services/loginServices/enum';
import { getUserCookie, setUserCookie } from '@utils/cookies';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';

const useSubmit = (selectedValue: CycleThemeEnum) => {
  const { getQuery, updateQuery } = useCustomReactQuery();
  const profileData = getQuery<ProfileResponseTypes>({ queryKey: ['profile'] });
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const loadingId = 'EditCycleContainer';

  const successHandler = () => {
    const { user } = getUserCookie();

    if (user && user?.cycleTheme) {
      const updatedUser = { ...user };
      updatedUser.cycleTheme = selectedValue;
      setUserCookie(updatedUser);
    }
    const payload = {
      ...profileData,
      cycleTheme: selectedValue,
    };

    updateQuery({ queryKey: ['profile'], payload });
    pageNavigationHandler({ showProgressBar: false, id: loadingId, linkTo: '/protected/cycle' });
  };

  const { callApi, isLoading: submitLoading } = useApi({
    api: `info/cycletheme?AppVersion=${process.env.NEXT_PUBLIC_APP_VERSION}`,
    onSuccess: successHandler,
    method: 'PUT',
  });

  const submitHandler = () => {
    callApi({ theme: selectedValue });
  };

  const isLoading = submitLoading || pageNavigationLoading === loadingId;

  return { submitHandler, isLoading };
};

export default useSubmit;
