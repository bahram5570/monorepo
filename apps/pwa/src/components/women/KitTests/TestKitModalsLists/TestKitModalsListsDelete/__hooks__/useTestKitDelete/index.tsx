import { useEffect, useState } from 'react';

import { KitTestModuleTypeEnums } from '@components/women/KitTests/enum';
import useApi from '@hooks/useApi';
import m from 'moment-jalaali';
import { useRouter } from 'next/navigation';

import { DeleteModalDataTypes } from '../../../__hooks__/useTestKitsDeleteModal/types';
import { TestKitDeleteHandlerTypes, UseTestKitDeleteProps } from './types';

const useTestKitDelete = ({ isDeleteModalOpen, onDelete }: UseTestKitDeleteProps) => {
  const router = useRouter();
  const [apiInfo, setApiInfo] = useState<null | DeleteModalDataTypes>(null);

  useEffect(() => {
    if (!isDeleteModalOpen) {
      setApiInfo(null);
    }
  }, [isDeleteModalOpen]);

  const testKitDeleteHandler: TestKitDeleteHandlerTypes = (v) => {
    setApiInfo(v);
  };

  const successHandler = ({ valid }: { valid: boolean }) => {
    if (valid) {
      router.back();
      router.back();

      if (apiInfo) {
        onDelete(apiInfo);
      }
    }

    setApiInfo(null);
  };

  const errorHandler = () => {
    setApiInfo(null);
  };

  let api = '';
  switch (apiInfo?.moduleType) {
    case KitTestModuleTypeEnums.BabyCheck:
      api = 'info/woman/babycheck';
      break;

    case KitTestModuleTypeEnums.Ovulation:
      api = 'info/woman/ovulation';
      break;
  }

  const { isLoading, callApi } = useApi({
    api,
    method: 'DELETE',
    onError: errorHandler,
    onSuccess: successHandler,
  });

  useEffect(() => {
    if (apiInfo) {
      const moment = m(apiInfo.createTime);
      const d1 = moment.format('YYYY-MM-DD');
      const d2 = moment.format('HH:mm:ss');
      const date = `${d1} ${d2}`;

      callApi({ date });
    }
  }, [apiInfo]);

  return { isLoading, testKitDeleteHandler };
};

export default useTestKitDelete;
