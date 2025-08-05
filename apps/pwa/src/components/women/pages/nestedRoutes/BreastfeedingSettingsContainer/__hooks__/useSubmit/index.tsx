import { ChildTypeEnum } from '@constants/activation.constants';
import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';
import { ProfileResponseTypes } from '@providers/ProfileProvider/__hooks__/useGetProfileData/type';
import { useRouter } from 'next/navigation';

import { SubmitHandlerPropsType } from './type';

const useSubmit = ({ childBirthDate, childName, childType }: SubmitHandlerPropsType) => {
  const router = useRouter();
  const { getQuery, updateQuery } = useCustomReactQuery();
  const profileData = getQuery<ProfileResponseTypes>({ queryKey: ['profile'] });

  const successHandler = () => {
    const payload = {
      ...profileData,
      ...(childType !== ChildTypeEnum.Twin && { childName }),
      birthDate: childBirthDate,
      childType,
    };

    updateQuery({ queryKey: ['profile'], payload });
    router.back();
  };

  const { callApi, isLoading } = useApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'info/breastfeeding/edit',
  });

  const submitHandler = () => {
    const payload = {
      ...(childType !== ChildTypeEnum.Twin && { childName }),
      birthDate: childBirthDate,
      childType,
    };

    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
