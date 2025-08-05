import WomenPageLayout from '@components/women/WomenPageLayout';

import ClinicDoctorModal from '../ClinicDoctorModal';
import ClinicInfoSkeleton from './ClinicInfoSkeleton';
import ContentsContainer from './ContentsContainer';
import useGetDataClinicInfo from './__hooks__/useGetDataClinicInfo';
import { ClinicInfoProps } from './types';

const ClinicInfoContainer = ({ clinicInfo }: ClinicInfoProps) => {
  const { isLoading, data } = useGetDataClinicInfo(clinicInfo);

  return (
    <>
      <WomenPageLayout rightElement="BackButton" rightElementScript={data?.info.name} paddingTop={0}>
        {isLoading && <ClinicInfoSkeleton />}
        {!isLoading && data && <ContentsContainer data={data} />}
      </WomenPageLayout>

      <ClinicDoctorModal />
    </>
  );
};

export default ClinicInfoContainer;
