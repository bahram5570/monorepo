import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@utils/system';

import CustomModal from '@components/ui/CustomModal';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import ClinicDoctorModalContainer from './ClinicDoctorModalContainer';
import { CLINIC_DOCTOR_MODAL_QUERY_NAME } from './constants';
import { SpecialistCommentsProps } from './types';

const ClinicDoctorModal = () => {
  const router = useRouter();
  const isFirstTime = useRef(isDevelopeMode());
  const { getQueryParams } = useQueryParamsHandler();

  const queryParams = getQueryParams(CLINIC_DOCTOR_MODAL_QUERY_NAME);
  const queryData = queryParams === null ? null : (JSON.parse(queryParams) as SpecialistCommentsProps);

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
    } else {
      if (queryData !== null) {
        router.back();
      }
    }
  }, []);

  return (
    <CustomModal isOpen={queryData !== null} isFullScreen={true} isSlidingMode={true} className="!px-0">
      <>{queryData && <ClinicDoctorModalContainer clinicInfo={queryData.clinicInfo} drId={queryData.drId} />}</>
    </CustomModal>
  );
};

export default ClinicDoctorModal;
